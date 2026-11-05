import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Fighter } from '../lib/fighter.js';
import { Chiptune } from '../lib/chiptune.js';
import { assetUrl, audioUrl } from '../assets.js';
import { useInView } from '../lib/useInView.js';
import { drawStageMap, STAGES, FLAG_POS, MAP_W, MAP_H } from '../lib/stageMap.js';
import { getImage } from '../assets.js';

const COLS = 8;

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

export default function Soundtrack({ characters, height }) {
  const sectionRef = useRef(null);
  const eqRef = useRef(null);
  const [cursor, setCursor] = useState(0);
  const [armed, setArmed] = useState(false); // audio unlocked by a first click / key press
  const [playing, setPlaying] = useState(false);
  const [volume] = useState(0.6);
  const chip = useMemo(() => new Chiptune(), []);
  const audio = useRef(null);
  const timer = useRef(null);
  const inView = useInView(sectionRef, 0.01);

  const shown = characters[cursor];
  const fileUrl = shown ? audioUrl(shown.Id) : null;

  const stopAll = () => {
    clearTimeout(timer.current);
    chip.stop();
    if (audio.current) audio.current.pause();
    setPlaying(false);
  };

  const playFor = (i) => {
    chip.stop();
    if (audio.current) audio.current.pause();
    const c = characters[i];
    const url = audioUrl(c.Id);
    if (url) {
      if (!audio.current) audio.current = new Audio();
      audio.current.src = url;
      audio.current.loop = true;
      audio.current.volume = volume;
      audio.current.play().catch(() => {});
    } else {
      chip.setVolume(volume);
      chip.play(c.Id);
    }
    setPlaying(true);
  };

  // the theme simply follows the selected fighter (debounced so sweeping the cursor
  // across the grid doesn't restart the music on every tile)
  const select = (i, { immediate = false } = {}) => {
    setCursor(i);
    if (!armed) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => playFor(i), immediate ? 0 : 220);
  };

  // first gesture in the section unlocks audio and starts the current fighter's theme
  const arm = () => {
    if (armed) return;
    setArmed(true);
    playFor(cursor);
  };


  useEffect(() => {
    chip.setVolume(volume);
    if (audio.current) audio.current.volume = volume;
  }, [volume, chip]);

  // stop when the section scrolls away; the next fighter change starts it again
  useEffect(() => {
    const t = setInterval(() => {
      if (!inView.current && playing) stopAll();
    }, 400);
    return () => clearInterval(t);
  });

  useEffect(() => () => stopAll(), []);

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
      const real = !fileUrl && playing ? chip.levels(bars) : null;
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
  }, [playing, fileUrl, chip]);

  const onKey = (e) => {
    const n = characters.length;
    let next = cursor;
    if (e.key === 'ArrowRight') next = (cursor + 1) % n;
    else if (e.key === 'ArrowLeft') next = (cursor - 1 + n) % n;
    else if (e.key === 'ArrowDown') next = Math.min(n - 1, cursor + COLS);
    else if (e.key === 'ArrowUp') next = Math.max(0, cursor - COLS);
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      arm();
      return;
    } else return;
    e.preventDefault();
    arm();
    select(next);
  };

  const namedPortrait = shown ? assetUrl(`img/select/${shown.Id}.png`) : null;
  const bgTile = assetUrl('img/select-bg.png');
  return (
    <section
      className="soundtrack"
      ref={sectionRef}
      onPointerDown={arm}
      style={{
        height,
        ...(bgTile && {
          backgroundImage: `linear-gradient(rgba(4,6,20,0.55), rgba(4,6,20,0.8)), url(${bgTile})`,
          backgroundSize: 'auto, 512px auto',
        }),
      }}
      aria-label="Soundtracks"
    >
      <div className="crt" aria-hidden="true" />
      <header className="ost-head">
        <p className="pixel eyebrow-pixel">Sound test</p>
        <h2 className="pixel ost-title">Player select</h2>
      </header>

      <div className="ost-map">
        <StageMap character={shown} />
      </div>

      <div className="ost-select">
        <div className="p1-portrait">
          <span className="player-tag pixel">1P</span>
          {namedPortrait ? (
            <img className="select-portrait" src={namedPortrait} alt="" />
          ) : (
            <div className="nameplate pixel">{shown?.Name?.toUpperCase()}</div>
          )}
          <span className="sr-only">
            {shown?.Name}, {shown?.Country}
          </span>
        </div>
        <div className="select-col">
          <div className="now-playing">
            <p className="pixel small-pixel dimmed">{playing ? 'Now playing' : armed ? 'Paused' : 'Sound test'}</p>
            <p className="pixel track">{playing || armed ? shown?.Theme : 'Click a fighter to start the music'}</p>
            <canvas ref={eqRef} width="160" height="40" className="eq" aria-hidden="true" />
          </div>
        <div
          className="select-grid"
          role="listbox"
          aria-label="Fighters"
          tabIndex={0}
          aria-activedescendant={`ost-${shown?.Id}`}
          onKeyDown={onKey}
          style={{ '--cols': COLS }}
        >
          {characters.map((c, i) => (
            <button
              key={c.Id}
              id={`ost-${c.Id}`}
              role="option"
              aria-selected={cursor === i}
              className={`tile ${cursor === i ? 'cursor' : ''}`}
              onMouseEnter={() => select(i)}
              onFocus={() => select(i)}
              onClick={() => {
                if (!armed) arm();
                select(i, { immediate: true });
              }}
              title={c.Name}
            >
              <Portrait character={c} />
              {cursor === i && <span className="cursor-tag pixel">1P</span>}
              <span className="sr-only">{c.Name}</span>
            </button>
          ))}
        </div>
        </div>
      </div>
      <p className="ost-note">
        {fileUrl
          ? 'Hover or use the arrow keys to switch fighters; their theme follows.'
          : `Hover or use the arrow keys to switch fighters. Placeholder chiptune: add assets/audio/${shown?.Id}.mp3 for the real theme.`}
      </p>
    </section>
  );
}
