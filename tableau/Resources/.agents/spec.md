# Spec: Way of the Hado

A long-form (~6,000px) Tableau viz-extension data app that tells the story of Street Fighter for fans and data-viz audiences. It's meant for a tall dashboard zone, one worksheet extension of about 1400×6000.

The four sections, top to bottom:

1. **Intro (1000px):** navy sky with off-white brush strokes. Each scroll step un-paints the current story point and paints the next. There are 10 steps: the title card plus 9 chapters from the `Story` datasource. The wheel is captured until the last chapter, then released so the page can scroll on.
2. **Characters (1050px):** a pixelated Three.js field with a storm sky, lightning, grass, dirt and rubble. The 16 Super SF2 fighters stand in two staggered rows, darkened until hovered. Clicking a fighter moves the camera in; a brush-stroke bio panel takes the right ~75% of the height, with red brush move buttons that play the move animation.
3. **Soundtracks (940px):** a borderless SSF2-style player-select screen for player 1 only, with no 2P panel and no borders.
   - **Map:** a pixel world map (Natural Earth outlines) at the top. Grey stage flags for every fighter; the selected fighter's flag is lit and blinking, with a line to a pin on their stage.
   - **Bottom row:** the named 1P portrait sits against the selector grid. To its right: a now-playing strip, a 24px spacer, then the grid. The strip is the theme text centred on a symmetric equaliser, with no mute or volume controls. The portrait height (214px) matches that whole column.
   - **Music:** follows the cursor (hover, arrow keys or click), debounced. The first gesture unlocks audio, and the music stops when the section scrolls away. It plays `assets/audio/<id>.mp3` if bundled, otherwise an original placeholder chiptune.
4. **Franchise in numbers:** KPIs, cumulative series units against other fighting-game franchises, best-selling titles, film box office, Street Fighter 6 milestones, an arcade callout and sources.
