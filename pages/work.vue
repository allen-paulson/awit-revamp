<template>
    <div class="mt-[27vw] md:mt-[10vw]">
        <hover-grid />

        <div class="relative z-[1]">
            <!-- Heading Section Start -->
            <section class="section relative">
                <div class="px-[6vw] md:pl-[4.5vw] md:pr-[6vw] pt-[5vw] pb-[8vw]">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-end gap-[12vw] md:gap-0 text-[#F1F1F1]">
                        <!-- Desktop View -->
                        <div class="pl-[4.75vw] pt-[2vw] relative md:w-[58%] hidden md:block">
                            <NuxtImg id="pencil" width="309" height="315" class="absolute bottom-0 w-[6.5vw] left-[51.5%] translate-x-[70%] translate-y-[10%]" src="/images/work/heart.png" alt="Rocket Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] flex flex-col">
                                <span class="overflow-hidden">ALL WEBSITES </span>
                                <span class="overflow-hidden">CRAFTED WITH <span id="heading-space" class="inline-block w-[5vw]"></span> LOVE</span>
                            </h1>
                        </div>

                        <!-- Mobile View -->
                        <div class="pt-[2vw] relative md:w-[60%] md:hidden">
                            <NuxtImg width="309" height="315" class="absolute bottom-0 w-[15vw] left-1/4 translate-x-[55%] translate-y-[0%]" src="/images/work/heart.png" alt="Rocket Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col">
                                <span class="overflow-hidden">ALL WEBSITES </span>
                                <span class="overflow-hidden">CRAFTED WITH <span id="heading-space" class="inline-block w-[5vw]"></span> LOVE</span>
                            </h1>
                        </div>

                        <div class="md:pb-[.65vw] md:w-[42%]">
                            <div class="md:hidden mb-[5vw]">
                                <p class="font-anton text28px-mobile">YOU NAME IT, WE’VE DONE IT !</p>
                                <p class="font-inter text14px-mobile mt-[2.5vw]">NARROW DOWN YOUR SEARCH HERE</p>
                            </div>
                            <div class="flex md:justify-end flex-wrap gap-[2.25vw] md:gap-[.5vw]">
                                <button v-for="cat in categories" :key="cat.name" class="font-inter text16px-desktop text14px-mobile rounded-full flex items-center gap-[1vw] md:gap-[.5vw] text-[#F1F1F1] px-[2.75vw] py-[2vw] md:px-[1vw] md:py-[.5vw] leading-[1] bg-transparent border border-[#F1F1F1] duration-500 hover:text-[#151515] hover:bg-[#F1F1F1] whitespace-nowrap">
                                    <span class="" v-html="cat.icon"></span>
                                    {{ cat.name }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Heading Section End -->

            <!-- Project Grid Section Start -->
            <section class="mt-[15vw] md:mt-[1vw] pb-[5vw] md:pb-[8vw]">
                <div class="px-[12.5vw] md:px-[10vw]">
                    <div class="">
                        <!-- Desktop View -->
                        <div v-for="(project, index) in chunkedProjects" class="section hidden md:grid grid-cols-3 gap-[3vw]" :class="index !== 0 ? 'mt-[2.25vw]' : ''" :key="index">
                            <div v-for="(proj, index) in project" :key="index">
                                <ProjectCardPenta :project="proj" :index="index" />
                            </div>
                        </div>

                        <!-- Mobile View -->
                        <div v-for="(project, index) in chunkedProjects" class="grid md:hidden gap-[12vw]" :class="index !== 0 ? 'mt-[12vw]' : ''" :key="index">
                            <div v-for="(proj, index) in project" class="section" :key="index">
                                <ProjectCardPenta :project="proj" :index="index" />
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end md:pr-[14vw] mt-[15vw] md:mt-[5vw]">
                        <div class="text40px-mobile text105px-desktop font-anton leading-[1.12]">
                            <p>& SOME</p>
                            <p class="text-transparent [-webkit-text-stroke:1px_#F1F1F1]">LOST IN THE WEB</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Project Grid Section End -->
            <div class="px-[5vw]">
                <div class="border-b border-[#f1f1f1]"></div>
            </div>

            <!-- Contact Section Start -->
            <ContactForm />
            <!-- Contact Section End -->
        </div>
    </div>
</template>

<script setup>
    import { categories } from "~/utils/data.js";
    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";

    const projects = ref([]);
    const chunkedProjects = ref([]);

    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
    };

    const animation = () => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = document.querySelectorAll(".section");

        sections.forEach((section) => {
            console.log(section);

            gsap.set(section, { filter: "blur(0px)" });

            gsap.to(section, {
                filter: "blur(10px)",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "bottom 50%",
                    end: "bottom -20%",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            });
        });

        const tl = gsap.timeline();

        gsap.set(".main-heading .char", { opacity: 0, y: "100%" });

        tl.to(".main-heading .char", {
            opacity: 1,
            y: "0%",
            duration: 0.3,
            ease: "power1.inout",
            stagger: {
                amount: 1,
                from: "start",
            },
        })
            .from("#heading-space", {
                width: "0vw",
                duration: 0.5,
            })
            .from(
                "#pencil",
                {
                    scale: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)",
                },
                "-=.2"
            );
    };

    onMounted(async () => {
        projects.value = await $fetch("/data/all-projects.json");
        chunkedProjects.value = chunkArray(projects.value, 3);

        await nextTick();
        animation();
    });

    // SEO Meta Tags
    useSeoMeta({
        title: "Projects | ArtworksIT",
        description: "AProjects | rtworksIT",
        ogTitle: "Projects | ArtworksIT",
        ogDescription: "Projects | ArtworksIT",
        ogImage: "[og:image]",
        ogUrl: "[og:url]",
        twitterTitle: "Projects | ArtworksIT",
        twitterDescription: "Projects | ArtworksIT",
        twitterImage: "[twitter:image]",
        twitterCard: "summary",
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
