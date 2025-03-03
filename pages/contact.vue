<template>
    <div class="mt-[20vw] md:mt-[7.5vw]">
        <!-- Contact Section Start -->
        <ContactForm />
        <!-- Contact Section End -->
    </div>
</template>

<script setup>
    const router = useRequestURL().href;
    // SEO Meta Tags
    useSeoMeta({
        title: "ArtWorksIT - Web Design Studio",
        description: "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
        ogTitle: "ArtWorksIT - Web Design Studio",
        ogDescription: "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
        ogImage: "/images/meta.png",
        ogUrl: router,
        twitterTitle: "ArtWorksIT - Web Design Studio",
        twitterDescription: "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
        twitterImage: "/images/meta.png",
        twitterCard: "ArtWorksIT is a collaborative web design studio in Bangalore crafting unique websites.",
    });

    useHead({
        titleTemplate: (title) => (title ? `${title}` : "ArtWorksIT - Web Design Studio"),
        htmlAttrs: {
            lang: "en",
        },
        link: [
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon.png",
            },
        ],
    });
</script>
