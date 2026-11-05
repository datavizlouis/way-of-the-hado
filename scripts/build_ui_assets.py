#!/usr/bin/env python3
"""Cut select-screen artwork out of two reference sheets (kept out of git: Capcom artwork).

  app/assets/sprites/raw/portraits_phatman.png  16 rows (fighters) x 8 palettes of select portraits
                                                  ripped by Phatman; column 0 = default palette
  app/assets/sprites/raw/select_garycxjk.png     SSF2 select screen parts captured by GaryCXJK:
                                                  named portraits, country flags, "SUPER" background

Writes (all under app/assets/img/):
  portraits/<id>.png   select-grid tile (Phatman, default palette)
  select/<id>.png      named portrait for the big 1P picture (GaryCXJK)
  flags/<id>.png       the fighter's stage flag with its label (GaryCXJK)
  select-bg.png        tiling "SUPER" globe background (GaryCXJK)
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from slice_sprites import bboxes, label  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / 'app' / 'assets' / 'sprites' / 'raw'
IMG = ROOT / 'app' / 'assets' / 'img'

PHATMAN_ORDER = ['ryu', 'honda', 'blanka', 'guile', 'ken', 'chunli', 'zangief', 'dhalsim',
                 'thawk', 'feilong', 'deejay', 'cammy', 'balrog', 'vega', 'sagat', 'bison']
# named portraits on the GaryCXJK sheet, by row (name-banner top y) in left-to-right order
GARY_ROWS = [
    (229, ['ryu', 'honda', 'blanka', 'guile', 'ken', 'chunli', 'zangief', 'dhalsim']),
    (330, ['thawk', 'feilong', 'deejay', 'cammy']),
    (431, ['balrog', 'vega', 'sagat', 'bison']),
]
FLAG_ORDER = ['japan', 'brazil', 'usa', 'china', 'ussr', 'india', 'thailand', 'spain', 'mexico',
              'hongkong', 'jamaica', 'england']
STAGE = {'ryu': 'japan', 'honda': 'japan', 'blanka': 'brazil', 'guile': 'usa', 'ken': 'usa',
         'chunli': 'china', 'zangief': 'ussr', 'dhalsim': 'india', 'thawk': 'mexico',
         'feilong': 'hongkong', 'deejay': 'jamaica', 'cammy': 'england', 'balrog': 'usa',
         'vega': 'spain', 'sagat': 'thailand', 'bison': 'thailand'}


def key_border_bg(rgba, bg):
    """Make background transparent only where it is connected to the crop's border
    (keeps any interior pixels that happen to share the background colour)."""
    is_bg = np.all(rgba[..., :3] == bg, axis=-1)
    lab, n = label(is_bg)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    for k in edge:
        rgba[lab == k, 3] = 0
    return rgba


def save(arr, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(arr).save(path, optimize=True)


def phatman():
    a = np.array(Image.open(RAW / 'portraits_phatman.png').convert('RGBA'))
    bg = a[0, 0, :3].copy()
    lab, n = label(~np.all(a[..., :3] == bg, axis=-1))
    boxes = [b for b in bboxes(lab, n).values() if b[4] > 2000 and (b[2] - b[0]) < 100]
    rows = {}
    for b in boxes:
        rows.setdefault(b[1] // 100, []).append(b)
    firsts = [min(r, key=lambda b: b[0]) for _, r in sorted(rows.items())][: len(PHATMAN_ORDER)]
    for sid, (x0, y0, x1, y1, _) in zip(PHATMAN_ORDER, firsts):
        save(key_border_bg(a[y0:y1, x0:x1].copy(), bg), IMG / 'portraits' / f'{sid}.png')


def gary():
    a = np.array(Image.open(RAW / 'select_garycxjk.png').convert('RGBA'))
    bg = np.array([192, 0, 192])
    lab, n = label(~np.all(a[..., :3] == bg, axis=-1))
    boxes = list(bboxes(lab, n).values())

    # named portraits: the big component under each name row, extended up to include the name
    for name_top, ids in GARY_ROWS:
        faces = sorted([b for b in boxes if b[4] > 2500 and name_top + 10 < b[1] < name_top + 30], key=lambda b: b[0])
        for sid, (x0, y0, x1, y1, _) in zip(ids, faces):
            crop = a[name_top: y1, max(0, x0 - 3): x1 + 3].copy()
            save(key_border_bg(crop, bg), IMG / 'select' / f'{sid}.png')

    # flags: two rows of 16x13 icons with labels; keep the more colourful row
    icons = [b for b in boxes if (b[2] - b[0]) == 16 and 12 <= (b[3] - b[1]) <= 14 and b[1] > 450]
    rows = {}
    for b in icons:
        rows.setdefault((b[1] + 2) // 6, []).append(b)  # icons in a row can sit 1px apart
    best, best_sat = None, -1
    for y, r in rows.items():
        if len(r) != len(FLAG_ORDER):
            continue
        px = np.concatenate([a[b[1]:b[3], b[0]:b[2], :3].reshape(-1, 3) for b in r]).astype(int)
        sat = float((px.max(axis=1) - px.min(axis=1)).mean())
        if sat > best_sat:
            best, best_sat = sorted(r, key=lambda b: b[0]), sat
    flags = {}
    for fid, (x0, y0, x1, y1, _) in zip(FLAG_ORDER, best):
        # its label is the small text block directly below (or above) the icon
        labels = [b for b in boxes if b[4] > 60 and (b[3] - b[1]) <= 9 and b[0] < x1 + 6 and b[2] > x0 - 6
                  and (0 <= b[1] - y1 <= 3 or 0 <= y0 - b[3] <= 3)]
        lb = min(labels, key=lambda b: abs((b[0] + b[2]) - (x0 + x1))) if labels else None
        cx0, cy0 = min(x0, lb[0]) if lb else x0, min(y0, lb[1]) if lb else y0
        cx1, cy1 = max(x1, lb[2]) if lb else x1, max(y1, lb[3]) if lb else y1
        flags[fid] = key_border_bg(a[cy0:cy1, cx0:cx1].copy(), bg)
    for sid, fid in STAGE.items():
        save(flags[fid], IMG / 'flags' / f'{sid}.png')

    # background tile (first big panel on the sheet)
    tile = max((b for b in boxes if b[1] < 20), key=lambda b: b[4])
    save(a[tile[1]:tile[3], tile[0]:tile[2]].copy(), IMG / 'select-bg.png')


if __name__ == '__main__':
    phatman()
    gary()
    for d in ('portraits', 'select', 'flags'):
        print(d, len(list((IMG / d).glob('*.png'))))
