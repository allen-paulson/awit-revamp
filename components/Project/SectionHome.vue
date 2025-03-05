<template>
    <section class="relative overflow-hidden md:pb-[6vw] ">
        <div class="relative z-[2]">
            <div class="section-heading-work px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
                <!-- Desktop View -->
                <div class="hidden md:block delete">
                    <the-breadcrumbs number="02" title="WHY YOU NEED US" />
                    <div class="flex justify-center items-end gap-[3vw]">
                        <div class="pt-[2vw] relative w-max">
                            <NuxtImg width="430" height="474" src="/images/home/popcorn.png" alt="Popcorn Image" class="work-heading-img absolute left-1/2 top-1/2 w-[13vw] translate-x-[65%] -translate-y-[40%] z-[1]" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="work-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center z-[0]">
                                <span class="overflow-hidden">IT'S STORY </span><span id="heading-space" class="inline-block w-[7vw]"></span>
                                <span class="overflow-hidden">TIME </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <!-- Mobile View -->
                <div class="md:hidden flex flex-col">
                    <div class="">
                        <div class="oveflow-hidden pl-[22vw]">
                            <the-breadcrumbs number="02" title=" WHY YOU NEED US" />
                        </div>
                        <div class="pt-[4vw] md:pt-[2vw] relative">
                            <NuxtImg width="430" height="474" class="work-heading-img-mobile absolute bottom-0 w-[25vw] md:w-[6.5vw] left-1/4 translate-x-[45%] translate-y-[10%] z-[1]" src="/images/home/popcorn.png" alt="Eye Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="work-heading-mobile font-anton text-[19vw] -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden w-full">
                                <span class="overflow-hidden">IT'S STORY </span>
                                <span class="!inline-flex justify-end">
                                    <span class="overflow-hidden">TIME </span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative mt-[16vw] md:mt-[3vw] px-[5vw] md:px-[4vw]">
                <div v-if="!projects">No projects...</div>
                <div v-else>
                    <!-- Desktop View -->
                    <div class="hidden md:grid gap-[10vw]">
                        <div ref="containerRef" class="desktop-project relative">
                            <div v-for="(project, index) in projects" :key="index" class="desktop-project__item">
                                <div class="relative border-t border-[#FFFFFF] pb-[10vw] bg-[#151515]">
                                    <div class="flex justify-between px-[1vw] pt-[1vw] gap-[16vw]">
                                        <div class="card-inner flex gap-[16vw] flex-1">
                                            <p class="font-inter font-light text24px-desktop">0{{ index + 1 }}</p>
                                            <div class="flex flex-col gap-[3vw]">
                                                <p class="font-anton text60px-desktop">{{ project.title }}</p>
                                                <div class="flex flex-col gap-[.75vw]">
                                                    <div v-for="(chat, chatIndex) in project.users_chat" :key="chatIndex" class="flex gap-[1vw]">
                                                        <div class="flex flex-col">
                                                            <div class="rounded-full w-[3vw] aspect-square bg-red-300 overflow-hidden">
                                                                <NuxtImg class="w-full h-full" :src="chat.avatar" alt="Chat Icon" />
                                                            </div>
                                                            <div class="flex-1 w-px bg-[#C3C3C3] mx-auto mt-[.5vw]"></div>
                                                        </div>
                                                        <div class="mt-[.5vw] pb-[2vw]">
                                                            <div class="flex gap-[.75vw] items-center">
                                                                <p class="font-inter text18px-desktop font-bold">{{ chat.user_type }}</p>
                                                                <span class="w-[.25vw] aspect-square rounded-full bg-[#FFFFFF]"></span>
                                                                <p class="font-inter text18px-desktop font-light opacity-80">{{ chat.time }}</p>
                                                            </div>
                                                            <p class="font-inter text18px-desktop mt-[1vw] leading-[1.3]">{{ chat.message }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-[27.5%]">
                                            <NuxtImg class="w-full" :src="project.image.desktop" alt="Arrow Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="grid gap-[15vw] md:hidden pb-[16vw]">
                        <div v-for="(project, index) in projects" :key="index" class="">
                            <div class="border-[.6px] border-[#D0D0D0] p-[3vw] pt-[5vw]">
                                <div class="flex justify-between">
                                    <p class="text34px-mobile text-white font-anton">{{ project.title }}</p>
                                    <NuxtImg width="38" height="38" class="w-[8vw] -mt-[2vw]" src="/images/work/arrow.svg" />
                                </div>

                                <div class="mt-[4.5vw]">
                                    <NuxtImg class="w-full" :src="project.image.desktop" alt="Arrow Image" />
                                </div>

                                <div class="mt-[6.5vw] pl-[3vw]">
                                    <div class="flex flex-col gap-[3vw]">
                                        <div v-for="(chat, chatIndex) in project.users_chat" :key="chatIndex" class="flex gap-[3vw]">
                                            <div class="flex flex-col">
                                                <div class="rounded-full w-[10vw] aspect-square bg-red-300 overflow-hidden">
                                                    <NuxtImg class="w-full h-full" :src="chat.avatar" alt="Chat Icon" />
                                                </div>
                                                <div :class="chatIndex !== 0 ? 'hidden' : ''" class="flex-1 w-px bg-[#454545] mx-auto mt-[2vw]"></div>
                                            </div>
                                            <div class="mt-[1vw] pb-[5vw]">
                                                <div class="flex gap-[2vw] items-center">
                                                    <p class="font-inter text14px-mobile font-semibold">{{ chat.user_type }}</p>
                                                    <span class="w-[.75vw] aspect-square rounded-full bg-[#FFFFFF]"></span>
                                                    <p class="font-inter text14px-mobile font-light opacity-80">{{ chat.time }}</p>
                                                </div>
                                                <p class="font-inter text14px-mobile mt-[2vw] leading-[1.3] w-[90%]">{{ chat.message }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const emit = defineEmits(["projects-loaded"]);
    const projects = [
        {
            id: 1,
            title: "Azure",
            users_chat: [
                {
                    avatar: "/images/work/azure.png",
                    user_type: "Azure",
                    message: "I want the best looking modern website for an apartment",
                    time: "14 h",
                },
                {
                    avatar: "/images/work/awit.png",
                    user_type: "ArtWorksIT",
                    message: "Client didn’t even negotiate much, let’s do a good job!",
                    time: "14 h",
                },
            ],
            image: {
                desktop: "/images/projects/azure.png",
            },
        },
        {
            id: 2,
            title: "VOC Automotive",
            users_chat: [
                {
                    avatar: "/images/work/voc.png",
                    user_type: "VOC Automotive",
                    message: "Here’s the logo. Now build a website for 2 wheeler servicing Brand. We need lots of enquiries.",
                    time: "10 h",
                },
                {
                    avatar: "/images/work/awit.png",
                    user_type: "ArtWorksIT",
                    message: "Lets do it!!",
                    time: "10 h",
                },
            ],
            image: {
                desktop: "/images/projects/voc.png",
            },
        },
        {
            id: 3,
            title: "Federate One",
            users_chat: [
                {
                    avatar: "/images/work/federate.png",
                    user_type: "Federate One",
                    message: "What we do is cyber security but I don’t want a traditional IT website",
                    time: "8 h",
                },
                {
                    avatar: "/images/work/awit.png",
                    user_type: "ArtWorksIT",
                    message: "Let’s go crazy on this one, and not make a traditional site",
                    time: "8 h",
                },
            ],
            image: {
                desktop: "/images/projects/federate.png",
            },
        },
        {
            id: 4,
            title: "Goa Cars",
            users_chat: [
                {
                    avatar: "/images/work/goacars.png",
                    user_type: "Goa Cars",
                    message: "We are the biggest car rental company in Goa, so our website should also be the best while being easy to book a car",
                    time: "12 h",
                },
                {
                    avatar: "/images/work/awit.png",
                    user_type: "ArtWorksIT",
                    message: "Ez Pz and live in 2 months",
                    time: "12 h",
                },
            ],
            image: {
                desktop: "/images/projects/goa.png",
            },
        },
        {
            id: 5,
            title: "Strand Lifesciences",
            users_chat: [
                {
                    avatar: "/images/work/strands.png",
                    user_type: "Strand Lifesciences",
                    message: "We need a corporate site within 2 weeks.",
                    time: "6 h",
                },
                {
                    avatar: "/images/work/awit.png",
                    user_type: "ArtWorksIT",
                    message: "Hold my Figma and VS Code!!! Live in 10 days",
                    time: "6 h",
                },
            ],
            image: {
                desktop: "/images/projects/strands.png",
            },
        },
    ];

    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    const containerRef = ref(null);

    const animation = () => {
        gsap.registerPlugin(ScrollTrigger);
        const cards = gsap.utils.toArray(".desktop-project__item");

        gsap.set([".work-heading .char", ".work-heading-mobile .char"], { opacity: 0, y: "100%" });

        const headingTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-heading-work",
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        headingTl
            .to([".work-heading .char", ".work-heading-mobile .char"], {
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
                width: "2vw",
                duration: 0.5,
            })
            .from(
                [".work-heading-img", ".work-heading-img-mobile"],
                {
                    scale: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)",
                },
                "-=.2"
            );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.value,
                pin: true,
                start: "top 12.5%",
                end: `+=${cards.length * 50}%`,
                scrub: 1,
                anticipatePin: 1,
            },
        });

        gsap.set(cards, {
            position: "absolute",
            width: "100%",
            top: 0,
        });

        // Sequential animation for each card
        cards.forEach((card, i) => {
            if (i !== 0) {
                tl.from(
                    card,
                    {
                        yPercent: 100,
                        duration: 1,
                        ease: "none",
                    },
                    ">"
                );

                // Apply grayscale and opacity to previous card
                if (i + 1 > 0) {
                    tl.to(
                        cards[i - 1],
                        {
                            filter: "grayscale(100%)",
                            duration: 0.5,
                            ease: "none",
                        },
                        "<+=0.5" // Start halfway through current card's animation
                    ).to(
                        cards[i - 1].querySelector(".card-inner"),
                        {
                            opacity: 0.75,
                            duration: 0.5,
                            ease: "none",
                        },
                        "<"
                    );
                }

                gsap.set(card, {
                    top: `${i * 6}vw`,
                });
            }
        });

        gsap.set(cards[0], { filter: "grayscale(0%)" });
        gsap.set(cards[0], { opacity: 1 });
    };

    onMounted(async () => {
        emit("projects-loaded");
        animation();
    });
</script>

<style scoped>
    .desktop-project {
        height: 100vh;
    }

    .desktop-project__item {
        position: absolute;
        width: 100%;
        will-change: transform;
    }
</style>
