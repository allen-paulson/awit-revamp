// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE || "",
        },
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "v-gsap-nuxt", "@nuxt/image", "nuxt-split-type", "@nuxthub/core", "nuxt3-lenis", "@nuxtjs/turnstile", "@nuxtjs/seo"],
    turnstile: {
        siteKey: "1x00000000000000000000BB", // Replace with your actual site key before deployment
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
