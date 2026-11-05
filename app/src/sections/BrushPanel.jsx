import React, { useEffect, useRef } from 'react';
import { makeCoverStrokes, drawSequence } from '../lib/brush.js';
import { clamp, easeOut, easeInOut } from '../lib/rng.js';

// A DOM panel whose background is painted on with brush strokes when `open`
// becomes true and pulled off again when it becomes false.
export default function BrushPanel({ open, seed = 3, color = '#ece6d6', className = '', children, paintMs = 850, onClosed }) {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const state = useRef({ p: 0, target: 0, from: 0, start: 0, strokes: null, w: 0, h: 0 });

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
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      s.strokes = makeCoverStrokes(r.width * 0.03, r.height * 0.02, r.width * 0.94, r.height * 0.96, seed, {
        color,
        rows: Math.max(4, Math.round(r.height / 120)),
        dry: 0.6,
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
      ctx.clearRect(0, 0, s.w, s.h);
      drawSequence(ctx, s.strokes, s.p, { reverse: !s.target, overlap: 0.5 });
      if (!s.target && t >= 1 && prev !== 0) onClosed?.();
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [seed, color, paintMs, onClosed]);

  return (
    <div ref={ref} className={`brush-panel ${open ? 'open' : ''} ${className}`}>
      <canvas ref={canvasRef} className="brush-panel-bg" aria-hidden="true" />
      <div className="brush-panel-content">{children}</div>
    </div>
  );
}
