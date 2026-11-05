# Way of the Hado

A long-form (~6,000px) Tableau **data app**: a React and Three.js viz extension that tells the Street Fighter story in four sections. The story, roster and sales data live in embedded CSV datasources that the extension queries live through the Tableau Extensions API.

1. **Intro.** A navy sky. The title card is an SF4-style logo on a black ink splat. Each scroll step pulls back the current story beat and splashes in the next on a white ink splat: the beat's fighters (animated sprites) on one side and the text on the other, alternating sides, from Ryu and Ken's origins to the Black Moons of Street Fighter V.
2. **The Fighters.** A pixelated 3D field under a storm sky, with lightning. The 16 Super Street Fighter II fighters stand in two rows, dark until hovered. Clicking one zooms in to a brush-stroke bio, with red brush buttons that play each special move from the sprite sheets.
3. **Soundtracks.** A player-1 select screen in the Super SF2 style. A pixel world map lights up the selected fighter's stage. The named portrait sits beside the selector grid, with a now-playing strip and equaliser above it. The theme switches as you move between fighters.
4. **The franchise in numbers.** Sales, box office and arcade figures compared with other fighting-game franchises, with every row sourced.

## Progress

| Area | Status |
|---|---|
| Tableau workspace: scaffold, 3 embedded CSV datasources wired, `.twbx` packaging | ✅ Done |
| Intro: 7 scroll-stepped story beats on white ink splats, art and text swapping sides each beat. Animated art: Ryu/Ken fist bump, Akuma's Raging Demon win pose, Ryu's Shoryuken flooring Sagat, Bison's Psycho Crusher there and back, a night-street homage to the SF2 intro, the S.I.N. emblem, a Black Moon of popping hex plates | ✅ Done |
| Logo: white "WAY OF THE" over a big SF4-style HADO (yellow-orange-red fill, black brush border) on a black ink splat, with an animated red energy dot in the A | ✅ Done, using the Cafe Felix brush font |
| Fighters: 3D field, lightning, hover tint, zoom-in bio, move buttons | ✅ Done, using Super SF2 sprite sheets |
| Soundtracks: select screen, stage map, portraits, flags, auto-play | ✅ Done. The music is placeholder chiptunes. |
| Franchise data and charts | ✅ Done. **Verify figures:** most rows come from secondary reporting. |
| Real stage themes (`app/assets/audio/<id>.mp3`) | ⏳ To do |
| Pixel font for the select screen (`app/assets/fonts/pixel.*`) | ⏳ To do |
| Publish to Tableau Cloud and review live (5-second and takeaway tests) | ⏳ To do |

## Layout

| Path | What |
|---|---|
| `data/*.csv` | Source of truth for story, characters and franchise metrics |
| `app/` | React/Three source (`src/`), esbuild build (`build.mjs`) and asset slots (`assets/`, see its README) |
| `tableau/` | Tableau workspace: `.twb`, the extension package, the embedded CSVs and agent notes (`Resources/.agents/`) |
| `scripts/build.sh` | Copies the CSVs, builds the bundle into the package and optionally zips a `.twbx` |
| `scripts/slice_sprites.py`, `build_atlas.py`, `sprite_map.json` | Turn raw sprite sheets into per-fighter atlases and animations |
| `scripts/build_akuma.py` | Cuts Akuma's Raging Demon win pose from Deekman's sheet (run after `build_atlas.py`) |
| `scripts/build_ui_assets.py` | Cuts select-screen portraits, named portraits, flags and the background |

## Develop

```bash
cd app && npm install
npm run dev                                  # builds app/dev-out with a mock Extensions API fed by data/*.csv
cd dev-out && python3 -m http.server 8123    # open http://localhost:8123
```

## Build and package

```bash
SKILL_DIR=/path/to/tableau-data-app-authoring scripts/build.sh --package   # -> dist/Way of the Hado.twbx
```

## Artwork and credits

Street Fighter and its characters, names and artwork are © Capcom. This is a non-commercial fan project, and **no Capcom artwork is committed to this repository**. The raw sheets and everything cut from them are git-ignored. To rebuild them, put the source sheets in `app/assets/sprites/raw/` and follow `app/assets/README.md`. Without them, the app falls back to original procedural fighters and generated chiptunes.

- **Fighter sprite sheets:** ripped by Lord Zymeth (finaldestinationpixelation.com) and shared on The Spriters Resource.
- **Akuma's sprites:** ripped by Deekman (deekman.cjb.net).
- **Select-screen portraits:** ripped by Phatman.
- **Select-screen artwork** (named portraits, flags, background): captured by GaryCXJK.
- **Brush font:** Cafe Felix by Jonathan S. Harris (JSHcreates), personal-use licence. It's git-ignored because the licence doesn't allow redistribution; put it at `app/assets/fonts/brush.ttf` to rebuild. A commercial use would need a paid licence.
- **World map outlines:** Natural Earth (public domain), via `world-atlas`.
