<template>
    <div
        class="antialiased font-inter bg-[#151515] relative text-[#F1F1F1] selection:text-background-black selection:bg-white-color min-h-screen overflow-hidden"
    >
        <!-- Loader Start -->
        <Loader v-if="isLoading" @animation-end="onLoadFinished" />
        <!-- Loader End -->

        <the-header />

        <main>
            <slot />
        </main>

        <the-footer />
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { $startLenis, $stopLenis } = useNuxtApp();
const isLoading = useState("isLoading", () => true);

const onLoadFinished = () => {
    isLoading.value = false;
};

onMounted(() => {
    if (isLoading.value) {
        $stopLenis?.();
        return;
    }

    $startLenis?.();
});

watch(isLoading, (loading) => {
    if (loading) {
        $stopLenis?.();
        return;
    }

    $startLenis?.();
});
</script>
