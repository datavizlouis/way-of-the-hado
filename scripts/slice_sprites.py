#!/usr/bin/env python3
"""Slice hand-arranged sprite-sheet rips (spriters-resource style) into frames.

Sheets are laid out as panels (one per animation) with a flat panel colour, 1px divider
lines, a navy outer background and small text labels. This script:

  1. detects the panel colour, outer colour and divider lines,
  2. finds every sprite as a connected component (merging detached bits such as
     shadows and effects, dropping text labels and specks),
  3. assigns each sprite to its panel and numbers panels in reading order,
  4. writes  <out>/<id>.frames.json   every frame found, grouped by panel
             <out>/<id>.overlay.png   the sheet with panel numbers and frame boxes

Then `build_atlas.py` uses a hand-written mapping (panel -> animation) to pack the
chosen frames into a transparent atlas for the app.

usage: slice_sprites.py RAW_DIR OUT_DIR [id ...]
"""
import json
import sys
from collections import Counter, deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

OUTER = (0, 0, 112)
LINE_RUN = 60  # a straight run this long of one colour is a divider line


def runs_mask(a, axis):
    """True where a pixel sits in a run of >= LINE_RUN identical pixels along axis."""
    h, w, _ = a.shape
    packed = (a[..., 0].astype(np.int32) << 16) | (a[..., 1].astype(np.int32) << 8) | a[..., 2]
    if axis == 1:
        packed = packed.T
    out = np.zeros(packed.shape, bool)
    for i, line in enumerate(packed):
        change = np.flatnonzero(np.diff(line)) + 1
        starts = np.concatenate(([0], change))
        ends = np.concatenate((change, [len(line)]))
        for s, e in zip(starts, ends):
            if e - s >= LINE_RUN:
                out[i, s:e] = True
    return out.T if axis == 1 else out


def label(mask):
    """8-connected component labelling (BFS); returns label array and count."""
    h, w = mask.shape
    lab = np.zeros((h, w), np.int32)
    n = 0
    ys, xs = np.nonzero(mask)
    for y0, x0 in zip(ys, xs):
        if lab[y0, x0]:
            continue
        n += 1
        lab[y0, x0] = n
        q = deque([(y0, x0)])
        while q:
            y, x = q.popleft()
            for dy in (-1, 0, 1):
                yy = y + dy
                if yy < 0 or yy >= h:
                    continue
                for dx in (-1, 0, 1):
                    xx = x + dx
                    if 0 <= xx < w and mask[yy, xx] and not lab[yy, xx]:
                        lab[yy, xx] = n
                        q.append((yy, xx))
    return lab, n


def bboxes(lab, n):
    out = {}
    ys, xs = np.nonzero(lab)
    ids = lab[ys, xs]
    order = np.argsort(ids, kind='stable')
    ids, ys, xs = ids[order], ys[order], xs[order]
    bounds = np.flatnonzero(np.diff(ids)) + 1
    for seg_y, seg_x, seg_id in zip(np.split(ys, bounds), np.split(xs, bounds), np.split(ids, bounds)):
        if len(seg_id) == 0:
            continue
        out[int(seg_id[0])] = [int(seg_x.min()), int(seg_y.min()), int(seg_x.max()) + 1, int(seg_y.max()) + 1, len(seg_id)]
    return out


def overlap(a, b, pad):
    return not (a[2] + pad < b[0] or b[2] + pad < a[0] or a[3] + pad < b[1] or b[3] + pad < a[1])


def slice_sheet(path, out_dir):
    a = np.array(Image.open(path).convert('RGB'))
    h, w, _ = a.shape
    flat = a.reshape(-1, 3)
    counts = Counter(map(tuple, flat[:: 7]))
    outer = np.array(OUTER)
    panel_col = next(np.array(c) for c, _ in counts.most_common() if tuple(c) != OUTER)
    is_outer = np.all(a == outer, axis=-1)
    is_bg = np.all(a == panel_col, axis=-1)
    lines = (runs_mask(a, 0) | runs_mask(a, 1)) & ~is_bg & ~is_outer
    content = ~is_bg & ~is_outer & ~lines

    # panels: bg+content regions separated by divider lines and the outer background
    plab, _ = label(~lines & ~is_outer)
    lab, n = label(content)
    boxes = bboxes(lab, n)

    big = {k: b for k, b in boxes.items() if (b[3] - b[1]) >= 26 and b[4] >= 150}
    small = {k: b for k, b in boxes.items() if k not in big}
    # merge detached bits (shadows, effects, hair strands) into the nearest big sprite
    for k, b in small.items():
        hits = [kk for kk, bb in big.items() if overlap(b, bb, 3)]
        if len(hits) == 1:
            bb = big[hits[0]]
            big[hits[0]] = [min(bb[0], b[0]), min(bb[1], b[1]), max(bb[2], b[2]), max(bb[3], b[3]), bb[4] + b[4]]
    # merge big pieces that overlap heavily horizontally and touch vertically (body + shadow)
    merged = True
    while merged:
        merged = False
        keys = list(big)
        for i, k1 in enumerate(keys):
            for k2 in keys[i + 1:]:
                b1, b2 = big[k1], big[k2]
                xo = min(b1[2], b2[2]) - max(b1[0], b2[0])
                minw = min(b1[2] - b1[0], b2[2] - b2[0])
                vgap = max(b1[1], b2[1]) - min(b1[3], b2[3])
                if xo > 0.6 * minw and vgap <= 4:
                    big[k1] = [min(b1[0], b2[0]), min(b1[1], b2[1]), max(b1[2], b2[2]), max(b1[3], b2[3]), b1[4] + b2[4]]
                    del big[k2]
                    merged = True
                    break
            if merged:
                break

    # assign to panels
    panels = {}
    for b in big.values():
        x0, y0, x1, y1, _ = b
        sub = plab[y0:y1, x0:x1]
        vals = sub[sub > 0]
        if not len(vals):
            continue
        pid = int(Counter(vals.tolist()).most_common(1)[0][0])
        panels.setdefault(pid, []).append(b)
    # reading order: panel rows by top edge (tolerance), then left
    pbox = {}
    for pid in panels:
        ys, xs = np.nonzero(plab == pid)
        pbox[pid] = (int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1)
    order = sorted(panels, key=lambda p: (round(pbox[p][1] / 40), pbox[p][0]))
    result = []
    for idx, pid in enumerate(order):
        frames = sorted(panels[pid], key=lambda b: b[0])
        out_frames = []
        for x0, y0, x1, y1, _ in frames:
            # anchor = centre of the lowest rows of opaque pixels (feet / shadow)
            m = content[y0:y1, x0:x1]
            rows = np.flatnonzero(m.any(axis=1))
            low = m[rows[-1] - 5: rows[-1] + 1] if len(rows) else m
            cols = np.flatnonzero(low.any(axis=0))
            ax = int((cols.min() + cols.max()) / 2) if len(cols) else (x1 - x0) // 2
            out_frames.append([x0, y0, x1 - x0, y1 - y0, ax])
        result.append({'panel': idx, 'box': pbox[pid], 'frames': out_frames})

    sid = Path(path).stem
    (out_dir / f'{sid}.frames.json').write_text(json.dumps({'id': sid, 'bg': panel_col.tolist(), 'panels': result}))
    ov = Image.fromarray(a).convert('RGB')
    d = ImageDraw.Draw(ov)
    for p in result:
        for i, (x, y, fw, fh, _) in enumerate(p['frames']):
            d.rectangle([x, y, x + fw - 1, y + fh - 1], outline=(255, 0, 255))
            d.text((x + 1, y + fh - 10), str(i), fill=(255, 255, 0))
        bx = p['box']
        d.rectangle([bx[0] + 2, bx[1] + 2, bx[0] + 30, bx[1] + 16], fill=(255, 0, 0))
        d.text((bx[0] + 5, bx[1] + 4), f"P{p['panel']}", fill=(255, 255, 255))
    ov.save(out_dir / f'{sid}.overlay.png')
    return sid, len(result), sum(len(p['frames']) for p in result)


if __name__ == '__main__':
    raw = Path(sys.argv[1])
    out = Path(sys.argv[2])
    out.mkdir(parents=True, exist_ok=True)
    ids = sys.argv[3:] or [p.stem for p in sorted(raw.glob('*.gif'))]
    for i in ids:
        print(*slice_sheet(raw / f'{i}.gif', out))
