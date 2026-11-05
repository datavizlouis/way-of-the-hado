import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Fighter } from '../lib/fighter.js';
import { Chiptune } from '../lib/chiptune.js';
import { assetUrl, audioUrl } from '../assets.js';
import { useInView } from '../lib/useInView.js';

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

function BigFighter({ character, playing }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!character) return undefined;
    const f = new Fighter(character);
    const el = ref.current;
    el.textContent = '';
    el.appendChild(f.canvas);
    let raf;
    let last = performance.now();
    let beat = 0;
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      f.update(dt * (playing ? 1.3 : 1));
      beat += dt;
      // pose to the music now and then
      if (playing && beat > 4200 && !f.moveName && f.moves.length) {
        beat = 0;
        f.setMove(f.moves[Math.floor(Math.random() * f.moves.length)].name);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [character, playing]);
  return <div className="big-fighter" ref={ref} aria-hidden="true" />;
}

export default function Soundtrack({ characters, height }) {
  const sectionRef = useRef(null);
  const eqRef = useRef(null);
  const [cursor, setCursor] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const chip = useMemo(() => new Chiptune(), []);
  const audio = useRef(null);
  const inView = useInView(sectionRef, 0.01);

  const sel = chosen != null ? characters[chosen] : null;
  const preview = characters[cursor];
  const fileUrl = sel ? audioUrl(sel.Id) : null;

  const stopAll = () => {
    chip.stop();
    if (audio.current) audio.current.pause();
  };

  const choose = (i) => {
    setCursor(i);
    setChosen(i);
    stopAll();
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

  const togglePlay = () => {
    if (!sel) return choose(cursor);
    if (playing) {
      stopAll();
      setPlaying(false);
    } else choose(chosen);
  };

  useEffect(() => {
    chip.setVolume(volume);
    if (audio.current) audio.current.volume = volume;
  }, [volume, chip]);

  // stop the music when the section scrolls away
  useEffect(() => {
    const t = setInterval(() => {
      if (!inView.current && playing) {
        stopAll();
        setPlaying(false);
      }
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
      ctx.clearRect(0, 0, c.width, c.height);
      const bw = c.width / bars;
      for (let i = 0; i < bars; i++) {
        const segs = Math.round(lv[i] * 10);
        for (let s = 0; s < segs; s++) {
          ctx.fillStyle = s > 7 ? '#ff4a4a' : s > 4 ? '#ffd23f' : '#3fe07a';
          ctx.fillRect(i * bw + 1, c.height - (s + 1) * 5, bw - 2, 4);
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
      choose(cursor);
      return;
    } else return;
    e.preventDefault();
    setCursor(next);
  };

  const shown = sel || preview;
  const namedPortrait = shown ? assetUrl(`img/select/${shown.Id}.png`) : null;
  const flag = shown ? assetUrl(`img/flags/${shown.Id}.png`) : null;
  const bgTile = assetUrl('img/select-bg.png');
  return (
    <section
      className="soundtrack"
      ref={sectionRef}
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
        <h2 className="pixel ost-title">Select your theme</h2>
      </header>

      <div className="ost-stage">
        <div className={`player p1 ${namedPortrait ? 'has-portrait' : ''}`}>
          <div className="player-tag pixel">1P</div>
          {namedPortrait ? (
            <img className="select-portrait" src={namedPortrait} alt="" />
          ) : (
            <div className="nameplate pixel">{shown?.Name?.toUpperCase()}</div>
          )}
          <BigFighter character={shown} playing={playing} />
          {flag ? (
            <img className="flag" src={flag} alt={shown?.Country} />
          ) : (
            <div className="pixel small-pixel">{shown?.Country?.toUpperCase()}</div>
          )}
          <span className="sr-only">{shown?.Name}</span>
        </div>

        <div className="now-playing">
          <p className="pixel small-pixel dimmed">Now playing</p>
          <p className="pixel track">{sel ? sel.Theme : '— insert coin —'}</p>
          <canvas ref={eqRef} width="240" height="56" className="eq" aria-hidden="true" />
          <div className="transport">
            <button className="pixel-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? '❚❚' : '►'}
            </button>
            <label className="vol pixel small-pixel">
              VOL
              <input type="range" min="0" max="1" step="0.05" value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
            </label>
          </div>
          <p className="ost-note">
            {sel
              ? fileUrl
                ? 'Playing the bundled track.'
                : 'Placeholder chiptune — add assets/audio/' + sel.Id + '.mp3 to play the real theme.'
              : 'Pick a fighter to hear their stage theme.'}
          </p>
        </div>

        <div className="player p2" aria-hidden="true">
          <div className="player-tag pixel p2-tag">2P</div>
          <div className="empty-slot" />
          <div className="nameplate pixel blink">PRESS START</div>
        </div>
      </div>

      <div
        className="select-grid"
        role="listbox"
        aria-label="Fighters"
        tabIndex={0}
        aria-activedescendant={`ost-${preview?.Id}`}
        onKeyDown={onKey}
        style={{ '--cols': COLS }}
      >
        {characters.map((c, i) => (
          <button
            key={c.Id}
            id={`ost-${c.Id}`}
            role="option"
            aria-selected={chosen === i}
            className={`tile ${cursor === i ? 'cursor' : ''} ${chosen === i ? 'chosen' : ''}`}
            onMouseEnter={() => setCursor(i)}
            onClick={() => choose(i)}
            title={c.Name}
          >
            <Portrait character={c} />
            {cursor === i && <span className="cursor-tag pixel">1P</span>}
            <span className="sr-only">{c.Name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
