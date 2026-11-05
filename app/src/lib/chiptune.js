// Placeholder soundtrack: a short, original 16-bit-style loop generated per fighter
// with WebAudio (square lead, triangle bass, noise drums). Used until a real track
// is dropped into app/assets/audio/<id>.mp3.

import { makeRng } from './rng.js';

const SCALES = {
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  major: [0, 2, 4, 5, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
};

export class Chiptune {
  constructor() {
    this.ctx = null;
    this.timer = null;
    this.analyser = null;
    this.volume = 0.5;
  }

  ensure() {
    if (this.ctx) return this.ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume * 0.35;
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;
    this.master.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
    // shared noise buffer for drums
    const len = this.ctx.sampleRate * 0.3;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return this.ctx;
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v * 0.35;
  }

  compose(seed) {
    const rng = makeRng(`theme:${seed}`);
    const scaleNames = Object.keys(SCALES);
    const scale = SCALES[scaleNames[Math.floor(rng() * scaleNames.length)]];
    const root = 45 + Math.floor(rng() * 10); // A2..F#3
    const bpm = 128 + Math.floor(rng() * 40);
    const prog = [0, 5, 3, 4].map((d) => (d + Math.floor(rng() * 2)) % 7);
    // 4 bars x 16 steps melody built from a motif + variation
    const motif = [];
    for (let i = 0; i < 16; i++) motif.push(rng() < 0.62 ? Math.floor(rng() * 9) - 1 : null);
    const melody = [];
    for (let bar = 0; bar < 4; bar++) {
      for (let s = 0; s < 16; s++) {
        let n = motif[s];
        if (n != null && bar === 3 && s > 8) n = n + 2;
        if (n != null && bar === 1 && rng() < 0.3) n = null;
        melody.push(n == null ? null : n + prog[bar]);
      }
    }
    return { scale, root, bpm, prog, melody };
  }

  noteFreq(song, degree, octave) {
    const s = song.scale;
    const o = Math.floor(degree / s.length);
    const idx = ((degree % s.length) + s.length) % s.length;
    const midi = song.root + 12 * (octave + o) + s[idx];
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  play(seed) {
    const ctx = this.ensure();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    this.stop();
    const song = this.compose(seed);
    const stepDur = 60 / song.bpm / 4;
    let step = 0;
    let next = ctx.currentTime + 0.05;
    const tick = () => {
      while (next < ctx.currentTime + 0.2) {
        this.scheduleStep(song, step, next, stepDur);
        next += stepDur;
        step = (step + 1) % 64;
      }
    };
    tick();
    this.timer = setInterval(tick, 50);
    this.playing = true;
  }

  scheduleStep(song, step, t, dur) {
    const ctx = this.ctx;
    const bar = Math.floor(step / 16);
    const s = step % 16;
    const m = song.melody[step];
    if (m != null) this.tone('square', this.noteFreq(song, m, 2), t, dur * 0.9, 0.14);
    // bass: root + fifth pulse
    if (s % 2 === 0) {
      const deg = song.prog[bar] + (s % 8 === 4 ? 4 : 0);
      this.tone('triangle', this.noteFreq(song, deg, 0), t, dur * 1.8, 0.32);
    }
    // arpeggio
    if (s % 2 === 1) {
      const chord = [0, 2, 4][(s >> 1) % 3];
      this.tone('square', this.noteFreq(song, song.prog[bar] + chord, 1), t, dur * 0.5, 0.04);
    }
    // drums
    if (s % 8 === 0) this.kick(t);
    if (s % 8 === 4) this.snare(t);
    if (s % 2 === 0) this.hat(t);
    return ctx;
  }

  tone(type, freq, t, dur, gain) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  kick(t) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
    g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + 0.16);
  }

  noiseHit(t, dur, gain, hp) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = hp;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + dur);
  }

  snare(t) {
    this.noiseHit(t, 0.14, 0.25, 1200);
  }

  hat(t) {
    this.noiseHit(t, 0.03, 0.06, 7000);
  }

  levels(n = 16) {
    if (!this.analyser || !this.playing) return null;
    const arr = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(arr);
    const out = [];
    for (let i = 0; i < n; i++) out.push(arr[Math.min(arr.length - 1, i + 1)] / 255);
    return out;
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.playing = false;
  }
}
