import React, { useEffect, useMemo, useRef, useState } from 'react';

const SF = 'Street Fighter';
const RED = '#e2403f';
const GREY = '#7d86a3';
const GRID = 'rgba(236,230,214,0.10)';
const TEXT = '#ece6d6';
const MUTED = '#a8afc6';

const num = (v) => (typeof v === 'number' ? v : parseFloat(String(v).replace(/,/g, '')));
const parseAsOf = (s) => {
  const [y, m = '6', d = '15'] = String(s || '').split('-');
  return new Date(Number(y), Number(m) - 1, Number(d));
};
const fmtUnits = (v) => `${v >= 10 ? Math.round(v) : v.toFixed(1)}M`;
const fmtUsd = (v) => (v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v >= 10 ? Math.round(v) : v.toFixed(1)}M`);

function useWidth(ref) {
  const [w, setW] = useState(800);
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setW(Math.round(e.contentRect.width)));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return w;
}

function niceMax(v) {
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const m = v / p;
  return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p;
}

function Tooltip({ tip }) {
  if (!tip) return null;
  return (
    <div className="tip" style={{ left: tip.x, top: tip.y }} role="status">
      <strong>{tip.title}</strong>
      <span>{tip.value}</span>
      {tip.source && <em>{tip.source}</em>}
    </div>
  );
}

// ---------------------------------------------------------------- cumulative lines

function SeriesLines({ rows, width }) {
  const [tip, setTip] = useState(null);
  const series = useMemo(() => {
    const m = new Map();
    rows
      .filter((r) => r.Category === 'Series units (cumulative)')
      .forEach((r) => {
        if (!m.has(r.Franchise)) m.set(r.Franchise, []);
        m.get(r.Franchise).push({ d: parseAsOf(r['As Of']), v: num(r.Value), r });
      });
    return [...m.entries()]
      .map(([name, pts]) => ({ name, pts: pts.sort((a, b) => a.d - b.d) }))
      // drop series whose sources disagree so badly the line would fall (a cumulative total can't shrink)
      .filter((s) => s.pts.length > 1 && s.pts.every((p, i) => !i || p.v >= s.pts[i - 1].v));
  }, [rows]);
  if (!series.length) return null;
  const H = 380;
  const M = { t: 20, r: 150, b: 34, l: 44 };
  const iw = width - M.l - M.r;
  const ih = H - M.t - M.b;
  const all = series.flatMap((s) => s.pts);
  const d0 = new Date(Math.min(...all.map((p) => p.d)));
  const d1 = new Date(Math.max(...all.map((p) => p.d)));
  d0.setMonth(0, 1);
  const yMax = niceMax(Math.max(...all.map((p) => p.v)) * 1.05);
  const x = (d) => M.l + ((d - d0) / (d1 - d0)) * iw;
  const y = (v) => M.t + ih - (v / yMax) * ih;
  const years = [];
  for (let yr = d0.getFullYear(); yr <= d1.getFullYear(); yr++) years.push(yr);
  const step = Math.ceil(years.length / Math.max(2, Math.floor(iw / 70)));
  // direct labels, nudged apart
  const labels = series
    .map((s) => ({ s, y: y(s.pts[s.pts.length - 1].v) }))
    .sort((a, b) => a.y - b.y);
  for (let i = 1; i < labels.length; i++) if (labels[i].y - labels[i - 1].y < 18) labels[i].y = labels[i - 1].y + 18;
  return (
    <div className="chart">
      <svg width={width} height={H} role="img" aria-label="Cumulative series units sold over time by franchise">
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line x1={M.l} x2={M.l + iw} y1={y(yMax * f)} y2={y(yMax * f)} stroke={GRID} />
            <text x={M.l - 8} y={y(yMax * f)} dy="0.32em" textAnchor="end" className="axis">
              {Math.round(yMax * f)}M
            </text>
          </g>
        ))}
        {years
          .filter((_, i) => i % step === 0)
          .map((yr) => (
            <text key={yr} x={x(new Date(yr, 0, 1))} y={H - 10} textAnchor="middle" className="axis">
              {yr}
            </text>
          ))}
        {[...series]
          .sort((a) => (a.name === SF ? 1 : -1))
          .map((s) => {
            const sf = s.name === SF;
            const d = s.pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.d)},${y(p.v)}`).join('');
            return (
              <g key={s.name}>
                <path d={d} fill="none" stroke={sf ? RED : GREY} strokeWidth={sf ? 3.5 : 2} opacity={sf ? 1 : 0.75} />
                {s.pts.map((p, i) => (
                  <circle
                    key={i}
                    cx={x(p.d)}
                    cy={y(p.v)}
                    r={sf ? 4.5 : 3.2}
                    fill={sf ? RED : GREY}
                    stroke="#0b1022"
                    strokeWidth="1.5"
                    onMouseEnter={() =>
                      setTip({
                        x: x(p.d),
                        y: y(p.v) - 12,
                        title: `${s.name} · ${p.r['As Of']}`,
                        value: `${fmtUnits(p.v)} units sold (lifetime)`,
                        source: p.r.Source,
                      })
                    }
                    onMouseLeave={() => setTip(null)}
                  />
                ))}
              </g>
            );
          })}
        {labels.map(({ s, y: ly }) => {
          const last = s.pts[s.pts.length - 1];
          const sf = s.name === SF;
          return (
            <text key={s.name} x={x(last.d) + 10} y={ly} dy="0.32em" className={`direct ${sf ? 'sf' : ''}`}>
              {s.name} <tspan className="val">{fmtUnits(last.v)}</tspan>
            </text>
          );
        })}
      </svg>
      <Tooltip tip={tip} />
    </div>
  );
}

// ---------------------------------------------------------------- ranked bars

function Bars({ items, width, fmt, label }) {
  const [tip, setTip] = useState(null);
  const rowH = 30;
  const M = { t: 6, r: 70, b: 6, l: Math.min(270, width * 0.42) };
  const H = M.t + M.b + items.length * rowH;
  const iw = width - M.l - M.r;
  const max = Math.max(...items.map((d) => d.v));
  return (
    <div className="chart">
      <svg width={width} height={H} role="img" aria-label={label}>
        {items.map((d, i) => {
          const sf = d.franchise === SF;
          const yy = M.t + i * rowH;
          const w = Math.max(2, (d.v / max) * iw);
          return (
            <g
              key={d.label}
              onMouseEnter={() => setTip({ x: M.l + w, y: yy, title: d.label, value: fmt(d.v), source: `${d.source}${d.note ? ' — ' + d.note : ''}` })}
              onMouseLeave={() => setTip(null)}
            >
              <text x={M.l - 10} y={yy + rowH / 2} dy="0.32em" textAnchor="end" className={`bar-label ${sf ? 'sf' : ''}`}>
                {d.label}
              </text>
              <rect x={M.l} y={yy + 5} width={w} height={rowH - 10} fill={sf ? RED : GREY} opacity={sf ? 1 : 0.6} rx="1" />
              <text x={M.l + w + 6} y={yy + rowH / 2} dy="0.32em" className={`bar-val ${sf ? 'sf' : ''}`}>
                {fmt(d.v)}
              </text>
            </g>
          );
        })}
      </svg>
      <Tooltip tip={tip} />
    </div>
  );
}

// ---------------------------------------------------------------- SF6 step chart

function Milestones({ rows, width }) {
  const pts = rows
    .filter((r) => r.Title === 'Street Fighter 6' && r.Category === 'Title units')
    .map((r) => ({ d: parseAsOf(r['As Of']), v: num(r.Value), r }))
    .sort((a, b) => a.d - b.d);
  if (pts.length < 2) return null;
  const H = 200;
  const M = { t: 16, r: 50, b: 28, l: 40 };
  const iw = width - M.l - M.r;
  const ih = H - M.t - M.b;
  const d0 = new Date(2023, 5, 1);
  const d1 = pts[pts.length - 1].d;
  const yMax = niceMax(pts[pts.length - 1].v);
  const x = (d) => M.l + ((d - d0) / (d1 - d0 || 1)) * iw;
  const y = (v) => M.t + ih - (v / yMax) * ih;
  let path = `M${x(d0)},${y(0)}`;
  pts.forEach((p) => {
    path += `H${x(p.d)}V${y(p.v)}`;
  });
  return (
    <svg width={width} height={H} role="img" aria-label="Street Fighter 6 cumulative sales milestones">
      {[0, 0.5, 1].map((f) => (
        <g key={f}>
          <line x1={M.l} x2={M.l + iw} y1={y(yMax * f)} y2={y(yMax * f)} stroke={GRID} />
          <text x={M.l - 6} y={y(yMax * f)} dy="0.32em" textAnchor="end" className="axis">
            {yMax * f}M
          </text>
        </g>
      ))}
      <path d={path} fill="none" stroke={RED} strokeWidth="3" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={x(p.d)} cy={y(p.v)} r="4" fill={RED} />
          {(i === 0 || i === pts.length - 1) && (
            <text x={x(p.d) + (i ? 0 : 8)} y={y(p.v) + (i ? -10 : -4)} textAnchor={i ? 'end' : 'start'} className="bar-val sf">
              {fmtUnits(p.v)} · {p.r['As Of']}
            </text>
          )}
        </g>
      ))}
      {[2023, 2024, 2025, 2026]
        .filter((yr) => new Date(yr, 0, 1) <= d1)
        .map((yr) => (
          <text key={yr} x={x(new Date(Math.max(d0, new Date(yr, 0, 1))))} y={H - 8} textAnchor="middle" className="axis">
            {yr}
          </text>
        ))}
    </svg>
  );
}

// ---------------------------------------------------------------- section

export default function Franchise({ rows, loadedAt }) {
  const ref = useRef(null);
  const width = useWidth(ref);
  const colW = width > 980 ? (width - 48) / 2 : width;

  const latest = (filter) => {
    const r = rows.filter(filter).sort((a, b) => parseAsOf(b['As Of']) - parseAsOf(a['As Of']))[0];
    return r ? { v: num(r.Value), r } : null;
  };

  // lifetime units ranking (latest point per franchise)
  const ranking = useMemo(() => {
    const m = new Map();
    rows
      .filter((r) => r.Category === 'Series units (cumulative)')
      .forEach((r) => {
        const prev = m.get(r.Franchise);
        if (!prev || parseAsOf(r['As Of']) > parseAsOf(prev['As Of'])) m.set(r.Franchise, r);
      });
    return [...m.values()].map((r) => ({ franchise: r.Franchise, v: num(r.Value), r })).sort((a, b) => b.v - a.v);
  }, [rows]);
  const sfRank = ranking.findIndex((d) => d.franchise === SF) + 1;
  const sfSeries = ranking.find((d) => d.franchise === SF);
  const sfFirst = rows
    .filter((r) => r.Franchise === SF && r.Category === 'Series units (cumulative)')
    .sort((a, b) => parseAsOf(a['As Of']) - parseAsOf(b['As Of']))[0];

  const titles = useMemo(() => {
    const m = new Map();
    rows
      .filter((r) => r.Category === 'Title units')
      .forEach((r) => {
        const prev = m.get(r.Title);
        if (!prev || parseAsOf(r['As Of']) > parseAsOf(prev['As Of'])) m.set(r.Title, r);
      });
    return [...m.values()]
      .map((r) => ({ label: r.Title, franchise: r.Franchise, v: num(r.Value), source: r.Source, note: r.Note }))
      .sort((a, b) => b.v - a.v)
      .slice(0, 14);
  }, [rows]);

  const films = useMemo(
    () =>
      rows
        .filter((r) => r.Category === 'Box office')
        .map((r) => ({ label: r.Title, franchise: r.Franchise, v: num(r.Value), source: r.Source, note: r.Note }))
        .sort((a, b) => b.v - a.v),
    [rows],
  );
  const sfFilms = films.filter((f) => f.franchise === SF).reduce((a, b) => a + b.v, 0);
  const sf6 = latest((r) => r.Title === 'Street Fighter 6' && r.Category === 'Title units');
  const arcade = latest((r) => r.Franchise === SF && r.Category === 'Arcade revenue' && /all versions/i.test(r.Title));

  const sources = useMemo(() => {
    const m = new Map();
    rows.forEach((r) => {
      if (r.Source && !m.has(r.Source)) m.set(r.Source, r['Source URL']);
    });
    return [...m.entries()];
  }, [rows]);
  const secondary = rows.filter((r) => /secondary|estimate|derived/i.test(`${r.Note} ${r.Source}`)).length;

  if (!rows.length) {
    return (
      <section className="franchise" ref={ref}>
        <p className="error">No rows came back from the “Franchise Metrics” datasource.</p>
      </section>
    );
  }

  return (
    <section className="franchise" ref={ref} aria-label="The franchise in numbers">
      <header className="section-head static">
        <p className="eyebrow">The franchise in numbers</p>
        <h2 className="brush-title">
          {sfSeries ? `${fmtUnits(sfSeries.v)} games sold — and still climbing` : 'Street Fighter by the numbers'}
        </h2>
        <p className="lede">
          {sfSeries &&
            `Street Fighter ranks #${sfRank} among fighting-game franchises in lifetime units, behind ${ranking
              .slice(0, sfRank - 1)
              .map((d) => d.franchise)
              .join(', ')}. ${
              sfFirst ? `Since ${parseAsOf(sfFirst['As Of']).getFullYear()} it has added ${fmtUnits(sfSeries.v - num(sfFirst.Value))} units, ` : ''
            }driven by Street Fighter 6. Its real outlier is the arcade: Street Fighter II's estimated lifetime gross dwarfs anything in this genre.`}
        </p>
      </header>

      <div className="kpis">
        {sfSeries && (
          <div className="kpi">
            <span className="kpi-v">{fmtUnits(sfSeries.v)}</span>
            <span className="kpi-l">series units sold</span>
            <span className="kpi-s">as of {sfSeries.r['As Of']}</span>
          </div>
        )}
        {sf6 && (
          <div className="kpi">
            <span className="kpi-v">{fmtUnits(sf6.v)}</span>
            <span className="kpi-l">Street Fighter 6</span>
            <span className="kpi-s">as of {sf6.r['As Of']}</span>
          </div>
        )}
        {sfFilms > 0 && (
          <div className="kpi">
            <span className="kpi-v">{fmtUsd(sfFilms)}</span>
            <span className="kpi-l">worldwide box office, all SF films</span>
            <span className="kpi-s">unadjusted USD</span>
          </div>
        )}
        {arcade && (
          <div className="kpi">
            <span className="kpi-v">~{fmtUsd(arcade.v)}</span>
            <span className="kpi-l">Street Fighter II lifetime gross</span>
            <span className="kpi-s">estimate, 2016 dollars</span>
          </div>
        )}
      </div>

      <div className="panel wide">
        <h3>Street Fighter climbs steadily but trails Mortal Kombat, Smash and Tekken in lifetime units</h3>
        <p className="sub">
          Cumulative franchise units sold, millions, by reporting date. Hover a point for its source. Series with conflicting totals
          (e.g. Soulcalibur) are omitted.
        </p>
        <SeriesLines rows={rows} width={width} />
      </div>

      <div className="grid2">
        <div className="panel">
          <h3>Smash Ultimate outsells every other fighting game; Street Fighter V and 6 lead Capcom's modern era</h3>
          <p className="sub">Lifetime units of individual titles, latest figure, millions</p>
          <Bars items={titles} width={colW} fmt={fmtUnits} label="Best-selling individual fighting games" />
        </div>
        <div className="panel">
          <h3>
            Mortal Kombat rules the box office; Street Fighter's films total {fmtUsd(sfFilms)}, led by{' '}
            {films.find((f) => f.franchise === SF)?.label || 'its 1994 film'}
          </h3>
          <p className="sub">Worldwide box office, millions of USD, not adjusted for inflation</p>
          <Bars items={films} width={colW} fmt={fmtUsd} label="Fighting-game film box office" />
        </div>
      </div>

      <div className="grid2">
        <div className="panel">
          <h3>Street Fighter 6 passed {sf6 ? fmtUnits(sf6.v) : 'its latest milestone'} in about three years</h3>
          <p className="sub">Cumulative units at each announced milestone</p>
          <Milestones rows={rows} width={colW} />
        </div>
        <div className="panel callout">
          <h3>Why the arcade number matters</h3>
          <p>
            In the early 1990s, Street Fighter II sold arcade cabinets and kits, and every coin-op round was a sale. Estimates of
            its lifetime gross run around {arcade ? fmtUsd(arcade.v) : '$10B'} (inflation-adjusted, counting arcade and home versions),
            far more than any fighting game has made from units at retail. Treat it as an order of magnitude, not an audited figure.
          </p>
        </div>
      </div>

      <footer className="sources">
        <p>
          <strong>Sources & caveats.</strong> Queried live from the “Franchise Metrics” datasource
          {loadedAt ? ` at ${loadedAt.toLocaleString()}` : ''}. Figures were compiled from publisher IR releases and press coverage;{' '}
          {secondary} of {rows.length} rows rely on secondary reporting or estimates (see the Note column). Publishers count units
          differently (sell-in vs. sell-through, bundles, digital).
        </p>
        <ul>
          {sources.map(([s, url]) => (
            <li key={s}>
              {s}
              {url ? <span className="url"> — {url}</span> : null}
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
