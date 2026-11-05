import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function renderError(msg) {
  const root = document.getElementById('app');
  root.textContent = '';
  const p = document.createElement('p');
  p.className = 'error';
  p.textContent = `Live query unavailable: ${msg}`;
  root.appendChild(p);
}

// Surface uncaught errors on screen — there is no visible console inside Tableau.
window.addEventListener('error', (e) => {
  if (!document.querySelector('main')) renderError(e.message);
});

try {
  createRoot(document.getElementById('app')).render(<App />);
} catch (e) {
  renderError(e.message || String(e));
}
