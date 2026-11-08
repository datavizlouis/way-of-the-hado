#!/usr/bin/env python3
"""Pack the frames chosen in scripts/sprite_map.json into one transparent atlas per fighter.

Reads   app/assets/sprites/raw/<id>.gif      raw sheet (not committed: Capcom artwork)
        <slices>/<id>.frames.json            output of slice_sprites.py
Writes  app/assets/sprites/<id>.png          atlas, background keyed out
        app/assets/sprites/sprites.json      frame rectangles per animation (atlas coordinates)
        app/assets/img/portraits/<id>.png    first mugshot, for the soundtrack select screen
        app/assets/img/portraits/<id>-lose.png  third mugshot (beaten face), for the credits
        <slices>/contact.png                 every chosen animation, for a visual check

usage: build_atlas.py SLICES_DIR
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

sys.path.insert(0, str(Path(__file__).resolve().parent))
from slice_sprites import label, bboxes  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / 'app' / 'assets' / 'sprites' / 'raw'
OUT = ROOT / 'app' / 'assets' / 'sprites'
PORTRAITS = ROOT / 'app' / 'assets' / 'img' / 'portraits'
OUTER = np.array([0, 0, 112])
ATLAS_W = 1024


def find_panel(panels, pt):
    x, y = pt
    hits = [p for p in panels if p['box'][0] <= x < p['box'][2] and p['box'][1] <= y < p['box'][3] and p['frames']]
    if not hits:
        raise SystemExit(f'no panel with frames at {pt}')
    return min(hits, key=lambda p: (p['box'][2] - p['box'][0]) * (p['box'][3] - p['box'][1]))


def cut(rgba, bg, f):
    x, y, w, h, _ = f
    tile = rgba[y:y + h, x:x + w].copy()
    rgb = tile[..., :3]
    key = np.all(rgb == bg, axis=-1) | np.all(rgb == OUTER, axis=-1)
    tile[key, 3] = 0
    # drop sheet furniture caught in the box: label letters, dashed separators, line stubs
    # (small or thin detached pieces drawn in white / grey)
    rgb_i = rgb.astype(int)
    greyish = (rgb_i.max(axis=-1) - rgb_i.min(axis=-1) < 24) & (rgb_i.max(axis=-1) > 120)
    lab, n = label(tile[..., 3] > 0)
    for k, b in bboxes(lab, n).items():
        bw, bh, area = b[2] - b[0], b[3] - b[1], b[4]
        piece = lab == k
        mostly_grey = greyish[piece].mean() > 0.8
        if (area <= 45 and mostly_grey) or (mostly_grey and (bh <= 2 or bw <= 2)):
            tile[piece, 3] = 0
    return tile


def shadow_colour(rgba, bg, frames):
    """The flat colour of the shadow painted under a move: commonest in the frames' bottom rows."""
    rows = np.concatenate([rgba[y + h - 2:y + h, x:x + w, :3].reshape(-1, 3) for x, y, w, h, _ in frames])
    rows = rows[~np.all(rows == bg, axis=-1) & ~np.all(rows == OUTER, axis=-1)]
    colours, counts = np.unique(rows, axis=0, return_counts=True)
    return colours[counts.argmax()]


def main(slices):
    mapping = json.loads((ROOT / 'scripts' / 'sprite_map.json').read_text())
    PORTRAITS.mkdir(parents=True, exist_ok=True)
    sprites = {}
    contact_rows = []
    for sid, spec in mapping.items():
        if sid.startswith('_'):
            continue
        meta = json.loads((Path(slices) / f'{sid}.frames.json').read_text())
        bg = np.array(meta['bg'])
        sheet = np.array(Image.open(RAW / f'{sid}.gif').convert('RGBA'))
        anims = {}
        for name, v in spec.items():
            if name in ('portrait', 'idlePingpong'):
                continue
            opts = v if isinstance(v, dict) else {'at': v}
            if 'rects' in opts:
                anims[name] = {'frames': [[*r, r[2] // 2] for r in opts['rects']], 'opts': opts}
                continue
            panel = find_panel(meta['panels'], opts['at'])
            frames = panel['frames']
            if 'frames' in opts:
                frames = [frames[i] for i in opts['frames']]
            if 'maxWidth' in opts:
                frames = [f for f in frames if f[2] <= opts['maxWidth']]
            anims[name] = {'frames': frames, 'opts': opts}

        # shelf-pack unique frames
        tiles = []
        index = {}
        for a in anims.values():
            shadow = None
            if a['opts'].get('noShadow'):
                shadow = shadow_colour(sheet, bg, a['frames'])
            for f in a['frames']:
                k = tuple(f)
                if k not in index:
                    index[k] = len(tiles)
                    t = cut(sheet, bg, f)
                    if shadow is not None:
                        t[np.all(t[..., :3] == shadow, axis=-1), 3] = 0
                    tiles.append(t)
        x = y = shelf = 0
        places = []
        for t in tiles:
            h, w = t.shape[:2]
            if x + w > ATLAS_W:
                x, y, shelf = 0, y + shelf + 1, 0
            places.append((x, y))
            x += w + 1
            shelf = max(shelf, h)
        atlas = np.zeros((y + shelf + 1, ATLAS_W, 4), np.uint8)
        for t, (px, py) in zip(tiles, places):
            h, w = t.shape[:2]
            atlas[py:py + h, px:px + w] = t
        Image.fromarray(atlas).save(OUT / f'{sid}.png', optimize=True)

        out = {}
        for name, a in anims.items():
            fr = []
            ground = max(f[1] + f[3] for f in a['frames'])
            for f in a['frames']:
                px, py = places[index[tuple(f)]]
                fr.append([px, py, f[2], f[3], f[4], ground - (f[1] + f[3])])
            o = a['opts']
            entry = {'fps': o.get('fps', 8 if name == 'idle' else 12), 'frames': fr}
            if name == 'idle' and spec.get('idlePingpong'):
                entry['frames'] = fr + fr[-2:0:-1]
            if 'launch' in o:
                entry['launch'] = o['launch']
            out[name] = entry
        sprites[sid] = {'file': f'{sid}.png', 'anims': out}

        if 'portrait' in spec:
            p = find_panel(meta['panels'], spec['portrait'])
            mug = max(p['frames'], key=lambda f: f[2] * f[3])  # biggest = a full mugshot, not the tiny icon
            Image.fromarray(cut(sheet, bg, mug)).save(PORTRAITS / f'{sid}.png', optimize=True)
            # the panel holds three full mugshots left to right (calm, hurt, beaten) plus the tiny icon.
            # The slicer can split a mugshot in two (Fei Long's raised fist), so pieces whose boxes
            # overlap are merged back into one before counting.
            groups = []
            for f in sorted(p['frames'], key=lambda f: f[0]):
                g = groups[-1] if groups else None
                if g and f[0] < g[0] + g[2] and f[1] < g[1] + g[3] and g[1] < f[1] + f[3]:
                    x0, y0 = min(g[0], f[0]), min(g[1], f[1])
                    x1, y1 = max(g[0] + g[2], f[0] + f[2]), max(g[1] + g[3], f[1] + f[3])
                    groups[-1] = [x0, y0, x1 - x0, y1 - y0, 0]
                else:
                    groups.append(list(f[:4]) + [0])
            full = [g for g in groups if g[2] * g[3] >= 0.8 * mug[2] * mug[3]]
            if len(full) < 3:
                raise SystemExit(f'{sid}: expected 3 full mugshots in the portrait panel, found {len(full)}')
            Image.fromarray(cut(sheet, bg, full[2])).save(PORTRAITS / f'{sid}-lose.png', optimize=True)

        # contact strip
        strip_h = max(f[3] for a in anims.values() for f in a['frames']) + 14
        strip_w = sum(sum(f[2] + 2 for f in a['frames']) + 12 for a in anims.values())
        strip = Image.new('RGBA', (strip_w, strip_h), (30, 30, 40, 255))
        d = ImageDraw.Draw(strip)
        cx = 0
        for name, a in anims.items():
            d.text((cx + 2, 1), f'{sid}:{name}', fill=(255, 255, 0))
            for f in a['frames']:
                t = Image.fromarray(cut(sheet, bg, f))
                strip.alpha_composite(t, (cx, strip_h - f[3]))
                cx += f[2] + 2
            d.line([(cx + 5, 0), (cx + 5, strip_h)], fill=(255, 0, 255))
            cx += 12
        contact_rows.append(strip)
        print(sid, {k: len(v['frames']) for k, v in out.items()}, f'{(OUT / f"{sid}.png").stat().st_size // 1024}KB')

    (OUT / 'sprites.json').write_text(json.dumps(sprites, separators=(',', ':')))
    W = max(r.width for r in contact_rows)
    H = sum(r.height for r in contact_rows)
    contact = Image.new('RGBA', (W, H), (20, 20, 28, 255))
    yy = 0
    for r in contact_rows:
        contact.alpha_composite(r, (0, yy))
        yy += r.height
    contact.save(Path(slices) / 'contact.png')


if __name__ == '__main__':
    main(sys.argv[1])
