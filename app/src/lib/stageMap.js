// Pixel world map for the select screen, in the spirit of the SF2 "player select" map.
// Land outlines: Natural Earth 1:110m via the world-atlas package (public domain).
// Drawn at SNES-ish resolution (256x128) and upscaled with nearest-neighbour.

import { feature } from 'topojson-client';
import land110 from 'world-atlas/land-110m.json';
import { hashString } from './rng.js';

export const MAP_W = 256;
export const MAP_H = 128;
const LAT_TOP = 78;
const LAT_SPAN = 136; // 78N .. 58S

export const project = (lon, lat) => [((lon + 180) / 360) * MAP_W, ((LAT_TOP - lat) / LAT_SPAN) * MAP_H];

// Each fighter's home stage (lon/lat of the stage, roughly) and the country flag it lights up.
export const STAGES = {
  ryu: { country: 'japan', lon: 135.8, lat: 34.7 },
  honda: { country: 'japan', lon: 139.7, lat: 35.7 },
  blanka: { country: 'brazil', lon: -60, lat: -3 },
  guile: { country: 'usa', lon: -117.5, lat: 34.6 },
  ken: { country: 'usa', lon: -122.4, lat: 37.8 },
  balrog: { country: 'usa', lon: -115.1, lat: 36.2 },
  chunli: { country: 'china', lon: 116.4, lat: 39.9 },
  zangief: { country: 'ussr', lon: 90, lat: 62 },
  dhalsim: { country: 'india', lon: 78, lat: 27 },
  thawk: { country: 'mexico', lon: -99, lat: 19.4 },
  feilong: { country: 'hongkong', lon: 114.2, lat: 22.3 },
  deejay: { country: 'jamaica', lon: -77.3, lat: 18.1 },
  cammy: { country: 'england', lon: -2, lat: 52 },
  vega: { country: 'spain', lon: -3.7, lat: 40.4 },
  sagat: { country: 'thailand', lon: 99, lat: 14 },
  bison: { country: 'thailand', lon: 100.5, lat: 13.7 },
};

// Where each flag (icon + label) sits on the map: centre x, top y, in map pixels.
export const FLAG_POS = {
  ussr: [160, 4],
  china: [205, 8],
  japan: [243, 44],
  hongkong: [224, 70],
  thailand: [190, 80],
  india: [168, 56],
  england: [108, 4],
  spain: [106, 40],
  usa: [30, 10],
  mexico: [38, 64],
  jamaica: [84, 62],
  brazil: [114, 86],
};

const COUNTRY_LABEL = {
  ussr: 'U.S.S.R.', china: 'CHINA', japan: 'JAPAN', hongkong: 'HONGKONG', thailand: 'THAILAND', india: 'INDIA',
  england: 'ENGLAND', spain: 'SPAIN', usa: 'U.S.A.', mexico: 'MEXICO', jamaica: 'JAMAICA', brazil: 'BRAZIL',
};

const OCEAN = [12, 22, 112];
const GLOW1 = [96, 176, 255];
const GLOW2 = [40, 96, 214];
const LAND = [214, 168, 98];
const LAND_DARK = [176, 128, 70];
const LAND_EDGE = [150, 100, 52];

let baseCache = null;

/** Rasterise the land once into crisp pixel art (ImageData 256x128). */
export function baseMap() {
  if (baseCache) return baseCache;
  const c = document.createElement('canvas');
  c.width = MAP_W;
  c.height = MAP_H;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  const geo = feature(land110, land110.objects.land);
  ctx.fillStyle = '#fff';
  const geoms = geo.features ? geo.features.map((f) => f.geometry) : [geo.geometry];
  const polys = geoms.flatMap((g) => (!g ? [] : g.type === 'Polygon' ? [g.coordinates] : g.coordinates));
  for (const shift of [-MAP_W, 0, MAP_W]) {
    ctx.beginPath();
    for (const poly of polys) {
      for (const ring of poly) {
        // unwrap longitudes so rings crossing the antimeridian stay continuous
        let prev = null;
        let off = 0;
        ring.forEach(([lon, lat], i) => {
          if (prev != null && Math.abs(lon - prev) > 180) off += prev > lon ? 360 : -360;
          prev = lon;
          const [x, y] = project(lon + off, Math.max(lat, -LAT_SPAN + LAT_TOP));
          if (i === 0) ctx.moveTo(x + shift, y);
          else ctx.lineTo(x + shift, y);
        });
        ctx.closePath();
      }
    }
    ctx.fill('evenodd');
  }
  const src = ctx.getImageData(0, 0, MAP_W, MAP_H).data;
  const land = new Uint8Array(MAP_W * MAP_H);
  for (let i = 0; i < land.length; i++) land[i] = src[i * 4 + 3] > 110 ? 1 : 0;
  const at = (x, y) => (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H ? 0 : land[y * MAP_W + x]);
  const img = ctx.createImageData(MAP_W, MAP_H);
  const d = img.data;
  for (let y = 0; y < MAP_H; y++) {
    for (let x = 0; x < MAP_W; x++) {
      const i = (y * MAP_W + x) * 4;
      let col = OCEAN;
      if (at(x, y)) {
        const edge = !at(x - 1, y) || !at(x + 1, y) || !at(x, y - 1) || !at(x, y + 1);
        const n = hashString(`${x},${y}`) % 23;
        col = edge ? LAND_EDGE : n === 0 || n === 7 ? LAND_DARK : LAND;
      } else {
        let near = 3;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            if (at(x + dx, y + dy)) near = Math.min(near, Math.max(Math.abs(dx), Math.abs(dy)));
          }
        }
        col = near === 1 ? GLOW1 : near === 2 ? GLOW2 : OCEAN;
      }
      d[i] = col[0];
      d[i + 1] = col[1];
      d[i + 2] = col[2];
      d[i + 3] = 255;
    }
  }
  baseCache = img;
  return img;
}

function flagBox(country, img) {
  const [cx, top] = FLAG_POS[country];
  const w = img ? img.naturalWidth : 26;
  const h = img ? img.naturalHeight : 20;
  return { x: Math.round(cx - w / 2), y: top, w, h };
}

function nearestEdge(box, px, py) {
  return [Math.max(box.x, Math.min(px, box.x + box.w - 1)), Math.max(box.y, Math.min(py, box.y + 12))];
}

/**
 * Draw the map with every stage flag (greyed) and the selected fighter's stage lit up,
 * with a line from the flag to a blinking pin on the stage.
 * flags: { [country]: { on: HTMLImageElement|null, off: HTMLImageElement|null } }
 */
export function drawStageMap(ctx, selectedId, flags, blinkOn) {
  ctx.imageSmoothingEnabled = false;
  ctx.putImageData(baseMap(), 0, 0);
  const sel = STAGES[selectedId];
  const lines = [];
  // city dots for every stage
  for (const [id, s] of Object.entries(STAGES)) {
    const [x, y] = project(s.lon, s.lat).map(Math.round);
    ctx.fillStyle = id === selectedId ? '#fff36b' : '#e83a2e';
    ctx.fillRect(x - 1, y - 1, 2, 2);
  }
  const items = Object.keys(FLAG_POS).map((country) => {
    const lit = !!sel && sel.country === country;
    const imgs = flags[country] || {};
    const ready = (im) => (im && im.complete && im.naturalWidth ? im : null);
    const img = lit ? ready(imgs.on) : ready(imgs.off) || ready(imgs.on);
    const box = flagBox(country, img);
    // connector to the stage in this country: the selected fighter's if lit, else the first
    const target = lit ? sel : Object.values(STAGES).find((s) => s.country === country);
    if (target) {
      const [tx, ty] = project(target.lon, target.lat).map(Math.round);
      lines.push({ from: nearestEdge(box, tx, ty), to: [tx, ty], lit });
    }
    return { country, lit, img, off: ready(imgs.off), box };
  });
  // lines first so flags sit on top; the lit line last so it is never hidden
  lines.sort((a, b) => a.lit - b.lit);
  for (const l of lines) {
    ctx.strokeStyle = l.lit ? '#fff36b' : 'rgba(236,240,255,0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(l.from[0] + 0.5, l.from[1] + 0.5);
    ctx.lineTo(l.to[0] + 0.5, l.to[1] + 0.5);
    ctx.stroke();
  }
  for (const it of items) {
    const { box } = it;
    if (it.img) {
      ctx.drawImage(it.lit && !blinkOn && it.off ? it.off : it.img, box.x, box.y);
    } else {
      // no flag art supplied: a tiny plate with the country name
      ctx.fillStyle = it.lit && blinkOn ? '#ffd23f' : '#5d6488';
      ctx.fillRect(box.x, box.y, box.w, 10);
      ctx.fillStyle = '#0b1022';
      ctx.font = '7px monospace';
      ctx.fillText(COUNTRY_LABEL[it.country], box.x + 1, box.y + 8);
    }
  }
  if (sel) {
    const [x, y] = project(sel.lon, sel.lat).map(Math.round);
    ctx.fillStyle = blinkOn ? '#ffffff' : '#ff3b3b';
    ctx.fillRect(x - 2, y - 2, 4, 4);
    if (blinkOn) {
      ctx.strokeStyle = '#ff3b3b';
      ctx.strokeRect(x - 4.5, y - 4.5, 9, 9);
    }
  }
}
