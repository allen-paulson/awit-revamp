// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    nitro: {
        routeRules: {
            "/about": { redirect: "/team" },
        },
        prerender: {
            routes: ['/','/team','/work','/contact'],
            crawlLinks: true
        }
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "v-gsap-nuxt", "@nuxt/image", "nuxt-split-type", "@nuxthub/core", "nuxt3-lenis", "@nuxtjs/seo", "nuxt-umami"],
    fonts: {
        families: [
            {
                name: "Anton",
                display: "optional",
            },
            {
                name: "Inter",
                display: "optional",
            },
        ],
        priority: ["google", "bunny"],
    },
    // turnstile: {
    //     siteKey: "0x4AAAAAAA_aGj2KM0xzaZVe", // Replace with your actual site key before deployment
    // },
    umami: {
        id: "d3a19892-3db8-46ea-8b02-49b5a514dec7",
        host: "https://analytics.artworksit.com",
        autoTrack: true,
        ignoreLocalhost: true,
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
