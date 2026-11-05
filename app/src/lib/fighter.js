// Fighter renderer.
//
// Two back-ends behind one API:
//   1. Sprite sheet — if assets/sprites/sprites.json defines this fighter, frames are
//      cut from the supplied sheet (bundled as a data URI so WebGL can use it).
//   2. Procedural — an original pixel-art figure posed from a small skeleton, coloured
//      from the character's palette. This is the placeholder until sheets are added.
//
// Both draw into a fixed 128x128 canvas, feet on the bottom edge, facing right.

import { getSpriteConfig, getImage } from '../assets.js';
import { shade, clamp } from './rng.js';
import { moveTimeline } from './moveTimeline.js';

export const SPRITE_SIZE = 128;
export const SHEET_SIZE = 200; // canvas for sprite-sheet fighters (native pixel scale)
const GROUND = 124;
const S = 1.3; // skeleton scale

const BUILD = {
  slim: { w: 0.85, h: 1.0 },
  medium: { w: 1.0, h: 1.0 },
  heavy: { w: 1.2, h: 1.04 },
  huge: { w: 1.42, h: 1.1 },
};

const BASE = {
  rx: 0, ry: 0, rot: 0, fx: 1, alpha: 1,
  lean: 0.08, head: 0,
  sA1: 0.75, eA1: 1.85, // front arm (guard)
  sA2: 0.55, eA2: 2.1, // back arm
  h1: 0.42, k1: -0.42, // front leg
  h2: -0.38, k2: 0.3, // back leg
  fx2: null, // effect
};
const P = (o) => ({ ...BASE, ...o });

// Keyframes per move "kind". Each frame: [pose, durationMs, event?]
const IDLE = [
  [P({}), 180],
  [P({ ry: 1, sA1: 0.72, eA1: 1.9 }), 180],
  [P({ ry: 2, sA1: 0.7, eA1: 1.95, sA2: 0.5 }), 180],
  [P({ ry: 1 }), 180],
];

const MOVES = {
  projectile: [
    [P({ lean: -0.12, sA1: -0.5, eA1: 0.5, sA2: -0.6, eA2: 0.4, ry: 2 }), 160],
    [P({ lean: -0.18, sA1: -0.7, eA1: 0.7, sA2: -0.8, eA2: 0.6, ry: 3 }), 140],
    [P({ lean: 0.28, sA1: 1.52, eA1: 0, sA2: 1.45, eA2: 0.05, h1: 0.8, k1: -0.8, h2: -0.7, k2: 0.1, ry: 4 }), 120, 'projectile'],
    [P({ lean: 0.28, sA1: 1.52, eA1: 0, sA2: 1.45, eA2: 0.05, h1: 0.8, k1: -0.8, h2: -0.7, k2: 0.1, ry: 4 }), 420],
    [P({ lean: 0.15, ry: 2 }), 160],
  ],
  fire: [
    [P({ lean: -0.2, head: -0.2, sA1: -0.4, sA2: -0.5, ry: 1 }), 220],
    [P({ lean: 0.2, head: 0.25, sA1: 0.3, eA1: 0.4, sA2: 0.2, eA2: 0.4, ry: 2, fx2: 'fire' }), 120, 'fire'],
    [P({ lean: 0.2, head: 0.25, sA1: 0.3, eA1: 0.4, sA2: 0.2, eA2: 0.4, ry: 2, fx2: 'fire2' }), 120],
    [P({ lean: 0.2, head: 0.25, sA1: 0.3, eA1: 0.4, sA2: 0.2, eA2: 0.4, ry: 2, fx2: 'fire' }), 120],
    [P({ lean: 0.2, head: 0.25, sA1: 0.3, eA1: 0.4, sA2: 0.2, eA2: 0.4, ry: 2, fx2: 'fire2' }), 120],
    [P({}), 160],
  ],
  uppercut: [
    [P({ ry: 8, lean: 0.25, sA1: 0.2, eA1: 0.6, h1: 0.9, k1: -1.4, h2: -0.3, k2: 0.9 }), 120],
    [P({ ry: -18, lean: 0.05, sA1: 2.95, eA1: 0.05, sA2: 0.3, eA2: 1.2, h1: 1.1, k1: -1.8, h2: 0.1, k2: 0.2 }), 160],
    [P({ ry: -34, lean: -0.05, sA1: 3.05, eA1: 0, sA2: 0.2, eA2: 1.0, h1: 1.2, k1: -2.0, h2: 0.1, k2: 0.1 }), 260],
    [P({ ry: -14, lean: 0.05, sA1: 2.4, eA1: 0.4, h1: 0.6, k1: -0.8, h2: -0.2, k2: 0.4 }), 150],
    [P({ ry: 4, h1: 0.7, k1: -1.0, h2: -0.5, k2: 0.8 }), 160],
  ],
  spin: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => [
    P({
      ry: -16, rx: i * 3, fx: i % 2 ? -1 : 1, lean: 0,
      sA1: 1.2, eA1: 0.3, sA2: -0.9, eA2: 0.4,
      h1: 1.57, k1: 0, h2: 0.5, k2: -1.6,
    }),
    90,
  ]).concat([[P({ rx: 24, ry: 2 }), 140], [P({ rx: 12 }), 120]]),
  punch: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => [
    i % 2
      ? P({ lean: 0.2, sA1: 1.6 + (i % 4 === 1 ? 0.2 : -0.1), eA1: 0, sA2: 0.6, eA2: 1.8, h1: 0.6, k1: -0.6 })
      : P({ lean: 0.2, sA2: 1.55, eA2: 0, sA1: 0.5, eA1: 1.6, h1: 0.6, k1: -0.6 }),
    70,
  ]).concat([[P({}), 140]]),
  kick: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => [
    P({ ry: -6, lean: -0.25, h1: [1.35, 1.75, 1.5, 1.9][i % 4], k1: 0, h2: -0.15, k2: 0.1, sA1: 1.0, eA1: 1.2, sA2: -0.4, eA2: 0.5 }),
    70,
  ]).concat([[P({}), 140]]),
  charge: [
    [P({ ry: 4, lean: 0.3, h1: 0.8, k1: -1.1, h2: -0.6, k2: 0.6 }), 140],
    [P({ ry: -8, rx: 10, lean: 1.35, sA1: 1.5, eA1: 0, sA2: 1.4, eA2: 0, h1: -0.9, k1: 0.2, h2: -1.2, k2: 0.3 }), 90],
    [P({ ry: -8, rx: 22, lean: 1.4, sA1: 1.55, eA1: 0, sA2: 1.45, eA2: 0, h1: -1.0, k1: 0.2, h2: -1.3, k2: 0.3 }), 90],
    [P({ ry: -8, rx: 30, lean: 1.45, sA1: 1.55, eA1: 0, sA2: 1.45, eA2: 0, h1: -1.0, k1: 0.2, h2: -1.3, k2: 0.3 }), 200],
    [P({ rx: 18, ry: 2 }), 140],
    [P({ rx: 8 }), 120],
  ],
  grab: [
    [P({ lean: 0.3, sA1: 1.6, eA1: 0, sA2: 1.5, eA2: 0.1 }), 160],
    ...[0, 1, 2, 3, 4, 5].map((i) => [P({ ry: -6 - (i % 3) * 4, fx: i % 2 ? -1 : 1, lean: 0, sA1: 1.6, eA1: 0, sA2: 1.6, eA2: 0 }), 100]),
    [P({ ry: 6, lean: 0.3, h1: 0.9, k1: -1.3, h2: -0.6, k2: 0.9 }), 260],
  ],
  electric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => [
    P({ ry: 7, lean: 0.35, sA1: 2.4 + (i % 2) * 0.3, eA1: 0.6, sA2: 2.2, eA2: 0.7, h1: 0.9, k1: -1.4, h2: -0.6, k2: 1.0, fx2: i % 2 ? 'zap' : 'zap2' }),
    70,
  ]).concat([[P({}), 140]]),
  roll: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => [
    P({ ry: -10, rx: i * 5, rot: (i * Math.PI) / 2, lean: 0.9, head: 0.6, sA1: 1.8, eA1: 1.2, sA2: 1.7, eA2: 1.3, h1: 2.2, k1: -2.6, h2: 2.0, k2: -2.5 }),
    70,
  ]).concat([[P({ rx: 30, ry: 2 }), 140], [P({ rx: 14 }), 120]]),
  flip: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
    const t = i / 7;
    return [
      P({ ry: -Math.sin(t * Math.PI) * 40, rx: t * 26, rot: t * Math.PI * 2, lean: 0.6, sA1: 2.6, eA1: 0.3, sA2: 2.4, eA2: 0.4, h1: 1.6, k1: -1.8, h2: 1.4, k2: -1.6 }),
      85,
    ];
  }).concat([[P({ rx: 26, ry: 4, h1: 0.8, k1: -1.2 }), 140], [P({ rx: 12 }), 120]]),
  teleport: [
    [P({ alpha: 0.6, ry: 1 }), 90],
    [P({ alpha: 0.3, ry: 2 }), 90],
    [P({ alpha: 0, ry: 2 }), 260],
    [P({ alpha: 0.3, rx: 30 }), 90],
    [P({ alpha: 0.7, rx: 30 }), 90],
    [P({ rx: 30 }), 160],
    [P({ rx: 12 }), 120],
  ],
};

export const MOVE_KINDS = Object.keys(MOVES);

export function parseMoves(str) {
  return (str || '')
    .split(';')
    .map((m) => m.trim())
    .filter(Boolean)
    .map((m) => {
      const [name, kind] = m.split(':');
      return { name: name.trim(), kind: (kind || 'punch').trim() };
    });
}

export function parsePalette(str) {
  const [gi, skin, hair, accent, belt] = (str || '').split(';').map((s) => s.trim());
  return {
    gi: gi || '#f2efe6',
    skin: skin || '#e0a878',
    hair: hair || '#2a1a12',
    accent: accent || '#c4283c',
    belt: belt || '#1a1a1a',
  };
}

export class Fighter {
  constructor(character, opts = {}) {
    this.c = character;
    this.pal = parsePalette(character.Palette);
    this.build = BUILD[character.Build] || BUILD.medium;
    this.moves = parseMoves(character.Moves);
    this.onEvent = opts.onEvent || (() => {});
    this.sheet = getSpriteConfig(character.Id);
    this.sheetImg = this.sheet ? getImage(this.sheet.image) : null;
    if (this.sheetImg && !this.sheetImg.complete) {
      this.sheetImg.addEventListener('load', () => {
        this.dirty = true;
      });
    }
    this.size = this.sheet ? SHEET_SIZE : SPRITE_SIZE;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.ctx.imageSmoothingEnabled = false;
    this.setMove(null);
    this.dirty = true;
    this.render();
  }

  get usingSheet() {
    return !!(this.sheetImg && this.sheetImg.complete && this.sheetImg.naturalWidth);
  }

  /** The current move's timeline (empty when idle). */
  get timeline() {
    return this.moveName ? moveTimeline(this.c.Id, this.moveName) : {};
  }

  /** Position in the move's frame sequence, fractional: 3 is the moment its 4th step appears. */
  get position() {
    return this.usingSheet && this.sheetAnim ? (this.t / 1000) * (this.sheetAnim.fps || 10) : 0;
  }

  /** The sheet frame on screen: [x, y, w, h, anchorX, lift]. */
  get sheetFrame() {
    return this.sheetAnim ? this.sheetAnim.frames[this.frame % this.sheetAnim.frames.length] : null;
  }

  /** Start a move by name (from the CSV) — null returns to idle. */
  setMove(name) {
    const move = name ? this.moves.find((m) => m.name === name) : null;
    this.moveName = move ? move.name : null;
    this.kind = move ? move.kind : 'idle';
    this.frames = move ? MOVES[move.kind] || MOVES.punch : IDLE;
    this.frame = 0;
    this.t = 0;
    this.dirty = true;
    this.firedFrame = -1;
    // sprite sheet timeline (if supplied)
    if (this.sheet) {
      const a = this.sheet.anims || {};
      const base = (move && (a[move.name] || a[move.kind])) || a.idle || null;
      this.sheetAnim = move && base ? this.withTimeline(base, moveTimeline(this.c.Id, move.name)) : base;
    }
  }

  /** A move's frames in timeline order, lined up on the back edge if the timeline asks. */
  withTimeline(anim, tl) {
    const source = tl.anchors
      ? anim.frames.map(([x, y, w, h, ax, lift], i) => [x, y, w, h, tl.anchors[i] ?? ax, lift])
      : anim.frames;
    let frames = tl.seq ? tl.seq.map((i) => source[i]) : source;
    if (tl.rear) {
      const ax = anim.frames[0][4];
      frames = frames.map(([x, y, w, h, , lift]) => [x, y, w, h, ax, lift]);
    }
    return { ...anim, frames, event: tl.fire != null ? 'projectile' : null, eventFrame: tl.fire };
  }

  /** Advance the animation. Returns true if the canvas changed. */
  update(dtMs) {
    // rAF timestamps can precede a performance.now() taken just before: never step backwards
    this.t += Math.max(0, dtMs || 0);
    if (this.sheet && !this.usingSheet) return false; // sheet still decoding
    if (this.usingSheet && this.sheetAnim) {
      const fps = this.sheetAnim.fps || 10;
      const n = this.sheetAnim.frames.length;
      const f = Math.floor((this.t / 1000) * fps);
      if (this.moveName && f >= n) {
        this.setMove(null);
        return true;
      }
      const idx = f % n;
      if (idx !== this.frame || this.dirty) {
        this.frame = idx;
        if (this.moveName && this.sheetAnim.event && idx === (this.sheetAnim.eventFrame ?? 0) && this.firedFrame !== idx) {
          this.firedFrame = idx;
          this.onEvent(this.sheetAnim.event, this);
        }
        this.render();
        return true;
      }
      return false;
    }
    let changed = this.dirty;
    while (this.t >= this.frames[this.frame][1]) {
      this.t -= this.frames[this.frame][1];
      this.frame++;
      changed = true;
      if (this.frame >= this.frames.length) {
        if (this.moveName) {
          this.setMove(null);
          this.render();
          return true;
        }
        this.frame = 0;
      }
      const ev = this.frames[this.frame][2];
      if (ev && this.firedFrame !== this.frame) {
        this.firedFrame = this.frame;
        this.onEvent(ev, this);
      }
    }
    if (changed) this.render();
    return changed;
  }

  render() {
    this.dirty = false;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.size, this.size);
    if (this.sheet) {
      if (!this.usingSheet || !this.sheetAnim) {
        this.dirty = true;
        return;
      }
      // native pixel scale, feet on the ground line, anchored on the fighter's centre line
      const fr = this.sheetAnim.frames[this.frame % this.sheetAnim.frames.length];
      const [sx, sy, sw, sh, ax, lift = 0] = fr;
      const scale = this.sheet.scale || 1;
      const dw = sw * scale;
      const dh = sh * scale;
      const anchor = ax != null ? ax * scale : dw / 2;
      const x = Math.round(this.size * 0.4 - anchor);
      const y = Math.round(this.size - 2 - dh - lift * scale);
      ctx.drawImage(this.sheetImg, sx, sy, sw, sh, x, y, dw, dh);
      return;
    }
    drawProcedural(ctx, this.frames[this.frame][0], this.pal, this.build, this.c.Id);
  }
}

// ---------------------------------------------------------------- procedural figure

function seg(ctx, x0, y0, len, ang, w, fill, outline) {
  const x1 = x0 + Math.sin(ang) * len;
  const y1 = y0 + Math.cos(ang) * len;
  ctx.lineCap = 'round';
  ctx.strokeStyle = outline;
  ctx.lineWidth = w + 2;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.strokeStyle = fill;
  ctx.lineWidth = w;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  return [x1, y1];
}

function blob(ctx, x, y, r, fill, outline) {
  ctx.fillStyle = outline;
  ctx.beginPath();
  ctx.arc(x, y, r + 1, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function drawProcedural(ctx, pose, pal, build, id) {
  const OL = '#0d0f1a';
  const wB = build.w;
  const hB = build.h;
  const thigh = 15 * S * hB;
  const shin = 15 * S * hB;
  const torso = 21 * S * hB;
  const upper = 11.5 * S * hB;
  const fore = 10.5 * S * hB;
  const headR = 6.2 * S;
  const limbW = 5.5 * S * wB;
  const armW = 4.6 * S * wB;

  ctx.save();
  ctx.globalAlpha = pose.alpha;
  const hipX = 54 + pose.rx;
  const hipY = GROUND - thigh - shin + 2 + pose.ry;
  // rotate / mirror around the hip
  ctx.translate(hipX, hipY - torso * 0.3);
  ctx.rotate(pose.rot);
  ctx.scale(pose.fx, 1);
  ctx.translate(0, torso * 0.3);

  const giDark = shade(pal.gi, -0.35);
  const skinDark = shade(pal.skin, -0.3);
  const neck = [Math.sin(pose.lean) * torso, -Math.cos(pose.lean) * torso];
  const armOrigin = (side) => [neck[0] + (side ? -2 : 2) * wB, neck[1] + 3];

  // back leg + back arm (darker)
  let k = seg(ctx, -2, 0, thigh, pose.h2, limbW, giDark, OL);
  let f = seg(ctx, k[0], k[1], shin, pose.h2 + pose.k2, limbW * 0.9, giDark, OL);
  seg(ctx, f[0], f[1], 4 * S, Math.PI / 2, 3 * S, skinDark, OL);
  const ao2 = armOrigin(1);
  let e = seg(ctx, ao2[0], ao2[1], upper, pose.sA2, armW, wB > 1.1 ? skinDark : giDark, OL);
  let h = seg(ctx, e[0], e[1], fore, pose.sA2 + pose.eA2, armW * 0.9, skinDark, OL);
  blob(ctx, h[0], h[1], 2.6 * S * wB, skinDark, OL);

  // torso
  ctx.lineCap = 'round';
  ctx.strokeStyle = OL;
  ctx.lineWidth = 12 * S * wB + 2;
  ctx.beginPath();
  ctx.moveTo(0, -2);
  ctx.lineTo(neck[0] * 0.92, neck[1] * 0.92);
  ctx.stroke();
  ctx.strokeStyle = pal.gi;
  ctx.lineWidth = 12 * S * wB;
  ctx.stroke();
  // chest opening
  ctx.strokeStyle = pal.skin;
  ctx.lineWidth = 4 * S * wB;
  ctx.beginPath();
  ctx.moveTo(neck[0] * 0.9, neck[1] * 0.9);
  ctx.lineTo(neck[0] * 0.55, neck[1] * 0.55);
  ctx.stroke();
  // belt
  ctx.strokeStyle = pal.belt;
  ctx.lineWidth = 3 * S;
  const bx = Math.cos(pose.lean) * 6 * S * wB;
  const by = Math.sin(pose.lean) * 6 * S * wB;
  ctx.beginPath();
  ctx.moveTo(neck[0] * 0.12 - bx, neck[1] * 0.12 - by);
  ctx.lineTo(neck[0] * 0.12 + bx, neck[1] * 0.12 + by);
  ctx.stroke();

  // front leg
  k = seg(ctx, 2, 0, thigh, pose.h1, limbW, pal.gi, OL);
  f = seg(ctx, k[0], k[1], shin, pose.h1 + pose.k1, limbW * 0.9, pal.gi, OL);
  seg(ctx, f[0], f[1], 4 * S, Math.PI / 2, 3 * S, pal.skin, OL);

  // head
  const hx = neck[0] + Math.sin(pose.lean + pose.head) * headR * 1.1;
  const hy = neck[1] - Math.cos(pose.lean + pose.head) * headR * 1.1;
  blob(ctx, hx, hy, headR, pal.skin, OL);
  // hair cap
  ctx.fillStyle = pal.hair;
  ctx.beginPath();
  ctx.arc(hx - 0.5, hy - 1, headR, Math.PI * 1.02 + pose.lean, Math.PI * 1.98 + pose.lean);
  ctx.fill();
  // headband / accent
  ctx.strokeStyle = pal.accent;
  ctx.lineWidth = 2.2 * S;
  ctx.beginPath();
  ctx.moveTo(hx - headR, hy - 1.5);
  ctx.lineTo(hx + headR, hy - 1.5);
  ctx.moveTo(hx - headR, hy - 1.5);
  ctx.lineTo(hx - headR - 6, hy + 2);
  ctx.stroke();
  // eye
  ctx.fillStyle = OL;
  ctx.fillRect(hx + headR * 0.35, hy + 0.5, 2, 2);

  // front arm
  const ao1 = armOrigin(0);
  e = seg(ctx, ao1[0], ao1[1], upper, pose.sA1, armW, wB > 1.1 ? pal.skin : pal.gi, OL);
  h = seg(ctx, e[0], e[1], fore, pose.sA1 + pose.eA1, armW * 0.9, pal.skin, OL);
  blob(ctx, h[0], h[1], 2.8 * S * wB, pal.skin, OL);

  // effects
  if (pose.fx2 === 'fire' || pose.fx2 === 'fire2') {
    const big = pose.fx2 === 'fire2' ? 1.25 : 1;
    ctx.fillStyle = '#f2a93b';
    ctx.beginPath();
    ctx.moveTo(hx + headR, hy + 2);
    ctx.lineTo(hx + headR + 40 * big, hy - 12 * big);
    ctx.lineTo(hx + headR + 46 * big, hy + 6);
    ctx.lineTo(hx + headR + 38 * big, hy + 18 * big);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ffe28a';
    ctx.beginPath();
    ctx.moveTo(hx + headR, hy + 2);
    ctx.lineTo(hx + headR + 24 * big, hy - 5);
    ctx.lineTo(hx + headR + 24 * big, hy + 9);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // binarise alpha + optional electric outline for the crisp pixel look
  const img = ctx.getImageData(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  const d = img.data;
  const zap = pose.fx2 === 'zap' || pose.fx2 === 'zap2';
  const zapCol = pose.fx2 === 'zap' ? [255, 238, 120] : [140, 220, 255];
  for (let i = 3; i < d.length; i += 4) {
    if (d[i] < 110) d[i] = 0;
    else d[i] = Math.round(255 * clamp(pose.alpha, 0, 1));
  }
  if (zap) {
    const W = SPRITE_SIZE;
    const copy = new Uint8ClampedArray(d);
    for (let y = 1; y < W - 1; y++) {
      for (let x = 1; x < W - 1; x++) {
        const i = (y * W + x) * 4;
        if (copy[i + 3]) continue;
        if (copy[i + 7] || copy[i - 1] || copy[i + W * 4 + 3] || copy[i - W * 4 + 3]) {
          if ((x + y + (pose.fx2 === 'zap' ? 0 : 1)) % 3) {
            d[i] = zapCol[0];
            d[i + 1] = zapCol[1];
            d[i + 2] = zapCol[2];
            d[i + 3] = 255;
          }
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

/** One-off still of the idle pose (for portraits / thumbnails). */
export function renderStill(character, size = SPRITE_SIZE) {
  const f = new Fighter(character);
  if (size === SPRITE_SIZE) return f.canvas;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(f.canvas, 0, 0, size, size);
  return c;
}
