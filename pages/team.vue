<template>
    <div class="mt-[27vw] md:mt-[10vw]">
        <!-- Team Section Start -->
        <section class="section pt-[20vw] md:pt-[6vw] flex justify-between flex-col px-[3vw] lg:px-[1.5vw] overflow-hidden">
            <div class="section-heading px-[2vw] md:pr-[12vw] md:pl-[4vw] flex flex-col md:flex-row md:justify-between md:items-end gap-[6vw] md:gap-0">
                <div class="flex justify-end md:order-2 h-auto">
                    <div class="">
                        <the-button text="JOIN US" to="/" />
                    </div>
                </div>
                <!-- Desktop View -->
                <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading font-anton text-white-color hidden md:flex flex-col tracking-[-0.05vw] text58px-desktop leading-[1.2] md:leading-[1.1] md:text-left md:pl-[6vw]">
                    <span class="team-text overflow-hidden">“THERE IS NOTHING MORE TRULY ARTISTIC </span>
                    <span class="team-text overflow-hidden">THAN TO LOVE PEOPLE”</span>
                    <span class="lg:pl-[4vw] team-text overflow-hidden">- VINCENT VAN GOGH</span>
                </h1>

                <!-- Mobile View -->
                <h1 class="font-anton text-white-color md:hidden flex flex-col tracking-[-0.05vw] text48px-mobile leading-[1.2] md:leading-[1.1] md:text-left md:pl-[6vw]">
                    <span class="team-text overflow-hidden">“THERE IS NOTHING MORE TRULY ARTISTIC THAN TO LOVE PEOPLE”</span>
                    <span class="lg:pl-[4vw] team-text">- VINCENT VAN GOGH</span>
                </h1>
            </div>

            <div class="md:mt-[4vw] mt-[20vw]">
                <div>
                    <img class="h-full md:h-[95%] w-full object-cover hidden md:block" src="https://artworksit.com/assets/images/about/artworks.webp" alt="" />
                    <img class="h-full w-full object-cover md:hidden" src="https://artworksit.com/assets/images/about/artworksphone.webp" alt="" />
                </div>
                <div class="md:hidden">
                    <div class="bg-[#ACACAC] h-[0.14vw] md:h-[1px] w-full md:mt-[2vw] mt-[6vw]"></div>
                </div>
            </div>
        </section>
        <!-- Team Section End -->

        <!-- Team Image Section Start -->
        <section class="section mt-[20vw] md:mt-[10vw]">
            <div class="section-heading px-[4vw]">
                <!-- Desktop Heading -->
                <div class="relative w-max hidden md:block">
                    <NuxtImg width="276" height="188" class="heading-img absolute w-[9vw] bottom-0 translate-y-[20%] left-[9.5%] translate-x-full z-[1]" src="/images/home/laptop.png" alt="Saw Image" />
                    <h2 v-split-text="{ splitBy: 'words, char' }" class="heading font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] flex flex-col relative z-[0] overflow-hidden">
                        <span class="overflow-hidden">THE ARTISTS </span>
                        <span class="overflow-hidden">BEHIND <span class="inline-block md:w-[5vw]"></span> THE PIXELS</span>
                    </h2>
                </div>

                <!-- Mobile Heading -->
                <div class="relative w-max md:hidden">
                    <NuxtImg width="276" height="188" class="heading-img absolute w-[8vw] bottom-0 translate-y-[20%] right-[2.5%] -translate-x-full z-[1]" src="/images/home/saw.png" alt="Saw Image" />
                    <h2 v-split-text="{ splitBy: 'words, char' }" class="heading font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col relative z-[0] overflow-hidden">
                        <span>THE ARTISTS </span>
                        <span>BEHIND THE PIXELS</span>
                    </h2>
                </div>

                <!-- Images -->
                <div class="mt-[10vw] md:mt-[5vw]">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-[4vw] md:gap-x-[2vw] gap-y-[12vw] md:gap-y-[4vw] text-white-color">
                        <div class="col-span-2">
                            <div class="relative">
                                <div class="md:h-[27.5vw]">
                                    <NuxtImg width="1516" height="900" class="w-full h-full object-cover" src="/images/team/ashwin-uday.png" alt="Ashwin & Uday Image" />
                                </div>

                                <div class="grid grid-cols-2 gap-[5vw] pl-[1vw] mt-[5vw] md:mt-[1.75vw]">
                                    <div>
                                        <div class="flex justify-between items-center">
                                            <p class="font-anton text30px-desktop text16px-mobile">D</p>
                                            <p class="text14px-desktop text10px-mobile font-inter font-medium">AWIT069</p>
                                        </div>
                                        <p class="font-anton text58px-desktop text34px-mobile mt-[1vw] md:mt-[.2vw]">ASHWIN</p>
                                        <p class="text15px-desktop text10px-mobile font-inter leading-[1.5] mt-[3vw] md:mt-[1.25vw]">DIRECTOR OF MISCELLANEOUS THINGS</p>
                                    </div>
                                    <div>
                                        <div class="flex justify-between items-center">
                                            <p class="font-anton text30px-desktop text16px-mobile">RATHORE</p>
                                            <p class="text14px-desktop text10px-mobile font-inter font-medium">AWIT007</p>
                                        </div>
                                        <p class="font-anton text58px-desktop text34px-mobile mt-[1vw] md:mt-[.2vw]">UDAY</p>
                                        <p class="text15px-desktop text10px-mobile font-inter leading-[1.5] mt-[3vw] md:mt-[1.25vw]">CREATIVE DIRECTOR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="md:h-[27.5vw]">
                                <NuxtImg width="720" height="900" class="w-full h-full object-cover" src="/images/team/sushma.png" alt="Sushma Image" />
                            </div>

                            <div class="pl-[1vw] mt-[5vw] md:mt-[1.75vw]">
                                <div class="flex justify-between items-center">
                                    <p class="font-anton text30px-desktop text16px-mobile">JOIS</p>
                                    <p class="text14px-desktop text10px-mobile font-inter font-medium">AWIT016</p>
                                </div>
                                <p class="font-anton text58px-desktop text34px-mobile mt-[1vw] md:mt-[.2vw]">SUSHMA</p>
                                <p class="text15px-desktop text10px-mobile font-inter leading-[1.5] mt-[3vw] md:mt-[1.25vw]">ILLUSTRATOR ENTHUSIAST</p>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="md:h-[27.5vw]">
                                <NuxtImg width="720" height="900" class="w-full h-full object-cover" src="/images/team/vinayak.png" alt="Sushma Image" />
                            </div>

                            <div class="pl-[1vw] mt-[5vw] md:mt-[1.75vw]">
                                <div class="flex justify-between items-center">
                                    <p class="font-anton text30px-desktop text16px-mobile">DEV</p>
                                    <p class="text14px-desktop text10px-mobile font-inter font-medium">AWIT420</p>
                                </div>
                                <p class="font-anton text58px-desktop text34px-mobile mt-[1vw] md:mt-[.2vw]">VINAYAK</p>
                                <p class="text15px-desktop text10px-mobile font-inter leading-[1.5] mt-[3vw] md:mt-[1.25vw]">I FEEL THE NEED.. THE NEED FOR CODE</p>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="md:h-[27.5vw]">
                                <NuxtImg width="720" height="900" class="w-full h-full object-cover" src="/images/team/geethesh.png" alt="Sushma Image" />
                            </div>

                            <div class="pl-[1vw] mt-[5vw] md:mt-[1.75vw]">
                                <div class="flex justify-between items-center">
                                    <p class="font-anton text30px-desktop text16px-mobile">NAIR</p>
                                    <p class="text14px-desktop text10px-mobile font-inter font-medium">AWIT404</p>
                                </div>
                                <p class="font-anton text58px-desktop text34px-mobile mt-[1vw] md:mt-[.2vw]">GEETHESH</p>
                                <p class="text15px-desktop text10px-mobile font-inter leading-[1.5] mt-[3vw] md:mt-[1.25vw]">TAILWIND IS BETTER THAN BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Team Image Section End -->

        <!-- Koko Section Start -->
        <section class="section">
            <div class="px-[4vw] pb-[5vw]">
                <div class="mt-[12vw] md:mt-[6vw] gap-[2vw] md:grid grid-cols-4">
                    <div class="col-span-3 h-[60vw] md:h-[26vw]">
                        <img class="h-full w-full object-cover" src="https://artworksit.com/assets/images/about/koko.webp" alt="" />
                    </div>
                    <div class="col-span-1 pt-[1.5vw]">
                        <div class="flex gap-[6vw] items-center justify-between md:justify-start">
                            <p class="font-anton text-white-color text-[4.5vw] md:text-[2.3vw] tracking-tight leading-[1]">KOKO</p>
                            <p class="font-inter text-white-color text-[2.2vw] md:text-[1.2vw] right-[2vw] text14px-desktop leading-[1.6] pr-[3vw] md:pr-0">AWIT001</p>
                        </div>
                        <p class="font-anton [-webkit-text-stroke:1px_#F1F1F1] text-transparent text-[7.5vw] md:text-[5vw] leading-[1.3]">KOKO</p>
                        <p class="font-anton [-webkit-text-stroke:1px_#F1F1F1] text-transparent text-[16vw] md:text-[9vw] leading-[1.05] md:leading-[1]">KOKO</p>
                        <p class="font-inter text-white-color text-[2.6vw] md:text-[1.2vw] right-[2vw] text15px-desktop mt-[1.5vw] leading-[1.6]">DIRECTOR OF HAPPINESS</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Koko Section End -->

        <!-- Contact Section Start -->
        <ContactForm />
        <!-- Contact Section End -->
    </div>
</template>

<script setup>
    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    const router = useRequestURL().href

    const refreshScrollTrigger = () => {
        ScrollTrigger.refresh();
    };

    const animations = () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".section").forEach((section) => {
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

        document.querySelectorAll(".section-heading").forEach((section) => {
            const headings = section.querySelectorAll(".heading");
            const images = section.querySelectorAll(".heading-img");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: false,
                    toggleActions: "play none none reverse",
                },
            });

            // Animate headings after a slight delay
            headings.forEach((heading) => {
                const chars = heading.querySelectorAll(".char");
                if (chars.length) {
                    tl.from(
                        chars,
                        {
                            y: "100%",
                            opacity: 0,
                            stagger: 0.05,
                            duration: 0.3,
                            ease: "power2.inout",
                        },
                        0.2
                    ); // Start 0.2 seconds after timeline begins
                }
            });
            // Create a parallel animation for images
            images.forEach((image) => {
                tl.from(
                    image,
                    {
                        scale: 0,
                        opacity: 0,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.6)",
                    },
                    "-=0.2"
                ); // The '0' position parameter makes it start at the beginning of the timeline
            });
        });

        const tl = gsap.timeline();

        tl.from(".main-heading .char", {
            opacity: 0,
            y: "100%",
            scale: 0.8,
            duration: 0.3,
            ease: "power1.inout",
            stagger: {
                amount: 1,
                from: "start",
            },
        }).from(
            ".button",
            {
                opacity: 0,
                duration: 0.3,
                ease: "power1.inout",
                stagger: {
                    amount: 1,
                    from: "start",
                },
            },
            "-=1"
        );
    };

    onMounted(() => {
        animations();
    });

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
