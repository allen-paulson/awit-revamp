<template>
    <div class="mt-[27vw] md:mt-[10vw]">
        <!-- <hover-grid /> -->

        <div class="relative z-[1]">
            <!-- Heading Section Start -->
            <section class="relative">
                <div class="px-[6vw] md:px-[4.5vw] pt-[5vw] md:pt-0 pb-[8vw] md:pb-[6vw]">
                    <div class="relative text-[#F1F1F1]">
                        <!-- Desktop View -->
                        <div class="relative md:w-full hidden md:block">
                            <NuxtImg width="309" height="315" format="webp" class="heading-img absolute bottom-[37.5%] w-[12vw] right-[7.5%] -translate-x-[70%] -translate-y-[10%] z-[1]" src="/images/projects/ship.webp" alt="Ship Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex flex-col justify-center z-[0] w-full">
                                <span class="overflow-hidden">SITES WE'VE </span>
                                <span class="!inline-flex justify-end -mt-[2.75vw]">
                                    <span class="overflow-hidden">SHIPPED </span>
                                </span>
                            </h1>
                        </div>

                        <!-- Mobile View -->
                        <div class="pt-[2vw] relative md:w-[60%] md:hidden">
                            <NuxtImg width="309" height="315" format="webp" class="heading-img-mobile absolute bottom-0 w-[25vw] left-1/4 translate-x-[35%] -translate-y-[90%] z-[2]" src="/images/projects/ship.webp" alt="Ship Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading-mobile font-anton -tracking-[.1vw] leading-[1.12] flex flex-col">
                                <span class="overflow-hidden text76px-mobile !inline-flex justify-between"><span>SITES</span> <span>WE'VE</span> </span>
                                <span class="overflow-hidden text130px-mobile">SHIPPED</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Heading Section End -->

            <!-- Project Grid Section Start -->
            <section class="mt-[15vw] md:mt-[0vw] pb-[5vw] md:pb-[8vw]">
                <div class="px-[6vw] md:px-[5vw]">
                    <div class="relative">
                        <!-- Desktop View -->
                        <div class="relative text-[#FFFFFF] bg-[#151515] hidden md:block work-projects-container">
                            <NuxtLink target="_blank" :to="project.link" :aria-label="project.title + 'link'" v-for="(project, index) in projects" :key="index" class="flex justify-between gap-[5vw] px-[3vw] relative work-item last:border-b border-[#454545] border-t hover:border-t-[#A3A3A3] hover:bg-[#1C1C1C] duration-[.3s] ease-[cubic-bezier(0.8,0,0.2,1)] will-change-transform">
                                <div class="flex-1 pt-[1.75vw] pb-[3.5vw]">
                                    <div class="flex gap-[5vw]">
                                        <p class="font-inter font-light text24px-desktop">0{{ index + 1 }}</p>
                                        <div>
                                            <p class="font-anton text40px-desktop">{{ project.title }}</p>
                                            <div class="flex gap-[.5vw] mt-[1vw]">
                                                <div v-for="tag in project.tags" class="rounded-full border-[.5px] tracking-tight border-white px-[.75vw] py-[.5vw] font-inter text14px-desktop">{{ tag }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="border border-t-0 border-[#A3A3A3] bg-[#151515] p-[1vw] absolute top-0 right-[5vw] w-[34.5%] clip-target z-[1]">
                                    <div class="flex flex-col gap-[1vw]">
                                        <div class="">
                                            <NuxtImg width="1210" height="946" format="webp" :src="project.image.desktop" alt="Project Image" />
                                        </div>
                                        <div>
                                            <p class="font-inter text26px-desktop leading-[1.15] tracking-tight">{{ project.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>

                        <!-- Mobile View -->
                        <div class="grid gap-[4vw] relative md:hidden">
                            <NuxtLink target="_blank" :to="project.link" :aria-label="project.title + 'link'" v-for="(project, index) in projects" :key="index" class="block border-[.75px] border-white">
                                <div class="p-[3vw] pb-[4vw]">
                                    <div class="flex flex-col">
                                        <div class="flex justify-between">
                                            <div class="w-[50%]">
                                                <NuxtImg width="1210" height="946" format="webp" class="w-full" :src="project.image.desktop" alt="Project Image" />
                                            </div>
                                            <div>
                                                <NuxtImg width="38" height="38" format="webp" class="w-[8vw]" src="/images/work/arrow.svg" />
                                            </div>
                                        </div>
                                        <div class="mt-[30vw]">
                                            <p class="font-anton text40px-mobile text-white">{{ capitalizeFirstLetter(project.title) }}</p>
                                            <div class="mt-[4vw] flex flex-wrap gap-[2vw]">
                                                <div v-for="tag in project.tags" class="rounded-full border border-white px-[2.5vw] py-[2vw] font-inter text14px-mobile">{{ tag }}</div>
                                            </div>

                                            <p class="mt-[10vw] font-inter text16px-desktop leading-[1.2]">{{ project.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Project Grid Section End -->

            <div class="md:px-[5vw] md:mt-0 mt-[20vw]">
                <div class="border-b-[.5px] md:border-b border-[#464646] md:border-[#f1f1f1]"></div>
            </div>

            <!-- Contact Section Start -->
            <ContactForm />
            <!-- Contact Section End -->
        </div>
    </div>
</template>

<script setup>
    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    const router = useRequestURL().href;

    const projects = ref([]);

    const capitalizeFirstLetter = (string) => {
        return string
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    gsap.defaults({
        force3D: true,
    });

    const animation = () => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        tl.set([".main-heading .char", ".main-heading-mobile .char"], { opacity: 0, y: "100%" }).set(".heading-img", { scale: 0 }).set(".heading-img-mobile", { scale: 0 });

        tl.to([".main-heading .char", ".main-heading-mobile .char"], {
            opacity: 1,
            y: "0%",
            duration: 0.3,
            ease: "power1.inout",
            stagger: {
                amount: 1,
                from: "start",
            },
        }).from(
            [".heading-img", ".heading-img-mobile"],
            {
                scale: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.6)",
            },
            "-=.04"
        );
    };

    onMounted(async () => {
        projects.value = await $fetch("/data/all-projects.json");

        await nextTick();
        animation();
    });

    // SEO Meta Tags
    useSeoMeta({
        title: "Our Work | ArtWorksIT",
        description: "Explore ArtWorksIT's work, crafted with story and design.",
        ogTitle: "Our Work | ArtWorksIT",
        ogDescription: "Explore ArtWorksIT's work, crafted with story and design.",
        ogImage: "/images/meta.webp",
        ogUrl: router,
        twitterTitle: "Our Work | ArtWorksIT",
        twitterDescription: "Explore ArtWorksIT's work, crafted with story and design.",
        twitterImage: "/images/meta.webp",
        twitterCard: "Explore ArtWorksIT's work, crafted with story and design.",
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
                href: "/favicon.webp",
            },
            {
                rel: "canonical",
                href: router,
            },
        ],
    });
</script>

<style scoped>
    .work-item .clip-target {
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
        transition: clip-path 0.8s ease-in-out;
    }

    .work-item:hover .clip-target {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .work-projects-container:not(:hover) .clip-target {
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
        transition: clip-path 0.5s ease-in-out;
    }
</style>
