// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE || "",
        },
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "v-gsap-nuxt", "@nuxt/image", "nuxt-split-type","@nuxthub/core"],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
