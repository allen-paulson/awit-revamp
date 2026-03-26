import Lenis from "lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        duration: 1,
        autoRaf: false,
        smoothWheel: true,
        syncTouch: false,
    });

    const updateScroll = () => {
        ScrollTrigger.update();
    };

    const onTick = (time) => {
        lenis.raf(time * 1000);
    };

    lenis.on("scroll", updateScroll);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    lenis.stop();

    if (import.meta.hot) {
        import.meta.hot.dispose(() => {
            gsap.ticker.remove(onTick);
            lenis.off("scroll", updateScroll);
            lenis.destroy();
        });
    }

    return {
        provide: {
            lenis,
            startLenis: () => lenis.start(),
            stopLenis: () => lenis.stop(),
        },
    };
});
