#!/usr/bin/env python3
"""Prepare pictures for the intro's story beats.

  app/assets/sprites/raw/sin_emblem.webp  ->  app/assets/img/story/6.png
      The S.I.N. emblem (Capcom artwork, kept out of git) with its red field keyed out.
      Edge pixels are un-mixed from the red, so the black and white artwork has no pink
      fringe on the page.

  app/assets/sprites/raw/ryu.gif  ->  app/assets/img/hadoken.png
      Four Hadoken frames in a horizontal strip of equal cells, for the intro's chapter
      carousel. Prints the cell size, which styles.css (.hadoken) must match.
"""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / 'app' / 'assets' / 'sprites' / 'raw'
OUT = ROOT / 'app' / 'assets' / 'img' / 'story'


def key_out(rgb, bg):
    """The artwork is black and white on a flat colour, so every pixel is the background
    blended with black or with white. Project each pixel onto both blends, keep the one
    that fits better, and use how far along it lies as the alpha; the colour becomes the
    pure black or white. Pixels that fit neither blend (greys) stay fully opaque."""
    px = rgb.astype(float)
    best_res = np.full(px.shape[:2], np.inf)
    alpha = np.ones(px.shape[:2])
    colour = px.copy()
    for target in (np.array([255.0, 255, 255]), np.array([0.0, 0, 0])):
        d = target - bg
        t = np.clip(((px - bg) @ d) / (d @ d), 0, 1)
        res = np.sqrt(((px - (bg + t[..., None] * d)) ** 2).sum(-1))
        better = res < best_res
        best_res = np.where(better, res, best_res)
        alpha = np.where(better, t, alpha)
        colour[better] = target
    fits = best_res < 40
    alpha = np.where(fits, alpha, 1.0)
    colour = np.where(fits[..., None], colour, px)
    alpha = np.clip((alpha - 0.08) / 0.84, 0, 1)  # snap near-background and near-solid
    return np.dstack([colour, alpha * 255]).astype(np.uint8)


# the Hadoken flying frames on Ryu's sheet: (x0, y0, x1, y1), just inside the dashed dividers
HADOKEN_CELLS = [(548, 643, 587, 672), (591, 643, 616, 672), (619, 643, 659, 672), (662, 643, 689, 672)]


def hadoken_strip():
    sheet = np.array(Image.open(RAW / 'ryu.gif').convert('RGBA'))
    tiles = []
    for x0, y0, x1, y1 in HADOKEN_CELLS:
        t = sheet[y0:y1, x0:x1].copy()
        t[np.all(t[..., :3] == t[0, 0, :3], axis=-1), 3] = 0  # the cell's corner is sheet background
        ys, xs = np.nonzero(t[..., 3])
        tiles.append(t[ys.min():ys.max() + 1, xs.min():xs.max() + 1])
    cw = max(t.shape[1] for t in tiles)
    ch = max(t.shape[0] for t in tiles)
    strip = np.zeros((ch, cw * len(tiles), 4), np.uint8)
    for i, t in enumerate(tiles):
        h, w = t.shape[:2]
        ox, oy = i * cw + (cw - w) // 2, (ch - h) // 2
        strip[oy:oy + h, ox:ox + w] = t
    Image.fromarray(strip).save(OUT.parent / 'hadoken.png', optimize=True)
    print('hadoken.png cell', cw, 'x', ch, 'frames', len(tiles))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    hadoken_strip()
    rgb = np.array(Image.open(RAW / 'sin_emblem.webp').convert('RGB'))[3:-3, 3:-3]  # drop the light frame
    bg = np.median(np.concatenate([rgb[:4].reshape(-1, 3), rgb[-4:].reshape(-1, 3)]), axis=0)
    rgba = key_out(rgb, bg)
    # trim to the artwork
    ys, xs = np.nonzero(rgba[..., 3] > 8)
    rgba = rgba[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    Image.fromarray(rgba).save(OUT / '6.png', optimize=True)
    print('story/6.png', rgba.shape[1], 'x', rgba.shape[0])


if __name__ == '__main__':
    main()
