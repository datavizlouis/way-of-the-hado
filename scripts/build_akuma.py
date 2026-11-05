#!/usr/bin/env python3
"""Cut Akuma's Raging Demon win pose out of Deekman's sheet and add him to sprites.json.

The sheet has no panel dividers, so the frames are found by row bands and column gaps
inside the rows that hold the sequence (stance, foot stomp, body turning black, red aura
and the 天 kanji, blue rings, back to stance). Run after build_atlas.py, which rewrites
sprites.json.

Reads   app/assets/sprites/raw/akuma_deekman.png   (not committed: Capcom artwork)
Writes  app/assets/sprites/akuma.png               atlas, background keyed out
        app/assets/sprites/sprites.json            adds "akuma": idle + beat:demon
"""
import json
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / 'app' / 'assets' / 'sprites' / 'raw' / 'akuma_deekman.png'
OUT = ROOT / 'app' / 'assets' / 'sprites'
BG = np.array([144, 200, 232])
# the four rows of the win pose (sheet px), top to bottom
BANDS = [(1876, 1977), (1977, 2093), (2096, 2206), (2210, 2330)]
# columns where two touching frames in a row must be split
FORCED_SPLITS = {0: [577]}


def frames_in_band(a, y0, y1, band_no):
    body = (a.sum(-1) < 330) | ((a[..., 0] > 150) & (a[..., 2] < 120))  # dark body, red aura
    cols = body[y0:y1].sum(0)
    segs, start = [], None
    for x, v in enumerate(cols):
        if v and start is None:
            start = x
        if not v and start is not None:
            segs.append([start, x])
            start = None
    if start is not None:
        segs.append([start, len(cols)])
    merged = []
    for s in segs:
        if merged and s[0] - merged[-1][1] < 6:
            merged[-1][1] = s[1]
        else:
            merged.append(s)
    merged = [s for s in merged if s[1] - s[0] > 8]
    for cut in FORCED_SPLITS.get(band_no, []):
        for s in list(merged):
            if s[0] < cut < s[1]:
                i = merged.index(s)
                merged[i:i + 1] = [[s[0], cut], [cut, s[1]]]
    # each frame takes the space up to halfway to its neighbours (keeps aura and rings)
    out = []
    for i, (x0, x1) in enumerate(merged):
        left = 0 if i == 0 else (merged[i - 1][1] + x0) // 2
        right = a.shape[1] if i == len(merged) - 1 else (x1 + merged[i + 1][0]) // 2
        out.append((left, y0, right, y1))
    return out


def main():
    a = np.array(Image.open(RAW).convert('RGB')).astype(int)
    tiles = []
    for b, (y0, y1) in enumerate(BANDS):
        for (x0, ty0, x1, ty1) in frames_in_band(a, y0, y1, b):
            t = a[ty0:ty1, x0:x1]
            keep = np.abs(t - BG).sum(-1) > 30
            ys, xs = np.nonzero(keep)
            t, keep = t[ys.min():ys.max() + 1, xs.min():xs.max() + 1], keep[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
            dark = t.sum(-1) < 200
            rows = np.nonzero(dark.sum(1) >= 3)[0]
            feet = int(rows.max())  # bottom of the shadow under his feet
            low = dark[max(0, feet - 20):feet + 1]
            anchor = int(round(np.nonzero(low)[1].mean()))
            rgba = np.dstack([t.astype(np.uint8), (keep * 255).astype(np.uint8)])
            tiles.append((rgba, anchor, feet))
    # shelf-pack
    W = 1024
    x = y = shelf = 0
    places = []
    for rgba, _, _ in tiles:
        h, w = rgba.shape[:2]
        if x + w > W:
            x, y, shelf = 0, y + shelf + 1, 0
        places.append((x, y))
        x += w + 1
        shelf = max(shelf, h)
    atlas = np.zeros((y + shelf + 1, W, 4), np.uint8)
    frames = []
    for (rgba, anchor, feet), (px, py) in zip(tiles, places):
        h, w = rgba.shape[:2]
        atlas[py:py + h, px:px + w] = rgba
        # negative lift: whatever hangs below his feet (blue splash) sits under the ground line
        frames.append([px, py, w, h, anchor, -(h - 1 - feet)])
    Image.fromarray(atlas).save(OUT / 'akuma.png', optimize=True)
    sj = OUT / 'sprites.json'
    sprites = json.loads(sj.read_text())
    sprites['akuma'] = {
        'file': 'akuma.png',
        'anims': {'idle': {'fps': 6, 'frames': frames[:1]}, 'beat:demon': {'fps': 7, 'frames': frames}},
    }
    sj.write_text(json.dumps(sprites, separators=(',', ':')))
    print('akuma', len(frames), 'frames')


if __name__ == '__main__':
    main()
