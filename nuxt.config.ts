// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    nitro: {
        routeRules: {
            "/about": {redirect: "/team"},
        },
        prerender: {
            routes: ["/", "/team", "/work", "/contact"],
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
            siteUrl: process.env.SITE_URL || "https://artworksit.com",
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/fonts",
        "v-gsap-nuxt",
        "@nuxt/image",
        "nuxt-split-type",
        "@nuxthub/core",
        "nuxt3-lenis",
        "@nuxtjs/seo",
        "nuxt-umami",
        "nuxt-jsonld",
        "@nuxtjs/sitemap"
    ],
    sitemap: {
        excludeAppSources: true,
        urls: async () => {
            return [
                {url: '/', priority: 1.0},
                {url: '/contact', priority: 0.9},
                {url: '/work', priority: 0.9},
                {url: '/team', priority: 0.8}
            ]
        }
    },
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
    hub: {
        database: true,
    },
    schemaOrg: {
        enabled: false
    }
});