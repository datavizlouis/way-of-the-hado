// How each special move plays on the field, tied to its frames.
//
// Frames are the indices of the move in sprites.json. For each move:
//   seq    frame order, with repeats to hold or loop (default: every frame once)
//   rate   playback speed, so a journey stays readable (default 1)
//   fire   position in seq where the projectile leaves the hands
//   rear   line every frame up on the fighter's back edge. Frames are otherwise anchored on
//          their lowest pixels (the feet), which can be a claw or a trailing boot on a dive,
//          and would throw the body backwards.
//   anchors { frame: anchorX } overrides, for frames whose art drifts across the sheet.
//   sfx    a sound effect (assets/audio/<sfx>.mp3) played as the move starts
//
// To speed up one phase, raise `rate` and repeat the frames of the other phases in `seq`.
//   path   (s) => [dx, dy, alpha], offset in sprite pixels: forward = right, up = positive.
//          s is the position in seq, fractional: s = 3 is the moment seq[3] appears.
//
// A move that ends away from home glides back once it's over (see FieldScene).

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const smooth = (t) => t * t * (3 - 2 * t);

/** 0 before a, 1 after b, eased in between. */
const ramp = (s, a, b) => smooth(clamp01((s - a) / (b - a)));
/** 0 outside a..b, a single smooth hump of height 1 inside. */
const bump = (s, a, b) => Math.sin(Math.PI * clamp01((s - a) / (b - a)));
/** Grounded until a, up to h by b, held until c, back on the ground by d. */
const hop = (s, a, b, c, d, h) => h * (s < c ? ramp(s, a, b) : 1 - ramp(s, c, d));
/** From (R, 0) up and back along a curve to (0, 0) as s goes from a to b. */
const curveHome = (s, a, b, R, H) => {
  const u = clamp01((s - a) / (b - a));
  return [R * Math.cos((u * Math.PI) / 2), H * Math.sin(u * Math.PI)];
};

const REACH = 85; // how far a travelling move goes before reaching the bio panel
const up = (s, h) => [0, h];
const repeat = (frames, n) => Array.from({ length: n }, () => frames).flat();

const shoryuken = { rate: 0.7, path: (s) => up(s, hop(s, 3, 4.4, 5, 6, 46)) };
const tatsumaki = { rate: 0.6 }; // the frames already show the lift
const flight = { rate: 0.55, at: (s, n, dx, dy) => [dx * bump(s, 0, n), dy * bump(s, 0, n)] };

const TIMELINES = {
  ryu: {
    Hadoken: { seq: [0, 1, 2, 3, 3, 3, 3, 3], fire: 3, sfx: 'hadouken' },
    Shoryuken: shoryuken,
    'Tatsumaki Senpukyaku': tatsumaki,
  },
  ken: {
    Hadoken: { seq: [0, 1, 2, 3, 3, 3, 3, 3], fire: 3, sfx: 'hadouken' },
    Shoryuken: shoryuken,
    'Tatsumaki Senpukyaku': tatsumaki,
  },
  chunli: {
    Kikoken: { seq: [0, 1, 2, 3, 3, 3, 3], fire: 3 },
    Hyakuretsukyaku: { seq: [5, ...repeat([0, 1, 2, 3, 4], 3), 5] },
    'Spinning Bird Kick': { rate: 1.3 }, // the frames already show the lift
  },
  guile: {
    'Sonic Boom': { seq: [0, 1, 2, 2, 2, 2, 2], fire: 2 },
    'Flash Kick': { rate: 0.6, path: (s) => up(s, hop(s, 2, 3, 4.5, 6, 34)) },
  },
  blanka: {
    'Rolling Attack': {
      // crouch, curl up, roll out along the ground, then arc up and back to where he started
      seq: [5, ...repeat([0, 1, 2, 3], 5), 4],
      rate: 1.1,
      rear: true,
      path: (s) => (s < 9 ? [REACH * ramp(s, 1, 9), 0] : curveHome(s, 9, 21, REACH, 60)),
    },
  },
  zangief: {
    'Spinning Piledriver': {
      seq: [0, 1, 2, 3, ...repeat([4, 5, 6, 7], 3), 8, 9],
      rate: 0.7,
      path: (s) => up(s, 85 * bump(s, 4, 16)),
    },
  },
  honda: {
    'Sumo Headbutt': {
      // wind up on the spot, shoot flat to the right, then the rest curves up and back home
      seq: [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7],
      rate: 1.2,
      rear: true,
      path: (s) => (s < 10 ? [REACH * ramp(s, 4, 10), 0] : curveHome(s, 10, 18, REACH, 70)),
    },
  },
  dhalsim: {
    'Yoga Fire': { seq: [0, 1, 2, 3, 4, 4, 4], fire: 3 },
    // the same exhale as Yoga Fire, with the flame flickering at full size
    'Yoga Flame': { seq: [0, 1, 2, 3, 4, 3, 4, 3, 4, 3, 4, 5, 6, 7, 8] },
    'Yoga Teleport': {
      rate: 0.3,
      path: (s) => {
        const p = s / 4;
        const away = p > 0.25 && p < 0.75;
        return [away ? -50 : 0, 0, clamp01(Math.min(Math.abs(p - 0.25), Math.abs(p - 0.75)) / 0.12)];
      },
    },
  },
  balrog: {
    'Dash Straight': { rate: 0.7, rear: true, path: (s) => [REACH * ramp(s, 0, 3), 0] },
    'Dash Uppercut': { rate: 0.7, rear: true, path: (s) => [70 * ramp(s, 0, 3), 0] },
  },
  vega: {
    'Rolling Crystal Flash': { seq: [0, 1, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8], rate: 0.7, rear: true, path: (s) => [REACH * ramp(s, 1, 8), 0] },
    'Flying Barcelona Attack': { rate: flight.rate, path: (s) => flight.at(s, 3, 44, 108) },
  },
  sagat: {
    'Tiger Shot': { seq: [0, 1, 2, 2, 2, 2, 2], fire: 2 },
    'Tiger Uppercut': { rate: 0.7, path: (s) => up(s, hop(s, 3, 4, 5, 7, 58)) },
    'Tiger Knee': { rate: 0.7, rear: true, path: (s) => [REACH * ramp(s, 1, 5.5), 30 * bump(s, 1.5, 6)] },
  },
  bison: {
    'Psycho Crusher': { seq: [0, 0, 1, 1, 2, 2, ...repeat([3, 4, 5, 6], 2), 7, 7], rate: 1.2, rear: true, path: (s) => [REACH * ramp(s, 6, 14), 0] },
    'Scissor Kick': { rate: 0.6, rear: true, path: (s) => [80 * ramp(s, 0, 4), 0] },
    'Head Press': { rate: flight.rate, path: (s) => flight.at(s, 7, 44, 108) },
  },
  cammy: {
    'Spiral Arrow': { seq: [0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11], rate: 1.2, rear: true, path: (s) => [REACH * ramp(s, 6, 13), 0] },
    'Cannon Spike': { rate: 0.7, path: (s) => up(s, hop(s, 3, 4, 6, 7, 52)) },
  },
  feilong: {
    Rekkaken: { rate: 0.7, rear: true, path: (s) => [REACH * ramp(s, 0, 7), 0] },
    // frames 8-11 only repeat the raised leg, which kept him in the air too long
    Shienkyaku: { seq: [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15], rate: 0.7, path: (s) => up(s, hop(s, 3, 5, 8, 11, 58)) },
  },
  deejay: {
    'Max Out': { seq: [0, 1, 2, 3, 4, 5], fire: 2 },
    // the art leans forward from frame 9: hold his hips where they were, so he stays put
    'Machine Gun Upper': { anchors: { 9: 41, 10: 37, 11: 38, 12: 37, 13: 42, 14: 38 } },
  },
  thawk: {
    'Tomahawk Buster': { rate: 0.7, path: (s) => up(s, hop(s, 3, 4, 5.5, 7, 80)) },
    'Condor Dive': {
      // straight up for a few frames, then a fast dive at an angle for all the rest
      seq: [0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8],
      rate: 1.4,
      rear: true,
      path: (s) => (s < 8 ? [0, 90 * ramp(s, 0, 8)] : [REACH * clamp01((s - 8) / 6), 90 * (1 - clamp01((s - 8) / 6))]),
    },
  },
};

/** Every sound effect a move uses, to load ahead of time. */
export const MOVE_SFX = [...new Set(Object.values(TIMELINES).flatMap((moves) => Object.values(moves).map((m) => m.sfx).filter(Boolean)))];

/** The move's timeline, or an empty one for a move that plays its frames on the spot. */
export function moveTimeline(id, moveName) {
  return TIMELINES[id]?.[moveName] || {};
}

// Where each fighter's projectile leaves the hands (sprite px above the ground) and the
// colour of the light it casts.
export const PROJECTILES = {
  ryu: { y: 52, light: 0x4aa8ff },
  ken: { y: 52, light: 0x4aa8ff },
  chunli: { y: 50, light: 0x4aa8ff },
  guile: { y: 52, light: 0xffc46a },
  dhalsim: { y: 53, light: 0xff8a2a },
  sagat: { y: 69, light: 0xff8a2a },
  deejay: { y: 50, light: 0xff8a2a },
};
