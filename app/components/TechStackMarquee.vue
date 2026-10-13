<template>
  <WavyLogoMarquee :logos="logos" />
</template>

<script setup>
const logos = [
  {
    src: "/images/home/figma.webp",
    width: 238,
    height: 76,
    class: "w-[60%]",
    alt: "Figma Logo",
  },
  {
    src: "/images/home/claude.webp",
    width: 134,
    height: 136,
    class: "w-[35%]",
    alt: "Claude Logo",
  },
  {
    src: "/images/home/codex.webp",
    width: 134,
    height: 134,
    class: "w-[35%]",
    alt: "Codex Logo",
  },
  {
    src: "/images/home/apsara.webp",
    width: 238,
    height: 70,
    class: "w-[60%]",
    alt: "Apsara Logo",
  },
  {
    src: "/images/home/tailwind.webp",
    width: 290,
    height: 100,
    class: "w-[65%]",
    alt: "Tailwind Logo",
  },
  {
    src: "/images/home/nuxt.webp",
    width: 236,
    height: 48,
    class: "w-[60%]",
    alt: "Nuxt Logo",
  },
  {
    src: "/images/home/gsap.webp",
    width: 204,
    height: 122,
    class: "w-[50%]",
    alt: "GSAP Logo",
  },
  {
    src: "/images/home/alpinejs.webp",
    width: 278,
    height: 52,
    class: "w-[60%]",
    alt: "Alpine.js Logo",
  },
  {
    src: "/images/home/laravel.webp",
    width: 294,
    height: 82,
    class: "w-[65%]",
    alt: "Laravel Logo",
  },
  {
    src: "/images/home/filament.webp",
    width: 257,
    height: 59,
    class: "w-[60%]",
    alt: "Filament Logo",
  },
  {
    src: "/images/home/mysql.webp",
    width: 219,
    height: 115,
    class: "w-[50%]",
    alt: "MySQL Logo",
  },
  {
    src: "/images/home/postgres.webp",
    width: 164,
    height: 164,
    class: "w-[35%]",
    alt: "Postgres Logo",
  },
  {
    src: "/images/home/cloudflare.webp",
    width: 266,
    height: 100,
    class: "w-[60%]",
    alt: "Cloudflare Logo",
  },
  {
    src: "/images/home/ploi.png",
    width: 134,
    height: 136,
    class: "w-[90%]",
    alt: "Ploi Logo",
  },
];
</script>
