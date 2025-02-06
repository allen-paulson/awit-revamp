<template>
    <div :style="{ background: project.bg_color, color: project.text_color }" class="flex flex-col gap-[4vw] p-[.85vw]">
        <div class="">
            <div class="overflow-hidden">
                <div class="w-full aspect-[16/16.5] overflow-hidden">
                    <NuxtImg class="w-full" :src="project.image.desktop" :alt="project.title" />
                </div>
            </div>
        </div>
        <div>
            <div class="p-[4vw]">
                <p class="font-anton text36px-mobile">{{ project.title }}</p>
                <p class="font-inter mt-[2.5vw] text18px-mobile">MADE IN {{ project.year }}</p>
                <div class="mt-[5vw]">
                    <p class="text18px-mobile font-semibold font-inter">
                        {{ project.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
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
