<template>
  <div
    ref="container"
    class="fixed inset-0 overflow-hidden pointer-events-none select-none z-[150]"
    aria-hidden="true"
  />
</template>

<script setup>
import { gsap } from "gsap";

const QUANTITY = 60;
const CLEAR_AFTER = 2750; // ms

const container = ref(null);
let running = false;
let timeout = 0;

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function rain(srcs) {
  if (running || !container.value || !srcs?.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  running = true;

  const el = container.value;
  const height = el.offsetHeight;
  const size = Math.max(120, window.innerWidth * 0.1);

  for (let i = 0; i < QUANTITY; i++) {
    const scale = Math.random() * 0.6 + 0.4;
    const tilt = randInt(1, 5);
    const delay = 0.001 * randInt(0, 1250);
    const speed = randInt(500, 1500) * 0.001;

    const wrap = document.createElement("div");
    wrap.style.cssText = `position:absolute;left:${randInt(0, 10)}0%;width:${size}px;will-change:transform;`;

    const img = document.createElement("img");
    img.src = srcs[Math.floor(Math.random() * srcs.length)];
    img.alt = "";
    img.draggable = false;
    img.style.cssText = "display:block;width:100%;height:auto;";
    wrap.appendChild(img);

    gsap.fromTo(
      wrap,
      { y: height, xPercent: -50, rotate: 0.001, scale },
      { y: "-100%", xPercent: -50, rotate: 0.001, delay, ease: "power1.in", duration: speed },
    );
    gsap.fromTo(
      img,
      { xPercent: -25, rotate: tilt },
      { xPercent: 25, rotate: -tilt, ease: "power1.inOut", delay, duration: 0.8, repeat: -1, yoyo: true },
    );

    el.appendChild(wrap);
  }

  timeout = window.setTimeout(clear, CLEAR_AFTER);
}

function clear() {
  const el = container.value;
  if (el) {
    gsap.killTweensOf(el.querySelectorAll("div, img"));
    el.replaceChildren();
  }
  running = false;
}

function onRain(e) {
  rain(e.detail?.srcs);
}

onMounted(() => window.addEventListener("sticker-rain", onRain));
onBeforeUnmount(() => {
  window.removeEventListener("sticker-rain", onRain);
  window.clearTimeout(timeout);
  clear();
});
</script>
