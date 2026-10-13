<template>
  <div ref="containerRef" data-wavy-marquee-init class="wavy-marquee">
    <div class="wavy-marquee__collection">
      <div ref="listRef" data-wavy-marquee-list class="wavy-marquee__list">
        <div
          v-for="logo in logos"
          :key="logo.src"
          data-wavy-marquee-item
          class="wavy-marquee__item"
        >
          <div class="logo-card">
            <NuxtImg
              :width="logo.width"
              :height="logo.height"
              :src="logo.src"
              :class="['logo-card__img', logo.class]"
              :alt="logo.alt"
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Wavy marquee (Osmo Supply), scroll-driven: the section pins, scrolling
// moves the cards sideways along a sine wave, then it unpins at the last card.
const WAVE_Y = 0.5; // wave height relative to card height
const HOLD = 0.2; // pause at the end, in viewport heights of scroll
const ITEMS_PER_WAVE = 10; // approximate cards per full wave
const WAVE_TRAVEL = 0.25; // wave movement along with the scroll
// [min width, wave scale]
const VIEWPORT = [
  [992, 1],
  [768, 1],
  [480, 0.75],
  [0, 0.75],
];

const props = defineProps({
  logos: { type: Array, required: true },
});

const containerRef = ref(null);
const listRef = ref(null);

let ctx;
let lastWidth = 0;
let resizeTimer;
let introPlayed = false;
let introObserver;

function initMarquee() {
  ctx?.revert();
  introObserver?.disconnect();

  const container = containerRef.value;
  const list = listRef.value;
  if (!container || !list) return;

  ctx = gsap.context(() => {
    const items = Array.from(list.querySelectorAll("[data-wavy-marquee-item]"));
    if (!items.length) return;

    const waveScale = VIEWPORT.find(([min]) => innerWidth >= min)[1];
    const setX = gsap.quickSetter(list, "x", "px");
    const setY = items.map((item) => gsap.quickSetter(item, "y", "px"));

    let maxTravel = 0;
    let waveLength = 1;
    let itemData = [];

    const measure = () => {
      // Measure at rest so the offsets are not affected by transforms.
      gsap.set(list, { x: 0 });
      gsap.set(items, { y: 0 });

      const containerWidth = container.offsetWidth;
      itemData = items.map((item) => ({
        x: item.offsetLeft,
        width: item.offsetWidth,
        height: item.offsetHeight,
      }));

      // Stop once the last card is centered in the viewport.
      const last = itemData[itemData.length - 1];
      maxTravel = Math.max(0, last.x + last.width / 2 - containerWidth / 2);

      const averageWidth =
        itemData.reduce((sum, d) => sum + d.width, 0) / items.length;
      waveLength =
        Math.max(containerWidth, averageWidth * ITEMS_PER_WAVE) * waveScale;
    };

    const render = (travel) => {
      const containerWidth = container.offsetWidth;
      const phaseTravel = (travel / waveLength) * Math.PI * 2 * WAVE_TRAVEL;

      setX(-travel);

      items.forEach((item, i) => {
        const d = itemData[i];
        const screenX = d.x - travel;
        if (screenX + d.width < 0 || screenX > containerWidth) return;

        const phase = (screenX / waveLength) * Math.PI * 2 + phaseTravel;
        setY[i](Math.sin(phase) * d.height * WAVE_Y);
      });
    };

    // Extra scroll after the last card is centered, so it rests before unpinning.
    const holdDistance = () => window.innerHeight * HOLD;
    const travelAt = (self) =>
      Math.min(self.progress * (maxTravel + holdDistance()), maxTravel);

    measure();
    render(0);

    // Intro: cards fade up in a stagger when the section scrolls into view.
    // Targets the inner card so it doesn't fight the wave's y on the item.
    // Uses an IntersectionObserver so it doesn't depend on pin measurements.
    if (!introPlayed) {
      const cards = list.querySelectorAll(".logo-card");
      gsap.set(cards, { autoAlpha: 0, y: 80 });

      introObserver = new IntersectionObserver(
        (entries) => {
                    if (!entries.some((e) => e.isIntersecting)) return;
          introObserver.disconnect();
          introPlayed = true;
          gsap.to(cards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
          });
        },
        { rootMargin: "0px 0px -20% 0px" },
      );
      // Observe the cards themselves (the container has a lot of padding
      // above them). Any visible card counts, since after a reload the
      // scroll position may already have moved the first card off-screen.
      cards.forEach((card) => introObserver.observe(card));
    }

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => "+=" + (maxTravel + holdDistance()),
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onRefreshInit: measure,
      onRefresh: (self) => render(travelAt(self)),
      onUpdate: (self) => render(travelAt(self)),
    });
  }, container);
}

const onResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    initMarquee();
    ScrollTrigger.refresh();
  }, 150);
};

const onLoad = () => ScrollTrigger.refresh();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  lastWidth = window.innerWidth;
  initMarquee();
  window.addEventListener("resize", onResize);
  window.addEventListener("load", onLoad);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("load", onLoad);
  clearTimeout(resizeTimer);
  introObserver?.disconnect();
  ctx?.revert();
});
</script>

<style scoped>
.wavy-marquee {
  --card-size: 20vw;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  /* room for the wave swing above and below the cards */
  padding-block: calc(var(--card-size) * 0.5 + 3vw);
  overflow: clip;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}

.wavy-marquee__collection {
  position: relative;
  width: 100%;
}

.wavy-marquee__list {
  position: relative;
  display: flex;
  align-items: center;
  gap: clamp(0.75em, 1.125vw, 2.25em);
  width: max-content;
  padding-inline: 4vw;
  will-change: transform;
}

.wavy-marquee__item {
  position: relative;
  flex: none;
}

.logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--card-size);
  aspect-ratio: 1;
  background-color: #000;
}

@media screen and (max-width: 767px) {
  .wavy-marquee {
    --card-size: 55vw;
  }

  .wavy-marquee__list {
    gap: 3vw;
    padding-inline: 5vw;
  }
}

.logo-card__img {
  height: auto;
  pointer-events: none;
}
</style>
