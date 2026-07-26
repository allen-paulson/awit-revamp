import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    nitro: {
        preset: "cloudflare-pages",
        devStorage: {
            cache: {
                driver: "memory",
            },
        },
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
    site: {
        name: "ArtWorksIT",
        url: process.env.SITE_URL || "https://artworksit.com",
    },
    runtimeConfig: {
        laravelApiBaseUrl: process.env.LARAVEL_API_BASE_URL || "",
        backendApiSecret: process.env.BACKEND_API_SECRET || "",
        zeptoMailApiKey: process.env.ZEPTOMAIL_API_KEY || "",
        zeptoMailFromAddress: process.env.ZEPTOMAIL_FROM_ADDRESS || "",
        zeptoMailApiUrl:
            process.env.ZEPTOMAIL_API_URL ||
            "https://api.zeptomail.com/v1.1/email",
        public: {
            siteUrl: process.env.SITE_URL || "https://artworksit.com",
        },
    },
    modules: [
        "@nuxt/fonts",
        "v-gsap-nuxt",
        "@nuxt/image",
        "@nuxtjs/seo",
        "@nuxt/scripts",
        "nuxt-jsonld"
    ],
    sitemap: {
        excludeAppSources: true,
        urls: async () => {
            return [
                {loc: '/', priority: 1.0},
                {loc: '/contact', priority: 0.9},
                {loc: '/work', priority: 0.9},
                {loc: '/team', priority: 0.8}
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
    scripts: {
        registry: {
            googleAnalytics: {
                id: "G-DEHKDSZPS5",
                trigger: "onNuxtReady",
            },
            metaPixel: {
                id: "371216460476692",
                trigger: "onNuxtReady",
            },
        },
    },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    schemaOrg: {
        enabled: false
    },
    ogImage: {
        enabled: false
    }
});
