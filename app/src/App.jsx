import React, { useEffect, useRef, useState } from 'react';
import { loadAll } from './data.js';
import Intro from './sections/Intro.jsx';
import Characters from './sections/Characters.jsx';
import Soundtrack from './sections/Soundtrack.jsx';
import Franchise from './sections/Franchise.jsx';
import { playTrack } from './lib/player.js';

// The first track on every load: the "?" tile on the select screen.
export const OPENING_TRACK = 'opening';

// One wheel notch or Page key moves exactly one screen. (CSS snapping alone pulls a small
// wheel movement back to where it started.) Sections that use the wheel themselves, like
// the intro's story beats, call preventDefault first and this leaves those events alone.
function useOneScreenScroll(ref, ready) {
  useEffect(() => {
    const main = ref.current;
    if (!main) return undefined;
    let lock = 0;
    const go = (dir) => {
      const vh = main.clientHeight;
      main.scrollTo({ top: (Math.round(main.scrollTop / vh) + dir) * vh, behavior: 'smooth' });
      lock = performance.now() + 850; // long enough for the scroll and the wheel's momentum
    };
    const onWheel = (e) => {
      if (e.defaultPrevented) return;
      const dir = Math.sign(e.deltaY);
      if (!dir) return;
      e.preventDefault();
      if (performance.now() >= lock && Math.abs(e.deltaY) >= 4) go(dir);
    };
    const onKey = (e) => {
      if (e.defaultPrevented) return;
      const dir = { PageDown: 1, ArrowDown: 1, PageUp: -1, ArrowUp: -1 }[e.key];
      if (!dir) return;
      e.preventDefault();
      if (performance.now() >= lock) go(dir);
    };
    main.addEventListener('wheel', onWheel, { passive: false });
    main.addEventListener('keydown', onKey);
    return () => {
      main.removeEventListener('wheel', onWheel);
      main.removeEventListener('keydown', onKey);
    };
  }, [ref, ready]);
}

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const mainRef = useRef(null);
  useOneScreenScroll(mainRef, !!data);

  useEffect(() => playTrack(OPENING_TRACK), []);

  useEffect(() => {
    loadAll()
      .then(setData)
      .catch((e) => setError((e && (e.message || e.errorCode)) || String(e)));
  }, []);

  if (error) {
    return (
      <div className="boot">
        <p className="error">Live query unavailable: {error}</p>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="boot">
        <p className="loading">Loading the Way of the Hado…</p>
      </div>
    );
  }
  return (
    <main ref={mainRef}>
      {data.missing.length > 0 && (
        <p className="error banner">
          Missing datasource(s): {data.missing.join(', ')}. Found: {data.sourceNames.join(', ') || 'none'}.
        </p>
      )}
      {data.story.length > 0 && <Intro chapters={data.story} characters={data.characters} />}
      {data.characters.length > 0 && <Characters characters={data.characters} />}
      {data.characters.length > 0 && <Soundtrack characters={data.characters} />}
      <Franchise rows={data.metrics} loadedAt={data.loadedAt}>
      <footer className="credits">
        <p>
          A non-commercial fan visualization. Street Fighter and all characters, names and artwork are © Capcom. Character
          sprites from <em>Super Street Fighter II</em> were ripped by Lord Zymeth (finaldestinationpixelation.com) and shared on
          The Spriters Resource. Akuma's sprites ripped by Deekman. Ryu's curse adapted from the Cursed effect in pixelfx by Patch (MIT), with smoke from Sprite Fusion by Hugo Duprez (MIT). Select-screen portraits ripped by Phatman; select-screen artwork (named portraits, flags and background) captured by GaryCXJK. Brush font: Cafe Felix by JSHcreates (personal-use licence). World map outlines from Natural Earth (public domain). Story text, charts and placeholder art by the author.
        </p>
      </footer>
      </Franchise>
    </main>
  );
}
