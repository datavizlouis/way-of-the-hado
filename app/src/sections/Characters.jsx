import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FieldScene } from '../lib/fieldScene.js';
import { Fighter, parseMoves } from '../lib/fighter.js';
import { strokeImage } from '../lib/brush.js';
import { useInView } from '../lib/useInView.js';
import SplatPanel from './SplatPanel.jsx';
import { renderFireText } from '../lib/logo.js';

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

// 2D fallback when WebGL is unavailable in the host: a row of canvases with the same
// dark-until-hover behaviour.
function FallbackRow({ characters, onSelect, onHover, selected, fighterRef }) {
  const rowRef = useRef(null);
  useEffect(() => {
    const fighters = characters.map((c) => new Fighter(c));
    fighterRef.current = fighters;
    const row = rowRef.current;
    row.textContent = '';
    fighters.forEach((f) => {
      const b = document.createElement('button');
      b.className = 'fallback-fighter';
      b.setAttribute('aria-label', f.c.Name);
      b.appendChild(f.canvas);
      b.addEventListener('mouseenter', () => onHover(f.c.Id));
      b.addEventListener('mouseleave', () => onHover(null));
      b.addEventListener('click', () => onSelect(f.c.Id));
      row.appendChild(b);
    });
    let raf;
    let last = performance.now();
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      fighters.forEach((f) => f.update(dt));
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [characters]);
  return <div ref={rowRef} className={`fallback-row ${selected ? 'has-selection' : ''}`} data-selected={selected || ''} />;
}

// A phrase in the same fire lettering as HADO in the intro, redrawn once the brush font is in.
function FireTitle({ text, width }) {
  const ref = useRef(null);
  useEffect(() => {
    let live = true;
    const draw = () => {
      if (!live) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { canvas, w, h } = renderFireText(text, width, dpr);
      const c = ref.current;
      c.width = canvas.width;
      c.height = canvas.height;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      c.getContext('2d').drawImage(canvas, 0, 0);
    };
    document.fonts.load('40px "HadoBrush"').then(draw);
    return () => {
      live = false;
    };
  }, [text, width]);
  return <canvas ref={ref} className="fire-title" aria-hidden="true" />;
}

export default function Characters({ characters }) {
  const stageRef = useRef(null);
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const fallbackFighters = useRef([]);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [activeMove, setActiveMove] = useState(null);
  const [gl] = useState(webglAvailable);
  const [error, setError] = useState(null);
  const inView = useInView(sectionRef, 0.01);

  const redStroke = useMemo(() => strokeImage(360, 110, '#c4283c', 9), []);
  const redStrokeHover = useMemo(() => strokeImage(360, 110, '#e23a4e', 21), []);
  const blackStroke = useMemo(() => strokeImage(360, 110, '#0b0d14', 33), []);

  useEffect(() => {
    if (!gl) return undefined;
    let scene;
    try {
      scene = new FieldScene(stageRef.current, characters, {
        onHover: setHovered,
        projectileLimit: () => {
          const panel = sectionRef.current?.querySelector('.bio-panel');
          return panel ? panel.getBoundingClientRect().left - sectionRef.current.getBoundingClientRect().left : null;
        },
        onSelect: (id) => {
          setSelected(id);
          setActiveMove(null);
        },
      });
    } catch (e) {
      setError(e.message || String(e));
      return undefined;
    }
    sceneRef.current = scene;
    const ro = new ResizeObserver(() => scene.resize());
    ro.observe(stageRef.current);
    const vis = setInterval(() => scene.setVisible(inView.current), 200);
    return () => {
      clearInterval(vis);
      ro.disconnect();
      scene.dispose();
    };
  }, [characters, gl]);

  const sel = characters.find((c) => c.Id === selected);
  const hov = characters.find((c) => c.Id === hovered);
  const moves = sel ? parseMoves(sel.Moves) : [];

  const select = (id) => {
    if (sceneRef.current) sceneRef.current.select(id);
    else {
      setSelected(id);
      setActiveMove(null);
    }
  };
  const back = () => {
    if (sceneRef.current) sceneRef.current.back();
    else setSelected(null);
    setActiveMove(null);
  };
  const play = (name) => {
    setActiveMove(name);
    if (sceneRef.current) sceneRef.current.playMove(name);
    else fallbackFighters.current.find((f) => f.c.Id === selected)?.setMove(name);
  };

  return (
    <section className="characters screen" ref={sectionRef} aria-label="The fighters">
      <div className="field-stage" ref={stageRef}>
        {(!gl || error) && (
          <FallbackRow
            characters={characters}
            selected={selected}
            fighterRef={fallbackFighters}
            onHover={setHovered}
            onSelect={select}
          />
        )}
      </div>

      <header className={`section-head ${selected ? 'dim' : ''}`}>
        <h2 className="meet-title">
          <span className="meet-the">Meet the</span>
          <FireTitle text="Street Fighters" width={560} />
          <span className="sr-only">Street Fighters</span>
        </h2>
      </header>

      <div className={`hover-tag ${hov && !selected ? 'show' : ''}`} aria-live="polite">
        {hov && !selected && (
          <>
            <strong>{hov.Name}</strong>
            <span>
              {hov.Country} · {hov.Style}
            </span>
          </>
        )}
      </div>

      {/* keyboard / screen-reader access to the roster */}
      <nav className="sr-only" aria-label="Choose a fighter">
        {characters.map((c) => (
          <button key={c.Id} onClick={() => select(c.Id)}>
            {c.Name}
          </button>
        ))}
      </nav>

      <SplatPanel open={!!sel} seed={sel ? sel.Name.length * 7 : 3} className="bio-panel">
        {sel && (
          <div className="bio" key={sel.Id}>
            <button className="back" style={{ '--stroke': `url(${blackStroke})` }} onClick={back}>
              ← All fighters
            </button>
            <p className="eyebrow ink">
              {sel.Country} · {sel.Style}
            </p>
            <h3 className="brush-title ink">{sel.Name}</h3>
            <p className="tagline">{sel.Tagline}</p>
            <p className="bio-text">{sel.Bio}</p>
            <dl className="facts">
              <div>
                <dt>Debut</dt>
                <dd>{sel.Debut}</dd>
              </div>
              <div>
                <dt>Fighting style</dt>
                <dd>{sel.Style}</dd>
              </div>
            </dl>
            <p className="moves-label">Special moves</p>
            <div className="moves">
              {moves.map((m) => (
                <button
                  key={m.name}
                  className={`move ${activeMove === m.name ? 'active' : ''}`}
                  style={{ '--stroke': `url(${redStroke})`, '--stroke-hover': `url(${redStrokeHover})` }}
                  onClick={() => play(m.name)}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </SplatPanel>
      {error && <p className="error small">3D field unavailable ({error}) — showing the 2D roster instead.</p>}
    </section>
  );
}
