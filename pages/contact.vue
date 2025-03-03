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
        title: "Contact | ArtWorksIT",
        description: "ArtWorksIT is a collaborative web design studio in Bangalore crafting unique websites that prioritizes user experience at reasonable costs.",
        ogTitle: "Contact | ArtWorksIT",
        ogDescription: "ArtWorksIT is a collaborative web design studio in Bangalore crafting unique websites that prioritizes user experience at reasonable costs.",
        ogImage: "[og:image]",
        ogUrl: router,
        twitterTitle: "Contact | ArtWorksIT",
        twitterDescription: "ArtWorksIT is a collaborative web design studio in Bangalore crafting unique websites that prioritizes user experience at reasonable costs.",
        twitterImage: "[twitter:image]",
        twitterCard: "ArtWorksIT is a collaborative web design studio in Bangalore crafting unique websites that prioritizes user experience at reasonable costs.",
    });

    useHead({
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
