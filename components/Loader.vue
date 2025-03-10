<template>
    <div ref="loader" class="loader fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 origin-center scale-[2.5] md:scale-150 z-[9999] bg-white flex w-screen items-center justify-center rounded-full aspect-square will-change-transform">
        <div class="h-full w-full font-anton text-background-black text44px-desktop relative">
            <div>
                <div class="overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p id="first-text" v-split-text="{ splitBy: 'words, char' }" class="-translate-y-full will-change-transform">WEB DESIGN STUDIO</p>
                </div>
                <div class="overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p id="second-text" v-split-text="{ splitBy: 'words, char' }" class=" will-change-transform">ARTWORKSIT</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { gsap } from "gsap";

    const loader = ref(null);

    const emit = defineEmits(["animation-end"]);

    onMounted(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            // Kill GSAP tweens after animation completes
            if (loader.value) {
              gsap.killTweensOf(['.loader', '#first-text .char', '#second-text .char']);
            }
            // Then emit the event
            emit("animation-end");
          }
        });

        // Animate second text character by character
        tl.to("#second-text .char", {
            y: "100%",
            stagger: 0.05,
            duration: 0.6,
            delay: 1,
            ease: "power2.out",
        })
            .to("#first-text .char", {
                y: "100%",
                stagger: 0.05,
                duration: 0.6,
                ease: "power2.out",
            })
            .to(
                loader.value,
                {
                    scale: 0,
                    duration: 0.8,
                    ease: "power4.inOut",
                },
                "+=0.2"
            );
    });
</script>

<style scoped>
  .loader {
    contain: strict;
    will-change: transform, opacity;
    backface-visibility: hidden;
  }
</style>
