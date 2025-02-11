<template>
    <NuxtLink to="/" :style="{ background: project.bg_color, color: project.text_color }" class="block md:p-[.3vw] p-[.85vw]">
        <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-col md:gap-[1vw] gap-[4vw]">
            <div class="">
                <div class="overflow-hidden">
                    <div ref="containerRef" class="w-full aspect-[16/16.5] overflow-hidden">
                        <div ref="imageRef" class="w-full">
                            <NuxtImg class="w-full" :src="project.image.desktop" :alt="project.title" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-[4vw] md:p-[1vw] md:pb-[1.5vw]">
                    <p class="font-anton text36px-mobile text36px-desktop">{{ project.title }}</p>
                    <p class="font-inter md:mt-[.5vw] mt-[2.5vw] text18px-mobile text18px-desktop">MADE IN {{ project.year }}</p>
                    <div class="mt-[5vw] md:mt-[1vw]">
                        <p class="text18px-mobile text18px-desktop font-semibold font-inter">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    import { gsap } from "gsap";
    // props
    const props = defineProps({
        project: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    });

    const containerRef = ref(null);
    const imageRef = ref(null);
    let animation = null;

    onMounted(() => {
        animation = gsap.to(imageRef.value, {
            y: () => -(imageRef.value.offsetHeight - containerRef.value.offsetHeight),
            ease: "Power1.easeInOut",
            duration: 3,
            paused: true,
        });
    });

    const handleMouseEnter = () => {
        if (animation) animation.play();
    };

    const handleMouseLeave = () => {
        if (animation) {
            animation.reverse();
        }
    };
</script>
