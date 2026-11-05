# Design

## Datasources

There are three embedded CSV datasources, found by caption and queried with `queryAsync` in `app/src/data.js`. The masters live in `data/` at the repository root. `scripts/build.sh` copies them into `Data/Datasources/`.

- **Story:** Chapter (int), Era, Title, Kicker, Body, Accent (hex).
- **Characters:** Order (int), Id, Name, Country, Style, Debut, Tagline, Bio, Moves (`Name:kind;…`), Theme, Palette (`gi;skin;hair;accent;belt`), Build (`slim|medium|heavy|huge`). The move kinds that drive the procedural animation are: projectile, fire, uppercut, spin, punch, kick, charge, grab, electric, roll, flip, teleport.
- **Franchise Metrics:** Franchise, Title, Year, Category, Value (SUM), Unit, Source, Source URL, As Of, Note. The Category values are: `Series units (cumulative)`, `Title units`, `Box office`, `Arcade revenue`.

## Rendering

The source is React 18 plus Three.js in `app/src`, bundled by esbuild into `content/src/app.js` as a classic IIFE script, not an ES module, because module scripts need CORS and the sandbox's origin is opaque.

- **Brush strokes:** `lib/brush.js` draws them as a bundle of bristles with a solid core. Each stroke can be drawn at any progress value, which is what animates painting and un-painting.
- **Fighters:** `lib/fighter.js` renders either a sprite-sheet atlas or an original procedural pixel figure into a canvas used as a WebGL texture.
  - Sheet sprites are drawn at native pixel scale in a 200×200 canvas, with a per-frame ground offset so jumps rise. The 3D plane is enlarged to match.
  - Procedural figures use a 128×128 canvas.
- **Sprite pipeline:** `scripts/slice_sprites.py` finds the panels and frames on spriters-resource-style sheets. `scripts/sprite_map.json` maps idle, the portrait and each move to a panel. `scripts/build_atlas.py` packs transparent atlases plus `sprites.json`.
- **Select screen:** `lib/stageMap.js` rasterises Natural Earth land at 256×128 with an SF2-style coast glow; `STAGES` holds each fighter's stage coordinates and `FLAG_POS` the flag layout. `scripts/build_ui_assets.py` cuts the portraits, named portraits, lit and grey flags, and the background tile.
- **Pixel look:** the Three.js field renders at 1/3 resolution and is upscaled with nearest-neighbour filtering.
- **Charts:** hand-rolled SVG. Street Fighter is the single red accent; everything else is grey.
