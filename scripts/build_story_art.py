#!/usr/bin/env python3
"""Prepare pictures for the intro's story beats.

  app/assets/sprites/raw/sin_emblem.webp  ->  app/assets/img/story/6.png
      The S.I.N. emblem (Capcom artwork, kept out of git) with its red field keyed out.
      Edge pixels are un-mixed from the red, so the black and white artwork has no pink
      fringe on the page.
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


def main():
    OUT.mkdir(parents=True, exist_ok=True)
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
