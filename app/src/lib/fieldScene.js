// The character field: a pixelated Three.js scene — navy storm sky, procedural
// lightning, a field of grass / dirt / rubble and the roster standing in a line.
// Rendered at 1/PIX resolution and upscaled with nearest-neighbour for a pixel-art look.

import * as THREE from 'three';
import { Fighter, SPRITE_SIZE } from './fighter.js';
import { makeRng, clamp, lerp, easeInOut } from './rng.js';
import { PROJECTILES } from './moveTimeline.js';

const PIX = 3;
const SPACING = 2.85; // between neighbours in one row: wide enough that no two fighters touch
const SPRITE_W = 2.7 * 2; // fighters stand at twice their old world size
const FRONT_Z = 0;
const BACK_Z = -10; // far enough back that the top row stands clear above the bottom row
const CENTRE_X = -0.5; // sprites stand left of their canvas centre: keeps the rows centred on screen
const BACK_SPREAD = 1.42; // perspective narrows the far row: spread it so the zig-zag lines up on screen
const DETAIL_D = 14.8;

const PROJECTILE_SPEED = 0.005; // world units per ms
const PROJECTILE_MS = 3200; // a backstop: it normally fades out at the bio panel first
const PROJECTILE_FADE_PX = 110; // it fades over this distance before reaching the panel's edge

function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = opts.mip ? THREE.NearestMipmapNearestFilter : THREE.NearestFilter;
  t.generateMipmaps = !!opts.mip;
  t.colorSpace = THREE.SRGBColorSpace;
  if (opts.repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  return t;
}

function groundTexture() {
  const rng = makeRng(77);
  return canvasTex(
    128,
    128,
    (ctx, w, h) => {
      const pal = ['#1d2a1a', '#24331f', '#2c3b22', '#3a3424', '#2f2a20', '#463d2c', '#1a2216'];
      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const n = rng();
          ctx.fillStyle = pal[Math.floor(n * n * pal.length)];
          ctx.fillRect(x, y, 2, 2);
        }
      }
      // dirt patches
      for (let i = 0; i < 18; i++) {
        ctx.fillStyle = rng() < 0.5 ? '#4a3e2c' : '#3b3226';
        const x = rng() * w;
        const y = rng() * h;
        const r = 3 + rng() * 9;
        for (let k = 0; k < r * 6; k++) {
          ctx.fillRect(Math.round(x + (rng() - 0.5) * r * 2), Math.round(y + (rng() - 0.5) * r), 2, 2);
        }
      }
      // pebbles
      for (let i = 0; i < 60; i++) {
        ctx.fillStyle = rng() < 0.5 ? '#5d5a52' : '#77736a';
        ctx.fillRect(Math.round(rng() * w), Math.round(rng() * h), 2, 1);
      }
    },
    { repeat: [18, 12], mip: true },
  );
}

function skyTexture() {
  return canvasTex(4, 256, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#04060f');
    g.addColorStop(0.5, '#0a1126');
    g.addColorStop(0.8, '#111b3a');
    g.addColorStop(1, '#1a2647');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function ridgeTexture() {
  const rng = makeRng(31);
  return canvasTex(512, 128, (ctx, w, h) => {
    ctx.fillStyle = '#0b1022';
    ctx.beginPath();
    ctx.moveTo(0, h);
    let y = h * 0.6;
    for (let x = 0; x <= w; x += 8) {
      y = clamp(y + (rng() - 0.5) * 18, h * 0.25, h * 0.85);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.fill();
    // ruined pillars / torii silhouettes
    for (let i = 0; i < 6; i++) {
      const x = rng() * w;
      const ph = 20 + rng() * 40;
      ctx.fillRect(x, h - ph - 20, 5, ph + 20);
      if (rng() < 0.5) ctx.fillRect(x - 10, h - ph - 22, 26, 4);
    }
  });
}

function grassTexture() {
  const rng = makeRng(5);
  return canvasTex(32, 32, (ctx, w, h) => {
    for (let i = 0; i < 14; i++) {
      ctx.fillStyle = ['#2f4a26', '#3c5c2c', '#263d1f', '#4d6b32'][i % 4];
      const x = 2 + rng() * (w - 4);
      const bh = 8 + rng() * 20;
      const lean = (rng() - 0.5) * 6;
      for (let y = 0; y < bh; y += 2) ctx.fillRect(Math.round(x + (lean * y) / bh), h - y - 2, 2, 2);
    }
  });
}

function shadowTexture() {
  return canvasTex(32, 16, (ctx, w, h) => {
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.beginPath();
    ctx.ellipse(w / 2, h / 2, w / 2 - 1, h / 2 - 1, 0, 0, Math.PI * 2);
    ctx.fill();
  });
}

// midpoint-displacement bolt with branches → array of polylines
function boltPaths(rng, from, to, depth = 6, branch = true) {
  let pts = [from, to];
  let disp = from.distanceTo(to) * 0.18;
  for (let d = 0; d < depth; d++) {
    const next = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const m = a.clone().lerp(b, 0.5);
      m.x += (rng() - 0.5) * disp * 2;
      m.z += (rng() - 0.5) * disp;
      next.push(a, m);
    }
    next.push(pts[pts.length - 1]);
    pts = next;
    disp *= 0.55;
  }
  const paths = [pts];
  if (!branch) return paths;
  const nb = 2 + Math.floor(rng() * 3);
  for (let b = 0; b < nb; b++) {
    const i = Math.floor(pts.length * (0.15 + rng() * 0.5));
    const start = pts[i];
    const end = start.clone().add(new THREE.Vector3((rng() - 0.5) * 8, -3 - rng() * 6, (rng() - 0.5) * 2));
    const sub = boltPaths(rng, start, end, 4, false)[0];
    paths.push(sub);
  }
  return paths;
}

function ribbon(paths, width, camDir) {
  const pos = [];
  const idx = [];
  let base = 0;
  const side = new THREE.Vector3();
  for (const [pi, pts] of paths.entries()) {
    const w = pi === 0 ? width : width * 0.55;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[Math.max(0, i - 1)];
      const b = pts[Math.min(pts.length - 1, i + 1)];
      side.subVectors(b, a).cross(camDir).normalize().multiplyScalar(w * (1 - (i / pts.length) * 0.5));
      pos.push(pts[i].x - side.x, pts[i].y - side.y, pts[i].z - side.z);
      pos.push(pts[i].x + side.x, pts[i].y + side.y, pts[i].z + side.z);
      if (i > 0) {
        const k = base + i * 2;
        idx.push(k - 2, k - 1, k, k - 1, k + 1, k);
      }
    }
    base += pts.length * 2;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}

// is the fighter's canvas painted at this texture coordinate? (checks a small area, so
// thin limbs stay easy to hit)
function solidAt(f, uv) {
  const px = Math.floor(uv.x * f.size);
  const py = Math.floor((1 - uv.y) * f.size);
  const a = f.ctx.getImageData(clamp(px - 2, 0, f.size - 5), clamp(py - 2, 0, f.size - 5), 5, 5).data;
  for (let i = 3; i < a.length; i += 4) if (a[i] > 128) return true;
  return false;
}

export class FieldScene {
  constructor(container, characters, cb = {}) {
    this.container = container;
    this.cb = cb;
    this.rng = makeRng(2024);
    this.mode = 'overview';
    this.hovered = null;
    this.selected = null;
    this.visible = true;
    this.projectiles = [];
    this.bolts = [];
    this.nextBolt = 800;
    this.flash = 0;

    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'low-power' }));
    r.setPixelRatio(1 / PIX);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.domElement.className = 'field-canvas';
    container.appendChild(r.domElement);

    const scene = (this.scene = new THREE.Scene());
    this.skyTex = skyTexture();
    scene.background = this.skyTex;
    scene.fog = new THREE.Fog(0x0a1126, 14, 42);
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);

    this.ambient = new THREE.AmbientLight(0x4a5a8a, 1.1);
    scene.add(this.ambient);
    this.moon = new THREE.DirectionalLight(0x8fa6e0, 0.9);
    this.moon.position.set(-6, 10, 8);
    scene.add(this.moon);
    this.boltLight = new THREE.PointLight(0xcfe0ff, 0, 60, 1.2);
    scene.add(this.boltLight);

    // ground
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(160, 110), new THREE.MeshLambertMaterial({ map: groundTexture() }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = 0;
    scene.add(ground);

    // distant ridge
    const ridge = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 30),
      new THREE.MeshBasicMaterial({ map: ridgeTexture(), transparent: true, fog: false }),
    );
    ridge.position.set(0, 6, -34);
    scene.add(ridge);

    // rubble
    this.rubble = [];
    const rubbleMat = new THREE.MeshLambertMaterial({ color: 0x5b5649, flatShading: true });
    const rng = this.rng;
    for (let i = 0; i < 70; i++) {
      const s = 0.12 + rng() * rng() * 0.9;
      const m = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rubbleMat);
      let x = (rng() - 0.5) * 40;
      let z = -2 - rng() * 22;
      if (rng() < 0.35) z = 1.2 + rng() * 3; // foreground
      if (Math.abs(z) < 1.2) z -= 2;
      m.position.set(x, s * 0.4, z);
      m.rotation.set(rng() * 3, rng() * 3, rng() * 3);
      m.scale.y = 0.6 + rng() * 0.5;
      this.rubble.push(m);
      scene.add(m);
    }

    // grass tufts (instanced)
    const grassGeo = new THREE.PlaneGeometry(0.9, 0.9);
    grassGeo.translate(0, 0.45, 0);
    const grassMat = new THREE.MeshLambertMaterial({ map: grassTexture(), transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
    const nG = 420;
    const grass = new THREE.InstancedMesh(grassGeo, grassMat, nG);
    const M = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    for (let i = 0; i < nG; i++) {
      const x = (rng() - 0.5) * 50;
      const z = 4 - rng() * 28;
      const s = 0.6 + rng() * 0.9;
      q.setFromEuler(new THREE.Euler(0, (rng() - 0.5) * 0.5, 0));
      M.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(s, s, s));
      grass.setMatrixAt(i, M);
    }
    scene.add(grass);

    // dust / embers
    const pg = new THREE.BufferGeometry();
    const pp = [];
    for (let i = 0; i < 160; i++) pp.push((rng() - 0.5) * 30, rng() * 8, -rng() * 16 + 3);
    pg.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3));
    this.dust = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x9fb2e8, size: 0.05, transparent: true, opacity: 0.6 }));
    scene.add(this.dust);

    // fighters
    this.shadowTex = shadowTexture();
    this.fighters = characters.map((c, i) => {
      const perRow = Math.ceil(characters.length / 2);
      const row = i % 2; // zig-zag: each fighter stands in the gap between two in the other row
      const col = Math.floor(i / 2);
      const across = (col - (perRow - 1) / 2) * SPACING + (row ? SPACING / 2 : 0) - SPACING / 4;
      const x = row ? across * BACK_SPREAD : across;
      const z = row ? BACK_Z : FRONT_Z;
      const f = new Fighter(c, { onEvent: (ev, fi) => this.onFighterEvent(ev, fi) });
      const tex = new THREE.CanvasTexture(f.canvas);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.5, color: 0x2a3050, fog: false });
      // sheet sprites are drawn at native scale in a bigger canvas: grow the plane to match
      const planeW = f.size === SPRITE_SIZE ? SPRITE_W : SPRITE_W * (f.size / SPRITE_SIZE) * 0.92;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeW), mat);
      // sheet sprites stand on a centre line at 40% of their canvas: put that line at x
      const standX = f.size === SPRITE_SIZE ? x : x + planeW * 0.1;
      mesh.position.set(standX, planeW / 2 - (f.size === SPRITE_SIZE ? 0.16 : planeW * 0.012), z);
      mesh.userData.id = c.Id;
      mesh.userData.fighter = f;
      scene.add(mesh);
      const sh = new THREE.Mesh(
        new THREE.PlaneGeometry(2.6, 0.9),
        new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false }),
      );
      sh.rotation.x = -Math.PI / 2;
      sh.position.set(x, 0.02, z);
      scene.add(sh);
      return { c, f, tex, mat, mesh, sh, planeW, standX: x, home: new THREE.Vector3(standX, mesh.position.y, z), tint: 0, fade: 1, phase: rng() * 600, ox: 0, oy: 0 };
    });
    // de-sync idles
    this.fighters.forEach((F) => F.f.update(F.phase));

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2(-9, -9);
    this.camFrom = null;
    this.camT = 1;
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();

    this.onMove = (e) => {
      const rect = r.domElement.getBoundingClientRect();
      this.pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    };
    this.onLeave = () => this.pointer.set(-9, -9);
    this.onClick = () => {
      if (this.mode === 'overview' && this.hovered) this.select(this.hovered);
    };
    r.domElement.addEventListener('pointermove', this.onMove);
    r.domElement.addEventListener('pointerleave', this.onLeave);
    r.domElement.addEventListener('click', this.onClick);

    this.resize();
    this.overviewPose(this.camPos, this.camLook);
    this.last = performance.now();
    this.loop = this.loop.bind(this);
    this.raf = requestAnimationFrame(this.loop);
    if (process.env.NODE_ENV !== 'production') window.__hadoField = this; // for the test scripts
  }

  resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.w = w;
    this.h = h;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.camT >= 1) {
      if (this.mode === 'overview') this.overviewPose(this.camPos, this.camLook);
      else this.detailPose(this.selected, this.camPos, this.camLook);
    }
  }

  overviewPose(pos, look) {
    const n = Math.ceil((this.fighters?.length || 16) / 2);
    const halfWidth = ((n - 1) / 2) * SPACING + 0.1;
    const vfov = (this.camera.fov * Math.PI) / 180;
    // fit the rows' width, but on a wider screen than 16:9 don't come so close that they outgrow its height
    const aspect = Math.min(this.camera.aspect, 16 / 9);
    const d = clamp(halfWidth / (Math.tan(vfov / 2) * aspect), 8, 40);
    pos.set(CENTRE_X, d * 0.68, d);
    look.set(CENTRE_X, 2.4, BACK_Z / 2);
  }

  detailPose(id, pos, look) {
    const F = this.fighters.find((x) => x.c.Id === id);
    if (!F) return this.overviewPose(pos, look);
    const d = DETAIL_D;
    const vfov = (this.camera.fov * Math.PI) / 180;
    const halfW = Math.tan(vfov / 2) * d * this.camera.aspect;
    // fighter sits towards the left of the frame, leaving room to travel before the bio panel
    const off = this.camera.aspect > 1.2 ? halfW * 0.66 : 0;
    pos.set(F.standX + off, 4.2, F.home.z + d);
    look.set(F.standX + off, 2.9, F.home.z);
  }

  tweenCamera(toPos, toLook) {
    this.camFrom = { pos: this.camPos.clone(), look: this.camLook.clone() };
    this.camTo = { pos: toPos, look: toLook };
    this.camT = 0;
  }

  select(id) {
    this.mode = 'detail';
    this.selected = id;
    this.hovered = null;
    const p = new THREE.Vector3();
    const l = new THREE.Vector3();
    this.detailPose(id, p, l);
    this.tweenCamera(p, l);
    this.cb.onSelect?.(id);
    this.cb.onHover?.(null);
  }

  back() {
    const prev = this.selected;
    this.mode = 'overview';
    this.selected = null;
    const F = this.fighters.find((x) => x.c.Id === prev);
    F?.f.setMove(null);
    const p = new THREE.Vector3();
    const l = new THREE.Vector3();
    this.overviewPose(p, l);
    this.tweenCamera(p, l);
    this.cb.onSelect?.(null);
  }

  playMove(name) {
    const F = this.fighters.find((x) => x.c.Id === this.selected);
    if (F) F.f.setMove(name);
  }

  onFighterEvent(ev, fighter) {
    if (ev !== 'projectile') return;
    const F = this.fighters.find((x) => x.f === fighter);
    if (!F || !F.f.sheet) return; // the placeholder figures have no projectile art
    // the fighter's own projectile art, at the same pixel scale, flying from the hands to the
    // right (it passes behind the bio panel, which sits over the canvas)
    const anim = F.f.sheet.anims.projectile;
    const spec = PROJECTILES[F.c.Id];
    if (!anim || !spec) throw new Error(`${F.c.Id} fires a projectile but has no projectile art`);
    const px = F.planeW / F.f.size; // world units per sprite pixel
    const [, , fw, , fax] = F.f.sheetFrame;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(...anim.frames.map((f) => f[2]));
    canvas.height = Math.max(...anim.frames.map((f) => f[3]));
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false });
    const w = canvas.width * px;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, canvas.height * px), mat);
    m.position.set(F.standX + (fw - fax) * px + w / 2, spec.y * px, F.home.z + 0.1);
    this.scene.add(m);
    const light = new THREE.PointLight(spec.light, 6, 8, 1.5);
    light.position.copy(m.position);
    this.scene.add(light);
    this.projectiles.push({ m, tex, canvas, anim, img: F.f.sheetImg, light, life: 0, drawn: -1 });
  }

  /** Paint a projectile's current frame: launch frames once, then the flight frames on a loop. */
  drawProjectile(p) {
    const { anim, canvas } = p;
    const launch = anim.launch || 0;
    const step = Math.floor((p.life / 1000) * anim.fps);
    const i = step < launch ? step : launch + ((step - launch) % (anim.frames.length - launch));
    if (i === p.drawn) return;
    p.drawn = i;
    const [sx, sy, sw, sh] = anim.frames[i];
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // leading edge forward, centred on the flight line
    ctx.drawImage(p.img, sx, sy, sw, sh, canvas.width - sw, Math.round((canvas.height - sh) / 2), sw, sh);
    p.tex.needsUpdate = true;
  }

  spawnBolt() {
    const rng = this.rng;
    const x = (rng() - 0.5) * 36;
    const z = -8 - rng() * 18;
    const from = new THREE.Vector3(x + (rng() - 0.5) * 6, 20, z);
    const to = new THREE.Vector3(x, 0, z);
    const paths = boltPaths(rng, from, to);
    const camDir = new THREE.Vector3().subVectors(this.camera.position, to).normalize();
    const core = new THREE.Mesh(
      ribbon(paths, 0.09, camDir),
      new THREE.MeshBasicMaterial({ color: 0xf2f6ff, transparent: true, fog: false, side: THREE.DoubleSide }),
    );
    const glow = new THREE.Mesh(
      ribbon(paths, 0.45, camDir),
      new THREE.MeshBasicMaterial({
        color: 0x6f8cff, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, side: THREE.DoubleSide,
      }),
    );
    this.scene.add(glow, core);
    this.bolts.push({ core, glow, life: 0, max: 260 + rng() * 260 });
    this.boltLight.position.set(x, 8, z + 4);
    this.flash = 1;
  }

  setVisible(v) {
    this.visible = v;
  }

  loop(now) {
    this.raf = requestAnimationFrame(this.loop);
    const dt = Math.min(64, now - this.last);
    this.last = now;
    if (!this.visible) return;

    // camera tween
    if (this.camT < 1 && this.camFrom) {
      this.camT = Math.min(1, this.camT + dt / 1100);
      const e = easeInOut(this.camT);
      this.camPos.lerpVectors(this.camFrom.pos, this.camTo.pos, e);
      this.camLook.lerpVectors(this.camFrom.look, this.camTo.look, e);
    }
    const sway = Math.sin(now * 0.00025) * 0.15;
    this.camera.position.set(this.camPos.x + sway, this.camPos.y, this.camPos.z);
    this.camera.lookAt(this.camLook);

    // hover
    if (this.mode === 'overview' && this.camT >= 1) {
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const hits = this.raycaster.intersectObjects(this.fighters.map((F) => F.mesh));
      // a sprite's square has see-through corners: only its painted pixels count, otherwise
      // the front row's empty space blocks the fighters standing behind it
      const hit = hits.find((h) => solidAt(h.object.userData.fighter, h.uv));
      const id = hit ? hit.object.userData.id : null;
      if (id !== this.hovered) {
        this.hovered = id;
        this.renderer.domElement.style.cursor = id ? 'pointer' : 'default';
        this.cb.onHover?.(id);
      }
    }

    // fighters
    for (const F of this.fighters) {
      const isSel = F.c.Id === this.selected;
      const lit = this.mode === 'overview' ? F.c.Id === this.hovered : isSel;
      F.tint = lerp(F.tint, lit ? 1 : 0, Math.min(1, dt / 120));
      const targetFade = this.mode === 'detail' && !isSel ? 0 : 1;
      F.fade = lerp(F.fade, targetFade, Math.min(1, dt / 250));
      const dim = 0.07 + this.flash * 0.3;
      const k = lerp(dim, 1, F.tint);
      F.mat.color.setRGB(k, k * (0.96 + F.tint * 0.04), k * (1.5 - F.tint * 0.5));
      F.mat.opacity = F.fade;
      F.mesh.visible = F.fade > 0.02;
      F.sh.visible = F.mesh.visible;
      const lift = F.tint * 0.24 * (this.mode === 'overview' ? 1 : 0);
      const tl = F.f.timeline;
      const px = F.planeW / F.f.size;
      const [dx, dy, a = 1] = tl.path ? tl.path(F.f.position) : [0, 0];
      if (F.f.moveName) {
        F.ox = dx * px;
        F.oy = dy * px;
      } else {
        // the move is over: glide back to the fighter's spot
        F.ox = lerp(F.ox, 0, Math.min(1, dt / 170));
        F.oy = lerp(F.oy, 0, Math.min(1, dt / 170));
      }
      F.mesh.position.x = F.home.x + F.ox;
      F.mesh.position.y = F.home.y + lift + F.oy;
      F.mat.opacity = F.fade * a;
      F.sh.position.x = F.standX + F.ox;
      F.sh.scale.setScalar(clamp(1 - F.oy * 0.12, 0.45, 1));
      // only animate fighters the viewer can see in colour (cheap) + slow idle for the rest
      if (lit || F.f.moveName) {
        if (F.f.update(dt * (tl.rate ?? 1))) F.tex.needsUpdate = true;
      } else if (F.f.update(dt * 0.5)) F.tex.needsUpdate = true;
    }

    // clear the close-up shot of any rubble between the camera and the fighter
    const selF = this.fighters.find((F) => F.c.Id === this.selected);
    for (const m of this.rubble) m.visible = this.mode === 'overview' || m.position.z < selF.home.z - 1;

    // projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life += dt;
      p.m.position.x += dt * PROJECTILE_SPEED;
      this.drawProjectile(p);
      p.light.position.copy(p.m.position);
      // fade out on reaching the bio panel, measured at the projectile's leading edge
      const limit = this.cb.projectileLimit?.();
      let alpha = 1;
      if (limit != null) {
        const nose = p.m.position.clone();
        nose.x += p.m.geometry.parameters.width / 2;
        nose.project(this.camera);
        alpha = clamp((limit - ((nose.x + 1) / 2) * this.w) / PROJECTILE_FADE_PX, 0, 1);
      }
      p.m.material.opacity = alpha;
      p.light.intensity = 6 * alpha;
      if (alpha === 0 || p.life > PROJECTILE_MS) {
        this.scene.remove(p.m, p.light);
        p.m.geometry.dispose();
        p.tex.dispose();
        p.m.material.dispose();
        this.projectiles.splice(i, 1);
      }
    }

    // lightning
    this.nextBolt -= dt;
    if (this.nextBolt <= 0) {
      this.spawnBolt();
      if (this.rng() < 0.35) setTimeout(() => this.spawnBolt(), 120);
      this.nextBolt = 1400 + this.rng() * 3800;
    }
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const b = this.bolts[i];
      b.life += dt;
      const flick = b.life < b.max * 0.6 ? (Math.floor(b.life / 45) % 3 !== 1 ? 1 : 0.25) : 1 - (b.life - b.max * 0.6) / (b.max * 0.4);
      b.core.material.opacity = clamp(flick, 0, 1);
      b.glow.material.opacity = clamp(flick, 0, 1) * 0.35;
      if (b.life > b.max) {
        this.scene.remove(b.core, b.glow);
        b.core.geometry.dispose();
        b.glow.geometry.dispose();
        b.core.material.dispose();
        b.glow.material.dispose();
        this.bolts.splice(i, 1);
      }
    }
    this.flash *= Math.pow(0.9, dt / 16);
    this.boltLight.intensity = this.flash * 260;
    this.ambient.intensity = 1.1 + this.flash * 1.6;
    this.dust.position.y = Math.sin(now * 0.0003) * 0.2;
    this.dust.rotation.y = now * 0.00002;

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    const el = this.renderer.domElement;
    el.removeEventListener('pointermove', this.onMove);
    el.removeEventListener('pointerleave', this.onLeave);
    el.removeEventListener('click', this.onClick);
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (o.material.map) o.material.map.dispose();
        o.material.dispose();
      }
    });
    this.renderer.dispose();
    el.remove();
  }
}
