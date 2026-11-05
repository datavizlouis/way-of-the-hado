// Procedural sumi-e style brush strokes drawn as bundles of bristles.
// A stroke is generated once (deterministic) and can then be drawn at any
// progress 0..1, which is what drives the paint / un-paint animation.

import { makeRng, clamp } from './rng.js';

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
  const drops = makeDrops(samples, normals, width, rng, o.splatter ?? 1);
  return { bristles, drops, width, core: samples, color: o.color ?? '#ece6d6' };
}

const gauss = (rng) => (rng() + rng() + rng() - 1.5) / 1.5;

/**
 * Ink splatter around a stroke, in the spirit of sumi-e splash art: blotchy bleed along
 * the edges, flecks and a fine spray beside it, droplets thrown off where the brush
 * lands and flicked forward where it lifts. Each drop carries `t`, the point along the
 * stroke where it appears, so it paints and un-paints with the stroke.
 */
function makeDrops(samples, normals, width, rng, amount) {
  const drops = [];
  if (!amount || samples.length < 3) return drops;
  const n = samples.length;
  let len = 0;
  for (let i = 1; i < n; i++) len += Math.hypot(samples[i][0] - samples[i - 1][0], samples[i][1] - samples[i - 1][1]);
  const at = (t) => {
    const i = Math.round(clamp(t, 0, 1) * (n - 1));
    const pinch = Math.sin(Math.PI * clamp(t * 1.15 + 0.04, 0, 1)) ** 0.35;
    return { p: samples[i], nr: normals[i], tg: [normals[i][1], -normals[i][0]], k: 0.55 + 0.45 * pinch };
  };
  const push = (x, y, rx, ry, rot, t, a = 1) => drops.push({ x, y, rx: Math.max(0.4, rx), ry: Math.max(0.4, ry), rot, t, a });
  const ang = (v) => Math.atan2(v[1], v[0]);
  // bleed lobes that make the edge blotchy rather than combed
  const nBlots = Math.round((len / (width * 0.5)) * amount);
  for (let i = 0; i < nBlots; i++) {
    const t = 0.04 + rng() * 0.9;
    const { p, nr, tg, k } = at(t);
    const side = rng() < 0.5 ? -1 : 1;
    const off = side * width * k * (0.3 + rng() * 0.16);
    const r = width * (0.03 + rng() ** 2 * 0.05);
    push(p[0] + nr[0] * off, p[1] + nr[1] * off, r * (1.3 + rng()), r, ang(tg), t);
  }
  // flecks just off the edge, bigger ones closer in
  const nFlecks = Math.round((len / 14) * amount);
  for (let i = 0; i < nFlecks; i++) {
    const t = rng();
    const { p, nr, tg, k } = at(t);
    const side = rng() < 0.5 ? -1 : 1;
    const d = rng() ** 1.6;
    const off = side * width * k * (0.5 + d * 0.95);
    const r = (0.5 + (1 - d) * rng() ** 3 * width * 0.03) * (1 + rng() * 0.4);
    push(p[0] + nr[0] * off, p[1] + nr[1] * off, r * (1 + rng() * 1.5), r, ang(tg) + gauss(rng) * 0.6, t, 0.75 + rng() * 0.25);
  }
  // fine spray mist
  const nMist = Math.round((len / 3) * amount);
  for (let i = 0; i < nMist; i++) {
    const t = rng();
    const { p, nr } = at(t);
    const off = gauss(rng) * width * 1.05;
    const r = 0.45 + rng() * 0.9;
    push(p[0] + nr[0] * off, p[1] + nr[1] * off, r, r, 0, t, 0.25 + rng() * 0.45);
  }
  // impact splash where the brush lands: drops thrown out radially
  {
    const { p } = at(0.03);
    const nImp = Math.round((6 + rng() * 8) * amount);
    for (let i = 0; i < nImp; i++) {
      const a = rng() * Math.PI * 2;
      const d = width * (0.45 + rng() ** 1.5 * 0.9);
      const r = width * (0.006 + rng() ** 4 * 0.025);
      push(p[0] + Math.cos(a) * d, p[1] + Math.sin(a) * d, r * (1.6 + rng() * 2), r, a, 0.03 + rng() * 0.05);
    }
  }
  // flick off the end: a fan of drops carried forward, shrinking with distance
  {
    const { p, nr, tg } = at(0.99);
    const nFlick = Math.round((10 + rng() * 14) * amount);
    for (let i = 0; i < nFlick; i++) {
      const d = rng() ** 1.4;
      const fwd = width * (0.25 + d * 1.9);
      const side = gauss(rng) * width * (0.25 + d * 0.5);
      const r = width * (0.005 + (1 - d) * rng() ** 3 * 0.03);
      const dir = Math.atan2(tg[1] * fwd + nr[1] * side, tg[0] * fwd + nr[0] * side);
      push(p[0] + tg[0] * fwd + nr[0] * side, p[1] + tg[1] * fwd + nr[1] * side, r * (1.5 + d * 3), r, dir, 0.97 + rng() * 0.03);
    }
  }
  return drops;
}

function drawDrops(ctx, drops, progress, reverse, alpha) {
  if (!drops) return;
  for (const d of drops) {
    if (reverse ? d.t < 1 - progress : d.t > progress) continue;
    ctx.globalAlpha = d.a * alpha;
    ctx.beginPath();
    ctx.ellipse(d.x, d.y, d.rx, d.ry, d.rot, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * An ink splash: a ragged blot with spikes and satellite drops, like ink thrown at the
 * paper. `progress` grows it out from the centre (or shrinks it when un-painting).
 */
export function makeSplat(cx, cy, r, seed = 1, o = {}) {
  const rng = makeRng(seed);
  const N = 72;
  const lobes = Array.from({ length: 5 }, () => [rng() * Math.PI * 2, 0.6 + rng() * 2.4, rng() * 0.12]);
  const spikes = Array.from({ length: Math.round(6 + rng() * 6) }, () => ({
    a: rng() * Math.PI * 2,
    len: 0.95 + rng() ** 2 * 0.75 * (o.spikeLen ?? 1),
    w: 0.06 + rng() * 0.08,
    bend: (rng() - 0.5) * 0.5,
  }));
  const rim = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    let rr = 0.78 + (rng() - 0.5) * 0.12;
    for (const [ph, f, amp] of lobes) rr += Math.sin(a * Math.round(f + 2) + ph) * amp;
    rim.push([a, rr]);
  }
  const drops = [];
  for (const s of spikes) {
    // a bead at the end of each spike, and a few loose drops around it
    drops.push({ a: s.a + s.bend * 0.25, d: s.len + 0.08, r: s.w * 0.7 * (o.beads ?? 1), e: 1.3 });
    for (let k = 0; k < 2; k++) drops.push({ a: s.a + (rng() - 0.5) * 0.25, d: s.len + 0.1 + rng() * 0.5 * (o.spread ?? 1), r: (0.012 + rng() * 0.03) * (o.beads ?? 1), e: 1.5 + rng() * 2 });
  }
  const spread = o.spread ?? 1;
  for (let k = 0; k < 60; k++) drops.push({ a: rng() * Math.PI * 2, d: 0.9 + rng() ** 1.5 * 0.9 * spread, r: (0.004 + rng() ** 4 * 0.04) * (0.5 + spread * 0.5), e: 1 + rng() * 2 });
  return { cx, cy, r, rim, spikes, drops, color: o.color ?? '#05070d', sx: o.sx ?? 1.35, sy: o.sy ?? 1, rot: o.rot ?? 0 };
}

export function drawSplat(ctx, s, progress) {
  if (progress <= 0) return;
  const g = clamp(progress, 0, 1);
  const body = 1 - (1 - clamp(g * 1.6, 0, 1)) ** 3; // the blot lands first
  const reach = 1 - (1 - clamp((g - 0.15) / 0.85, 0, 1)) ** 2; // spikes and drops fly out after
  ctx.save();
  ctx.translate(s.cx, s.cy);
  ctx.rotate(s.rot);
  ctx.scale(s.r * s.sx, s.r * s.sy);
  ctx.fillStyle = s.color;
  ctx.beginPath();
  s.rim.forEach(([a, rr], i) => {
    const x = Math.cos(a) * rr * body;
    const y = Math.sin(a) * rr * body;
    if (i) ctx.lineTo(x, y);
    else ctx.moveTo(x, y);
  });
  ctx.closePath();
  ctx.fill();
  // tendrils and drops scale with the blot, so nothing floats loose mid-animation
  ctx.scale(body, body);
  for (const sp of s.spikes) {
    const L = 0.6 + (sp.len - 0.6) * reach;
    const c = Math.cos(sp.a);
    const sn = Math.sin(sp.a);
    const bx = -sn * sp.bend * L * 0.4;
    const by = c * sp.bend * L * 0.4;
    ctx.beginPath();
    ctx.moveTo(c * 0.55 - sn * sp.w, sn * 0.55 + c * sp.w);
    ctx.quadraticCurveTo(c * L * 0.7 - sn * sp.w * 0.5 + bx, sn * L * 0.7 + c * sp.w * 0.5 + by, c * L + bx * 0.6, sn * L + by * 0.6);
    ctx.quadraticCurveTo(c * L * 0.7 + sn * sp.w * 0.5 + bx, sn * L * 0.7 - c * sp.w * 0.5 + by, c * 0.55 + sn * sp.w, sn * 0.55 - c * sp.w);
    ctx.fill();
  }
  for (const d of s.drops) {
    if (reach <= 0) break;
    const dd = 0.5 + (d.d - 0.5) * reach;
    ctx.beginPath();
    ctx.ellipse(Math.cos(d.a) * dd, Math.sin(d.a) * dd, d.r * d.e, d.r, d.a, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
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
      // tapered: thick through the middle, thinning towards both ends so it never shows a hard edge
      ctx.globalAlpha = opts.alpha ?? 1;
      ctx.lineCap = 'round';
      const i0 = Math.floor(c0 * (n - 1));
      const i1 = Math.floor(c1 * (n - 1));
      for (let i = i0 + 1; i <= i1; i++) {
        const t = i / (n - 1);
        const taper = Math.sin(Math.PI * clamp((t - 0.02) / 0.9, 0, 1)) ** 0.6;
        if (taper <= 0.02) continue;
        ctx.lineWidth = stroke.width * 0.42 * taper;
        ctx.beginPath();
        ctx.moveTo(stroke.core[i - 1][0], stroke.core[i - 1][1]);
        ctx.lineTo(stroke.core[i][0], stroke.core[i][1]);
        ctx.stroke();
      }
      ctx.lineCap = 'round';
    }
  }
  if (opts.splatter !== false) {
    ctx.fillStyle = opts.color ?? stroke.color;
    drawDrops(ctx, stroke.drops, progress, reverse, opts.alpha ?? 1);
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
 * A splat shaped to hold a rectangle of content: a rounded (superellipse) blob covering
 * x,y,w,h, with spikes spaced evenly round the rim and a controlled number of loose drops.
 * Unlike makeSplat, its outline stays predictable however it is seeded.
 * o: color, spikes (count), spikeLen (px), rough (0..1 rim wobble), drops (count), dropReach (px)
 */
export function makeBlob(x, y, w, h, seed = 1, o = {}) {
  const rng = makeRng(seed);
  const rx = w / 2;
  const ry = h / 2;
  const rough = (o.rough ?? 0.03) * Math.min(rx, ry);
  const N = 180;
  const ph = [rng() * 6.28, rng() * 6.28, rng() * 6.28];
  const rimAt = (a) => {
    const c = Math.cos(a);
    const s = Math.sin(a);
    const sq = o.square ?? 4; // 4 = a rounded rectangle, higher = squarer corners
    const k = (Math.abs(c) ** sq + Math.abs(s) ** sq) ** (-1 / sq);
    const wob = (Math.sin(a * 5 + ph[0]) + Math.sin(a * 13 + ph[1]) * 0.7 + Math.sin(a * 37 + ph[2]) * 0.35 + Math.sin(a * 71 + ph[0]) * 0.18) * rough;
    return [c * (rx * k + wob), s * (ry * k + wob)];
  };
  const rim = Array.from({ length: N }, (_, i) => rimAt((i / N) * Math.PI * 2));
  const spikeLen = o.spikeLen ?? 20;
  const nSpikes = o.spikes ?? 24;
  const spikes = Array.from({ length: nSpikes }, (_, i) => {
    const a = ((i + 0.5 + (rng() - 0.5) * 0.7) / nSpikes) * Math.PI * 2;
    const base = rimAt(a);
    const l = Math.hypot(base[0], base[1]) || 1;
    return {
      base,
      dir: [base[0] / l, base[1] / l],
      len: spikeLen * (0.3 + rng() ** 1.5 * 1.1),
      w: spikeLen * (o.spikeWidth ?? 1) * (0.28 + rng() * 0.3),
      bead: rng() < 0.3 ? 1 + rng() * 1.6 : 0,
    };
  });
  const dropReach = o.dropReach ?? spikeLen * 1.6;
  const nDrops = o.drops ?? 10;
  const drops = Array.from({ length: nDrops }, (_, i) => {
    const a = ((i + rng()) / nDrops) * Math.PI * 2;
    const base = rimAt(a);
    const l = Math.hypot(base[0], base[1]) || 1;
    const d = spikeLen * 0.6 + rng() * dropReach;
    const r = 1.2 + rng() * rng() * (o.dropSize ?? 5);
    return { x: base[0] + (base[0] / l) * d, y: base[1] + (base[1] / l) * d, r, e: 1 + rng() * 0.8, a };
  });
  return { cx: x + rx, cy: y + ry, rim, spikes, drops, color: o.color ?? '#ece6d6' };
}

/** Draw a makeBlob splat. `progress` 0..1 grows it from its centre. */
export function drawBlob(ctx, b, progress) {
  if (progress <= 0) return;
  const g = clamp(progress, 0, 1);
  const body = 1 - (1 - clamp(g * 1.5, 0, 1)) ** 3;
  const reach = clamp((g - 0.35) / 0.65, 0, 1);
  ctx.save();
  ctx.translate(b.cx, b.cy);
  ctx.fillStyle = b.color;
  ctx.scale(body, body);
  ctx.beginPath();
  b.rim.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();
  for (const s of b.spikes) {
    const [bx, by] = s.base;
    const [dx, dy] = s.dir;
    const L = s.len * reach;
    ctx.beginPath();
    // start a little inside the rim so no seam shows
    // concave sides pull it into a tapered tendril of ink
    const tx = bx + dx * L;
    const ty = by + dy * L;
    const mx = bx + dx * L * 0.3;
    const my = by + dy * L * 0.3;
    const pinch = s.w * 0.14;
    // the base sits well inside the rim: on a slanted stretch of rim a shallow one leaves a gap,
    // and the spike floats as a loose triangle
    const inset = 4 + s.w;
    ctx.moveTo(bx - dx * inset - dy * s.w, by - dy * inset + dx * s.w);
    ctx.quadraticCurveTo(mx - dy * pinch, my + dx * pinch, tx, ty);
    ctx.quadraticCurveTo(mx + dy * pinch, my - dx * pinch, bx - dx * inset + dy * s.w, by - dy * inset - dx * s.w);
    ctx.fill();
    if (s.bead && reach > 0.8) {
      ctx.beginPath();
      ctx.arc(tx, ty, s.bead, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (reach > 0) {
    for (const d of b.drops) {
      ctx.beginPath();
      ctx.ellipse(d.x, d.y, d.r * d.e * reach, d.r * reach, d.a, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
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
