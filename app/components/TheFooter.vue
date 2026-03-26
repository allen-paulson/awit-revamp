<template>
    <footer ref="footer" class="relative z-1 mt-[4vw] w-full">
        <!-- DESKTOP (animated letters) -->
        <div class="hidden md:flex w-full items-end *:h-[20.8vw]">
            <NuxtImg
                src="/images/footer/a.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/r.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/t.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/w.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/o.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/r2.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/k.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/s.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/i.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
            <NuxtImg
                src="/images/footer/t2.png"
                class="flex-1 object-contain origin-bottom will-change-transform footer-letter"
            />
        </div>

        <!-- MOBILE (static original image) -->
        <div class="md:hidden">
            <NuxtImg
                src="/images/footer/awit.webp"
                width="3456"
                height="720"
                class="w-full"
                format="webp"
            />
        </div>
    </footer>
</template>

<!-- <script setup>
import { gsap } from "gsap"
import { onMounted, ref } from "vue"

const footer = ref(null)

onMounted(() => {

  const mm = gsap.matchMedia()

  mm.add("(min-width: 768px)", () => {

    const letters = Array.from(footer.value.querySelectorAll(".footer-letter"))

    const movers = letters.map(letter =>
      gsap.quickTo(letter, "y", { duration: 0.35, ease: "power3.out" })
    )

    footer.value.addEventListener("mousemove", (e) => {

      letters.forEach((letter, i) => {

        const rect = letter.getBoundingClientRect()
        const center = rect.left + rect.width / 2

        const dist = Math.abs(e.clientX - center)

        const maxDist = 260
        const strength = Math.max(0, 1 - dist / maxDist)

        const height = strength * -40

        movers[i](height)

      })

    })

    footer.value.addEventListener("mouseleave", () => {
      movers.forEach(m => m(0))
    })

  })

})
</script> -->

<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const footer = ref(null);

onMounted(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const letters = footer.value.querySelectorAll(".footer-letter");

        letters.forEach((letter) => {
            const moveY = gsap.quickTo(letter, "y", {
                duration: 1,
                ease: "power2.out",
            });

            letter.addEventListener("mouseenter", () => {
                moveY(-40); // height of lift
            });

            letter.addEventListener("mouseleave", () => {
                moveY(0);
            });
        });
    });
});
</script>
