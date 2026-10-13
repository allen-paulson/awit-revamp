import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    nitro: {
        routeRules: {
            "/about": {redirect: "/team"},
        },
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    runtimeConfig: {
        public: {
            siteUrl: "http://localhost:3000",
        },
    },
    modules: ["@nuxt/fonts", "v-gsap-nuxt", "@nuxt/image"],
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
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});
