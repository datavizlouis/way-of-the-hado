# Way of the Hado

A long-form (~5,800px) Tableau **data app**: a React and Three.js viz extension that tells the Street Fighter story in four sections. Its story, roster and sales data come from embedded CSV datasources, which the extension queries live through the Tableau Extensions API.

1. **Intro.** Off-white brush strokes on a navy sky. Each scroll step un-paints the current story point and paints the next one.
2. **The Fighters.** A pixelated 3D field with lightning. The 16 Super SF2 fighters stay dark until hovered. Click one for a brush-stroke bio and buttons that play their special moves.
3. **Soundtracks.** A player-1 character-select screen. Picking a fighter loops their theme.
4. **The franchise in numbers.** Sales, box office and arcade figures compared with other fighting-game franchises, with sources.

## Layout

| Path | What |
|---|---|
| `data/*.csv` | Source of truth for story, characters and franchise metrics |
| `app/` | React/Three source (`src/`), esbuild build (`build.mjs`) and asset slots (`assets/`, see its README) |
| `tableau/` | Tableau workspace: `.twb`, the extension package and the embedded CSVs |
| `scripts/build.sh` | Copies the CSVs, builds the bundle into the package and optionally zips a `.twbx` |

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

## Assets

Street Fighter sprites, logos and music belong to Capcom and aren't included. The app runs on original placeholder art and generated chiptunes until you drop your own files into `app/assets/`. See `app/assets/README.md`.
