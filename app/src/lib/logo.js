// "WAY OF THE HADO" logotype in the spirit of the Street Fighter IV logo. HADO is brush
// lettering leaning forward, filled with a fire gradient, with a ragged black brush border
// and flame flicks, sitting on one big ink splat; "WAY OF THE" is plain white above it.
// Rendered once to an offscreen canvas; the splat and the red aura are animated by the caller.

import { makeRng } from './rng.js';
import { makeSplat } from './brush.js';
export { drawSplat } from './brush.js';

export const LOGO_FONT = '"HadoBrush", "Kaushan Script", "Brush Script MT", Impact, sans-serif';
const SKEW = -0.2; // forward lean
const KEY = '#07080c';

function fireGradient(ctx, top, bottom) {
  // yellow at the top, through orange, to red at the foot of the letters
  const g = ctx.createLinearGradient(0, top, 0, bottom);
  g.addColorStop(0, '#fff27a');
  g.addColorStop(0.22, '#ffd21c');
  g.addColorStop(0.48, '#ff9a12');
  g.addColorStop(0.72, '#f0560f');
  g.addColorStop(0.9, '#d4210f');
  g.addColorStop(1, '#9e0d0a');
  return g;
}

// tapered flame flicks trailing back from a word (behind it, lower-left)
function flicks(rng, x, y, fs, w, count, h) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const yy = y + fs * (-0.22 + rng() * 0.5);
    const x0 = x + w * (0.08 + rng() * 0.3);
    const len = w * (0.12 + rng() * 0.12) + fs * (0.2 + rng() * 0.35);
    const th = fs * (0.018 + rng() * 0.03);
    const drop = fs * (0.02 + rng() * 0.12);
    // keep the tip inside the canvas once the forward lean is applied
    const room = x0 + SKEW * (yy - h * 0.5) - fs * 0.14;
    if (room < fs * 0.2) continue;
    out.push({ x0, yy, len: Math.min(len, room), th, drop: drop * (rng() < 0.3 ? -1 : 1) });
  }
  return out;
}

function flickPath(ctx, f) {
  ctx.beginPath();
  ctx.moveTo(f.x0 + f.th, f.yy - f.th);
  ctx.quadraticCurveTo(f.x0 - f.len * 0.5, f.yy - f.th * 0.4 + f.drop * 0.3, f.x0 - f.len, f.yy + f.drop);
  ctx.quadraticCurveTo(f.x0 - f.len * 0.45, f.yy + f.th * 0.6 + f.drop * 0.4, f.x0 + f.th, f.yy + f.th);
  ctx.closePath();
}

const BIG = 0.4; // HADO's font size as a share of the logo width
export const logoHeight = (w) => Math.round(w * BIG * 1.65);

/** The ink splat HADO sits on, in logo-local px (drawn and animated by the caller). */
export function logoSplats(w) {
  const h = logoHeight(w);
  return [
    // the main blot: wide and tall enough to hold HADO with room to spare
    makeSplat(w * 0.5, h * 0.6, w * 0.36, 5, { sx: 1.6, sy: 0.92, rot: -0.06, spikeLen: 0.45, spread: 0.35, beads: 0.35 }),
    // lobes that break up its oval outline
    makeSplat(w * 0.16, h * 0.74, w * 0.13, 31, { sx: 1.4, sy: 1, rot: 0.3, spikeLen: 0.5, spread: 0.5, beads: 0.5 }),
    makeSplat(w * 0.84, h * 0.5, w * 0.14, 11, { sx: 1.3, sy: 1, rot: 0.5, spikeLen: 0.5, spread: 0.5, beads: 0.5 }),
  ];
}

/**
 * Paint one word in the HADO style: a ragged black brush border under a yellow-orange-red
 * fill with brush streaks and a hot top highlight. `word` carries text, fs, x, y, scale and
 * fl (its flame flicks); the lean pivots on h / 2. Draws onto ctx in device pixels.
 */
function paintFireWord(ctx, word, w, h, dpr, rng) {
  // 1. black brush border under everything, on its own layer: several jittered passes give
  // it a lumpy hand-painted edge, then thin bristle gaps are scratched out of the outer rim
  // (the fire fill covers the inside, so the scratches only show at the border)
  const keyC = document.createElement('canvas');
  keyC.width = ctx.canvas.width;
  keyC.height = ctx.canvas.height;
  const k = keyC.getContext('2d');
  k.scale(dpr, dpr);
  k.translate(0, h * 0.5);
  k.transform(1, 0, SKEW, 1, 0, 0);
  k.translate(0, -h * 0.5);
  k.textBaseline = 'middle';
  k.lineJoin = 'round';
  k.lineCap = 'round';
  k.fillStyle = KEY;
  k.strokeStyle = KEY;
  for (const wd of [word]) {
    for (const fl of wd.fl) {
      flickPath(k, fl);
      k.lineWidth = wd.fs * 0.08;
      k.stroke();
      k.fill();
    }
    k.save();
    k.translate(wd.x, wd.y);
    k.scale(wd.scale, 1);
    k.font = `${wd.fs}px ${LOGO_FONT}`;
    for (let i = 0; i < 7; i++) {
      k.lineWidth = wd.fs * (0.08 + rng() * 0.05);
      k.strokeText(wd.text, (rng() - 0.5) * wd.fs * 0.035, (rng() - 0.5) * wd.fs * 0.03);
    }
    // dry-brush drag: the border is swept a little back to the left and down
    for (let i = 1; i <= 3; i++) {
      k.lineWidth = wd.fs * (0.07 - i * 0.012);
      k.strokeText(wd.text, -i * wd.fs * 0.022, i * wd.fs * 0.01);
    }
    k.restore();
  }
  k.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 140; i++) {
    const x = rng() * w;
    const y = rng() * h;
    const len = w * (0.02 + rng() * 0.06);
    k.lineWidth = 0.6 + rng() * 1.2;
    k.beginPath();
    k.moveTo(x, y);
    k.lineTo(x - len, y + len * 0.06 * (rng() - 0.3));
    k.stroke();
  }
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(keyC, 0, 0);
  ctx.restore();
  // 2. fire fill, on its own layer so the texture can be clipped to it
  const fire = document.createElement('canvas');
  fire.width = ctx.canvas.width;
  fire.height = ctx.canvas.height;
  const f = fire.getContext('2d');
  f.scale(dpr, dpr);
  f.translate(0, h * 0.5);
  f.transform(1, 0, SKEW, 1, 0, 0);
  f.translate(0, -h * 0.5);
  f.textBaseline = 'middle';
  for (const wd of [word]) {
    const grad = fireGradient(f, wd.y - wd.fs * 0.42, wd.y + wd.fs * 0.42);
    f.fillStyle = grad;
    for (const fl of wd.fl) {
      // flicks fade from gold at the root to deep red at the tip
      const g2 = f.createLinearGradient(fl.x0, 0, fl.x0 - fl.len, 0);
      g2.addColorStop(0, '#ffc12a');
      g2.addColorStop(0.6, '#ec5a12');
      g2.addColorStop(1, '#a8180c');
      f.fillStyle = g2;
      flickPath(f, fl);
      f.fill();
    }
    f.fillStyle = grad;
    f.save();
    f.translate(wd.x, wd.y);
    f.scale(wd.scale, 1);
    f.translate(-wd.x, -wd.y);
    f.font = `${wd.fs}px ${LOGO_FONT}`;
    f.fillText(wd.text, wd.x, wd.y);
    f.restore();
  }
  // brush texture: streaks dragged diagonally through the fill
  f.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 90; i++) {
    const x = rng() * w;
    const y = rng() * h;
    const len = word.fs * (0.2 + rng() * 0.6);
    const hot = rng() < 0.45;
    f.strokeStyle = hot ? 'rgba(255,248,200,0.35)' : 'rgba(170,30,10,0.28)';
    f.lineWidth = 1 + rng() * word.fs * 0.02;
    f.beginPath();
    f.moveTo(x, y);
    f.lineTo(x - len, y + len * (0.15 + rng() * 0.2));
    f.stroke();
  }
  // a hot highlight along the top of each letter
  for (const wd of [word]) {
    f.save();
    f.translate(wd.x, wd.y);
    f.scale(wd.scale, 1);
    f.translate(-wd.x, -wd.y);
    f.font = `${wd.fs}px ${LOGO_FONT}`;
    // the outline shifted down shows only just inside the top edges of the letters
    f.strokeStyle = 'rgba(255,252,225,0.6)';
    f.lineWidth = wd.fs * 0.02;
    f.strokeText(wd.text, wd.x, wd.y + wd.fs * 0.025);
    f.restore();
  }
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(fire, 0, 0);
  ctx.restore();
}

/** A single word or phrase in the HADO style, on a new canvas `w` px wide. Returns { canvas, w, h }. */
export function renderFireText(text, w, dpr = 1) {
  const rng = makeRng(77);
  const probe = document.createElement('canvas').getContext('2d');
  probe.font = `100px ${LOGO_FONT}`;
  const fs = (100 * w * 0.9) / probe.measureText(text).width;
  const h = Math.round(fs * 1.35);
  const c = document.createElement('canvas');
  c.width = Math.round(w * dpr);
  c.height = Math.round(h * dpr);
  const ctx = c.getContext('2d');
  const word = { text, fs, y: h * 0.5, scale: 1, x: w * 0.07 };
  word.fl = flicks(rng, word.x, word.y, fs, w * 0.9, 3, h);
  paintFireWord(ctx, word, w, h, dpr, rng);
  return { canvas: c, w, h };
}

/**
 * Draw the logo into a new canvas `w` px wide. Returns { canvas, w, h, dot } where `dot`
 * is the centre of HADO's "A" (logo-local px), where the red energy is anchored.
 * The layout: a smaller "WAY OF THE" on the first line, a big "HADO" on the second, and
 * 波動の道 ("the way of the surge") inside the black splat, under HADO.
 */
export function renderLogo(w, dpr = 1) {
  const rng = makeRng(77);
  const fsBig = w * BIG;
  const fsSmall = fsBig * 0.3;
  const h = logoHeight(w);
  const c = document.createElement('canvas');
  c.width = Math.round(w * dpr);
  c.height = Math.round(h * dpr);
  const ctx = c.getContext('2d');
  ctx.scale(dpr, dpr);

  // the two words, in a skewed space so the letters lean forward
  const top = { text: 'WAY OF THE', fs: fsSmall, y: h * 0.08, flicks: 0, fit: 0.6 };
  const hado = { text: 'HADO', fs: fsBig, y: h * 0.6, flicks: 6, fit: 0.78 };
  const words = [top, hado];
  ctx.save();
  ctx.translate(0, h * 0.5);
  ctx.transform(1, 0, SKEW, 1, 0, 0);
  ctx.translate(0, -h * 0.5);
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  for (const wd of words) {
    ctx.font = `${wd.fs}px ${LOGO_FONT}`;
    wd.w = ctx.measureText(wd.text).width;
    // squeeze a word to fit if the font runs wide, then centre it (allowing for the lean)
    wd.scale = Math.min(1, (w * wd.fit) / wd.w);
    wd.x = (w - wd.w * wd.scale) / 2 - SKEW * (wd.y - h * 0.5);
    wd.fl = flicks(rng, wd.x, wd.y, wd.fs, wd.w * wd.scale, wd.flicks, h);
  }
  paintFireWord(ctx, hado, w, h, dpr, rng);
  // "WAY OF THE": plain white, same lean
  ctx.save();
  ctx.translate(top.x, top.y);
  ctx.scale(top.scale, 1);
  ctx.font = `${top.fs}px ${LOGO_FONT}`;
  ctx.fillStyle = '#f6f3ea';
  ctx.fillText(top.text, 0, 0);
  ctx.restore();
  // centre of the A: halfway across its advance, a little above the middle (inside its
  // triangle), then mapped out of the skewed space
  ctx.font = `${hado.fs}px ${LOGO_FONT}`;
  const hW = ctx.measureText('H').width;
  const haW = ctx.measureText('HA').width;
  const ax = hado.x + ((hW + haW) / 2 + hado.fs * 0.045) * hado.scale;
  const ay = hado.y - hado.fs * 0.08;
  const dot = { x: ax + SKEW * (ay - h * 0.5), y: ay, fs: hado.fs };
  ctx.restore();

  // subtitle in Japanese, on the black splat under HADO
  const jfs = Math.max(12, fsBig * 0.1);
  ctx.font = `700 ${jfs}px "Hiragino Mincho ProN", "Yu Mincho", "Noto Serif CJK JP", serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'rgba(246,243,234,0.85)';
  ctx.fillText('波動の道', w * 0.7, h * 0.875);
  return { canvas: c, w, h, dot };
}
