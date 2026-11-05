// Animated art for the intro's story beats. Each scene is a looping, hand-timed
// choreography drawn straight onto the intro's paint canvas inside the beat's art box.
// Sprite frames come from the per-fighter atlases (sprites.json); frames are
// [x, y, w, h, anchorX, lift] in atlas pixels, drawn at a whole-number scale `k`.

import { getSpriteConfig, getImage } from '../assets.js';
import { makeRng, clamp, easeInOut, easeOut } from './rng.js';
import { makeSplat, drawSplat } from './brush.js';
import { playSfx } from './player.js';
import { drawCursed } from './cursedFx.js';

const INK = '#141a2b';

// ------------------------------------------------------------------ sprite helpers

function anim(id, name) {
  const cfg = getSpriteConfig(id);
  if (!cfg) return null;
  const img = getImage(cfg.image);
  if (!img || !img.complete || !img.naturalWidth) return null;
  const a = cfg.anims?.[name];
  return a ? { ...a, img } : null;
}

export const spritesReady = (ids) => ids.every((id) => anim(id, 'idle'));

/** Frame index of a looping animation at time t (s). */
const loopIdx = (a, t) => Math.floor(Math.max(0, t) * (a.fps || 8)) % a.frames.length;

/**
 * Draw one frame with its centre line at x and feet on groundY (canvas px).
 * flip mirrors it to face left; lift raises it (sprite px); alpha fades it.
 */
function drawFrame(ctx, a, idx, x, groundY, k, { flip = false, lift = 0, alpha = 1 } = {}) {
  if (!a || alpha <= 0) return;
  const [sx, sy, sw, sh, ax, l0 = 0] = a.frames[clamp(idx, 0, a.frames.length - 1)];
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.imageSmoothingEnabled = false;
  ctx.translate(Math.round(x), Math.round(groundY - (l0 + lift) * k));
  if (flip) ctx.scale(-1, 1);
  ctx.drawImage(a.img, sx, sy, sw, sh, -ax * k, -sh * k, sw * k, sh * k);
  ctx.restore();
}

/** A comic-style impact star: white core, red-orange spikes. */
function spark(ctx, x, y, r, t, seed = 1) {
  if (t <= 0 || t >= 1) return;
  const rng = makeRng(seed);
  const s = r * (0.5 + 0.8 * easeOut(t));
  ctx.save();
  ctx.globalAlpha *= 1 - t;
  ctx.translate(x, y);
  for (const [col, sc] of [['#e8361c', 1], ['#ffd23f', 0.7], ['#ffffff', 0.4]]) {
    ctx.fillStyle = col;
    ctx.beginPath();
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      const rr = (i % 2 ? 0.35 : 0.8 + rng() * 0.4) * s * sc;
      ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

/** Play a sound each time a looping scene's clock passes `at` (re-arms when it comes round). */
function cue(env, id, tt, at) {
  const armed = (env.L.cues ||= {});
  if (tt < at) armed[id] = true;
  else if (armed[id]) {
    armed[id] = false;
    playSfx(id);
  }
}

/** Ground line that centres `tall` sprite px of action vertically in the art box. */
const groundFor = (A, tall, k) => Math.round(A.y + A.h / 2 + (tall * k) / 2);

/** Biggest whole-number scale for sprites ~`tall` px high in a box. */
const scaleFor = (A, tall, across) => Math.max(2, Math.floor(Math.min((A.h * 0.8) / tall, A.w / across)));

// ------------------------------------------------------------------ 1. fist bump

function fistBump(ctx, A, t, env) {
  const idle = [anim('ryu', 'idle'), anim('ken', 'idle')];
  const punch = [anim('ryu', 'beat:punch'), anim('ken', 'beat:punch')];
  if (!idle[0] || !idle[1] || !punch[0] || !punch[1]) return false;
  const k = scaleFor(A, 100, 150);
  const ground = groundFor(A, 85, k);
  const cx = A.x + A.w / 2;
  const REACH = 46; // fist tip, sprite px in front of the centre line (measured)
  const FIST_Y = 67;
  const P = 3.4;
  const tt = t % P;
  let idx = -1; // -1 = idle
  if (tt >= 1.2 && tt < 1.5) idx = Math.floor((tt - 1.2) / 0.1);
  else if (tt >= 1.5 && tt < 2.1) idx = 2;
  else if (tt >= 2.1 && tt < 2.3) idx = 3 + Math.floor((tt - 2.1) / 0.1);
  [0, 1].forEach((i) => {
    const x = cx + (i ? 1 : -1) * (REACH - 1) * k;
    if (idx < 0) drawFrame(ctx, idle[i], loopIdx(idle[i], t), x, ground, k, { flip: i === 1 });
    else drawFrame(ctx, punch[i], idx, x, ground, k, { flip: i === 1 });
  });
  spark(ctx, cx, ground - FIST_Y * k, 16 * k, (tt - 1.5) / 0.3, 7);
  cue(env, 'coin', tt, 1.5);
  return true;
}

// ------------------------------------------------------------------ 2. raging demon

const STOMP_FRAME = 5; // the raised foot lands, and the first blue ring appears

// Akuma's win pose: he breathes in his idle stance, stomps, his body goes black in a red
// aura with the 天 kanji flaring above him and blue rings pulsing out, then he stands again.
function ragingDemon(ctx, A, t, env) {
  const seq = anim('akuma', 'beat:demon');
  const idle = anim('akuma', 'idle');
  if (!seq || !idle) return false;
  const k = scaleFor(A, 110, 110);
  const ground = groundFor(A, 82, k);
  const x = A.x + A.w / 2;
  const n = seq.frames.length;
  const run = n / seq.fps;
  const breathe = idle.frames.length / idle.fps; // one full idle cycle before the stomp
  const P = breathe + run + 1.2;
  const tt = t % P;
  cue(env, 'akuma', tt, breathe + STOMP_FRAME / seq.fps);
  if (tt < breathe) {
    drawFrame(ctx, idle, loopIdx(idle, tt), x, ground, k, { flip: !env.L?.artLeft });
    return true;
  }
  const idx = tt < breathe + run ? Math.floor((tt - breathe) * seq.fps) : n - 1;
  // a low red glow while the Satsui no Hado is out (the dark frames)
  const dark = idx >= 5 && idx < n - 1;
  if (dark) {
    const g = ctx.createRadialGradient(x, ground - 50 * k, 0, x, ground - 50 * k, 70 * k);
    g.addColorStop(0, 'rgba(200,20,30,0.28)');
    g.addColorStop(1, 'rgba(200,20,30,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - 70 * k, ground - 120 * k, 140 * k, 140 * k);
  }
  drawFrame(ctx, seq, idx, x, ground, k, { flip: !env.L?.artLeft });
  return true;
}

// ------------------------------------------------------------------ 3. shoryuken on sagat

const RYU_EYE = [25, 8]; // his eye in the idle frames (px from the frame's top left, same in all four)

/** The Dark Hado surfacing: Ryu's eye burns red, with a pulsing glow. */
function darkHadoEye(ctx, a, idx, x, ground, k, eye, t) {
  if (eye <= 0) return;
  const [, , , sh, ax, l0 = 0] = a.frames[idx];
  const px = Math.round(x) + (RYU_EYE[0] - ax) * k;
  const py = Math.round(ground - l0 * k) - sh * k + RYU_EYE[1] * k;
  ctx.save();
  ctx.globalAlpha *= eye;
  const R = k * (9 + 2.5 * Math.sin(t * 7));
  const g = ctx.createRadialGradient(px + k / 2, py + k / 2, 0, px + k / 2, py + k / 2, R);
  g.addColorStop(0, 'rgba(255,40,40,0.95)');
  g.addColorStop(0.35, 'rgba(235,20,30,0.45)');
  g.addColorStop(1, 'rgba(235,20,30,0)');
  ctx.fillStyle = g;
  ctx.fillRect(px - R, py - R, R * 2, R * 2);
  ctx.fillStyle = '#d42a30';
  ctx.fillRect(px - k, py, k, k);
  ctx.fillStyle = '#ff2a30';
  ctx.fillRect(px, py, k, k);
  ctx.restore();
}

function shoryuken(ctx, A, t, env) {
  const r = { idle: anim('ryu', 'idle'), srk: anim('ryu', 'Shoryuken') };
  const s = { idle: anim('sagat', 'idle'), hit: anim('sagat', 'beat:hit'), ko: anim('sagat', 'beat:ko') };
  if (!r.idle || !r.srk || !s.idle || !s.hit || !s.ko) return false;
  const k = scaleFor(A, 108, 155);
  const ground = groundFor(A, 130, k); // low enough that the higher jump stays on the splat
  const x1 = A.x + A.w * 0.3;
  const x2 = x1 + 58 * k;
  const JUMP = 2.6; // the eye and the curse build during the idle before this
  const P = 6.6;
  const tt = t % P;
  cue(env, 'shoryuken', tt, JUMP);
  // Ryu: idle, then a 7-frame Shoryuken that leaves the ground mid-way
  const RISE = [0, 0, 4, 36, 60, 40, 0];
  const STEP = [0, 4, 8, 12, 12, 12, 6]; // the uppercut carries Ryu forward into Sagat
  // the curse builds through the idle, stays on him through the move, and leaves once he lands
  const curse = clamp((tt - 0.3) / 1.2, 0, 1) * (1 - clamp((tt - (JUMP + 0.8)) / 0.7, 0, 1));
  const inMove = tt >= JUMP && tt < JUMP + 7 / 12;
  const i = inMove ? Math.floor((tt - JUMP) * 12) : 0;
  const body = inMove ? r.srk : r.idle;
  const idx = inMove ? i : loopIdx(r.idle, t);
  const rx = inMove ? x1 + STEP[i] * k : x1;
  const lift = inMove ? RISE[i] : 0;
  drawCursed(ctx, body, idx, rx, ground, k, tt, curse, 'back', lift);
  drawFrame(ctx, body, idx, rx, ground, k, { lift });
  drawCursed(ctx, body, idx, rx, ground, k, tt, curse, 'front', lift);
  if (!inMove && tt < JUMP) darkHadoEye(ctx, r.idle, idx, x1, ground, k, clamp((tt - 0.3) / 0.8, 0, 1), tt);
  // Sagat: idle, struck on the rising frame, thrown back to the floor, then back up
  const HIT = JUMP + 0.25;
  if (tt < HIT) drawFrame(ctx, s.idle, loopIdx(s.idle, t), x2, ground, k, { flip: true });
  else if (tt < HIT + 0.3) drawFrame(ctx, s.hit, Math.floor((tt - HIT) / 0.1), x2, ground, k, { flip: true });
  else {
    const kt = tt - HIT - 0.3;
    const i = Math.min(s.ko.frames.length - 1, Math.floor(kt * 8));
    const push = easeOut(clamp(kt / 0.6, 0, 1)) * 34 * k;
    const fade = tt > P - 0.8 ? 1 - clamp((tt - (P - 0.8)) / 0.3, 0, 1) : 1;
    drawFrame(ctx, s.ko, i, x2 + push, ground, k, { flip: true, alpha: fade });
    if (tt > P - 0.5) drawFrame(ctx, s.idle, 0, x2, ground, k, { flip: true, alpha: (tt - (P - 0.5)) / 0.5 });
  }
  spark(ctx, x1 + 40 * k, ground - 72 * k, 18 * k, (tt - HIT) / 0.3, 3);
  return true;
}

// ------------------------------------------------------------------ 4. psycho crusher

function psychoCrusher(ctx, A, t, env) {
  const idle = anim('bison', 'idle');
  const pc = anim('bison', 'Psycho Crusher');
  if (!idle || !pc) return false;
  const k = scaleFor(A, 100, 180);
  const ground = groundFor(A, 83, k);
  const xa = A.x + A.w * 0.78;
  const xb = A.x + A.w * 0.3;
  const P = 6.4;
  const tt = t % P;
  cue(env, 'psycho_crusher', tt, 1); // only on the right-to-left crossing
  // one crossing: wind-up (frames 0-2), spinning flight (3-6 looped), landing (7)
  const crossing = (u, from, to) => {
    const flip = to < from; // native sprite faces right
    if (u < 0.25) return drawFrame(ctx, pc, Math.floor(u / 0.084), from, ground, k, { flip });
    if (u < 1.05) {
      const f = (u - 0.25) / 0.8;
      const x = from + (to - from) * easeInOut(f);
      const spin = 3 + (Math.floor(u * 16) % 4);
      // psycho-power trail: fading afterimages
      for (let g = 3; g >= 1; g--) {
        const xg = from + (to - from) * easeInOut(clamp(f - g * 0.06, 0, 1));
        drawFrame(ctx, pc, 3 + ((spin - 3 + g) % 4), xg, ground, k, { flip, alpha: 0.12 * (4 - g) });
      }
      return drawFrame(ctx, pc, spin, x, ground, k, { flip });
    }
    return drawFrame(ctx, pc, 7, to, ground, k, { flip });
  };
  if (tt < 1) drawFrame(ctx, idle, loopIdx(idle, t), xa, ground, k, { flip: true });
  else if (tt < 2.2) crossing(tt - 1, xa, xb);
  else if (tt < 3.2) drawFrame(ctx, idle, loopIdx(idle, t), xb, ground, k, { flip: tt < 2.7 });
  else if (tt < 4.4) crossing(tt - 3.2, xb, xa);
  else drawFrame(ctx, idle, loopIdx(idle, t), xa, ground, k, { flip: tt > 5.2 });
  return true;
}

// ------------------------------------------------------------------ 5. street intro

// A homage to the SF2 attract intro: a night street, a crowd, one punch, and the camera
// tilting up a skyscraper to the title. Rendered at low resolution, then scaled up.
// the screen is 192x144; the scene is drawn with a margin all round so the splat-shaped
// edge can reach past it without hitting a straight canvas edge
const IW = 192;
const IH = 144;
const SW = 240;
const SH = 184;
const WORLD_H = 360;
let street = null;

function buildStreet() {
  const rng = makeRng(1991);
  const sky = Array.from({ length: 60 }, () => [rng() * SW, rng() * 240, rng() < 0.2 ? 2 : 1]);
  const back = [];
  for (let x = -4; x < SW; ) {
    const w = 14 + Math.floor(rng() * 22);
    back.push({ x, w, h: 60 + Math.floor(rng() * 90), lit: rng() });
    x += w + 1;
  }
  const crowd = Array.from({ length: 27 }, (_, i) => ({
    x: -6 + i * 9.5 + rng() * 4, row: i % 2, ph: rng() * 6, sp: 3 + rng() * 4, fist: rng() < 0.35, h: 14 + rng() * 6,
  }));
  return { sky, back, crowd, rng };
}

const canvas = (w, h) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
};

let streetCanvas = null;
let fightCanvas = null;
let maskCanvas = null;
let shapeCanvas = null;
let maskSplats = null;
function streetIntro(ctx, A, t) {
  const ken = { idle: anim('ken', 'idle'), punch: anim('ken', 'beat:punch') };
  const ryu = { idle: anim('ryu', 'idle'), hit: anim('ryu', 'beat:facehit') };
  if (!ken.idle || !ken.punch || !ryu.idle || !ryu.hit) return false;
  if (!street) street = buildStreet();
  if (!streetCanvas) streetCanvas = canvas(SW, SH);
  if (!fightCanvas) fightCanvas = canvas(SW, SH);
  const c = streetCanvas.getContext('2d');
  c.imageSmoothingEnabled = false;
  const P = 7.5;
  const tt = t % P;
  // camera: street level, then a slow tilt up the tower, hold on the title
  const cam = tt < 3 ? 0 : easeInOut(clamp((tt - 3) / 2.2, 0, 1));
  const top = (WORLD_H - SH) * (1 - cam); // world y at the top of the screen
  c.setTransform(1, 0, 0, 1, 0, -top);
  // sky
  const g = c.createLinearGradient(0, 0, 0, WORLD_H);
  g.addColorStop(0, '#04050f');
  g.addColorStop(0.6, '#0d1640');
  g.addColorStop(1, '#2a1f4a');
  c.fillStyle = g;
  c.fillRect(0, 0, SW, WORLD_H);
  c.fillStyle = '#cfd6ff';
  for (const [x, y, s] of street.sky) c.fillRect(Math.round(x), Math.round(y), s, s);
  // back buildings with lit windows
  const base = WORLD_H - 24;
  for (const b of street.back) {
    c.fillStyle = '#0b0f24';
    c.fillRect(b.x, base - b.h, b.w, b.h);
    for (let wy = base - b.h + 4; wy < base - 4; wy += 5) {
      for (let wx = b.x + 2; wx < b.x + b.w - 2; wx += 4) {
        if (((wx * 7 + wy * 13) % 11) / 11 < b.lit * 0.6) {
          c.fillStyle = (wx + wy) % 3 ? '#f2c14e' : '#9fb4ff';
          c.fillRect(wx, wy, 2, 2);
        }
      }
    }
  }
  // the tower the camera climbs, with its rooftop sign
  const tw = 56;
  const tx = SW / 2 - tw / 2;
  c.fillStyle = '#141a38';
  c.fillRect(tx, 70, tw, base - 70);
  c.fillStyle = '#1d2550';
  c.fillRect(tx, 70, 6, base - 70);
  for (let wy = 80; wy < base - 6; wy += 7) {
    for (let wx = tx + 9; wx < tx + tw - 4; wx += 6) {
      c.fillStyle = (wx * 3 + wy) % 7 < 3 ? '#ffd56a' : '#232c5e';
      c.fillRect(wx, wy, 3, 3);
    }
  }
  c.fillStyle = '#141a38';
  c.fillRect(tx + tw / 2 - 1, 44, 2, 26);
  c.fillStyle = Math.floor(tt * 2) % 2 ? '#ff3b3b' : '#5a1010';
  c.fillRect(tx + tw / 2 - 1, 42, 2, 2);
  // street, lamp glow
  c.fillStyle = '#1a1c2c';
  c.fillRect(0, base, SW, 24);
  const lamp = c.createRadialGradient(SW / 2, base - 30, 2, SW / 2, base - 10, 80);
  lamp.addColorStop(0, 'rgba(255,214,140,0.35)');
  lamp.addColorStop(1, 'rgba(255,214,140,0)');
  c.fillStyle = lamp;
  c.fillRect(0, base - 90, SW, 110);
  // the fight: Ken throws one punch, Ryu takes it on the chin
  const kx = SW / 2 - 30;
  const rx = SW / 2 + 26;
  const gy = base + 6;
  const HIT = 1.9;
  let kenIdx = -1;
  if (tt >= HIT - 0.3 && tt < HIT) kenIdx = Math.floor((tt - HIT + 0.3) / 0.1);
  else if (tt >= HIT && tt < HIT + 0.6) kenIdx = 2;
  else if (tt >= HIT + 0.6 && tt < HIT + 0.8) kenIdx = 3 + Math.floor((tt - HIT - 0.6) / 0.1);
  const f = fightCanvas.getContext('2d');
  f.setTransform(1, 0, 0, 1, 0, 0);
  f.clearRect(0, 0, SW, SH);
  f.setTransform(1, 0, 0, 1, 0, -top);
  if (kenIdx < 0) drawFrame(f, ken.idle, loopIdx(ken.idle, t), kx, gy, 1);
  else drawFrame(f, ken.punch, kenIdx, kx, gy, 1);
  if (tt >= HIT && tt < HIT + 1.2) {
    const u = tt - HIT;
    drawFrame(f, ryu.hit, Math.min(3, Math.floor(u / 0.12)), rx + easeOut(clamp(u / 0.4, 0, 1)) * 10, gy, 1, { flip: true });
  } else drawFrame(f, ryu.idle, loopIdx(ryu.idle, t), tt >= HIT + 1.2 && tt < 3 ? rx + 10 : rx, gy, 1, { flip: true });
  // shade the fighters into the night (keeping a little of their colour)
  f.setTransform(1, 0, 0, 1, 0, 0);
  f.globalCompositeOperation = 'source-atop';
  f.fillStyle = 'rgba(8,10,30,0.45)';
  f.fillRect(0, 0, SW, SH);
  f.globalCompositeOperation = 'source-over';
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.drawImage(fightCanvas, 0, 0);
  c.setTransform(1, 0, 0, 1, 0, -top);
  // crowd in the foreground, bobbing and throwing fists up
  for (const p of street.crowd) {
    const bob = Math.round(Math.abs(Math.sin(tt * p.sp + p.ph)) * 2);
    const y = base + 24 - p.h + bob + (p.row ? 0 : 4);
    c.fillStyle = p.row ? '#07080f' : '#000000';
    c.fillRect(Math.round(p.x), y + 6, 9, p.h);
    c.fillRect(Math.round(p.x) + 2, y, 5, 6);
    if (p.fist && Math.sin(tt * p.sp * 0.7 + p.ph) > 0.3) c.fillRect(Math.round(p.x) + 7, y - 6, 2, 8);
  }
  // impact flash
  if (tt >= HIT && tt < HIT + 0.12) {
    c.fillStyle = 'rgba(255,255,255,0.8)';
    c.fillRect(0, 0, SW, WORLD_H);
  }
  // title over the rooftop once the camera is up
  c.setTransform(1, 0, 0, 1, 0, 0);
  if (tt > 5) {
    const a = clamp((tt - 5) / 0.4, 0, 1) * (tt > 7 ? 1 - (tt - 7) / 0.5 : 1);
    c.globalAlpha = a;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = 'bold 16px "HadoPixel", "Courier New", monospace';
    c.lineWidth = 4;
    c.strokeStyle = '#7a0f12';
    c.strokeText('THE WORLD', SW / 2, 54);
    c.strokeText('WARRIOR', SW / 2, 72);
    c.fillStyle = '#ffe14a';
    c.fillText('THE WORLD', SW / 2, 54);
    c.fillText('WARRIOR', SW / 2, 72);
    c.globalAlpha = 1;
  }
  if (tt > 7) {
    c.fillStyle = `rgba(0,0,0,${clamp((tt - 7) / 0.5, 0, 1)})`;
    c.fillRect(0, 0, SW, SH);
  }
  // onto the page: scaled up crisply, then cut to an ink-splat shape so the scene
  // bleeds out in spikes and drops instead of ending in a hard rectangle
  const k = Math.max(1, Math.floor(Math.min(A.w / IW, A.h / IH) * 4) / 4); // in quarter steps
  const w = Math.round(SW * k);
  const h = Math.round(SH * k);
  const iw = IW * k; // the part the splat body covers
  const ih = IH * k;
  const x = Math.round(A.x + (A.w - w) / 2);
  const y = Math.round(A.y + (A.h - h) / 2);
  if (!maskCanvas || maskCanvas.width !== w || maskCanvas.height !== h) {
    maskCanvas = canvas(w, h);
    shapeCanvas = canvas(w, h);
    maskSplats = [
      makeSplat(w / 2, h * 0.5, ih * 0.6, 2024, { sx: (iw / ih) * 0.8, sy: 1.0, spikeLen: 0.3, spread: 0.2, beads: 0.35 }),
      makeSplat(w / 2 - iw * 0.23, h / 2 + ih * 0.06, ih * 0.42, 2031, { sx: 0.95, sy: 1.05, spikeLen: 0.3, spread: 0.2, beads: 0.3 }),
      makeSplat(w / 2 + iw * 0.23, h / 2 - ih * 0.06, ih * 0.42, 2047, { sx: 0.95, sy: 1.05, spikeLen: 0.3, spread: 0.2, beads: 0.3 }),
      makeSplat(w / 2, h / 2 - ih * 0.2, ih * 0.32, 2053, { sx: 1.6, sy: 1, spikeLen: 0.3, spread: 0.2, beads: 0.3 }),
    ];
    // the splat shape, drawn once as a single mask
    const sc = shapeCanvas.getContext('2d');
    for (const sp of maskSplats) drawSplat(sc, sp, 1);
  }
  const m = maskCanvas.getContext('2d');
  m.globalCompositeOperation = 'source-over';
  m.clearRect(0, 0, w, h);
  m.imageSmoothingEnabled = false;
  m.drawImage(streetCanvas, 0, 0, w, h);
  m.fillStyle = 'rgba(0,0,0,0.16)';
  for (let yy = 0; yy < h; yy += 3) m.fillRect(0, yy, w, 1); // scanlines
  m.globalCompositeOperation = 'destination-in';
  m.drawImage(shapeCanvas, 0, 0);
  ctx.drawImage(maskCanvas, x, y);
  return true;
}

// ------------------------------------------------------------------ 7. black moon

// A Black Moon: a sphere of hexagonal plates, slowly turning, plates lifting off and
// settling back, crackling with blue-violet psycho energy, on a patch of night sky.
let moon = null;
function buildMoon() {
  const rng = makeRng(77);
  const N = 150;
  const plates = [];
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = ga * i;
    plates.push({ p: [Math.cos(th) * r, y, Math.sin(th) * r], ph: rng() * 30, per: 4 + rng() * 6, rot: rng() * Math.PI });
  }
  // loose plates spiralling off two sides
  const loose = Array.from({ length: 26 }, (_, i) => ({ u: i / 26, side: i % 2, ph: rng() * 6, s: 0.6 + rng() * 0.5 }));
  const arcs = Array.from({ length: 8 }, () => ({ a: rng() * Math.PI * 2, b: rng() * Math.PI * 2, ph: rng() * 10 }));
  return { plates, loose, arcs, rng };
}

function blackMoon(ctx, A, t, env) {
  if (!moon) moon = buildMoon();
  const cx = A.x + A.w / 2;
  const cy = A.y + A.h / 2;
  const R = Math.min(A.w, A.h) * 0.33;
  // night-sky ink splat behind the moon
  if (!env.L.moonSplat) env.L.moonSplat = makeSplat(cx, cy, R * 1.25, 404, { color: '#070914', sx: 1.15, sy: 1.1, spikeLen: 0.5, spread: 0.5, beads: 0.5 });
  drawSplat(ctx, env.L.moonSplat, 1);
  const rng = makeRng(5);
  ctx.fillStyle = 'rgba(220,226,255,0.8)';
  for (let i = 0; i < 40; i++) {
    const a = rng() * Math.PI * 2;
    const d = R * (0.6 + rng() * 0.8);
    ctx.fillRect(cx + Math.cos(a) * d * 1.2, cy + Math.sin(a) * d, 1.5, 1.5);
  }
  const yaw = t * 0.22;
  const tilt = 0.35;
  const cyw = Math.cos(yaw);
  const syw = Math.sin(yaw);
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const rot = ([x, y, z]) => {
    const x1 = x * cyw + z * syw;
    const z1 = -x * syw + z * cyw;
    return [x1, y * ct - z1 * st, y * st + z1 * ct];
  };
  // each plate: a hexagon in the sphere's tangent plane, pushed out when it "pops"
  const items = moon.plates.map((pl) => {
    const c = (t + pl.ph) % pl.per;
    const pop = c < 0.9 ? Math.sin((c / 0.9) * Math.PI) : 0; // out and back
    const n = rot(pl.p);
    const up = Math.abs(n[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    // tangent basis
    let u = [up[1] * n[2] - up[2] * n[1], up[2] * n[0] - up[0] * n[2], up[0] * n[1] - up[1] * n[0]];
    const ul = Math.hypot(...u);
    u = u.map((v) => v / ul);
    const v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
    const rr = 1 + pop * 0.22;
    const s = 0.15;
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = pl.rot + (i / 6) * Math.PI * 2;
      const q = [0, 1, 2].map((j) => n[j] * rr + (Math.cos(a) * u[j] + Math.sin(a) * v[j]) * s * 0.92);
      pts.push([cx + q[0] * R, cy - q[1] * R]);
    }
    return { z: n[2] * rr, pts, pop, facing: n[2] };
  });
  items.sort((a, b) => a.z - b.z);
  const plate = (it) => {
    const front = it.facing > 0;
    const shade = 0.35 + 0.65 * Math.max(0, it.facing);
    ctx.beginPath();
    it.pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
    ctx.fillStyle = front ? `rgba(${30 + 50 * shade},${40 + 60 * shade},${120 + 110 * shade},${0.18 + 0.3 * shade})` : 'rgba(40,40,120,0.18)';
    ctx.fill();
    ctx.strokeStyle = it.pop > 0.05 ? `rgba(190,220,255,${0.5 + 0.5 * it.pop})` : `rgba(120,150,255,${front ? 0.75 : 0.25})`;
    ctx.lineWidth = it.pop > 0.05 ? 1.6 : 1;
    ctx.stroke();
  };
  // back half, then the core glow, then the front half
  items.filter((it) => it.facing <= 0).forEach(plate);
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const pulse = 0.85 + 0.15 * Math.sin(t * 2.1);
  const core = ctx.createRadialGradient(cx - R * 0.1, cy, 0, cx, cy, R * 1.25);
  core.addColorStop(0, `rgba(230,140,255,${0.95 * pulse})`);
  core.addColorStop(0.3, `rgba(130,90,255,${0.6 * pulse})`);
  core.addColorStop(0.8, 'rgba(40,60,220,0.12)');
  core.addColorStop(1, 'rgba(20,30,160,0)');
  ctx.fillStyle = core;
  ctx.fillRect(cx - R * 1.3, cy - R * 1.3, R * 2.6, R * 2.6);
  ctx.restore();
  items.filter((it) => it.facing > 0).forEach(plate);
  // crackling arcs over the surface
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const flick = makeRng(Math.floor(t * 12));
  for (const arc of moon.arcs) {
    if (Math.sin(t * 3 + arc.ph) < 0.2) continue;
    ctx.strokeStyle = `rgba(170,200,255,${0.4 + flick() * 0.5})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let i = 0; i <= 10; i++) {
      const a = arc.a + (i / 10) * 1.2;
      const p = rot([Math.cos(a) * Math.cos(arc.b + i * 0.05), Math.sin(arc.b + i * 0.05) * 0.7, Math.sin(a) * Math.cos(arc.b)]);
      const l = Math.hypot(...p);
      const j = (flick() - 0.5) * 0.06;
      const x = cx + (p[0] / l + j) * R * 1.01;
      const y = cy - (p[1] / l + j) * R * 1.01;
      if (i) ctx.lineTo(x, y);
      else ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
  ctx.restore();
  // loose plates drifting along a spiral off the top-right and bottom-left
  for (const lp of moon.loose) {
    const u = (lp.u + t * 0.05) % 1;
    const sgn = lp.side ? 1 : -1;
    const ang = sgn * (0.7 + u * 1.6) + (lp.side ? -Math.PI / 2 : Math.PI / 2);
    const d = R * (1.02 + u * 0.35);
    const x = cx + Math.cos(ang) * d * 0.9;
    const y = cy + Math.sin(ang) * d;
    const s = R * 0.13 * lp.s * (1 - u * 0.4);
    ctx.save();
    ctx.globalAlpha *= 1 - u;
    ctx.translate(x, y);
    ctx.rotate(t * 0.8 + lp.ph);
    ctx.scale(1, 0.55);
    ctx.beginPath();
    for (let i = 0; i < 6; i++) ctx.lineTo(Math.cos((i / 6) * Math.PI * 2) * s, Math.sin((i / 6) * Math.PI * 2) * s);
    ctx.closePath();
    ctx.fillStyle = 'rgba(90,110,230,0.55)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(170,200,255,0.9)';
    ctx.stroke();
    ctx.restore();
  }
  return true;
}

// ------------------------------------------------------------------ registry

export const SCENES = { fistBump, ragingDemon, shoryuken, psychoCrusher, streetIntro, blackMoon };

/** Draw a beat's scene; returns false if its sprites aren't loaded yet. */
export function drawScene(name, ctx, A, t, env = {}) {
  const fn = SCENES[name];
  return fn ? fn(ctx, A, t, env) !== false : false;
}
