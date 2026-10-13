<template>
  <div
    ref="root"
    class="fixed inset-0 -z-10 pointer-events-none"
    aria-hidden="true"
  ></div>
</template>

<script setup lang="ts">
import { ShaderMount } from "@paper-design/shaders";
import { fragmentShader } from "~/utils/foldGradientShader";

const props = withDefaults(
  defineProps<{
    colors?: string[];
    bgColor?: string;
    shadowColor?: string;
    softness?: number;
    saturation?: number;
    rotation?: number;
    zoom?: number;
    ribbon?: number;
    ribbonWidth?: number;
    speed?: number;
  }>(),
  {
    colors: () => ["#101014", "#2e3038", "#8a8f9c", "#d8dce6", "#ffe9c2"],
    bgColor: "#08080a",
    shadowColor: "#141418",
    softness: 0.9,
    saturation: 0.9,
    rotation: 60,
    zoom: 8,
    ribbon: 0,
    ribbonWidth: 1,
    speed: 1,
  },
);

const root = ref<HTMLElement | null>(null);
let mount: ShaderMount | null = null;

// hex → linear-light rgb(a); the shader mixes colour in linear space
const toLin = (c: number) => Math.pow(c, 2.2);
const hexRGBA = (h: string): [number, number, number, number] => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map(toLin);
  return [r, g, b, 1];
};
const hexRGB = (h: string): [number, number, number] =>
  hexRGBA(h).slice(0, 3) as [number, number, number];

const uniforms = computed(() => ({
  u_colors: props.colors.map(hexRGBA),
  u_ncols: props.colors.length,
  u_back: hexRGB(props.bgColor),
  u_shadow: hexRGB(props.shadowColor),
  u_softness: props.softness,
  u_saturation: props.saturation,
  u_noise: 0.0,
  u_rotation: props.rotation,
  u_folds: props.zoom,
  u_ribbon: props.ribbon,
  u_ribbonWidth: props.ribbonWidth,
}));

onMounted(async () => {
  await nextTick();
  if (!root.value) return;
  mount = new ShaderMount(
    root.value,
    fragmentShader,
    uniforms.value,
    undefined,
    props.speed,
    0,
    1,
    // soft, blurry shader: cap render size (~1.9x fewer pixels than 1600x900), CSS upscales
    1280 * 720,
  );

  window.addEventListener("scroll", onScroll, { passive: true });
});

// freeze the animation while scrolling so the GPU isn't shared with it
let scrollTimer: ReturnType<typeof setTimeout> | undefined;
const onScroll = () => {
  mount?.setSpeed(0);
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => mount?.setSpeed(props.speed), 150);
};

watch(uniforms, (u) => mount?.setUniforms(u));
watch(
  () => props.speed,
  (s) => mount?.setSpeed(s),
);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  clearTimeout(scrollTimer);
  mount?.dispose();
  mount = null;
});
</script>
