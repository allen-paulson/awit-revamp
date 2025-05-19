<template>
    <div class="mt-[27vw] md:mt-[10vw]">
        <hover-grid />

        <div class="z-[1]">
            <!-- Landing Section Start -->
            <section id="landing-section" class="section relative lg:h-[calc(100vh-10vw)] lg:flex lg:flex-col lg:justify-end opacity-0 duration-500">
                <!-- Desktop View -->
                <div class="hidden md:flex items-center justify-center pb-[11.5vw] pt-[4vw]">
                    <div class="relative">
                        <NuxtImg id="pencil" width="276" height="188" format="webp" src="/images/home/saw.webp" class="pencil !invisible absolute left-0 bottom-0 w-[8vw] -translate-x-1/2 -translate-y-1/2 z-[1]" alt="Pencil Image" />
                        <NuxtImg id="laptop" width="362" height="275" format="webp" src="/images/home/laptop.webp" class="laptop absolute right-[-6%] top-[10%] w-[9vw] translate-x-1/2 translate-y-[30%] z-[1]" alt="Laptop Image" />
                        <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading flex flex-col font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] text-[#F1F1F1] relative z-0">
                            <span class="overflow-hidden">WE ARE A TEAM OF </span>
                            <span class="overflow-hidden">DESIGNERS AND DEVELOPERS</span>
                            <span class="overflow-hidden">WHO BUILD WEBSITES</span>
                        </h1>

                        <div class="button absolute bottom-[1vw] right-0">
                            <the-button text="LET'S TALK" to="/contact" />
                        </div>
                    </div>
                </div>

                <!-- Mobile View -->
                <div class="md:hidden px-[7vw] pt-[26vw] pb-[38vw]">
                    <div class="relative flex flex-col gap-[5vw]">
                        <div class="relative">
                            <!-- <NuxtImg width="276" height="188" src="/images/home/saw.webp" class="pencil-mobile invisible absolute right-[5%] !-translate-x-1/2 top-[10%] translate-y-full w-[20vw] z-[1]" alt="Pencil Image" /> -->
                            <NuxtImg width="362" height="275" format="webp" src="/images/home/laptop.webp" class="laptop-mobile absolute left-0 bottom-0 w-[25vw] -translate-x-[25%] -translate-y-[5%] z-[1]" alt="Laptop Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading-mobile flex flex-col gap-[1vw] font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] text-[#F1F1F1]">
                                <span class="overflow-hidden">WE ARE A</span>
                                <span class="overflow-hidden">TEAM OF</span>
                                <span class="overflow-hidden pl-[10vw]">DESIGNERS</span>
                                <span class="overflow-hidden">AND DEVELOPERS</span>
                                <span class="overflow-hidden">WHO BUILD</span>
                                <span class="pl-[15vw] overflow-hidden">WEBSITES</span>
                            </h1>
                        </div>

                        <div class="button-mobile flex justify-end">
                            <the-button text="LET'S TALK" to="/contact" />
                        </div>
                    </div>
                </div>

                <div class="px-[5vw] md:px-[4vw]">
                    <div class="pv-[5vw] md:pb-[3vw] pt-[6vw] md:pt-[2vw] will-change-auto border-t border-[#F1F1F1]">
                        <div class="flex justify-between items-center text15px-desktop text12px-mobile font-medium leading-[2]">
                            <div class="flex gap-[4vw] md:gap-[3vw]">
                                <NuxtLink to="https://www.linkedin.com/company/artworksit/posts/?feedView=all" target="_blank" class="flex relative group overflow-hidden" aria-label="Linkedin Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">LINKEDIN</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">LINKEDIN</span>
                                </NuxtLink>
                                <NuxtLink to="https://www.instagram.com/_artworksit/" target="_blank" class="flex relative group overflow-hidden" aria-label="Instagram Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">INSTAGRAM</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">INSTAGRAM</span>
                                </NuxtLink>
                                <NuxtLink to="https://www.behance.net/ashwind" target="_blank" class="flex relative group overflow-hidden" aria-label="Behance Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">BEHANCÉ</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">BEHANCÉ</span>
                                </NuxtLink>
                                <NuxtLink to="https://x.com/artworksit_in" target="_blank" class="flex relative group overflow-hidden" aria-label="X Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">X</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">X</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Landing Section End -->

            <!-- Technologies Section Start -->
            <section class="section relative">
                <div class="section-heading px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
                    <!-- Desktop View -->
                    <div class="hidden md:block">
                        <div class="oveflow-hidden">
                            <the-breadcrumbs number="01" title="TECHNOLOGIES" />
                        </div>
                        <div class="pl-[4.75vw] pt-[2vw] relative w-max">
                            <NuxtImg width="218" height="200" format="webp" class="heading-img absolute w-[6vw] bottom-0 translate-y-[20%] right-[8.5%] -translate-x-full z-[1]" src="/images/home/pencil.webp" alt="Pencil Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] flex gap-[3.5vw] relative z-[0] overflow-hidden"><span>TOOLS OF OUR</span> <span>TRADE</span></h2>
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="md:hidden">
                        <div class="oveflow-hidden pl-[22vw]">
                            <the-breadcrumbs number="01" title="TECHNOLOGIES" />
                        </div>
                        <div class="pl-[4.75vw] pt-[4vw] md:pt-[2vw] relative w-max">
                            <NuxtImg width="218" height="200" format="webp" class="heading-img-mobile absolute w-[16vw] bottom-0 translate-y-[20%] right-[15%] -translate-x-full z-[1]" src="/images/home/pencil.webp" alt="Pencil Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading-mobile font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden">
                                <span class="overflow-hidden">TOOLS OF </span>
                                <span class="overflow-hidden">OUR <span class="w-[7vw] inline-block"></span> TRADE</span>
                            </h2>
                        </div>
                    </div>

                    <div class="md:pl-[15vw] mt-[13vw] md:-mt-[7vw]">
                        <div class="grid grid-cols-3 md:grid-cols-6">
                            <div class="md:col-start-5 aspect-square border md:border-b-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tl" />
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="238" height="76" format="webp" src="/images/home/figma.webp" class="w-[60%] relative z-[2]" alt="Figma Image" />
                            </div>
                            <div class="md:col-start-6 aspect-square border border-l-0 md:border-b-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="134" height="136" format="webp" src="/images/home/xd.webp" class="w-[35%] relative z-[2]" alt="Xd Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-l-0 md:border-l border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tl" />
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="238" height="70" format="webp" src="/images/home/apsara.webp" class="w-[60%] relative z-[2]" alt="Procreate Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                </div>
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="137" height="135" format="webp" src="/images/home/ps.webp" class="w-[35%] relative z-[2]" alt="Ps Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="130" height="130" format="webp" src="/images/home/ai.webp" class="w-[35%] relative z-[2]" alt="Ai Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                </div>
                                <NuxtImg width="290" height="100" format="webp" src="/images/home/tailwind.webp" class="w-[65%] relative z-[2]" alt="Tailwind Image" />

                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="236" height="48" format="webp" src="/images/home/nuxt.webp" class="w-[60%] relative z-[2]" alt="NextJS Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="204" height="122" format="webp" src="/images/home/gsap.webp" class="w-[50%] relative z-[2]" alt="GSAP Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 border-l-0 md:border-l border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tl" />
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <small-boxes direction="bl" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="278" height="52" format="webp" src="/images/home/alpinejs.webp" class="w-[60%] relative z-[2]" alt="Ae Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                    <small-boxes direction="bl" />
                                </div>
                                <NuxtImg width="294" height="82" format="webp" src="/images/home/laravel.webp" class="w-[65%] relative z-[2]" alt="Laravel Image" />

                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="257" height="59" format="webp" src="/images/home/filament.webp" class="w-[60%] relative z-[2]" alt="Framer Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                    <small-boxes direction="bl" />
                                </div>

                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="219 " height="115" format="webp" src="/images/home/mysql.webp" class="w-[50%] relative z-[2]" alt="Ai Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="164" height="164" format="webp" src="/images/home/postgres.webp" class="w-[35%] relative z-[2]" alt="Ps Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="266" height="100" format="webp" src="/images/home/cloudflare.webp" class="w-[60%] relative z-[2]" alt="Cloudflare Image" />
                            </div>
                            <div class="md:row-start-4 aspect-square border md:border-l border-l-0 border-t-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="134" height="136" format="webp" src="/images/home/ploi.png" class="w-[90%] relative z-[2]" alt="Ploi Image" />
                            </div>
                            <div class="md:row-start-4 aspect-square border md:border-l-0 border-t-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="134" height="136" format="webp" src="/images/home/ae.webp" class="w-[35%] relative z-[2]" alt="Xd Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Technologies Section End -->

            <!-- HR -->
            <div class="md:hidden px-[5vw] pt-[15vw]">
                <div class="border-t-[.5px] border-white"></div>
            </div>

            <!-- Projects Section Start -->
            <ProjectSectionHome @projects-loaded="refreshScrollTrigger" />
            <!-- Projects Section End -->

            <!-- Contact Section Start -->
            <section class="md:-mt-[2.5vw]">
                <ContactForm />
            </section>
            <!-- Contact Section End -->
        </div>
    </div>
</template>

<script setup>
    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    const loading = useState("isLoading");
    const config = useRuntimeConfig();

    const animations = () => {
        // Register plugin only once
        document.getElementById("landing-section").classList.remove("opacity-0");
        const isMobile = window.innerWidth < 768;
        // Store all the created ScrollTriggers in an array for easy cleanup
        const scrollTriggers = [];

        gsap.config({
            force3D: true,
        });

        document.querySelectorAll(".section-heading").forEach((section) => {
            const breadcrumbs = section.querySelector(".breadcrumbs");
            const headings = section.querySelectorAll(".heading");
            const images = section.querySelectorAll(".heading-img");
            const headingsMobile = section.querySelectorAll(".heading-mobile");
            const imagesMobile = section.querySelectorAll(".heading-img-mobile");

            // Common ScrollTrigger start values
            const startPosition = "top 90%";

            // Desktop Animation
            if (!isMobile) {
                const tlDesktop = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: startPosition,
                        end: "top 70%",
                        scrub: false,
                        toggleActions: "play none none reverse",
                        id: `desktop-${section.id || Math.random()}`, // Add unique ID
                        onRefresh: (self) => scrollTriggers.push(self), // Store reference
                    },
                });

                if (breadcrumbs) {
                    tlDesktop.from(breadcrumbs, { y: "100%", opacity: 0, duration: 0.6, ease: "power2.out" });
                }

                headings.forEach((heading) => {
                    const chars = heading.querySelectorAll(".char");
                    if (chars.length) {
                        tlDesktop.from(
                            chars,
                            {
                                y: "100%",
                                opacity: 0,
                                stagger: 0.05,
                                duration: 0.3,
                                ease: "power2.inout",
                            },
                            "-=0.3"
                        );
                    }
                });

                images.forEach((image) => {
                    tlDesktop.from(image, { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
                });
            }

            // Mobile Animation (Independent from Desktop)
            if (isMobile) {
                const tlMobile = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: startPosition,
                        end: "top 80%",
                        scrub: false,
                        toggleActions: "play none none reverse",
                        id: `mobile-${section.id || Math.random()}`, // Add unique ID
                        onRefresh: (self) => scrollTriggers.push(self), // Store reference
                    },
                });

                headingsMobile.forEach((heading) => {
                    const chars = heading.querySelectorAll(".char");
                    if (chars.length) {
                        tlMobile.from(chars, {
                            y: "100%",
                            opacity: 0,
                            stagger: 0.05,
                            duration: 0.3,
                            ease: "power2.inout",
                        });
                    }
                });

                imagesMobile.forEach((image) => {
                    tlMobile.from(image, { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
                });
            }
        });

        const tl = gsap.timeline();

        // **Set initial states**
        tl.set([".main-heading .char", ".main-heading-mobile .char"], {
            opacity: 0,
            y: "100%",
            scale: 0.8,
            visibility: "visible",
        })
            .set([".pencil", ".pencil-mobile"], {
                scale: 0,
                visibility: "visible",
            })
            .set([".laptop", ".laptop-mobile"], {
                scale: 0,
                visibility: "visible",
            })
            .set([".button", ".button-mobile"], {
                opacity: 0,
                visibility: "visible",
            });

        // **Animate elements sequentially**
        tl.to([".main-heading .char", ".main-heading-mobile .char"], {
            opacity: 1,
            y: "0%",
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut",
            stagger: {
                amount: 1,
                from: "start",
            },
        })
            .to(
                [".pencil", ".pencil-mobile"],
                {
                    scale: 1,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)", // Elastic pop effect
                },
                "-=0.8"
            )
            .to(
                [".laptop", ".laptop-mobile"],
                {
                    scale: 1,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)",
                },
                "-=0.8"
            )
            .to(
                [".button", ".button-mobile"],
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.inOut",
                    stagger: {
                        amount: 1,
                        from: "start",
                    },
                },
                "-=1"
            );

        // Return a cleanup function
        return () => {
            // Kill all ScrollTriggers
            scrollTriggers.forEach((trigger) => trigger.kill());

            // Kill all timelines
            tl.kill();

            // Clear any in-progress animations
            gsap.killTweensOf([".main-heading .char", ".main-heading-mobile .char", ".pencil", ".pencil-mobile", ".laptop", ".laptop-mobile", ".button", ".button-mobile"]);
        };
    };

    // Store the cleanup function
    let cleanupAnimations = null;

    // Watch for loader completion and start animations
    watch(loading, (newValue) => {
        if (!newValue) {
            // Clean up previous animations if they exist
            if (cleanupAnimations) {
                cleanupAnimations();
                cleanupAnimations = null;
            }

            // Start new animations and store cleanup function
            cleanupAnimations = animations();
        }
    });

    // Ensure animations start only after loader is gone
    onMounted(() => {
        nextTick(() => {
            if (!loading.value) {
                // Clean up previous animations if they exist
                if (cleanupAnimations) {
                    cleanupAnimations();
                    cleanupAnimations = null;
                }

                // Start new animations and store cleanup function
                cleanupAnimations = animations();
            }
        });
    });

    // Important: Clean up when component is unmounted
    onBeforeUnmount(() => {
        if (cleanupAnimations) {
            cleanupAnimations();
            cleanupAnimations = null;
        }

        // Additional cleanup to ensure all GSAP resources are released
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf("*");
    });

    // Function to manually refresh ScrollTrigger
    const refreshScrollTrigger = () => {
        ScrollTrigger.refresh();
    };

    // SEO Meta Tags
    useSeoMeta({
        title: "ArtWorksIT - Web Design Studio",
        description: "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
        ogTitle: "ArtWorksIT - Web Design Studio",
        ogDescription: "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
        ogImage: () => config.public.siteUrl + "/images/meta/home.png",
        ogUrl: () => config.public.siteUrl,
        twitterTitle: "ArtWorksIT - Web Design Studio",
        twitterDescription: "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
        twitterImage: () => config.public.siteUrl + "/images/meta/home.png",
        twitterCard: "ArtWorksIT is a collaborative web design studio in Bangalore crafting unique websites.",
    });

    useHead({
        titleTemplate: (title) => (title ? `${title}` : "ArtWorksIT - Web Design Studio"),
        htmlAttrs: {
            lang: "en",
        },
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "ArtWorksIT",
                "url": "https://artworksit.com",
                "description": "ArtWorksIT is a web design studio in Bangalore crafting unique websites.",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://artworksit.com/favicon.png"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "telephone": "+91-8618543699",
                  "url": "https://artworksit.com/contact"
                },
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "minValue": 2,
                  "maxValue": 10
                },
                "sameAs": [
                  "https://wa.me/918618543699?text=Hi%20Team,%20dropping%20in%20from%20the%20website%20to%20check",
                  "https://www.linkedin.com/company/artworksit/posts/?feedView=all"
                ],
                "department": [
                  {
                    "@type": "WebPage",
                    "name": "Team",
                    "url": "https://artworksit.com/team"
                  },
                  {
                    "@type": "WebPage",
                    "name": "Work",
                    "url": "https://artworksit.com/work"
                  },
                  {
                    "@type": "WebPage",
                    "name": "Contact",
                    "url": "https://artworksit.com/contact"
                  }
                ]
              }
          )
        }
      ],
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

<style scoped>
    .line {
        overflow: hidden !important;
    }

    .main-heading .char,
    .main-heading-mobile .char {
        opacity: 0;
        transform: translateY(100%);
        visibility: hidden;
    }

    .pencil,
    .pencil-mobile,
    .laptop,
    .laptop-mobile {
        scale: 0;
        visibility: hidden;
    }

    .button,
    .button-mobile {
        opacity: 0;
        visibility: hidden;
    }
</style>
