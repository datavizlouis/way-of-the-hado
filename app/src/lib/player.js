// The site's one audio player: whatever is selected on the select screen keeps looping
// while the viewer moves around the page.
//
// Tableau's extension sandbox won't load package files as <audio> media ("no supported
// sources") or through fetch(), but <script src> works. So the build wraps each track as
// src/audio/<id>.js, which hands its bytes to window.HADO_TRACK, and Web Audio decodes and
// plays them. That also makes the loop gapless, from each track's own loop point.
//
// Browsers keep the audio context suspended until the viewer's first click or key press;
// a track started before then becomes audible on that gesture.

import { audioUrl } from '../assets.js';
import { Chiptune } from './chiptune.js';
import { TRACK_LOOPS } from './trackLoops.js';

const VOLUME = 0.6;
const DECODED_KEPT = 3; // a decoded track is ~20 MB of memory, so keep only the recent few
const chip = new Chiptune();

let current = null;
let source = null;
let playing = false;
let problem = null;
const listeners = new Set();
const notify = () => listeners.forEach((fn) => fn());

function report(message) {
  problem = message;
  playing = false;
  notify();
}

function setPlaying(v) {
  if (v === playing) return;
  playing = v;
  notify();
}

// ------------------------------------------------------------------ Web Audio graph

let ctx = null;
let analyser = null;
function audioContext() {
  if (ctx) return ctx;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  const gain = ctx.createGain();
  gain.gain.value = VOLUME;
  analyser = ctx.createAnalyser();
  analyser.fftSize = 64;
  gain.connect(analyser);
  analyser.connect(ctx.destination);
  ctx.output = gain;
  ctx.onstatechange = () => setPlaying(!!source && ctx.state === 'running');
  return ctx;
}

// ------------------------------------------------------------------ loading tracks

const waiting = new Map(); // id -> resolve, while its script loads
window.HADO_TRACK = (id, base64) => {
  waiting.get(id)?.(base64);
  waiting.delete(id);
};

function loadBytes(id) {
  return new Promise((resolve, reject) => {
    waiting.set(id, resolve);
    const s = document.createElement('script');
    s.src = audioUrl(id);
    s.onload = () => s.remove();
    s.onerror = () => {
      s.remove();
      waiting.delete(id);
      reject(new Error(`could not load ${audioUrl(id)}`));
    };
    document.head.appendChild(s);
  });
}

function decodeBytes(id) {
  return loadBytes(id).then((base64) => {
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    return audioContext().decodeAudioData(bytes.buffer);
  });
}

const decoded = new Map(); // id -> Promise<AudioBuffer>, oldest first
function loadTrack(id) {
  if (decoded.has(id)) {
    const p = decoded.get(id);
    decoded.delete(id);
    decoded.set(id, p);
    return p;
  }
  const p = decodeBytes(id);
  p.catch(() => decoded.delete(id));
  decoded.set(id, p);
  if (decoded.size > DECODED_KEPT) decoded.delete(decoded.keys().next().value);
  return p;
}

function stopSource() {
  if (!source) return;
  source.stop();
  source.disconnect();
  source = null;
}

// ------------------------------------------------------------------ public

export function playTrack(id) {
  current = id;
  chip.stop();
  stopSource();
  if (!audioUrl(id)) {
    chip.setVolume(VOLUME);
    chip.play(id);
    setPlaying(chip.ctx?.state === 'running');
    return;
  }
  setPlaying(false);
  loadTrack(id).then(
    (buffer) => {
      if (current !== id) return; // a newer choice took over while this one loaded
      const ac = audioContext();
      source = ac.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.loopStart = TRACK_LOOPS[id] ?? 0; // the intro only plays once
      source.loopEnd = buffer.duration;
      source.connect(ac.output);
      source.start();
      problem = null;
      setPlaying(ac.state === 'running');
      notify();
    },
    (e) => report(`Audio could not play: ${e.message}`),
  );
}

// Sound effects: short one-shots over the music, kept decoded so they land on their cue.
const sfx = new Map(); // id -> Promise<AudioBuffer>
// silence at the start of a file, in seconds, skipped so the sound lands on its cue
const SFX_LEAD = { shoryuken: 0.3, hadouken: 0.15 };
function loadSfx(id) {
  if (!sfx.has(id)) {
    const p = decodeBytes(id);
    p.catch((e) => report(`Sound effect ${id} could not load: ${e.message}`));
    sfx.set(id, p);
  }
  return sfx.get(id);
}

export function preloadSfx(ids) {
  ids.forEach(loadSfx);
}

/** Play a one-shot. Before the viewer's first click browsers keep audio off, so it's skipped. */
export function playSfx(id) {
  if (!ctx || ctx.state !== 'running') return;
  loadSfx(id).then((buffer) => {
    const s = ctx.createBufferSource();
    s.buffer = buffer;
    s.connect(ctx.output);
    s.start(0, SFX_LEAD[id] ?? 0);
  });
}

const onGesture = () => {
  if (current && !audioUrl(current)) {
    if (!playing) playTrack(current);
  } else if (ctx) {
    ctx.resume().catch((e) => report(`Audio could not start: ${e.message}`));
  }
};
window.addEventListener('pointerdown', onGesture, true);
window.addEventListener('keydown', onGesture, true);

export const isPlaying = () => playing;
export const audioProblem = () => problem;
export function trackLevels(n) {
  if (!audioUrl(current)) return chip.levels(n);
  if (!analyser || !playing) return null;
  const arr = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(arr);
  return Array.from({ length: n }, (_, i) => arr[Math.min(arr.length - 1, i + 1)] / 255);
}
export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
