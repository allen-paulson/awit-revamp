<template>
  <div class="mt-[20vw] md:mt-[7.5vw]">
    <!-- Contact Section Start -->
    <ContactForm/>
    <!-- Contact Section End -->
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
// SEO Meta Tags
useSeoMeta({
  ogSiteName: "ArtWorksIT",
  title: "Talk to ArtWorksIT",
  description: "Let’s build something awesome together. Hit us up!",
  ogTitle: "Talk to ArtWorksIT",
  ogDescription: "Let’s build something awesome together. Hit us up!",
  ogImage: () => config.public.siteUrl + "/images/meta/contact.png",
  ogUrl: () => config.public.siteUrl,
  twitterTitle: "Talk to ArtWorksIT",
  twitterDescription: "Let’s build something awesome together. Hit us up!",
  twitterImage: () => config.public.siteUrl + "/images/meta/contact.png",
  twitterCard: "Let’s build something awesome together. Hit us up!",
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
      href: config.public.siteUrl + "/favicon.png",
    },
    {
      rel: "canonical",
      href: config.public.siteUrl,
    },
  ],
});
</script>
