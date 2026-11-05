// The red "Satsui no Hado" energy on HADO's A: a glowing red dot with ribbons of red
// energy curling around it and embers drifting off. Drawn live every frame on top of the
// logo, with additive blending so overlapping ribbons burn brighter.

import { makeRng } from './rng.js';

// heartbeat: a strong beat and a softer echo every 1.3 s (0 at rest, ~1 on the beat)
const BEAT = 1.3;
function heartbeat(t) {
  const ph = t % BEAT;
  const a = Math.exp(-ph * 9);
  const b = ph > 0.26 ? 0.6 * Math.exp(-(ph - 0.26) * 9) : 0;
  return Math.min(1, a + b);
}

/** Build an aura around (x, y) for lettering of font size `fs`. */
export function makeAura(x, y, fs, seed = 9) {
  const rng = makeRng(seed);
  // ribbons: tilted elliptical loops of different sizes and speeds, each a moving arc
  const ribbons = Array.from({ length: 8 }, (_, i) => ({
    rx: fs * (0.14 + rng() * 0.3),
    ry: fs * (0.09 + rng() * 0.22),
    tilt: rng() * Math.PI,
    speed: (1.8 + rng() * 1.6) * (i % 2 ? -1 : 1),
    // the plane of each loop turns slowly too, so the swirl keeps changing shape
    spin: (0.2 + rng() * 0.35) * (rng() < 0.5 ? -1 : 1),
    phase: rng() * Math.PI * 2,
    arc: Math.PI * (0.8 + rng() * 0.8),
    width: fs * (0.012 + rng() * 0.02),
    // loops rise as they trail, like energy curling up off the dot
    lift: fs * (0.1 + rng() * 0.25),
    // the loop's centre drifts a little so the swirl never looks mechanical
    wobble: fs * (0.02 + rng() * 0.05),
    wf: 0.3 + rng() * 0.6,
  }));
  return { x, y, fs, ribbons, embers: [], rng, last: 0 };
}

function ribbonPoint(r, a, t, f) {
  const ox = Math.sin(t * r.wf + r.phase) * r.wobble;
  const oy = Math.cos(t * r.wf * 1.3 + r.phase) * r.wobble;
  // spiral slightly: the far end of the arc sits a little further out
  const k = 1 + 0.15 * Math.sin(a * 0.5);
  const ex = Math.cos(a) * r.rx * k;
  const ey = Math.sin(a) * r.ry * k;
  const tilt = r.tilt + t * r.spin;
  const c = Math.cos(tilt);
  const s = Math.sin(tilt);
  return [ox + ex * c - ey * s, oy + ex * s + ey * c - (1 - f) * r.lift];
}

/**
 * Draw the aura at time `now` (ms), faded by `alpha` (0..1). It comes in two layers so the
 * energy wraps around the letter: `back` (bloom and half the ribbons) goes under the
 * lettering, `front` (the other ribbons, embers and the dot) over it.
 */
export function drawAura(ctx, aura, now, alpha = 1, layer = 'front') {
  if (alpha <= 0) return;
  const t = now / 1000;
  const front = layer === 'front';
  let dt = 0;
  if (front) {
    dt = aura.last ? Math.min(0.05, t - aura.last) : 0;
    aura.last = t;
  }
  const { x, y, fs, rng } = aura;
  ctx.save();
  ctx.translate(x, y);
  // normal blending, so the energy reads red even where it crosses the yellow letters
  ctx.lineCap = 'round';

  // soft red bloom behind everything, breathing slowly
  const beat = heartbeat(t);
  const pulse = 0.8 + 0.4 * beat;
  if (!front) {
  const R = fs * 0.5 * pulse;
  const bloom = ctx.createRadialGradient(0, 0, 0, 0, 0, R);
  bloom.addColorStop(0, `rgba(255,30,30,${(0.35 + 0.35 * beat) * alpha})`);
  bloom.addColorStop(0.35, `rgba(210,10,25,${0.22 * alpha})`);
  bloom.addColorStop(1, 'rgba(120,0,10,0)');
  ctx.fillStyle = bloom;
  ctx.fillRect(-R, -R, R * 2, R * 2);
  }

  // ribbons: each arc is a smooth tapered shape (fat at the head, thin at the tail),
  // filled twice: a wide dim glow and a narrow hot core
  aura.ribbons.forEach((r, ri) => {
    if (ri % 2 === (front ? 0 : 1)) return;
    const head = t * r.speed + r.phase;
    const N = 36;
    const dir = Math.sign(r.speed);
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const f = 1 - i / N; // 1 at the head, 0 at the tail
      pts.push(ribbonPoint(r, head - ((r.arc * i) / N) * dir, t, f));
    }
    for (const pass of [
      { w: 3.2, a: 0.3, col: '235,10,25' },
      { w: 1, a: 1, col: '255,45,40' },
    ]) {
      const left = [];
      const right = [];
      for (let i = 0; i <= N; i++) {
        const p = pts[i];
        const q = pts[Math.min(N, i + 1)];
        const o = pts[Math.max(0, i - 1)];
        let nx = -(q[1] - o[1]);
        let ny = q[0] - o[0];
        const l = Math.hypot(nx, ny) || 1;
        nx /= l;
        ny /= l;
        const f = 1 - i / N;
        const hw = r.width * (1 + 0.45 * beat) * pass.w * Math.sin(Math.PI * Math.min(1, f * 1.15 + 0.05)) * (0.3 + 0.7 * f);
        left.push([p[0] + nx * hw, p[1] + ny * hw]);
        right.push([p[0] - nx * hw, p[1] - ny * hw]);
      }
      const g = ctx.createLinearGradient(pts[0][0], pts[0][1], pts[N][0], pts[N][1]);
      g.addColorStop(0, `rgba(${pass.col},${pass.a * alpha})`);
      g.addColorStop(1, `rgba(${pass.col},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      left.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
      for (let i = N; i >= 0; i--) ctx.lineTo(right[i][0], right[i][1]);
      ctx.closePath();
      ctx.fill();
    }
  });

  if (!front) {
    ctx.restore();
    return;
  }
  // embers: spawned near the dot, flung outward and upward, fading as they go
  if (dt > 0) {
    const spawn = Math.round(dt * 26 + (rng() < (dt * 26) % 1 ? 1 : 0));
    for (let i = 0; i < spawn; i++) {
      const a = rng() * Math.PI * 2;
      const d = fs * (0.05 + rng() * 0.25);
      const v = fs * (0.15 + rng() * 0.5);
      aura.embers.push({
        x: Math.cos(a) * d,
        y: Math.sin(a) * d,
        vx: Math.cos(a) * v * 0.6,
        vy: Math.sin(a) * v * 0.4 - fs * 0.25,
        life: 0,
        max: 0.8 + rng() * 1.4,
        size: 1 + rng() * fs * 0.012,
      });
    }
    for (const e of aura.embers) {
      e.life += dt;
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      e.vx *= 0.98;
    }
    aura.embers = aura.embers.filter((e) => e.life < e.max);
  }
  for (const e of aura.embers) {
    const f = 1 - e.life / e.max;
    ctx.fillStyle = `rgba(255,${30 + 40 * f},${30 * f},${0.9 * f * alpha})`;
    ctx.beginPath();
    ctx.ellipse(e.x, e.y, e.size * 1.6, e.size, Math.atan2(e.vy, e.vx), 0, Math.PI * 2);
    ctx.fill();
  }

  // the dot: a hot core with a tight glow
  // a shockwave ring pushed out on each beat
  const ph = (t % BEAT) / BEAT;
  ctx.strokeStyle = `rgba(255,40,40,${0.7 * (1 - ph) ** 2 * alpha})`;
  ctx.lineWidth = fs * 0.012 * (1 - ph) + 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, fs * (0.06 + ph * 0.45), 0, Math.PI * 2);
  ctx.stroke();
  const core = fs * 0.038 * (0.85 + 0.6 * beat);
  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, core * 2.3);
  glow.addColorStop(0, `rgba(255,235,225,${alpha})`);
  glow.addColorStop(0.25, `rgba(255,60,50,${alpha})`);
  glow.addColorStop(0.6, `rgba(230,10,20,${0.5 * alpha})`);
  glow.addColorStop(1, 'rgba(200,0,10,0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, core * 2.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
