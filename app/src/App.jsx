import React, { useEffect, useState } from 'react';
import { loadAll } from './data.js';
import Intro from './sections/Intro.jsx';
import Characters from './sections/Characters.jsx';
import Soundtrack from './sections/Soundtrack.jsx';
import Franchise from './sections/Franchise.jsx';

// Fixed section heights: inside a Tableau dashboard the extension iframe is as tall as
// the whole zone (~5000-7000px), so viewport units are meaningless here.
const H = { intro: 1000, characters: 1050, soundtrack: 840 };

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
    <main>
      {data.missing.length > 0 && (
        <p className="error banner">
          Missing datasource(s): {data.missing.join(', ')}. Found: {data.sourceNames.join(', ') || 'none'}.
        </p>
      )}
      {data.story.length > 0 && <Intro chapters={data.story} height={H.intro} />}
      {data.characters.length > 0 && <Characters characters={data.characters} height={H.characters} />}
      {data.characters.length > 0 && <Soundtrack characters={data.characters} height={H.soundtrack} />}
      <Franchise rows={data.metrics} loadedAt={data.loadedAt} />
      <footer className="credits">
        <p>
          A non-commercial fan visualization. Street Fighter and all characters, names and artwork are © Capcom. Character
          sprites from <em>Super Street Fighter II</em> were ripped by Lord Zymeth (finaldestinationpixelation.com) and shared on
          The Spriters Resource. Story text, charts and placeholder art by the author.
        </p>
      </footer>
    </main>
  );
}
