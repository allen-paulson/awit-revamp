// plugins/lenis.client.ts
import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        normalizeWheel: true,
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    nuxtApp.provide("lenis", lenis);
});
