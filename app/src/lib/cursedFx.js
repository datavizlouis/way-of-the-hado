// The Dark Hado on Ryu: a dark stain creeps up from the feet with a burning edge, smoke rises
// off the body in winding trails and a stain pools round the feet. No skull, blood palette.
//
// Adapted from the "Cursed" effect in pixelfx (https://github.com/patch-gg/pixelfx),
// MIT License, Copyright (c) 2026 Patch. Its smoke puffs adapt Sprite Fusion's open-source
// poison (https://www.spritefusion.com/pixel-art-vfx/poison), MIT License, Copyright (c) 2026
// Hugo Duprez. Changed here: works on any sprite frame, grows with `strength`, and the glows
// are painted rather than additive, because additive light vanishes on the white splat.

const BLOOD = ['#14040a', '#3a0a14', '#6a101c', '#a01824', '#d42a30', '#ff5a50', '#ff9a8a', '#ffe6de'];
const RGB = BLOOD.map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)));
const D = 2.4; // seconds in one loop of the effect
const TAU = Math.PI * 2;
const SMOKE = 1.6; // the original is drawn for a sprite about 40px tall; Ryu is about twice that
// where the effect is drawn, in sprite pixels: the fighter's centre line and ground
const FX = 220;
const OX = 80;
const OY = 190;

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const smooth = (a, b, v) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const rand = (a, b = 0, c = 0) => {
  const s = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453;
  return s - Math.floor(s);
};
const mix = (a, b, k) => a.map((v, i) => v + (b[i] - v) * k);
const css = (c) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;

// how high the stain has crept at column x (0 at the feet, 1 at the head): a slow tide with
// crawling tendrils, looping with the effect
const reach = (x, t) => {
  const p = (t / D) * TAU;
  const tide = 0.3 + 0.12 * Math.sin(p);
  return tide + 0.13 * (0.5 + 0.3 * Math.sin(x * 0.35 + p) + 0.2 * Math.sin(x * 0.83 - p * 2));
};

// ------------------------------------------------------------------ the sprite's pixels

const frameCache = new Map();
function frameData(a, idx) {
  const f = a.frames[idx];
  const key = f.slice(0, 4).join();
  if (frameCache.has(key)) return frameCache.get(key);
  const [sx, sy, w, h] = f;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.drawImage(a.img, sx, sy, w, h, 0, 0, w, h);
  const d = g.getImageData(0, 0, w, h).data;
  const body = [];
  const rows = Array.from({ length: h }, () => null);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (d[i + 3] < 128) continue;
      body.push([x, y, (0.3 * d[i] + 0.59 * d[i + 1] + 0.11 * d[i + 2]) / 255]);
      rows[y] = rows[y] ? [rows[y][0], x] : [x, x];
    }
  }
  const data = { w, h, body, rows };
  frameCache.set(key, data);
  return data;
}

// ------------------------------------------------------------------ painting, in sprite pixels

function disc(g, x, y, r, c, k) {
  if (k <= 0) return;
  g.globalAlpha = k;
  g.fillStyle = css(c);
  const R = Math.ceil(r);
  for (let dy = -R; dy <= R; dy++) {
    const half = Math.sqrt(Math.max(0, r * r - dy * dy));
    if (half > 0) g.fillRect(Math.round(x - half), Math.round(y + dy), Math.max(1, Math.round(half * 2)), 1);
  }
}

function glow(g, x, y, r, c, k) {
  if (k <= 0) return;
  const grad = g.createRadialGradient(x, y, 0, x, y, r);
  grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${k})`);
  grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
  g.globalAlpha = 1;
  g.fillStyle = grad;
  g.fillRect(x - r, y - r, r * 2, r * 2);
}

// each trail rises from a spot on the body as a ribbon of soft puffs that wind as they climb,
// swell, cool and thin
function trails(g, S, x0, y0, t, front, strength) {
  [[0.12, -1], [0.1, 1], [0.5, -1], [0.48, 1]].forEach(([q, side], j) => {
    if ((j % 2 === 0) !== front) return;
    const my = Math.round(S.h * q);
    const [l, r] = S.rows[my] ?? S.rows.find(Boolean);
    const sx = x0 + (side < 0 ? l : r + 1);
    const sy = y0 + my;
    const life = 1.6;
    const n = 18;
    for (let i = n - 1; i >= 0; i--) {
      const age = (((t - (i / n) * D - j * 0.37) % D) + D) % D;
      const u = age / life;
      if (u >= 1) continue;
      const tb = t - age;
      const sway = Math.sin((tb / D) * TAU * 2 + j * 1.7) * 4 * SMOKE * Math.min(1, u * 1.6);
      const x = sx + side * u * 7 * SMOKE + sway + (rand(i, j, 71) - 0.5) * 2.5 * u;
      const y = sy - age * 19 * SMOKE - 5 * u * u;
      const rad = (1.3 + 3.6 * (1 - (1 - u) ** 3)) * (0.7 + 0.6 * rand(i, j, 72)) * SMOKE;
      const k = smooth(0, 0.12, u) * (1 - smooth(0.45, 1, u)) * (front ? 0.5 : 0.62) * strength;
      const c = mix(rand(i, j, 70) < 0.5 ? RGB[4] : mix(RGB[4], RGB[3], 0.4), RGB[1], u * 0.85);
      disc(g, x, y, rad * 1.08, c, k * 0.4);
      disc(g, x + rad * 0.05, y + rad * 0.08, rad * 0.76, c, k * 0.55);
      disc(g, x - rad * 0.22, y - rad * 0.3, rad * 0.48, mix(c, RGB[6], 0.25), k * 0.38 * (1 - u * 0.6));
    }
  });
}

// the stain pooling round the feet, its rim glowing
function pool(g, S, x0, t, strength) {
  const feet = S.rows[S.h - 1] ?? S.rows.filter(Boolean).pop();
  const cx = x0 + (feet[0] + feet[1] + 1) / 2;
  const rx = ((feet[1] - feet[0]) / 2 + 7 + 2 * Math.sin((t / D) * TAU)) * strength;
  if (rx <= 0) return;
  g.globalAlpha = 1;
  for (let x = Math.floor(cx - rx - 1); x <= cx + rx + 1; x++) {
    const q = Math.abs(x + 0.5 - cx) / rx;
    const n = rand(x, 31);
    if (q > 1 + n * 0.12) continue;
    g.fillStyle = BLOOD[q > 0.8 ? 4 : n < 0.2 ? 3 : 2];
    g.fillRect(x, OY - 1, 1, 1);
    if (q < 0.85) {
      g.fillStyle = BLOOD[1];
      g.fillRect(x, OY, 1, 1);
    }
    if (q < 0.55 && n < 0.7) {
      g.fillStyle = BLOOD[1];
      g.fillRect(x, OY + 1, 1, 1);
    }
  }
}

// the stain on the body: everything below the creeping line drowned in blood, the line itself
// burning. It rises from the feet as `strength` grows.
function stain(g, S, x0, y0, t, strength) {
  g.globalAlpha = 1;
  for (const [mx, my, luma] of S.body) {
    const up = 1 - (my + 0.5) / S.h;
    const lv = reach(mx, t) * strength;
    if (up > lv + 0.035) continue;
    if (up > lv - 0.02) g.fillStyle = BLOOD[6];
    else if (up > lv - 0.06) g.fillStyle = BLOOD[4];
    else g.fillStyle = css(mix(RGB[1], RGB[3], clamp01(luma * 1.6)));
    g.fillRect(x0 + mx, y0 + my, 1, 1);
  }
}

// ------------------------------------------------------------------ public

let fx = null;

/**
 * Draw one layer of the effect around a sprite frame, using the same x, ground, k and lift as
 * its drawFrame: layer 'back' goes before the sprite, 'front' after it.
 */
export function drawCursed(ctx, a, idx, x, ground, k, t, strength, layer, lift = 0) {
  if (strength <= 0) return;
  if (!fx) {
    fx = document.createElement('canvas');
    fx.width = FX;
    fx.height = FX;
  }
  const g = fx.getContext('2d');
  g.clearRect(0, 0, FX, FX);
  const [, , , sh, ax, l0 = 0] = a.frames[idx];
  const S = frameData(a, idx);
  const x0 = OX - ax;
  const y0 = OY - sh - l0;
  if (layer === 'back') {
    pool(g, S, x0, t, strength);
    trails(g, S, x0, y0, t, false, strength);
    // a low red bloom behind the body
    glow(g, OX, y0 + S.h * 0.45, 42, RGB[4], 0.16 * strength);
  } else {
    stain(g, S, x0, y0, t, strength);
    trails(g, S, x0, y0, t, true, strength);
  }
  g.globalAlpha = 1;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(fx, Math.round(x) - OX * k, Math.round(ground - lift * k) - OY * k, FX * k, FX * k);
  ctx.restore();
}
