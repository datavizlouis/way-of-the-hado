import React, { useEffect, useRef } from 'react';
import { makeBlob, drawBlob } from '../lib/brush.js';
import { clamp, easeOut, easeInOut } from '../lib/rng.js';

// room around the panel for the splat's spikes and drops, so the canvas never shows a hard edge
const BLEED = 70;

// A DOM panel whose background is a calm, even ink splat that grows out when `open`
// becomes true and pulls back when it becomes false.
export default function SplatPanel({ open, seed = 3, color = '#ece6d6', className = '', children, paintMs = 700, onClosed }) {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const state = useRef({ p: 0, target: 0, from: 0, start: 0, blob: null, w: 0, h: 0 });

  useEffect(() => {
    const s = state.current;
    s.from = s.p;
    s.target = open ? 1 : 0;
    s.start = performance.now();
  }, [open]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const s = state.current;
    const size = () => {
      const r = ref.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      s.w = r.width;
      s.h = r.height;
      canvas.width = (r.width + BLEED * 2) * dpr;
      canvas.height = (r.height + BLEED * 2) * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, BLEED * dpr, BLEED * dpr);
      s.blob = makeBlob(0, 0, r.width, r.height, seed, {
        color, spikes: 15, spikeLen: 38, spikeWidth: 1.9, rough: 0.035, square: 5, drops: 16, dropReach: 26, dropSize: 4,
      });
      s.dirty = true;
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(ref.current);
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      const dur = s.target ? paintMs : paintMs * 0.6;
      const t = clamp((now - s.start) / dur, 0, 1);
      const prev = s.p;
      s.p = s.from + (s.target - s.from) * (s.target ? easeOut(t) : easeInOut(t));
      if (prev === s.p && !s.dirty) return;
      s.dirty = false;
      ctx.clearRect(-BLEED, -BLEED, s.w + BLEED * 2, s.h + BLEED * 2);
      drawBlob(ctx, s.blob, s.p);
      if (!s.target && t >= 1 && prev !== 0) onClosed?.();
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [seed, color, paintMs, onClosed]);

  return (
    <div ref={ref} className={`splat-panel ${open ? 'open' : ''} ${className}`}>
      <canvas
        ref={canvasRef}
        className="splat-panel-bg"
        style={{ inset: -BLEED, width: `calc(100% + ${BLEED * 2}px)`, height: `calc(100% + ${BLEED * 2}px)` }}
        aria-hidden="true"
      />
      <div className="splat-panel-content">{children}</div>
    </div>
  );
}
