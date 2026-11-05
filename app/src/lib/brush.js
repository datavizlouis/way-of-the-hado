// Procedural sumi-e style brush strokes drawn as bundles of bristles.
// A stroke is generated once (deterministic) and can then be drawn at any
// progress 0..1, which is what drives the paint / un-paint animation.

import { makeRng, lerp, clamp } from './rng.js';

/**
 * Build a stroke from a polyline path.
 * @param {Array<[number,number]>} path   control points (canvas px)
 * @param {object} o  width, bristles, seed, dry (0..1 how much the tail breaks up), wobble
 */
export function makeStroke(path, o = {}) {
  const rng = makeRng(o.seed ?? 1);
  const width = o.width ?? 80;
  const nBristles = o.bristles ?? Math.round(clamp(width / 2.2, 18, 120));
  const dry = o.dry ?? 0.5;
  const wobble = o.wobble ?? width * 0.08;
  const samples = resample(path, o.step ?? 6);
  const normals = samples.map((p, i) => {
    const a = samples[Math.max(0, i - 1)];
    const b = samples[Math.min(samples.length - 1, i + 1)];
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const l = Math.hypot(dx, dy) || 1;
    return [-dy / l, dx / l];
  });
  const bristles = [];
  for (let k = 0; k < nBristles; k++) {
    const off = (k / (nBristles - 1) - 0.5) * width * (0.9 + rng() * 0.2);
    const edge = Math.abs(off) / (width / 2); // 0 centre .. 1 edge
    const startLag = rng() * 0.06 + edge * 0.05; // bristles at the edge touch down later
    const endEarly = edge * dry * 0.35 + rng() * dry * 0.18; // and lift earlier (dry brush)
    const thick = (width / nBristles) * (2.2 + rng() * 1.8) * (1 - edge * 0.45);
    const alpha = edge < 0.6 ? 0.9 + rng() * 0.1 : 0.45 + rng() * 0.5 - edge * 0.2;
    const phase = rng() * Math.PI * 2;
    const freq = 0.004 + rng() * 0.01;
    // gaps: dry streaks near the tail
    const gaps = [];
    const nGaps = Math.floor(rng() * 3 * dry + edge * 2 * dry);
    for (let g = 0; g < nGaps; g++) {
      const s = 0.45 + rng() * 0.55;
      gaps.push([s, s + 0.02 + rng() * 0.12]);
    }
    const pts = samples.map((p, i) => {
      const n = normals[i];
      const t = i / (samples.length - 1);
      // stroke pinches at both ends
      const pinch = Math.sin(Math.PI * clamp(t * 1.15 + 0.04, 0, 1)) ** 0.35;
      const w = off * (0.55 + 0.45 * pinch) + Math.sin(i * freq * 40 + phase) * wobble * 0.15;
      return [p[0] + n[0] * w, p[1] + n[1] * w];
    });
    bristles.push({ pts, startLag, endEarly, thick, alpha, gaps });
  }
  return { bristles, width, core: samples, color: o.color ?? '#ece6d6' };
}

function resample(path, step) {
  // Catmull-Rom smooth then sample at ~step px
  const out = [];
  const P = (i) => path[clamp(i, 0, path.length - 1)];
  for (let i = 0; i < path.length - 1; i++) {
    const p0 = P(i - 1);
    const p1 = P(i);
    const p2 = P(i + 1);
    const p3 = P(i + 2);
    const segLen = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const n = Math.max(2, Math.ceil(segLen / step));
    for (let j = 0; j < n; j++) {
      const t = j / n;
      const t2 = t * t;
      const t3 = t2 * t;
      const f = (a, b, c, d) =>
        0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(path[path.length - 1]);
  return out;
}

/**
 * Draw a stroke. `progress` 0..1 is how far along the path the brush has travelled.
 * With `reverse`, the stroke is erased from its start (un-paint pulls the paint off
 * in the direction it was laid down).
 */
export function drawStroke(ctx, stroke, progress, opts = {}) {
  if (progress <= 0) return;
  const reverse = !!opts.reverse;
  ctx.save();
  ctx.strokeStyle = opts.color ?? stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  // solid body so the paper reads as one wet stroke (bristles add the dry texture on top)
  if (stroke.core && opts.core !== false) {
    const n = stroke.core.length;
    const c0 = reverse ? Math.max(0.04, 1 - progress) : 0.04;
    const c1 = reverse ? 0.9 : Math.min(0.9, progress * 1.02);
    if (c1 > c0) {
      ctx.globalAlpha = opts.alpha ?? 1;
      ctx.lineWidth = stroke.width * 0.42;
      ctx.lineCap = 'butt';
      ctx.beginPath();
      for (let i = Math.floor(c0 * (n - 1)); i <= Math.floor(c1 * (n - 1)); i++) {
        const p = stroke.core[i];
        if (i === Math.floor(c0 * (n - 1))) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      }
      ctx.stroke();
      ctx.lineCap = 'round';
    }
  }
  for (const b of stroke.bristles) {
    const n = b.pts.length;
    let a0;
    let a1;
    if (!reverse) {
      a0 = b.startLag;
      a1 = Math.min(1 - b.endEarly, progress * (1 + b.startLag));
    } else {
      // when un-painting, `progress` is the amount still on the canvas
      a0 = Math.max(b.startLag, 1 - progress);
      a1 = 1 - b.endEarly;
    }
    if (a1 <= a0) continue;
    ctx.globalAlpha = clamp(b.alpha, 0.05, 1) * (opts.alpha ?? 1);
    ctx.lineWidth = b.thick;
    ctx.beginPath();
    let pen = false;
    const i0 = Math.floor(a0 * (n - 1));
    const i1 = Math.floor(a1 * (n - 1));
    for (let i = i0; i <= i1; i++) {
      const t = i / (n - 1);
      let inGap = false;
      for (const g of b.gaps) if (t > g[0] && t < g[1]) inGap = true;
      if (inGap) {
        pen = false;
        continue;
      }
      const p = b.pts[i];
      if (!pen) {
        ctx.moveTo(p[0], p[1]);
        pen = true;
      } else ctx.lineTo(p[0], p[1]);
    }
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * A set of horizontal sweeps that together cover a rectangle — the
 * "paint the wall" pattern used to reveal a panel. Strokes run sequentially.
 */
export function makeCoverStrokes(x, y, w, h, seed = 7, opts = {}) {
  const rng = makeRng(seed);
  const rows = opts.rows ?? Math.max(3, Math.round(h / 150));
  const rowH = h / rows;
  const strokes = [];
  for (let r = 0; r < rows; r++) {
    const cy = y + rowH * (r + 0.5) + (rng() - 0.5) * rowH * 0.15;
    const ltr = r % 2 === 0;
    const xs = ltr ? [x - w * 0.05, x + w * 1.04] : [x + w * 1.05, x - w * 0.04];
    const path = [];
    const nPts = 5;
    for (let i = 0; i < nPts; i++) {
      const t = i / (nPts - 1);
      path.push([lerp(xs[0], xs[1], t), cy + Math.sin(t * Math.PI * (1 + rng())) * rowH * 0.12 * (rng() - 0.5)]);
    }
    strokes.push(
      makeStroke(path, {
        width: rowH * (1.55 + rng() * 0.3),
        seed: seed * 31 + r,
        dry: opts.dry ?? 0.55,
        color: opts.color,
      }),
    );
  }
  return strokes;
}

/** Draw a sequence of strokes with one overall progress value (each gets its slice). */
export function drawSequence(ctx, strokes, progress, opts = {}) {
  const n = strokes.length;
  const overlap = opts.overlap ?? 0.35;
  const slice = 1 / (n - (n - 1) * overlap);
  strokes.forEach((s, i) => {
    const start = i * slice * (1 - overlap);
    const p = clamp((progress - start) / slice, 0, 1);
    if (opts.reverse) {
      // un-paint in reverse order: last stroke leaves first
      const j = n - 1 - i;
      const startR = j * slice * (1 - overlap);
      const pr = 1 - clamp((1 - progress - startR) / slice, 0, 1);
      drawStroke(ctx, s, pr, { ...opts, reverse: true });
    } else {
      drawStroke(ctx, s, p, opts);
    }
  });
}

/** A brush "enso" circle. */
export function makeEnso(cx, cy, r, seed = 3, opts = {}) {
  const rng = makeRng(seed);
  const path = [];
  const start = rng() * Math.PI * 2;
  const sweep = Math.PI * (1.7 + rng() * 0.2);
  for (let i = 0; i <= 18; i++) {
    const a = start + (sweep * i) / 18;
    const rr = r * (1 + (rng() - 0.5) * 0.05);
    path.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  return makeStroke(path, { width: r * 0.32, seed: seed + 11, dry: 0.8, ...opts });
}

/** Render a stroke to a PNG data URL (used for CSS backgrounds such as the red move buttons). */
export function strokeImage(w, h, color, seed = 5, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  const s = makeStroke(
    [
      [w * 0.04, h * 0.55],
      [w * 0.35, h * 0.47],
      [w * 0.7, h * 0.53],
      [w * 0.96, h * 0.46],
    ],
    { width: h * (opts.thickness ?? 0.82), seed, dry: opts.dry ?? 0.65, color },
  );
  drawStroke(ctx, s, 1);
  return c.toDataURL('image/png');
}
