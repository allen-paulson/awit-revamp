<script setup>
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

const fontsLoaded = ref(false);

onMounted(async () => {
    const { $fontLoader } = useNuxtApp();
    
    // Wait for both browser fonts and custom fonts
    await Promise.all([
        document.fonts.ready,
        $fontLoader,
        // Force check specific fonts - add your font families here
        document.fonts.load('1em "Anton"'),
        document.fonts.load('1em "Inter"'),
    ]);
    
    fontsLoaded.value = true;
});
</script>

<template>
    <div v-if="fontsLoaded">
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
    <div v-else class="flex items-center justify-center h-screen">
        <div class="animate-pulse"></div>
    </div>
</template>

<style>
html.fonts-loading * {
    opacity: 0;
}
</style>
