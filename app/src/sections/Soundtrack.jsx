import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Fighter } from '../lib/fighter.js';
import { playTrack, playSfx, preloadSfx, isPlaying, subscribe, trackLevels, audioProblem } from '../lib/player.js';
import { assetUrl } from '../assets.js';
import { useInView } from '../lib/useInView.js';
import { drawStageMap, STAGES, FLAG_POS, MAP_W, MAP_H } from '../lib/stageMap.js';
import { getImage } from '../assets.js';

const COLS = 8;
// the "?" tile: the franchise theme, and where the cursor starts. Its Id picks the audio
// file (assets/audio/opening.wav). It has no stage, so the map lights nothing up.
const THEME = { Id: 'opening', Name: 'Street Fighter', Country: 'Main theme', Theme: 'Street Fighter Theme' };

function Portrait({ character }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    el.textContent = '';
    const custom = assetUrl(`img/portraits/${character.Id}.png`);
    if (custom) {
      const img = document.createElement('img');
      img.src = custom;
      img.alt = '';
      el.appendChild(img);
      return;
    }
    const f = new Fighter(character);
    const c = document.createElement('canvas');
    c.width = 48;
    c.height = 48;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    // head-and-shoulders crop of the idle sprite
    ctx.drawImage(f.canvas, 34, 18, 64, 64, 0, 0, 48, 48);
    el.appendChild(c);
  }, [character]);
  return <span className="portrait" ref={ref} aria-hidden="true" />;
}

function StageMap({ character }) {
  const ref = useRef(null);
  const flags = useMemo(() => {
    const out = {};
    for (const country of Object.keys(FLAG_POS)) {
      const on = assetUrl(`img/flags/${country}.png`);
      const off = assetUrl(`img/flags/${country}-off.png`);
      out[country] = { on: on ? getImage(on) : null, off: off ? getImage(off) : null };
    }
    return out;
  }, []);
  useEffect(() => {
    const ctx = ref.current.getContext('2d');
    let blink = true;
    const draw = () => drawStageMap(ctx, character?.Id, flags, blink);
    draw();
    const t = setInterval(() => {
      blink = !blink;
      draw();
    }, 320);
    return () => clearInterval(t);
  }, [character, flags]);
  const stage = character ? STAGES[character.Id] : null;
  return (
    <canvas
      ref={ref}
      width={MAP_W}
      height={MAP_H}
      className="stage-map"
      role="img"
      aria-label={stage ? `World map: ${character.Name}'s stage in ${character.Country}` : 'World map of the stages'}
    />
  );
}

export default function Soundtrack({ characters }) {
  const sectionRef = useRef(null);
  const eqRef = useRef(null);
  const [cursor, setCursor] = useState(0);
  const [playing, setPlaying] = useState(isPlaying);
  const [track, setTrack] = useState(0); // the item whose music is on; the cursor only browses
  const inView = useInView(sectionRef, 0.01);

  const items = useMemo(() => [THEME, ...characters], [characters]);
  const shown = items[cursor]; // under the cursor
  const picked = items[track]; // clicked: the portrait waits for this

  const [problem, setProblem] = useState(audioProblem);
  useEffect(() => {
    const sync = () => {
      setPlaying(isPlaying());
      setProblem(audioProblem());
    };
    sync(); // the music may have started before this screen was ready to hear about it
    return subscribe(sync);
  }, []);

  useEffect(() => preloadSfx(['select']), []);

  // hovering browses; only a click (or Enter / Space on the keyboard) changes the portrait and music
  const choose = (i) => {
    setCursor(i);
    setTrack(i);
    playSfx('select');
    playTrack(items[i].Id);
  };

  // equaliser
  useEffect(() => {
    const c = eqRef.current;
    const ctx = c.getContext('2d');
    let raf;
    const bars = 16;
    const lv = new Array(bars).fill(0);
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (!inView.current) return;
      const real = playing ? trackLevels(bars) : null;
      for (let i = 0; i < bars; i++) {
        const target = playing
          ? real
            ? real[i]
            : 0.35 + 0.45 * Math.abs(Math.sin(now * 0.004 * (1 + i * 0.13) + i))
          : 0.04;
        lv[i] += (target - lv[i]) * 0.3;
      }
      // symmetric wave: segments grow up and down from the centre line, so the
      // equaliser's midpoint stays fixed and lines up with the now-playing text
      ctx.clearRect(0, 0, c.width, c.height);
      const bw = c.width / bars;
      const mid = c.height / 2;
      for (let i = 0; i < bars; i++) {
        const segs = Math.max(1, Math.round(lv[i] * 4));
        for (let s = 0; s < segs; s++) {
          ctx.fillStyle = s >= 3 ? '#ff4a4a' : s === 2 ? '#ffd23f' : '#3fe07a';
          ctx.fillRect(i * bw + 1, mid - (s + 1) * 5 + 1, bw - 2, 4);
          ctx.fillRect(i * bw + 1, mid + s * 5, bw - 2, 4);
        }
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const onKey = (e) => {
    // items[0] is the 2x2 "?" tile to the left of both rows; fighters follow in rows of COLS
    const n = items.length;
    const col = (cursor - 1) % COLS;
    let next = cursor;
    if (e.key === 'ArrowRight') next = (cursor + 1) % n;
    else if (e.key === 'ArrowLeft') next = cursor === 0 ? n - 1 : col === 0 ? 0 : cursor - 1;
    else if (e.key === 'ArrowDown') next = cursor === 0 ? 0 : Math.min(n - 1, cursor + COLS);
    else if (e.key === 'ArrowUp') next = cursor > COLS ? cursor - COLS : cursor;
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      choose(cursor);
      return;
    } else return;
    e.preventDefault();
    setCursor(next);
  };

  const namedPortrait = assetUrl(`img/select/${picked.Id}.png`);
  const bgTile = assetUrl('img/select-bg.png');
  return (
    <section
      className="soundtrack screen"
      ref={sectionRef}
      style={
        bgTile && {
          backgroundImage: `linear-gradient(rgba(4,6,20,0.55), rgba(4,6,20,0.8)), url(${bgTile})`,
          backgroundSize: 'auto, 512px auto',
        }
      }
      aria-label="Soundtracks"
    >
      <div className="crt" aria-hidden="true" />
      <header className="ost-head">
        <h2 className="pixel ost-title">Player select</h2>
      </header>

      <div className="ost-map">
        <StageMap character={shown} />
      </div>

      <div className="ost-select">
        <div className="p1-portrait">
          {picked === THEME ? (
            <div className="q-portrait pixel" aria-hidden="true">?</div>
          ) : namedPortrait ? (
            <img className="select-portrait" src={namedPortrait} alt="" />
          ) : (
            <div className="nameplate pixel">{picked.Name.toUpperCase()}</div>
          )}
          <span className="sr-only">
            {picked.Name}, {picked.Country}
          </span>
        </div>
        <div className="select-col">
          <div className="now-playing">
            <p className="pixel small-pixel dimmed" style={{ visibility: playing ? 'visible' : 'hidden' }}>Now playing</p>
            <p className="pixel track">{playing ? items[track].Theme : 'Click anywhere to start the music'}</p>
            <canvas ref={eqRef} width="160" height="40" className="eq" aria-hidden="true" />
          </div>
        <div
          className="select-grid"
          role="listbox"
          aria-label="Fighters"
          tabIndex={0}
          aria-activedescendant={`ost-${shown?.Id}`}
          onKeyDown={onKey}
          style={{ '--cols': COLS + 2 }}
        >
          {items.map((c, i) => (
            <button
              key={c.Id}
              id={`ost-${c.Id}`}
              role="option"
              aria-selected={cursor === i}
              className={`tile ${c === THEME ? 'tile-q' : ''} ${cursor === i ? 'cursor' : ''}`}
              onMouseEnter={() => setCursor(i)}
              onFocus={() => setCursor(i)}
              onClick={() => choose(i)}
              title={c.Name}
            >
              {c === THEME ? <span className="q-mark pixel" aria-hidden="true">?</span> : <Portrait character={c} />}
              {cursor === i && <span className="cursor-tag pixel">1P</span>}
              <span className="sr-only">{c.Name}</span>
            </button>
          ))}
        </div>
        </div>
      </div>
      {problem && <p className="ost-note error">{problem}</p>}
    </section>
  );
}
