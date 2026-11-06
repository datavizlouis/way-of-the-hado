# Asset slots

Everything here is optional. Anything missing falls back to built-in stand-ins: procedural brush strokes, original pixel fighters and generated chiptune loops. Run `npm run build` (or `npm run package`) after adding files.

The Tableau extension sandbox blocks outside hosts, so every asset has to ship inside the package. Images, fonts and sprite sheets are inlined as data URIs. That keeps WebGL textures untainted in the sandbox's opaque origin, but each byte inlined adds about 1.33 bytes to `hado-assets.js`, so compress images first. Audio is wrapped as one script per track (`src/audio/<id>.js`) and decoded with Web Audio, because the sandbox won't load package files as `<audio>` media.

Use only assets you have the rights to use. Street Fighter characters, logos, sprites and music belong to Capcom.

| Slot | What it does |
|---|---|
| `img/hado-logo.png` | Optional. Replaces the built-in SF4-style "WAY OF THE HADO" logotype (drawn in code from the brush font) with your own artwork. Use a transparent PNG. |
| `img/story/<chapter>.png` | Optional illustration for an intro story beat (1–9). It replaces that beat's animated scene in the art half of the splat. What each beat shows by default is set in `src/lib/storyCast.js`; the scenes live in `src/lib/beatScenes.js`. Beat 6 uses `6.png` for the S.I.N. emblem, made by `scripts/build_story_art.py` from `sprites/raw/sin_emblem.webp` with its red field keyed out. The folder is git-ignored. |
| `img/logos/<franchise>.png` | Logo for a franchise's life-bar portrait in the data story. Square, transparent PNG. `<franchise>` is the franchise name in lower case with hyphens: `street-fighter`, `mortal-kombat`, `super-smash-bros`, `tekken`, `soulcalibur`, `the-king-of-fighters`, `guilty-gear`, `virtua-fighter`, `dead-or-alive`, `fatal-fury`, `samurai-shodown`. A missing logo shows the initials. Trademarked art, so the folder is git-ignored. |
| `img/portraits/<id>.png` | Portrait for a select-screen tile. Square, ideally 48–64 px. `<id>` is the `Id` column of `data/characters.csv` (`ryu`, `ken`, `chunli`, …). |
| `fonts/brush.(woff2\|ttf\|otf)` | Brush font for the logo, headings and move buttons. Becomes the `HadoBrush` family. We use Cafe Felix (personal use, git-ignored). Its free build swaps digits and punctuation for a watermark, so `build.mjs` limits it to letters and space through `unicode-range`; other characters fall back to the next font. |
| `fonts/display.(woff2\|ttf\|otf)` | Display font for the placeholder "HADO" logotype and the KPIs. Becomes `HadoDisplay`. |
| `fonts/pixel.(woff2\|ttf\|otf)` | Pixel font for the soundtrack screen. Becomes `HadoPixel`. |
| `music/<name>.vgz` | The VGM rips of the soundtrack. `scripts/convert_music.py VGMPLAY_DIR` renders them into `audio/`, mapping `ehonda` to `honda` and `mbison` to `bison`. Git-ignored. |
| `audio/<id>.wav` | Track for a fighter, played on loop across the whole site. `audio/opening.wav` is the "?" tile and plays first on every load. `scripts/convert_music.py --mp3` encodes them to MP3, and the build ships the MP3 instead of the WAV when both exist. `.ogg` and `.m4a` also work. Git-ignored. |
| `img/hadoken.png` | Marks the current chapter in the intro's carousel. Cut from `sprites/raw/ryu.gif` by `scripts/build_story_art.py`. Four frames of 36 x 26 px; `.hadoken` in `styles.css` must match. Git-ignored. |
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
      "Hadoken":    { "fps": 12, "frames": [[0,100,74,92,30],[74,100,80,92,30],[154,100,100,92,30]] },
      "Shoryuken":  { "fps": 12, "frames": [[0,200,60,110,30],[60,200,60,120,30]] }
    }
  }
}
```

A fighter's `projectile` animation is its flight art: the first `launch` frames play once and the rest loop. Frame order, travel, lift and the frame that fires a projectile are set per move in `app/src/lib/moveTimeline.js`. The `_example` key is ignored.

## Rebuilding the Super SF2 sprites

The sheets are Super Street Fighter II rips by Lord Zymeth (finaldestinationpixelation.com, via The Spriters Resource). They're Capcom artwork, so they're kept out of git and live only on your machine.

1. Save each sheet as `app/assets/sprites/raw/<id>.gif`.
2. Run `python3 scripts/slice_sprites.py app/assets/sprites/raw <tmp>`. This finds every panel and frame, and writes `<id>.overlay.png` with the panel numbers drawn on, which helps when you edit the mapping.
3. Edit `scripts/sprite_map.json` if needed. It maps idle, the portrait and each special move (names from `data/characters.csv`) to a point inside the right panel.
4. Run `python3 scripts/build_atlas.py <tmp>`. This writes `sprites/<id>.png` atlases with the background keyed out, `sprites/sprites.json`, `img/portraits/<id>.png`, and `<tmp>/contact.png` for a visual check.
5. Akuma isn't in Super SF2. Save Deekman's Akuma sheet as `raw/akuma_deekman.png` and run `python3 scripts/build_akuma.py` after step 4 (step 4 rewrites `sprites.json`). It cuts the Raging Demon win pose for story beat 2.
6. Run `python3 scripts/build_ui_assets.py` to cut the select-screen art. It reads `raw/portraits_phatman.png` (portraits ripped by Phatman) and `raw/select_garycxjk.png` (select-screen parts captured by GaryCXJK), and writes `img/portraits/`, `img/select/`, `img/flags/<country>.png` (lit) and `<country>-off.png` (grey) for the stage map, and `img/select-bg.png`.
7. Run `scripts/build.sh --package` to rebuild the app and the `.twbx`.
