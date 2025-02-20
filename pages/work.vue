<template>
    <div class="mt-[27vw] md:mt-[10vw]">
        <hover-grid />

        <div class="relative z-[1]">
            <!-- Heading Section Start -->
            <section class="section relative">
                <div class="px-[6vw] md:pl-[4.5vw] md:pr-[6vw] pt-[5vw] pb-[8vw]">
                    <div class="relative text-[#F1F1F1]">
                        <!-- Desktop View -->
                        <div class="pt-[2vw] relative md:w-full hidden md:block">
                            <NuxtImg id="pencil" width="309" height="315" class="pencil absolute bottom-0 w-[6.5vw] left-[51.5%] translate-x-[70%] translate-y-[10%]" src="/images/work/heart.png" alt="Rocket Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading font-anton text178px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center">
                                <span class="overflow-hidden">SITES WE'VE </span><span id="heading-space" class="inline-block w-[7vw]"></span>
                                <span class="overflow-hidden">SHIPPED </span>
                            </h1>
                        </div>

                        <!-- Mobile View -->
                        <div class="pt-[2vw] relative md:w-[60%] md:hidden">
                            <NuxtImg width="309" height="315" class="pencil-mobile absolute bottom-0 w-[15vw] left-1/4 translate-x-[55%] translate-y-[0%]" src="/images/work/heart.png" alt="Rocket Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading-mobile font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex">
                                <span class="overflow-hidden">SITES WE'VE </span><span id="heading-space" class="inline-block w-[5vw]"></span>
                                <span class="overflow-hidden">SHIPPED</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Heading Section End -->

            <!-- Project Grid Section Start -->
            <section class="mt-[15vw] md:mt-[1vw] pb-[5vw] md:pb-[8vw]">
                <div class="px-[12.5vw] md:px-[5vw]">
                    <div class="relative border-x border-[#454545]">
                        <!-- Desktop View -->
                        <div class="relative text-[#FFFFFF]">
                            <NuxtLink to="/" v-for="(_, index) in 6" class="flex justify-between gap-[5vw] px-[3vw] relative work-item last:border-b border-[#454545] border-t hover:border-t-[#A3A3A3] hover:bg-[#1C1C1C] duration-[.3s] ease-[cubic-bezier(0.8,0,0.2,1)]">
                                <div class="flex-1 pt-[1.75vw] pb-[3.5vw]">
                                    <div class="flex gap-[5vw]">
                                        <p class="font-inter font-light text24px-desktop">0{{ index + 1 }}</p>
                                        <div>
                                            <p class="font-anton text40px-desktop">Hunan Square</p>
                                            <div class="flex gap-[.5vw] mt-[1vw]">
                                                <div class="rounded-full border border-white px-[.75vw] py-[.5vw] font-inter text14px-desktop">Horteca</div>
                                                <div class="rounded-full border border-white px-[.75vw] py-[.5vw] font-inter text14px-desktop">Pan-asian Restaurant</div>
                                                <div class="rounded-full border border-white px-[.75vw] py-[.5vw] font-inter text14px-desktop">Web design</div>
                                                <div class="rounded-full border border-white px-[.75vw] py-[.5vw] font-inter text14px-desktop">Web development</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="border border-t-0 border-[#A3A3A3] bg-[#151515] p-[1vw] absolute top-0 right-[5vw] w-[36.5%] clip-target z-[1]">
                                    <div class="flex flex-col gap-[1.5vw]">
                                        <div class="">
                                            <NuxtImg width="1210" height="946" src="/images/projects/federate.png" />
                                        </div>
                                        <div><p class="font-inter text26px-desktop leading-[1.15]">A bento-style web design for a consulting firm that delivers cutting-edge IT</p></div>
                                    </div>
                                </div>
                            </NuxtLink>
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
    const workItems = ref([]);

    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
    };

    const animation = () => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = document.querySelectorAll(".section");

        sections.forEach((section) => {
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

        gsap.set([".main-heading .char", ".main-heading-mobile .char"], { opacity: 0, y: "100%" });

        tl.to([".main-heading .char", ".main-heading-mobile .char"], {
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
                [".pencil", ".pencil-mobile"],
                {
                    scale: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)",
                },
                "-=.2"
            );

        // Projects hover animation
        workItems.value = document.querySelectorAll(".work-item");

        workItems.value.forEach((item, index) => {
            item.addEventListener("mouseenter", () => handleHover(item, index));
            item.addEventListener("mouseleave", () => handleLeave(item, index));
        });

        const handleHover = (el, index) => {
            gsap.to(el.querySelector(".clip-target"), {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
                ease: "sine.inOut",
                // ease: "cubic-bezier(0.8, 0, 0.2, 1)",
            });

            // Increase z-index for hovered item and reduce for others
            // workItems.value.forEach((item, i) => {
            //     item.style.zIndex = i === index ? 10 : 5;
            // });
        };

        const handleLeave = (el, index) => {
            gsap.to(el.querySelector(".clip-target"), {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 0.5,
                ease: "sine.inOut",
                // ease: "cubic-bezier(0.8, 0, 0.2, 1)",
            });

            // Reset z-index after hover
            // workItems.value.forEach((item) => {
            //     item.style.zIndex = 1;
            // });
        };
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

<style scoped>
    .clip-target {
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    }
</style>
