# Asset slots

Everything here is optional. Anything missing falls back to built-in stand-ins: procedural brush strokes, original pixel fighters and generated chiptune loops. Run `npm run build` (or `npm run package`) after adding files.

The Tableau extension sandbox blocks outside hosts, so every asset has to ship inside the package. Images, fonts and sprite sheets are inlined as data URIs. That keeps WebGL textures untainted in the sandbox's opaque origin, but each byte inlined adds about 1.33 bytes to `hado-assets.js`, so compress images first. Audio is copied as separate files.

Use only assets you have the rights to use. Street Fighter characters, logos, sprites and music belong to Capcom.

| Slot | What it does |
|---|---|
| `img/hado-logo.png` | Replaces the "HADO" placeholder logotype in the intro title. Use a transparent PNG. |
| `img/story/<chapter>.png` | Optional ink illustration for an intro chapter (1–9). It's blended into the paper at about 22% opacity. Sumi-e style art works best; Higgsfield can generate it. |
| `img/portraits/<id>.png` | Portrait for a select-screen tile. Square, ideally 48–64 px. `<id>` is the `Id` column of `data/characters.csv` (`ryu`, `ken`, `chunli`, …). |
| `fonts/brush.(woff2\|ttf\|otf)` | Brush font for "Way of the", headings and move buttons. Becomes the `HadoBrush` family. |
| `fonts/display.(woff2\|ttf\|otf)` | Display font for the placeholder "HADO" logotype and the KPIs. Becomes `HadoDisplay`. |
| `fonts/pixel.(woff2\|ttf\|otf)` | Pixel font for the soundtrack screen. Becomes `HadoPixel`. |
| `audio/<id>.mp3` | Stage theme for a fighter in the soundtrack section, played on loop. `.ogg`, `.m4a` and `.wav` also work. |
| `sprites/<id>.png` + `sprites/sprites.json` | Sprite sheet for a fighter (see below). |

## Sprite sheets

`sprites.json` maps a fighter id to its sheet and its animation frames. Frames are `[x, y, w, h, anchorX?]` in sheet pixels. `anchorX` is the x offset inside the frame of the fighter's centre line, so wide frames such as kicks don't jitter. Animations are matched by the move's name in `characters.csv` (`"Hadoken"`), then by its kind (`"projectile"`), and `idle` is the fallback.

```json
{
  "ryu": {
    "file": "ryu.png",
    "scale": 1,
    "anims": {
      "idle":       { "fps": 8,  "frames": [[0,0,60,92,30],[60,0,60,92,30],[120,0,60,92,30],[180,0,60,92,30]] },
      "Hadoken":    { "fps": 12, "frames": [[0,100,74,92,30],[74,100,80,92,30],[154,100,100,92,30]], "event": "projectile", "eventFrame": 2 },
      "Shoryuken":  { "fps": 12, "frames": [[0,200,60,110,30],[60,200,60,120,30]] }
    }
  }
}
```

`"event": "projectile"` makes the 3D field fire a glowing orb on `eventFrame`. The `_example` key is ignored.
