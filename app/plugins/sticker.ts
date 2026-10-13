// v-sticker: hover tilt/scale + press feel (styles in main.css) and a sticker
// rain on click (see StickerRain.client.vue).
export default defineNuxtPlugin((nuxtApp) => {
    const onClick = (e: Event) => {
        const el = e.currentTarget as HTMLImageElement;
        const src = el.currentSrc || el.src;
        if (!src) return;
        window.dispatchEvent(
            new CustomEvent("sticker-rain", { detail: { srcs: [src] } }),
        );
    };

    nuxtApp.vueApp.directive("sticker", {
        mounted(el: HTMLElement) {
            el.classList.add("sticker");
            el.addEventListener("click", onClick);
        },
        beforeUnmount(el: HTMLElement) {
            el.removeEventListener("click", onClick);
        },
    });
});
