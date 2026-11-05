import React, { useEffect, useRef, useState, useCallback } from 'react';
import { drawSequence, makeSplat, drawSplat as drawInkSplat } from '../lib/brush.js';
import { STORY_ART } from '../lib/storyCast.js';
import { drawScene } from '../lib/beatScenes.js';
import { makeRng, clamp, easeInOut, easeOut } from '../lib/rng.js';
import { assetUrl, loadImage } from '../assets.js';
import { useInView } from '../lib/useInView.js';
import { renderLogo, logoSplats, drawSplat } from '../lib/logo.js';
import { makeAura, drawAura } from '../lib/aura.js';

const KANJI = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const PAPER = '#ece6d6';
const INK = '#141a2b';
const UNPAINT_MS = 520;
const PAINT_MS = 950;

export const BRUSH_FONT = '"HadoBrush", "Kaushan Script", "Brush Script MT", "Segoe Script", cursive';
export const DISPLAY_FONT = '"HadoDisplay", "Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif';
const BODY_FONT = 'Georgia, "Times New Roman", serif';

function wrap(ctx, text, maxW) {
  const words = String(text || '').split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const t = line ? `${line} ${w}` : w;
    if (ctx.measureText(t).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = t;
  }
  if (line) lines.push(line);
  return lines;
}

function buildLayout(step, chapters, W, H) {
  const narrow = W < 760;
  if (step === 0) {
    const cx = W / 2;
    const cy = H * 0.47;
    // no paper strokes on the title: the logo brings its own ink splat
    const strokes = [];
    return { kind: 'title', strokes, cx, cy };
  }
  const ch = chapters[step - 1];
  // the beat's box: art on one side, text on the other, swapping sides every beat
  // on a phone, keep clear of the chapter dots down the right edge
  const bw = narrow ? W - 84 : Math.min(W * 0.7, 1060);
  const bh = narrow ? Math.min(H * 0.72, 760) : Math.min(H * 0.5, 520);
  const bx = narrow ? 16 : (W - bw) / 2;
  const by = H * 0.48 - bh / 2;
  const artLeft = step % 2 === 1;
  const artW = narrow ? bw : bw * 0.4;
  const gap = narrow ? 0 : bw * 0.06;
  const art = narrow
    ? { x: bx, y: by, w: bw, h: bh * 0.42 }
    : { x: artLeft ? bx : bx + bw - artW, y: by, w: artW, h: bh };
  const text = narrow
    ? { x: bx, y: by + bh * 0.46, w: bw, h: bh * 0.54 }
    : { x: artLeft ? bx + artW + gap : bx, y: by, w: bw - artW - gap, h: bh };
  // white splatter, wider and taller than the box: a row of overlapping blots plus a big one
  // in the middle so the box is covered edge to edge
  const rng = makeRng(500 + step * 17);
  const splats = [];
  const n = narrow ? 3 : 4;
  for (let i = 0; i < n; i++) {
    const u = n === 1 ? 0.5 : i / (n - 1);
    splats.push(
      makeSplat(bx + bw * (0.12 + u * 0.76), by + bh * (0.5 + (rng() - 0.5) * 0.16), bh * (0.44 + rng() * 0.06), 900 + step * 31 + i, {
        color: PAPER, sx: 1.2 + rng() * 0.15, sy: 1.15 + rng() * 0.1, rot: (rng() - 0.5) * 0.8, spikeLen: 0.35, spread: 0.4, beads: 0.4,
      }),
    );
  }
  splats.splice(1, 0, makeSplat(bx + bw / 2, by + bh / 2, bh * 0.6, 77 + step, {
    color: PAPER, sx: (bw / bh) * 0.72, sy: 1.05, rot: (rng() - 0.5) * 0.1, spikeLen: 0.35, spread: 0.4, beads: 0.4,
  }));
  return { kind: 'chapter', strokes: [], splats, art, text, artLeft, narrow, ch, step };
}

function drawContent(ctx, L, W, H, a, slide) {
  if (L.kind === 'title') return;
  const ch = L.ch;
  if (!ch || a <= 0) return;
  const T = L.text;
  ctx.save();
  ctx.globalAlpha = a;
  // the text drifts in from the side away from the art
  ctx.translate((L.artLeft ? 1 : -1) * slide, 0);
  ctx.textBaseline = 'top';
  // size the type to the box, then centre the block vertically
  const kfs = clamp(W * 0.013, 12, 16);
  const tfs = clamp(T.w * 0.085, 28, 66);
  const bfs = clamp(W * 0.0145, 14, 19);
  ctx.font = `${tfs}px ${BRUSH_FONT}`;
  const titleLines = wrap(ctx, ch.Title, T.w);
  ctx.font = `${bfs}px ${BODY_FONT}`;
  const bodyLines = wrap(ctx, ch.Body, T.w);
  const blockH = kfs * 2 + titleLines.length * tfs * 1.05 + tfs * 0.3 + bodyLines.length * bfs * 1.55;
  let y = T.y + Math.max(0, (T.h - blockH) / 2);
  const x = T.x;
  ctx.fillStyle = ch.Accent && ch.Accent !== '#e8e2d0' ? ch.Accent : '#c4283c';
  ctx.font = `700 ${kfs}px ${BODY_FONT}`;
  ctx.fillText(`${KANJI[L.step] || ''}  CHAPTER ${L.step}  ·  ${String(ch.Era).toUpperCase()}`, x, y);
  y += kfs * 2;
  ctx.fillStyle = INK;
  ctx.font = `${tfs}px ${BRUSH_FONT}`;
  for (const line of titleLines) {
    ctx.fillText(line, x, y);
    y += tfs * 1.05;
  }
  y += tfs * 0.3;
  ctx.font = `${bfs}px ${BODY_FONT}`;
  ctx.fillStyle = '#232a3d';
  for (const line of bodyLines) {
    ctx.fillText(line, x, y);
    y += bfs * 1.55;
  }
  ctx.restore();
}

// the built-in logotype, rendered once per width (and again once the brush font loads)
const logoCache = { key: '', logo: null, splats: null, aura: null };
export function resetLogoCache() {
  logoCache.key = '';
}
function builtLogo(W, H, dpr) {
  const w = Math.round(Math.min(W * 0.74, H * 1.1, 1000));
  const key = `${w}@${dpr}`;
  if (logoCache.key !== key) {
    logoCache.key = key;
    logoCache.logo = renderLogo(w, dpr);
    logoCache.splats = logoSplats(w);
    const { dot } = logoCache.logo;
    logoCache.aura = makeAura(dot.x, dot.y, dot.fs);
  }
  return logoCache;
}

function drawTitleLogo(ctx, L, W, H, logoImg, a, dpr, reverse, now) {
  if (a <= 0) return;
  if (!logoImg) {
    // the ink splat lands first, the lettering slams in over it, then the red energy ignites
    const { logo, splats, aura } = builtLogo(W, H, dpr);
    const x0 = L.cx - logo.w / 2;
    const y0 = L.cy - logo.h / 2;
    ctx.save();
    ctx.translate(x0, y0);
    const sp = reverse ? a : clamp(a * 1.6, 0, 1);
    splats.forEach((s, i) => drawSplat(ctx, s, clamp(sp * 1.3 - i * 0.12, 0, 1)));
    ctx.restore();
    const la = reverse ? a : clamp((a - 0.25) / 0.75, 0, 1);
    if (la > 0) {
      const s = 1.18 - 0.18 * easeOut(la);
      ctx.save();
      ctx.globalAlpha = clamp(la * 1.5, 0, 1);
      ctx.translate(L.cx, L.cy);
      ctx.scale(s, s);
      const auraA = reverse ? la : clamp((la - 0.5) / 0.5, 0, 1);
      ctx.translate(-logo.w / 2, -logo.h / 2);
      drawAura(ctx, aura, now, auraA, 'back');
      ctx.drawImage(logo.canvas, 0, 0, logo.w, logo.h);
      drawAura(ctx, aura, now, auraA, 'front');
      ctx.restore();
    }
    ctx.save();
    ctx.globalAlpha = clamp(la, 0, 1) * 0.85;
    ctx.fillStyle = PAPER;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.font = `italic ${clamp(W * 0.014, 14, 19)}px ${BODY_FONT}`;
    ctx.fillText('A visual history of Street Fighter  ·  1987 – today', L.cx, Math.min(H - 90, L.cy + Math.max(logo.h / 2, H * 0.24) + 44));
    ctx.restore();
    return;
  }
  ctx.save();
  ctx.globalAlpha = clamp(a, 0, 1);
  const s = 0.85 + 0.15 * easeOut(clamp(a, 0, 1));
  const cy = L.cy + H * 0.035;
  ctx.translate(L.cx, cy);
  ctx.scale(s, s);
  if (logoImg) {
    const h = Math.min(H * 0.24, W * 0.16);
    const w = (logoImg.naturalWidth / logoImg.naturalHeight) * h;
    ctx.drawImage(logoImg, -w / 2, -h / 2, w, h);
  } else {
    // placeholder logotype: heavy italic slab with a hot gradient and a dark keyline
    const fs = Math.min(W * 0.17, 230);
    ctx.font = `italic 900 ${fs}px ${DISPLAY_FONT}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.lineWidth = fs * 0.12;
    ctx.strokeStyle = '#0b0f1e';
    ctx.strokeText('HADO', 0, 0);
    const g = ctx.createLinearGradient(0, -fs / 2, 0, fs / 2);
    g.addColorStop(0, '#fff2a8');
    g.addColorStop(0.45, '#f6b42c');
    g.addColorStop(0.55, '#e0631d');
    g.addColorStop(1, '#b0161f');
    ctx.fillStyle = g;
    ctx.fillText('HADO', 0, 0);
    ctx.lineWidth = fs * 0.02;
    ctx.strokeStyle = '#fff6cf';
    ctx.strokeText('HADO', 0, -fs * 0.01);
  }
  ctx.restore();
}

// The beat's art: a supplied picture, an animated scene, or (Akuma's beat) a kanji in
// the red Satsui no Hado. `t` is seconds since the beat finished painting in.
function drawChapterArt(ctx, L, W, H, a, slide, t, now, storyImg) {
  if (a <= 0) return;
  const A = L.art;
  const spec = STORY_ART[L.step] || {};
  ctx.save();
  ctx.globalAlpha = a;
  ctx.translate((L.artLeft ? -1 : 1) * slide, 0);
  if (storyImg) {
    // a supplied picture, with a gentle float
    const sc = Math.min(A.w / storyImg.naturalWidth, A.h / storyImg.naturalHeight) * 0.92;
    const iw = storyImg.naturalWidth * sc;
    const ih = storyImg.naturalHeight * sc;
    const fy = Math.sin(now / 900) * 4;
    ctx.drawImage(storyImg, A.x + (A.w - iw) / 2, A.y + (A.h - ih) / 2 + fy, iw, ih);
  } else if (spec.scene && drawScene(spec.scene, ctx, A, Math.max(0, t), { L })) {
    // drawn
  } else if (spec.kanji) {
    const cx = A.x + A.w / 2;
    const cy = A.y + A.h / 2;
    const fs = Math.min(A.w, A.h) * 0.7;
    if (!L.aura) L.aura = makeAura(cx, cy - fs * 0.05, fs * 0.9, 41);
    drawAura(ctx, L.aura, now, a, 'back');
    ctx.fillStyle = INK;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fs}px "Hiragino Mincho ProN", "Yu Mincho", "Noto Serif CJK JP", serif`;
    ctx.fillText(spec.kanji, cx, cy);
    drawAura(ctx, L.aura, now, a, 'front');
  }
  ctx.restore();
}

// ------------------------------------------------------------------ sky

function drawSky(ctx, W, H, t, stars, flash) {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#070b18');
  g.addColorStop(0.55, '#0d1630');
  g.addColorStop(1, '#141f3e');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  for (const s of stars) {
    const tw = 0.5 + 0.5 * Math.sin(t * 0.001 * s.sp + s.ph);
    ctx.globalAlpha = s.a * (0.4 + 0.6 * tw);
    ctx.fillStyle = '#dfe6ff';
    ctx.fillRect(s.x * W, s.y * H, s.r, s.r);
  }
  ctx.globalAlpha = 1;
  // slow drifting cloud bands
  for (let i = 0; i < 4; i++) {
    const y = H * (0.15 + i * 0.22);
    const x = ((t * 0.006 * (i % 2 ? 1 : -0.7) + i * 300) % (W + 800)) - 400;
    const cg = ctx.createRadialGradient(x, y, 0, x, y, 420);
    cg.addColorStop(0, 'rgba(60,80,140,0.10)');
    cg.addColorStop(1, 'rgba(60,80,140,0)');
    ctx.fillStyle = cg;
    ctx.fillRect(x - 420, y - 420, 840, 840);
  }
  if (flash > 0) {
    ctx.fillStyle = `rgba(200,215,255,${flash * 0.12})`;
    ctx.fillRect(0, 0, W, H);
  }
}

// ------------------------------------------------------------------ component

export default function Intro({ chapters, characters = [], height }) {
  const wrapRef = useRef(null);
  const skyRef = useRef(null);
  const paintRef = useRef(null);
  const [step, setStep] = useState(0);
  const total = chapters.length + 1;
  const anim = useRef({ shown: 0, target: 0, phase: 'paint', start: performance.now(), paintedAt: performance.now(), layouts: new Map() });
  const imgs = useRef({ logo: null, story: {} });
  const inView = useInView(wrapRef, 0.05);

  // assets
  useEffect(() => {
    loadImage(assetUrl('img/hado-logo.png') || assetUrl('img/hado-logo.webp')).then((img) => {
      imgs.current.logo = img;
    });
    chapters.forEach((c) => {
      loadImage(assetUrl(`img/story/${c.Chapter}.png`) || assetUrl(`img/story/${c.Chapter}.jpg`)).then((img) => {
        if (img) imgs.current.story[c.Chapter] = img;
      });
    });
  }, [chapters]);

  const go = useCallback(
    (to) => {
      const s = anim.current;
      to = clamp(to, 0, total - 1);
      if (to === s.target) return false;
      s.target = to;
      if (s.phase === 'paint' || s.phase === 'idle') {
        // un-paint what is on screen, from wherever the paint animation got to
        const now = performance.now();
        const painted = s.phase === 'idle' ? 1 : clamp((now - s.start) / PAINT_MS, 0, 1);
        s.phase = 'unpaint';
        s.start = now - (1 - painted) * UNPAINT_MS;
      }
      setStep(to);
      return true;
    },
    [total],
  );

  // input: each wheel notch / swipe / key moves one story point; at either end the
  // page is allowed to keep scrolling past the intro.
  useEffect(() => {
    const el = wrapRef.current;
    let lock = 0;
    let touchY = null;
    const onWheel = (e) => {
      const s = anim.current;
      const dir = Math.sign(e.deltaY);
      if (!dir) return;
      const atEnd = (dir > 0 && s.target >= total - 1) || (dir < 0 && s.target <= 0);
      if (atEnd) return;
      e.preventDefault();
      const now = performance.now();
      if (now < lock || Math.abs(e.deltaY) < 4) return;
      lock = now + 700;
      go(s.target + dir);
    };
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchY == null) return;
      const dy = touchY - e.touches[0].clientY;
      const s = anim.current;
      const dir = Math.sign(dy);
      const atEnd = (dir > 0 && s.target >= total - 1) || (dir < 0 && s.target <= 0);
      if (atEnd) return;
      e.preventDefault();
      if (Math.abs(dy) > 40) {
        go(s.target + dir);
        touchY = null;
      }
    };
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (go(anim.current.target + 1)) e.preventDefault();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (go(anim.current.target - 1)) e.preventDefault();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('keydown', onKey);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('keydown', onKey);
    };
  }, [go, total]);

  // render loop
  useEffect(() => {
    const sky = skyRef.current;
    const paint = paintRef.current;
    const sctx = sky.getContext('2d');
    const pctx = paint.getContext('2d');
    const rng = makeRng(9);
    const stars = Array.from({ length: 140 }, () => ({
      x: rng(), y: rng() * 0.9, r: rng() < 0.85 ? 1 : 2, a: 0.3 + rng() * 0.7, sp: 0.5 + rng() * 2, ph: rng() * 6,
    }));
    let W = 0;
    let H = 0;
    let dpr = 1;
    let raf;
    let flash = 0;
    const resize = () => {
      const r = wrapRef.current.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(r.width);
      H = Math.round(r.height);
      for (const c of [sky, paint]) {
        c.width = W * dpr;
        c.height = H * dpr;
      }
      anim.current.layouts.clear();
    };
    const layoutFor = (i) => {
      const L = anim.current.layouts;
      if (!L.has(i)) L.set(i, buildLayout(i, chapters, W, H));
      return L.get(i);
    };
    resize();
    if (document.fonts && document.fonts.load) {
      document.fonts.load('40px "HadoBrush"').then(resetLogoCache, () => {});
    }
    const ro = new ResizeObserver(resize);
    ro.observe(wrapRef.current);

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!inView.current) return;
      const s = anim.current;
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (Math.random() < 0.002) flash = 1;
      flash *= 0.9;
      drawSky(sctx, W, H, now, stars, flash);

      // state machine: unpaint shown -> paint target
      let p;
      let reverse = false;
      if (s.phase === 'unpaint') {
        const t = clamp((now - s.start) / UNPAINT_MS, 0, 1);
        p = 1 - easeInOut(t);
        reverse = true;
        if (t >= 1) {
          s.shown = s.target;
          s.phase = 'paint';
          s.start = now;
          s.paintedAt = now; // scenes start their choreography from here
          p = 0;
          reverse = false;
        }
      } else {
        const t = clamp((now - s.start) / PAINT_MS, 0, 1);
        p = easeOut(t);
        if (t >= 1 && s.phase === 'paint') s.phase = 'idle';
      }
      const L = layoutFor(s.shown);
      pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pctx.clearRect(0, 0, W, H);
      if (L.kind === 'title') {
        drawTitleLogo(pctx, L, W, H, imgs.current.logo, reverse ? p : (p - 0.35) / 0.65, dpr, reverse, now);
      } else {
        // white splatter lands first (staggered), then the art and text slide in on top
        const sp = reverse ? p : clamp(p * 1.5, 0, 1);
        L.splats.forEach((sp1, i) => drawInkSplat(pctx, sp1, clamp(sp * 1.25 - i * 0.06, 0, 1)));
        const ca = reverse ? clamp(p * 1.6 - 0.3, 0, 1) : clamp((p - 0.4) / 0.6, 0, 1);
        const slide = (1 - easeOut(ca)) * 40;
        const sceneT = (now - s.paintedAt) / 1000 - 0.5;
        drawChapterArt(pctx, L, W, H, ca, slide, sceneT, now, imgs.current.story[L.ch?.Chapter]);
        drawContent(pctx, L, W, H, ca, slide);
      }
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [chapters, inView]);

  const ch = step > 0 ? chapters[step - 1] : null;
  return (
    <section
      className="intro"
      ref={wrapRef}
      style={{ height }}
      tabIndex={0}
      aria-roledescription="story"
      aria-label="Way of the Hado — story. Use arrow keys or scroll to move between chapters."
    >
      <canvas ref={skyRef} className="layer" aria-hidden="true" />
      <canvas ref={paintRef} className="layer" aria-hidden="true" />
      <div className="sr-only" aria-live="polite">
        {ch ? `Chapter ${ch.Chapter}, ${ch.Era}: ${ch.Title}. ${ch.Body}` : 'Way of the Hado. A visual history of Street Fighter.'}
      </div>
      <nav className="story-dots" aria-label="Story chapters">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            className={i === step ? 'on' : ''}
            onClick={() => go(i)}
            aria-label={i === 0 ? 'Title' : `Chapter ${i}: ${chapters[i - 1]?.Title}`}
            aria-current={i === step ? 'step' : undefined}
          >
            <span>{i === 0 ? '◆' : i}</span>
          </button>
        ))}
      </nav>
      <div className={`scroll-hint ${step === total - 1 ? 'end' : ''}`} aria-hidden="true">
        {step === total - 1 ? 'Keep scrolling — meet the fighters' : 'Scroll to paint the next chapter'}
        <span className="chev">▼</span>
      </div>
    </section>
  );
}
