<template>
    <div :class="{ 'flex-row-reverse': index % 2 === 1 }" class="flex items-end gap-[4vw] md:px-[2vw]">
        <div class="w-[75%]">
            <div class="border-[1.5px] border-[#3d3d3d] rounded-[1.25vw] overflow-hidden">
                <div ref="containerRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="w-full aspect-video overflow-hidden">
                    <div ref="imageRef" class="w-full">
                        <NuxtImg class="w-full" :src="project.image.desktop" :alt="project.title" />
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[25%] md:pb-[6vw]" :class="[index % 2 === 0 ? 'flex justify-start' : 'flex justify-end']">
            <div>
                <p class="font-anton text44px-desktop">{{ project.title }}</p>
                <p class="font-inter text16px-desktop mt-[.75vw]">MADE IN {{ project.year }}</p>
                <div class="mt-[1.75vw] flex items-center gap-[1.5vw]">
                    <p v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="text16px-desktop font-inter text-[#63BAF0]">
                        {{ tag }}
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
