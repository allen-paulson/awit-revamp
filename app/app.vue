<script setup lang="ts">
const route = useRoute()
const { proxy: metaPixel } = useScriptMetaPixel()

const initialPath = route.fullPath
let initialPageSeen = false

useScriptEventPage(({ path }) => {
    // Meta Pixel sends the landing pageview when it initializes.
    if (!initialPageSeen && path === initialPath) {
        initialPageSeen = true
        return
    }

    initialPageSeen = true
    metaPixel.fbq("track", "PageView")
})
</script>

<template>
    <NuxtRouteAnnouncer/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
