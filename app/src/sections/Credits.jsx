import React, { useEffect, useMemo, useRef, useState } from 'react';
import { assetUrl } from '../assets.js';
import { WIN_QUOTES } from '../lib/winQuotes.js';
import ScrollHint from './ScrollHint.jsx';

// The credits, as the Street Fighter II win screen: a beaten fighter's mugshot on the left and a
// win quote where player 2 would stand, each changing at random every 2 seconds, on their own.
// Below: data sources (every source in the "Franchise Metrics" rows), asset sources and copyright.

const EVERY = 2000;

/** A random index other than the current one. */
const another = (n, cur) => (n < 2 ? 0 : (cur + 1 + Math.floor(Math.random() * (n - 1))) % n);

function useCycle(n) {
  const [i, setI] = useState(() => Math.floor(Math.random() * Math.max(1, n)));
  useEffect(() => {
    if (n < 2) return undefined;
    const t = setInterval(() => setI((cur) => another(n, cur)), EVERY);
    return () => clearInterval(t);
  }, [n]);
  return Math.min(i, Math.max(0, n - 1));
}

export default function Credits({ rows, characters, loadedAt }) {
  const faces = useMemo(
    () => characters.map((c) => ({ name: c.Name, src: assetUrl(`img/portraits/${c.Id}-lose.png`) })).filter((f) => f.src),
    [characters],
  );
  const missingFaces = characters.filter((c) => !assetUrl(`img/portraits/${c.Id}-lose.png`)).map((c) => c.Id);
  const face = faces[useCycle(faces.length)];
  const quote = WIN_QUOTES[useCycle(WIN_QUOTES.length)];

  const sources = useMemo(() => {
    const m = new Map();
    rows.forEach((r) => {
      if (r.Source && r['Source URL'] && !m.has(r.Source)) m.set(r.Source, r['Source URL']);
    });
    return [...m.entries()];
  }, [rows]);
  const quoteSources = [...new Set(WIN_QUOTES.map((q) => q.source))];

  // The last screen: scrolling down goes back to the top of the page. Scrolling up is left to
  // the page's one-screen scroll.
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const main = el.closest('main');
    const onWheel = (e) => {
      if (e.deltaY < 4) return;
      e.preventDefault();
      main.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const onKey = (e) => {
      if (!['PageDown', 'ArrowDown'].includes(e.key)) return;
      e.preventDefault();
      main.scrollTo({ top: 0, behavior: 'smooth' });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('keydown', onKey);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section className="credits-scene screen" ref={ref} aria-label="Credits">
      <div className="duel">
        <div className="duel-face">
          {face ? (
            <img key={face.src} src={face.src} alt={`${face.name}, beaten`} />
          ) : (
            <p className="error">No beaten mugshots found (img/portraits/&lt;id&gt;-lose.png); run scripts/build_atlas.py.</p>
          )}
          {missingFaces.length > 0 && faces.length > 0 && <p className="error">Missing beaten mugshots: {missingFaces.join(', ')}</p>}
        </div>
        <div className="duel-quote" aria-live="off">
          {quote && (
            <p className="pixel win-quote" key={quote.quote}>
              {quote.quote}
            </p>
          )}
        </div>
      </div>

      <div className="credit-boxes">
        <div className="credit-box wide">
          <h3 className="pixel">Data sources</h3>
          <ul className="credit-list">
            {sources.map(([s, url]) => (
              <li key={s} title={`${s} — ${url}`}>
                {s}
              </li>
            ))}
          </ul>
          <p className="credit-note">
            Queried live from the “Franchise Metrics” datasource{loadedAt ? ` at ${loadedAt.toLocaleString()}` : ''}. Hover a source for its address.
            Publishers count differently: shipped versus sold, bundles, and digital copies.
          </p>
        </div>
        <div className="credit-box">
          <h3 className="pixel">Asset sources</h3>
          <ul className="credit-lines">
            <li>
              <em>Super Street Fighter II</em> sprites ripped by Lord Zymeth (finaldestinationpixelation.com), via The Spriters Resource. Akuma's sprites
              ripped by Deekman.
            </li>
            <li>Select-screen portraits ripped by Phatman; select-screen artwork (named portraits, flags and background) captured by GaryCXJK.</li>
            <li>Ryu's curse adapted from the Cursed effect in pixelfx by Patch (MIT), with smoke from Sprite Fusion by Hugo Duprez (MIT).</li>
            <li>Brush font: Cafe Felix by JSHcreates (personal-use licence). World map outlines from Natural Earth (public domain).</li>
            {quoteSources.length > 0 && <li>Win quotes transcribed from {quoteSources.join(', ')}.</li>}
          </ul>
        </div>
        <div className="credit-box">
          <h3 className="pixel">Copyright</h3>
          <ul className="credit-lines">
            <li>A non-commercial fan visualization.</li>
            <li>Street Fighter and all its characters, names, artwork, music and quotes are © Capcom.</li>
            <li>Mortal Kombat, Super Smash Bros., Tekken, Soulcalibur, The King of Fighters, Guilty Gear, Virtua Fighter, Dead or Alive, Fatal Fury and Samurai Shodown belong to their respective owners.</li>
            <li>Story text, charts and the data compilation by the author.</li>
          </ul>
        </div>
      </div>
      <ScrollHint text="Back to top" />
    </section>
  );
}
