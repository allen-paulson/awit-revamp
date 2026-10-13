<template>
  <canvas
    ref="canvas"
    class="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
    aria-hidden="true"
  />
</template>

<script setup>
const STICKERS = [
  "bone",
  "code",
  "computer",
  "cup",
  "dino",
  "filter-coffee",
  "heart",
  "pencil",
  "pencil_2",
  "target",
  "traffic-lights",
  "uwu-face",
];

const CELL = 26; // grid cell size in px
const ICON = 16; // sticker size in px
const RADIUS = 2; // cluster reach in cells
const LIFE = 300; // ms a cell stays visible
const BG = "#0f0f11";

const canvas = ref(null);

let ctx;
let raf = 0;
let dpr = 1;
let lastKey = "";
const cells = new Map();
let images = [];
let cleanup = () => {};

onMounted(async () => {
  const noHover = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (noHover || reduced) return;

  await nextTick(); // client-only wrapper renders the canvas after mount
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");
  images = STICKERS.map((name) => {
    const img = new Image();
    img.src = `/images/stickers/${name}.png`;
    return img;
  });

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.value.width = window.innerWidth * dpr;
    canvas.value.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // stamp a ragged diamond-shaped cluster of cells around the cursor cell
  const addCell = (cx, cy) => {
    const key = `${cx},${cy}`;
    if (key === lastKey) return;
    lastKey = key;
    const now = performance.now();

    for (let dx = -RADIUS; dx <= RADIUS; dx++) {
      for (let dy = -RADIUS; dy <= RADIUS; dy++) {
        const dist = Math.abs(dx) + Math.abs(dy);
        if (dist > RADIUS) continue;
        if (dist === RADIUS && Math.random() < 0.45) continue; // ragged outer edge only

        const k = `${cx + dx},${cy + dy}`;
        const existing = cells.get(k);
        if (existing) {
          existing.born = now;
          continue;
        }
        cells.set(k, {
          x: (cx + dx) * CELL,
          y: (cy + dy) * CELL,
          img:
            Math.random() < 0.4
              ? images[Math.floor(Math.random() * images.length)]
              : null,
          born: now,
          life: LIFE * (0.6 + Math.random() * 0.7),
        });
      }
    }
  };

  // sample the path at half-cell steps so fast movement never leaves gaps
  let prev = null;
  const onMove = (e) => {
    const { clientX: x, clientY: y } = e;
    if (prev) {
      const steps = Math.ceil(Math.hypot(x - prev.x, y - prev.y) / (CELL / 2));
      for (let i = 1; i < steps; i++) {
        addCell(
          Math.floor((prev.x + ((x - prev.x) * i) / steps) / CELL),
          Math.floor((prev.y + ((y - prev.y) * i) / steps) / CELL),
        );
      }
    }
    addCell(Math.floor(x / CELL), Math.floor(y / CELL));
    prev = { x, y };
    if (!raf) raf = requestAnimationFrame(draw);
  };

  const draw = (now) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const [k, c] of cells) {
      const t = (now - c.born) / c.life;
      if (t >= 1) {
        cells.delete(k);
        continue;
      }
      ctx.globalAlpha = t < 0.85 ? 1 : (1 - t) / 0.15; // solid, then a quick fade-out
      ctx.fillStyle = BG;
      // snap edges to device pixels so neighbours share an exact edge (no seams, no double-blend)
      const x0 = Math.round(c.x * dpr) / dpr;
      const y0 = Math.round(c.y * dpr) / dpr;
      const x1 = Math.round((c.x + CELL) * dpr) / dpr;
      const y1 = Math.round((c.y + CELL) * dpr) / dpr;
      ctx.fillRect(x0, y0, x1 - x0, y1 - y0);

      if (c.img?.complete && c.img.naturalWidth) {
        const ratio = c.img.naturalWidth / c.img.naturalHeight;
        const w = ratio >= 1 ? ICON : ICON * ratio;
        const h = ratio >= 1 ? ICON / ratio : ICON;
        ctx.drawImage(
          c.img,
          c.x + (CELL - w) / 2,
          c.y + (CELL - h) / 2,
          w,
          h,
        );
      }
    }
    ctx.globalAlpha = 1;

    raf = cells.size ? requestAnimationFrame(draw) : 0;
  };

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onMove, { passive: true });

  cleanup = () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onMove);
    cancelAnimationFrame(raf);
  };
});

onBeforeUnmount(() => cleanup());
</script>
