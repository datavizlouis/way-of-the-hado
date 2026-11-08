import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ScrollHint from './ScrollHint.jsx';

// The data story after Player Select: two scroll pages (the credits follow in Credits.jsx).
//   Page 1 (units sold)  1. one life bar per franchise, Street Fighter lit, the rest grey
//                        2. the same bars split into the games each publisher reports; hover lights a franchise
//   Page 2 (legacy)      1. Street Fighter's games as a treemap, Street Fighter II's four versions ringed in red
//                        2. every film as a treemap, by worldwide box office
//                        3. a butterfly: games sold to the left, box office to the right
// Every number comes from the "Franchise Metrics" rows; each has a source and an as-of date
// (see data/franchise_metrics.csv). Nothing is estimated here. The only arithmetic is adding
// up published figures (a franchise's films, Street Fighter II's four versions, a franchise's
// named games when it has no series total), and the labels say so.

const SF = 'Street Fighter';
const SF_ARCADE = '#f8d038'; // the HUD's life-bar yellow: Street Fighter throughout
const SF_ARCADE_2 = '#f0a020'; // second shade, so neighbouring games read as separate blocks
const REST = '#5b6bb0'; // everyone else on page 2
const GREY = '#c9cdd8'; // everyone else on page 1
const GREY_2 = '#a3a9ba';
const MOVE = 'transform 0.8s cubic-bezier(.3,.7,.2,1), width 0.8s cubic-bezier(.3,.7,.2,1), height 0.8s cubic-bezier(.3,.7,.2,1), opacity 0.5s';

const num = (v) => (typeof v === 'number' ? v : parseFloat(String(v).replace(/,/g, '')));
const has = (v) => v !== '' && v != null && !Number.isNaN(num(v));
const fmtM = (v) => `${v >= 10 ? v.toFixed(1) : v.toFixed(2).replace(/0$/, '')}M`;
const fmtUsd = (v) => (v >= 1 ? `$${v.toFixed(1)}M` : `$${(v * 1000).toFixed(v >= 0.1 ? 0 : 1)}K`);
const and = (a) => (a.length > 1 ? `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}` : a.join(''));
const sum = (a) => a.reduce((t, d) => t + d.v, 0);
const year = (asOf) => Number(String(asOf).slice(0, 4));

// ---------------------------------------------------------------- data shaping

function useStory(rows) {
  return useMemo(() => {
    const by = (cat) => rows.filter((r) => r.Category === cat);
    const titles = by('Title units').filter((r) => has(r.Value));
    const series = new Map(by('Series units (cumulative)').filter((r) => has(r.Value)).map((r) => [r.Franchise, r]));
    const missing = new Map(by('No published figure').map((r) => [r.Franchise, r]));
    const names = [...new Set([...series.keys(), ...missing.keys(), ...titles.map((r) => r.Franchise)])];

    const franchises = names.map((name) => {
      const s = series.get(name);
      const ts = titles
        .filter((r) => r.Franchise === name)
        .map((r) => ({ id: `t:${r.Title}`, label: r.Title, v: num(r.Value), r }))
        .sort((a, b) => b.v - a.v);
      // A game released in or after the year of the series count, with a later figure, came out
      // after that count (Mortal Kombat 1 and the May 2023 total). It's drawn past the end of the
      // bar, never added to it.
      const after = s && s['As Of'] ? ts.filter((t) => Number(t.r.Year) >= year(s['As Of']) && t.r['As Of'] > s['As Of']) : [];
      const inside = ts.filter((t) => !after.includes(t));
      const total = s ? num(s.Value) : inside.length ? sum(inside) : null;
      const kind = s ? 'series' : inside.length ? 'atLeast' : 'none';
      const segs = [...inside];
      if (s && total - sum(inside) > 0.005) {
        segs.push({ id: `o:${name}`, label: 'Other games', v: total - sum(inside), other: true, r: s });
      }
      return { name, kind, total, segs, after, series: s, missing: missing.get(name) };
    });
    franchises.sort((a, b) => (b.total ?? -1) - (a.total ?? -1) || a.name.localeCompare(b.name));

    const films = by('Box office')
      .filter((r) => has(r.Value) && r.Unit === 'million USD')
      .map((r) => ({ id: `f:${r.Title}`, label: r.Title.replace(/ \((\d{4}) film\)$/, ' ($1)'), franchise: r.Franchise, v: num(r.Value), r }))
      .sort((a, b) => b.v - a.v);
    const boxOffice = [...new Set(films.map((f) => f.franchise))]
      .map((name) => ({ name, films: films.filter((f) => f.franchise === name), total: sum(films.filter((f) => f.franchise === name)) }))
      .sort((a, b) => b.total - a.total);

    const quotes = Object.fromEntries(by('Narrative fact').map((r) => [r.Title, r]));
    return { franchises, films, boxOffice, quotes };
  }, [rows]);
}

/** Tooltip content for a franchise's whole bar. */
function totalTip(f) {
  if (f.kind === 'series') return { value: `${fmtM(f.total)} units`, eyebrow: f.name, text: f.series.Note };
  if (f.kind === 'atLeast') return { value: `≥ ${fmtM(f.total)} units`, eyebrow: f.name, text: f.missing?.Note };
  return { value: 'No published figure', eyebrow: f.name, text: f.missing?.Note };
}

/** Tooltip content for one game (or the "other games" remainder). */
function gameTip(f, s) {
  if (s.other) {
    return {
      value: `${fmtM(s.v)} units`,
      eyebrow: `${f.name} · other games`,
      text: `The part of ${f.name}'s ${fmtM(f.total)} total that isn't broken down game by game: the series total minus the ${f.segs.length - 1} games named here.`,
    };
  }
  return { value: `${fmtM(s.v)} units`, eyebrow: s.label, text: s.r.Note };
}

// ---------------------------------------------------------------- layout helpers

/** Squarified treemap of items {v} into a rectangle. */
function squarify(items, x, y, w, h) {
  const total = items.reduce((t, d) => t + d.v, 0);
  if (!total || w <= 0 || h <= 0) return [];
  const k = (w * h) / total;
  let rest = items.filter((d) => d.v > 0).map((d) => ({ d, a: d.v * k }));
  const out = [];
  const worst = (row, side) => {
    const s = row.reduce((t, r) => t + r.a, 0);
    const mx = Math.max(...row.map((r) => r.a));
    const mn = Math.min(...row.map((r) => r.a));
    return Math.max((side * side * mx) / (s * s), (s * s) / (side * side * mn));
  };
  while (rest.length) {
    const side = Math.min(w, h);
    const row = [rest[0]];
    let i = 1;
    while (i < rest.length && worst([...row, rest[i]], side) <= worst(row, side)) row.push(rest[i++]);
    const s = row.reduce((t, r) => t + r.a, 0);
    if (w >= h) {
      const cw = s / h;
      let yy = y;
      row.forEach((r) => { out.push({ ...r.d, x, y: yy, w: cw, h: r.a / cw }); yy += r.a / cw; });
      x += cw; w -= cw;
    } else {
      const ch = s / w;
      let xx = x;
      row.forEach((r) => { out.push({ ...r.d, x: xx, y, w: r.a / ch, h: ch }); xx += r.a / ch; });
      y += ch; h -= ch;
    }
    rest = rest.slice(i);
  }
  return out;
}

/** Two-level treemap: groups, then their children, with a label strip on groups of more than one. */
function nestedTreemap(groups, x, y, w, h, strip = 20) {
  const cells = {};
  const boxes = squarify(groups.map((g) => ({ ...g, v: sum(g.items) })), x, y, w, h);
  boxes.forEach((b) => {
    b.strip = b.items.length > 1 && b.h > strip * 2.2 && b.w > 70 ? strip : 0; // a lone item names itself
    squarify(b.items, b.x, b.y + b.strip, b.w, b.h - b.strip).forEach((c) => { cells[c.id] = c; });
  });
  return { cells, boxes };
}

/** Lay segments end to end along a bar; dir -1 grows leftwards from x. */
function stack(segs, x, y, h, scale, dir = 1) {
  const out = {};
  let at = 0;
  segs.forEach((s) => {
    const w = Math.max(1.5, s.v * scale);
    out[s.id] = { x: dir > 0 ? x + at : x - at - w, y, w, h };
    at += s.v * scale;
  });
  return out;
}

/**
 * False for the first frames after `key` changes, then true. Charts render their empty state
 * (instant, no animation) while false, and animate to the real layout when it turns true.
 */
function useDrawn(key) {
  const [drawnKey, setDrawnKey] = useState(null);
  useEffect(() => {
    let r2;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setDrawnKey(key));
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, [key]);
  return drawnKey === key;
}

/** Where a bar starts from when it draws in: zero width at its base. */
const atBase = (r, x) => r && { ...r, x, w: 0 };

const inset = (r) => r && { ...r, x: r.x + 1, y: r.y + 1, w: Math.max(1, r.w - 2), h: Math.max(1, r.h - 2) };

function useBox(ref) {
  const [box, setBox] = useState({ w: 900, h: 600 });
  useLayoutEffect(() => {
    const ro = new ResizeObserver(([e]) => setBox({ w: Math.round(e.contentRect.width), h: Math.round(e.contentRect.height) }));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return box;
}

// ---------------------------------------------------------------- shared pieces

/** Big value, then what it is, then a line of plain words on what it measures and where it came from. */
function Tip({ tip }) {
  if (!tip) return null;
  const left = Math.min(tip.x + 16, window.innerWidth - 360);
  const top = Math.min(tip.y + 16, window.innerHeight - 220);
  return (
    <div className="fx-tip" style={{ left, top }} role="status">
      <div className="fx-tip-v">{tip.value}</div>
      <div className="fx-tip-e">{tip.eyebrow}</div>
      {tip.text && <p>{tip.text}</p>}
    </div>
  );
}

/**
 * One rectangle. The outer box takes its place and size (and grows a bar from zero); a middle
 * layer pops a treemap box in; the inner block carries the colour and lifts on hover, so the
 * hover target stays put while the block rises.
 *   instant  jump to this state with no animation (the reset before a chart draws in)
 *   delay    ms to wait before animating, so bars and boxes draw one after another
 *   pop      treemap box: scaled down and invisible until drawn
 */
function Cell({ rect, colour, className = '', lift, instant, delay = 0, pop, children, tip, onTip, onEnter, onLeave }) {
  const r = { x: 0, y: 0, w: 0, h: 0, ...rect };
  const hidden = !rect || rect.hidden;
  return (
    <div
      className="fx-cell"
      style={{
        // whole pixels: fractional edges leave hairline seams between neighbouring blocks
        transform: `translate(${Math.round(r.x)}px, ${Math.round(r.y)}px)`,
        width: Math.max(0, Math.round(r.x + r.w) - Math.round(r.x)),
        height: Math.max(0, Math.round(r.y + r.h) - Math.round(r.y)),
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? 'none' : undefined,
        transition: instant ? 'none' : MOVE,
        transitionDelay: instant ? undefined : `${delay}ms`,
        zIndex: lift ? 3 : undefined,
      }}
      onMouseEnter={onEnter}
      onMouseMove={tip && onTip ? (e) => onTip({ ...tip, x: e.clientX, y: e.clientY }) : undefined}
      onMouseLeave={() => {
        if (tip && onTip) onTip(null);
        if (onLeave) onLeave();
      }}
    >
      <div
        className={`fx-pop ${pop && instant ? 'pre' : ''}`}
        style={{ transition: instant ? 'none' : undefined, transitionDelay: instant ? undefined : `${delay}ms` }}
      >
        <div className={`fx-block ${className} ${lift ? 'lifted' : ''}`} style={{ backgroundColor: colour }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** A label that fades in (after `delay` ms) and out (at once). */
function Fade({ show, delay = 0, style, className = '', children }) {
  return (
    <div
      className={`fx-fade ${className}`}
      // fades in slowly after its chart, out quickly so it doesn't ghost over the next chart
      style={{ ...style, opacity: show ? 1 : 0, transition: show ? `opacity 0.5s ease ${delay}ms` : 'opacity 0.12s' }}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
}

/**
 * Sticky graphic with full-screen steps scrolling over it. Each step is a snap point; the
 * step most in view drives the graphic. `step` is -1 until the page is first reached. `visit`
 * counts entries, so coming back to a step (from either direction) draws its chart again.
 */
function Scrolly({ label, steps, children }) {
  const ref = useRef(null);
  const [{ step, visit }, setAt] = useState({ step: -1, visit: 0 });
  useEffect(() => {
    const root = ref.current.closest('main');
    const els = [...ref.current.querySelectorAll('.fx-step')];
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setAt((a) => ({ step: els.indexOf(e.target), visit: a.visit + 1 }))),
      { root, threshold: 0.55 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);
  return (
    <section className="fx-page" ref={ref} aria-label={label}>
      <div className="fx-stage">
        {children(step, visit)}
        <ScrollHint />
      </div>
      <div className="fx-steps">
        {steps.map((s, i) => (
          <div key={i} className={`screen fx-step ${i === step ? 'on' : ''}`}>
            <div className="fx-card">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- page 1: units sold

const ROW_STAGGER = 60; // ms between one bar starting to draw and the next

function UnitsChart({ story, step, visit, onTip }) {
  const ref = useRef(null);
  const { w: W, h: H } = useBox(ref);
  const drawn = useDrawn(`${step}:${visit}`);
  const [hot, setHot] = useState(null); // { row, id } under the pointer, game view only
  const games = step >= 1; // step 0 (and before the page is reached): one bar per franchise
  useEffect(() => setHot(null), [games]);

  const fs = story.franchises;
  const rowH = H / fs.length;
  const scoreW = 190; // room for "≥66.7M" in the score font
  const max = Math.max(...fs.map((f) => (f.total ?? 0) + sum(f.after)));
  const k = (W - scoreW - 6) / max;
  const barH = Math.max(10, Math.min(24, rowH * 0.36));
  const barTop = (i) => i * rowH + rowH - barH - Math.max(4, rowH * 0.12);

  const cells = [];
  const rows = fs.map((f, i) => {
    const y = barTop(i);
    const d = i * ROW_STAGGER;
    const sf = f.name === SF;
    const lit = games ? hot?.row === f.name : sf;
    const frameW = f.kind === 'none' ? null : f.total * k + 6;
    const afterW = games && f.after.length ? sum(f.after) * k + 8 : 0;

    const seg = stack(f.segs, 3, y + 3, barH - 6, k);
    f.segs.forEach((s, j) => {
      const r = seg[s.id];
      const pad = games ? 1 : 0;
      const colour = games ? (lit ? (j % 2 ? SF_ARCADE_2 : SF_ARCADE) : j % 2 ? GREY_2 : GREY) : lit ? SF_ARCADE : GREY;
      cells.push(
        <Cell
          key={s.id}
          // fused: overlap 1px so no seams show
          rect={drawn ? { ...r, x: r.x + pad, w: Math.max(1, r.w - pad * 2 + (games ? 0 : 1)) } : atBase(r, 3)}
          instant={!drawn}
          delay={d}
          colour={colour}
          className={`hp-seg ${s.other && games ? 'other' : ''}`}
          lift={games && hot?.id === s.id}
          tip={games ? gameTip(f, s) : totalTip(f)}
          onTip={onTip}
          onEnter={games ? () => setHot({ row: f.name, id: s.id }) : undefined}
          onLeave={games ? () => setHot(null) : undefined}
        >
          {games && r.w > 96 && !s.other && <span className="hp-seg-label">{s.label.replace(/^(Super )?Street Fighter/, (m) => (m.startsWith('Super') ? 'Super SF' : 'SF'))}</span>}
        </Cell>,
      );
    });
    f.after.forEach((s) => {
      const r = { x: 3 + f.total * k + 10, y: y + 3, w: s.v * k, h: barH - 6, hidden: !games };
      cells.push(
        <Cell
          key={s.id}
          rect={drawn ? r : atBase(r, r.x)}
          instant={!drawn}
          delay={d + 450}
          className={`hp-after ${lit ? 'lit' : ''}`}
          lift={hot?.id === s.id}
          tip={{ ...gameTip(f, s), eyebrow: `${s.label} · not in the series total` }}
          onTip={onTip}
          onEnter={() => setHot({ row: f.name, id: s.id })}
          onLeave={() => setHot(null)}
        >
          {r.w > 70 && <span className="hp-seg-label">{s.label.replace('Mortal Kombat', 'MK')}</span>}
        </Cell>,
      );
    });

    return (
      <div key={f.name} className={`hp-row ${lit ? 'lit' : ''}`}>
        <div className="hp-name pixel" style={{ left: 0, top: y - 20 }}>
          {f.name}
        </div>
        <div
          className={`hp-track ${f.kind === 'none' ? 'none' : ''}`}
          style={{
            left: 0,
            top: y,
            height: barH,
            width: frameW === null ? undefined : drawn ? frameW : 6,
            opacity: f.kind === 'none' && !drawn ? 0 : 1,
            transition: drawn ? `width 0.8s cubic-bezier(.3,.7,.2,1) ${d}ms, opacity 0.4s ${d}ms` : 'none',
          }}
          onMouseMove={(e) => onTip({ ...totalTip(f), x: e.clientX, y: e.clientY })}
          onMouseLeave={() => onTip(null)}
        >
          {f.kind === 'none' && <span className="pixel">No published figure</span>}
        </div>
        {f.kind !== 'none' && (
          <div
            className="hp-score pixel"
            style={{
              left: frameW + afterW + 12,
              top: y + barH / 2,
              opacity: drawn ? 1 : 0,
              transition: drawn ? `color 0.3s, left 0.8s, opacity 0.4s ease ${d + 500}ms` : 'none',
            }}
          >
            {`${f.kind === 'atLeast' ? '≥' : ''}${fmtM(f.total)}`}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="fx-chart" ref={ref}>
      {rows}
      {cells}
    </div>
  );
}

function UnitsPage({ story, onTip }) {
  const fs = story.franchises;
  const ranked = fs.filter((f) => f.kind === 'series');
  const sfRank = ranked.findIndex((f) => f.name === SF) + 1;
  const ahead = ranked.slice(0, Math.max(0, sfRank - 1)).map((f) => f.name);
  const none = fs.filter((f) => f.kind === 'none').map((f) => f.name);
  const sf = fs.find((f) => f.name === SF);
  const aheadNoTotal = sf ? fs.filter((f) => f.kind === 'atLeast' && f.total > sf.total) : [];
  const ordinal = (n) => `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`;
  const named = sf ? sf.segs.filter((s) => !s.other) : [];
  const steps = [
    <>
      <p className="eyebrow">Units sold</p>
      <h2 className="brush-title fx-oneline">{sfRank ? `Street Fighter claims ${ordinal(sfRank)}` : 'Units sold'}</h2>
      {sf && (
        <p className="fx-body">
          Street Fighter has sold {fmtM(sf.total)} games. Of the series with an official total, only {and(ahead)} have sold more.
          {aheadNoTotal.map(
            (f) =>
              ` ${f.name} never gets an official total, but the ${f.segs.length} games it reports add up to ${fmtM(f.total)} on their own, so it's ahead too.`,
          )}
        </p>
      )}
      {none.length > 0 && <p className="fx-body">Some can't be ranked at all: {and(none)} have never had their sales published.</p>}
    </>,
    <>
      <p className="eyebrow">Units sold, game by game</p>
      <h2 className="brush-title">Every game, counted</h2>
      {sf && (
        <p className="fx-body">
          Now split each bar into the games behind it. Capcom names {named.length} Street Fighter games that sold over a million, and together they
          make up {fmtM(sum(named))} of the {fmtM(sf.total)}. The striped end is everything a publisher doesn't count game by game.
        </p>
      )}
      <p className="fx-hint">Hover a game to light up its franchise.</p>
    </>,
  ];
  return (
    <Scrolly label="Units sold" steps={steps}>
      {(step, visit) => <UnitsChart story={story} step={Math.max(0, step)} visit={visit} onTip={onTip} />}
    </Scrolly>
  );
}

// ---------------------------------------------------------------- page 2: legacy

const SF2_ERA = /^(Super )?Street Fighter II\b/;
const SF4_ERA = /Street Fighter IV/;

const POP_STAGGER = 70; // ms between one treemap box popping in and the next
const BAR_STAGGER = 90; // ms between butterfly rows

function LegacyChart({ story, step, visit, onTip }) {
  const ref = useRef(null);
  const { w: W, h: H } = useBox(ref);
  const drawn = useDrawn(`${step}:${visit}`);
  const [hot, setHot] = useState(null);
  useEffect(() => setHot(null), [step]);

  const sf = story.franchises.find((f) => f.name === SF);
  const sfSegs = sf ? sf.segs : [];
  const era = (s) => (s.other ? 'other' : SF2_ERA.test(s.label) ? 'sf2' : SF4_ERA.test(s.label) ? 'sf4' : s.id);

  // step 0: Street Fighter's games, grouped by era
  const groups = [];
  sfSegs.forEach((s) => {
    const key = era(s);
    let g = groups.find((x) => x.key === key);
    if (!g) groups.push((g = { key, id: `g:${key}`, items: [] }));
    g.items.push(s);
  });
  const groupName = (g) => (g.key === 'sf2' ? 'Street Fighter II, all 4 versions' : g.key === 'sf4' ? 'Street Fighter IV, all 5 versions' : g.items[0].label);
  const sfTree = nestedTreemap(groups, 0, 0, W, H, 22);
  const sf2Box = sfTree.boxes.find((b) => b.key === 'sf2');

  // step 1: every film; step 2: butterfly, games to the left of the names, box office to the right
  const bo = story.boxOffice;
  const filmTree = nestedTreemap(bo.map((b) => ({ key: b.name, id: `fg:${b.name}`, items: b.films })), 0, 0, W, H, 22);
  const mid = W / 2;
  const nameW = 180;
  const sideW = mid - nameW / 2 - 110; // leaves room for the value past each bar
  const rowH = Math.min(84, (H - 40) / Math.max(1, bo.length));
  const barH = Math.min(30, rowH * 0.42);
  const rowsTop = 40 + (H - 40 - rowH * bo.length) / 2;
  const unitsOf = (name) => story.franchises.find((f) => f.name === name);
  const unitsMax = Math.max(...bo.map((b) => unitsOf(b.name)?.total ?? 0));
  const boMax = Math.max(...bo.map((b) => b.total));
  const leftX = mid - nameW / 2;
  const rightX = mid + nameW / 2;

  const rect = {};
  if (step === 0) Object.assign(rect, sfTree.cells);
  else if (step === 1) story.films.forEach((f) => (rect[f.id] = filmTree.cells[f.id]));
  else {
    bo.forEach((b, i) => {
      const y = rowsTop + i * rowH + (rowH - barH) / 2;
      Object.assign(rect, stack(b.films, rightX, y, barH, sideW / boMax));
      if (b.name === SF) Object.assign(rect, stack(sfSegs, leftX, y, barH, sideW / unitsMax, -1));
    });
    // each side reads as one bar: neighbouring blocks overlap by a pixel so no seams show
    Object.keys(rect).forEach((id) => (rect[id] = { ...rect[id], w: rect[id].w + 1 }));
  }
  const sfShown = step === 0 || step === 2;
  // treemaps pop in biggest box first; butterfly rows draw top to bottom
  const sfRank = new Map([...sfSegs].sort((a, b) => b.v - a.v).map((s, i) => [s.id, i]));
  const filmRank = new Map(story.films.map((f, i) => [f.id, i]));
  const rowOf = new Map(bo.flatMap((b, i) => b.films.map((f) => [f.id, i])));
  const sfRowIndex = bo.findIndex((b) => b.name === SF);
  const labelsAfter = (n) => n * POP_STAGGER + 250; // group labels and the SF2 ring, once the boxes are in
  /** A cell's rect for this frame: treemaps keep their place (they pop), bars start at their base. */
  const place = (r, base) => (!r ? r : step === 2 && !drawn ? atBase(r, base) : r);

  return (
    <div className="fx-chart" ref={ref}>
      {/* treemap group labels */}
      {sfTree.boxes.map((b) => (
        <Fade key={b.id} show={step === 0 && drawn && b.strip > 0} delay={labelsAfter(sfSegs.length)} className={`tm-group ${b.key === 'sf2' ? 'hot' : ''}`} style={{ left: b.x + 6, top: b.y + 3, maxWidth: b.w - 12 }}>
          {groupName(b)} · {fmtM(sum(b.items))}
        </Fade>
      ))}
      {filmTree.boxes.map((b) => (
        <Fade key={b.id} show={step === 1 && drawn && b.strip > 0} delay={labelsAfter(story.films.length)} className="tm-group" style={{ left: b.x + 6, top: b.y + 3, maxWidth: b.w - 12 }}>
          {b.key} · {fmtUsd(sum(b.items))}
        </Fade>
      ))}
      {sf2Box && (
        <Fade show={step === 0 && drawn} delay={labelsAfter(sfSegs.length)} className="sf2-ring" style={{ left: sf2Box.x - 2, top: sf2Box.y - 2, width: sf2Box.w + 4, height: sf2Box.h + 4 }} />
      )}

      {/* butterfly: headings, names, values */}
      <Fade show={step === 2 && drawn} className="pair-head" style={{ right: W - leftX, top: rowsTop - 30 }}>
        Games sold
      </Fade>
      <Fade show={step === 2 && drawn} className="pair-head" style={{ left: rightX, top: rowsTop - 30 }}>
        Box office
      </Fade>
      {bo.map((b, i) => {
        const y = rowsTop + i * rowH + (rowH - barH) / 2;
        const u = unitsOf(b.name);
        const uw = u && u.kind !== 'none' ? u.total * (sideW / unitsMax) : 0;
        const sfRow = b.name === SF;
        return (
          <React.Fragment key={b.name}>
            <Fade show={step === 2 && drawn} delay={i * BAR_STAGGER} className={`bf-name ${sfRow ? 'sf' : ''}`} style={{ left: leftX, width: nameW, top: y + barH / 2 }}>
              {b.name}
            </Fade>
            <Fade show={step === 2 && drawn} delay={i * BAR_STAGGER + 600} className={`bf-val ${u && u.kind !== 'none' ? '' : 'none'}`} style={{ right: W - (leftX - uw - 10), top: y + barH / 2 }}>
              {u && u.kind !== 'none' ? `${u.kind === 'atLeast' ? '≥' : ''}${fmtM(u.total)}` : 'No published figure'}
            </Fade>
            <Fade show={step === 2 && drawn} delay={i * BAR_STAGGER + 600} className="bf-val" style={{ left: rightX + b.total * (sideW / boMax) + 10, top: y + barH / 2 }}>
              {fmtUsd(b.total)}
              <small>{b.films.length > 1 ? `${b.films.length} films` : '1 film'}</small>
            </Fade>
            {u && u.kind !== 'none' && !sfRow && (
              <Cell
                rect={{ ...place({ x: leftX - uw, y, w: uw, h: barH }, leftX), hidden: step !== 2 }}
                instant={!drawn}
                delay={i * BAR_STAGGER}
                colour={REST}
                tip={totalTip(u)}
                onTip={onTip}
              />
            )}
          </React.Fragment>
        );
      })}

      {/* Street Fighter's games */}
      {sfSegs.map((s) => (
        <Cell
          key={s.id}
          rect={rect[s.id] ? { ...(step === 0 ? inset(rect[s.id]) : place(rect[s.id], leftX)), hidden: !sfShown } : { hidden: true }}
          instant={!drawn}
          pop={step === 0}
          delay={step === 0 ? sfRank.get(s.id) * POP_STAGGER : sfRowIndex * BAR_STAGGER}
          colour={SF_ARCADE}
          className={`tm-cell gold ${s.other && step !== 2 ? 'other' : ''}`}
          tip={step === 2 ? totalTip(sf) : gameTip(sf, s)}
          onTip={onTip}
        >
          {step === 0 && rect[s.id] && rect[s.id].w > 80 && rect[s.id].h > 54 && (
            <span className="tm-label">
              {s.label}
              <b>{fmtM(s.v)}</b>
            </span>
          )}
        </Cell>
      ))}

      {/* films */}
      {story.films.map((f) => {
        const sfFilm = f.franchise === SF;
        const r = rect[f.id];
        return (
          <Cell
            key={f.id}
            rect={r ? { ...(step === 1 ? inset(r) : place(r, rightX)), hidden: step < 1 } : { hidden: true }}
            instant={!drawn}
            pop={step === 1}
            delay={step === 1 ? filmRank.get(f.id) * POP_STAGGER : rowOf.get(f.id) * BAR_STAGGER}
            colour={sfFilm ? SF_ARCADE : REST}
            className={`tm-cell film ${sfFilm ? 'gold' : ''}`}
            lift={step === 1 && hot === f.id}
            tip={{ value: fmtUsd(f.v), eyebrow: f.label, text: f.r.Note }}
            onTip={onTip}
            onEnter={() => setHot(f.id)}
            onLeave={() => setHot(null)}
          >
            {step === 1 && r && r.w > 80 && r.h > 54 && (
              <span className="tm-label">
                {f.label}
                <b>{fmtUsd(f.v)}</b>
              </span>
            )}
          </Cell>
        );
      })}
    </div>
  );
}

function LegacyPage({ story, onTip }) {
  const sf = story.franchises.find((f) => f.name === SF);
  const sf2 = sf ? sf.segs.filter((s) => SF2_ERA.test(s.label)) : [];
  const singles = sf ? sf.segs.filter((s) => !s.other && !SF2_ERA.test(s.label) && !SF4_ERA.test(s.label)) : [];
  const q = story.quotes;
  const bo = story.boxOffice;
  const mk = bo.find((b) => b.name === 'Mortal Kombat');
  const sfBo = bo.find((b) => b.name === SF);
  const topFilm = story.films[0];
  const tek = bo.find((b) => b.name === 'Tekken');
  const tekUnits = story.franchises.find((f) => f.name === 'Tekken');
  const stillOut = story.films.filter((f) => /still in cinemas/i.test(f.r.Note));
  const bigFilms = [...new Set(story.films.filter((f) => f.v > 10).map((f) => f.franchise))];
  const times = (a, b) => {
    const r = a / b;
    return r >= 1.75 && r < 2 ? 'almost twice' : r >= 2 && r < 2.25 ? 'about twice' : `${r.toFixed(1)} times`;
  };
  const Quote = ({ k }) =>
    q[k] ? (
      <span className="fx-quote" title={`${q[k].Source}, ${q[k]['As Of']}`}>
        “{q[k].Note}”
      </span>
    ) : null;

  const steps = [
    <>
      <p className="eyebrow">Street Fighter's Legacy</p>
      <h2 className="brush-title">The Arcade Boom</h2>
      {sf2.length > 0 && (
        <p className="fx-body">
          Street Fighter II is the reason we're all here. Its {sf2.length} home versions add up to {fmtM(sum(sf2))} copies, the biggest chunk of
          Capcom's list{singles.length ? `, even though the best-selling single game is ${singles[0].label} at ${fmtM(singles[0].v)}` : ''}.
        </p>
      )}
      <p className="fx-body">
        And it started in the arcade. Capcom's own history says <Quote k="SF2 boom" /> RePlay, the US arcade trade magazine, called it <Quote k="SF2 coin-op" />, and it
        turned a slump around: <Quote k="SF2 recovery" /> The coins it took aren't in these numbers, because no one has ever published them.
      </p>
    </>,
    <>
      <p className="eyebrow">Hollywood takes a swing</p>
      <h2 className="brush-title">Fatality. MK wins.</h2>
      {mk && sfBo && (
        <p className="fx-body">
          Mortal Kombat's {mk.films.length} films have taken {fmtUsd(mk.total)} worldwide, {times(mk.total, sfBo.total)} Street Fighter's {fmtUsd(sfBo.total)}.
          {topFilm && ` Its newest, ${topFilm.label.replace(/ \(\d{4}\)$/, '')}, is the biggest fighting-game film yet at ${fmtUsd(topFilm.v)}.`}
          {stillOut.length > 0 && ` ${and(stillOut.map((f) => f.label))} is still in cinemas, so its number will keep climbing.`}
        </p>
      )}
      <p className="fx-hint">Hover a film for its story.</p>
    </>,
    <>
      <p className="eyebrow">Games and films side by side</p>
      <h2 className="brush-title">Units don't buy tickets</h2>
      {tek && tekUnits && (
        <p className="fx-body">
          Selling games doesn't guarantee a hit film. Tekken has sold {fmtM(tekUnits.total)} games, but its films took just {fmtUsd(tek.total)}.
          {bigFilms.length > 0 && ` Only ${and(bigFilms)} have films that took more than $10M.`}
        </p>
      )}
      <p className="fx-body">Games are counted in copies and films in dollars, so each side has its own scale.</p>
    </>,
  ];
  return (
    <Scrolly label="Street Fighter's legacy" steps={steps}>
      {(step, visit) => <LegacyChart story={story} step={step} visit={visit} onTip={onTip} />}
    </Scrolly>
  );
}

// ---------------------------------------------------------------- section

export default function Franchise({ rows }) {
  const story = useStory(rows);
  const [tip, setTip] = useState(null);

  if (!rows.length) {
    return (
      <section className="franchise screen">
        <p className="error">No rows came back from the “Franchise Metrics” datasource.</p>
      </section>
    );
  }

  return (
    <>
      <UnitsPage story={story} onTip={setTip} />
      <LegacyPage story={story} onTip={setTip} />
      <Tip tip={tip} />
    </>
  );
}
