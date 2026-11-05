// Asset slots.
//
// Images, fonts and sprite sheets placed in app/assets/ are inlined by build.mjs into
// window.HADO_ASSETS as data URIs (src/assets.gen.js, loaded before app.js). Data URIs
// keep the canvases untainted so WebGL can upload them inside the Tableau sandbox,
// where the page origin is opaque. Audio files are copied next to the bundle instead
// (playback through <audio> does not need CORS) and listed in HADO_ASSETS.audio.
//
// Every slot is optional: the app falls back to procedural art / chiptune when empty.

const A = () => (typeof window !== 'undefined' && window.HADO_ASSETS) || { files: {}, audio: {}, sprites: {} };

export function assetUrl(path) {
  return A().files?.[path] || null;
}

export function audioUrl(id) {
  return A().audio?.[id] || null;
}

export function getSpriteConfig(id) {
  const cfg = A().sprites?.[id];
  if (!cfg) return null;
  const image = assetUrl(`sprites/${cfg.file}`);
  return image ? { ...cfg, image } : null;
}

const imgCache = new Map();
export function getImage(url) {
  if (!url) return null;
  if (!imgCache.has(url)) {
    const img = new Image();
    img.src = url;
    imgCache.set(url, img);
  }
  return imgCache.get(url);
}

export function loadImage(url) {
  return new Promise((resolve) => {
    if (!url) return resolve(null);
    const img = getImage(url);
    if (img.complete && img.naturalWidth) return resolve(img);
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
  });
}
