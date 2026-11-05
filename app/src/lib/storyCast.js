// What each story beat shows in its art half. Kept in code rather than in story.csv so
// the Tableau datasource schema stays unchanged.
//   scene: an animated choreography from lib/beatScenes.js
//   kanji: a big brush character wrapped in the red Satsui no Hado (a fallback)
//   artShare: how much of the beat's width the art takes (default 0.4); the text wraps in the rest
//   artGap: the space between art and text, as a share of the width (default 0.06)
// A picture saved as assets/img/story/<beat>.png overrides either (beat 6 uses the
// S.I.N. emblem this way).
export const STORY_ART = {
  1: { scene: 'fistBump' }, // Ryu and Ken's punches meet
  2: { scene: 'ragingDemon', kanji: '天' }, // Akuma's Raging Demon win pose (天 if his sheet is missing)
  3: { scene: 'shoryuken', artShare: 0.46 }, // Ryu's Shoryuken floors Sagat
  4: { scene: 'psychoCrusher', artShare: 0.52 }, // Bison crosses and returns
  5: { scene: 'streetIntro', artShare: 0.64, artGap: 0.09 }, // homage to the SF2 attract intro
  6: {}, // S.I.N. emblem (img/story/6.png)
  7: { scene: 'blackMoon' }, // a Black Moon satellite
};
