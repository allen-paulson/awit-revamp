<template>
    <section class="relative overflow-hidden md:pb-[6vw]">
        <div class="relative z-[2]">
            <div class="section-heading px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
                <!-- Desktop View -->
                <div class="hidden md:block">
                    <the-breadcrumbs number="02" title="WHY YOU NEED US" />
                    <div class="flex items-end gap-[3vw]">
                        <div class="pt-[2vw] relative w-max">
                            <NuxtImg width="309" height="315" class="heading-img absolute bottom-0 w-[6.5vw] left-1/4 translate-x-[70%] translate-y-[10%]" src="/images/home/eye.png" alt="Eye Image" />
                            <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center z-[0]">
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
                        <div class="pt-[4vw] md:pt-[2vw] relative w-max">
                            <NuxtImg width="309" height="315" class="heading-img-mobile absolute bottom-0 w-[18vw] md:w-[6.5vw] left-1/4 translate-x-[60%] md:translate-x-[70%] -translate-y-[70%] md:translate-y-[10%]" src="/images/home/eye.png" alt="Eye Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading-mobile font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden">
                                <span class="overflow-hidden">HERE’S OUR </span>
                                <span class="overflow-hidden">TOP 5 <span class="w-[13vw] inline-block"></span> BEST </span>
                                <span class="overflow-hidden">WORKS</span>
                            </h2>
                        </div>
                    </div>
                    <div class="flex justify-end -mt-[10vw]">
                        <the-button text="SEE ALL OF THEM" to="/" />
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
                                        <div class="card-inner flex gap-[16vw]">
                                            <p class="font-inter font-light text24px-desktop">0{{ index + 1 }}</p>
                                            <div class="flex flex-col gap-[3vw]">
                                                <p class="font-anton text60px-desktop">{{ project.title }}</p>
                                                <div class="flex flex-col gap-[.75vw]">
                                                    <div class="flex gap-[1vw]">
                                                        <div class="flex flex-col">
                                                            <div class="rounded-full w-[3vw] aspect-square bg-slate-400"></div>
                                                            <div class="flex-1 w-px bg-[#C3C3C3] mx-auto mt-[.5vw]"></div>
                                                        </div>
                                                        <div class="mt-[.5vw] pb-[2vw]">
                                                            <div class="flex gap-[.75vw] items-center">
                                                                <p class="font-inter text18px-desktop font-bold">Client</p>
                                                                <span class="w-[.25vw] aspect-square rounded-full bg-[#FFFFFF]"></span>
                                                                <p class="font-inter text18px-desktop font-light opacity-80">12 h</p>
                                                            </div>
                                                            <p class="font-inter text18px-desktop mt-[1vw] leading-[1.3]">Here’s the logo. Now build a website for 2 wheeler servicing Brand. We need lots of enquiries.</p>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-[1vw]">
                                                        <div class="flex flex-col">
                                                            <div class="rounded-full w-[3vw] aspect-square bg-slate-400"></div>
                                                            <div class="flex-1 w-px bg-[#C3C3C3] mx-auto mt-[.5vw]"></div>
                                                        </div>
                                                        <div class="mt-[.5vw] pb-[2vw]">
                                                            <div class="flex gap-[.75vw] items-center">
                                                                <p class="font-inter text18px-desktop font-bold">User</p>
                                                                <span class="w-[.25vw] aspect-square rounded-full bg-[#FFFFFF]"></span>
                                                                <p class="font-inter text18px-desktop font-light opacity-80">12 h</p>
                                                            </div>
                                                            <p class="font-inter text18px-desktop mt-[1vw] leading-[1.3]">Let's do it!!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-[45%]">
                                            <NuxtImg class="w-full" :src="project.image.desktop" alt="Arrow Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="grid gap-[15vw] md:hidden px-[12vw]">
                        <div v-for="(project, index) in projects" :key="index">
                            <ProjectCardPenta :project="project" :index="index" />
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
                    avatar: "bg-slate-400",
                    user_type: "Client",
                    message: "I want the best looking modern website for an apartment",
                    time: "14 h",
                },
                {
                    avatar: "bg-slate-400",
                    user_type: "User",
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
                    avatar: "bg-slate-400",
                    user_type: "Client",
                    message: "Here’s the logo. Now build a website for 2 wheeler servicing Brand. We need lots of enquiries.",
                    time: "10 h",
                },
                {
                    avatar: "bg-slate-400",
                    user_type: "User",
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
                    avatar: "bg-slate-400",
                    user_type: "Client",
                    message: "We need a portfolio site to showcase our design work.",
                    time: "8 h",
                },
                {
                    avatar: "bg-slate-400",
                    user_type: "User",
                    message: "Perfect, I'll create a visually stunning gallery.",
                    time: "8 h",
                },
            ],
            image: {
                desktop: "/images/projects/rotten.png",
            },
        },
        {
            id: 4,
            title: "Goa Cars",
            users_chat: [
                {
                    avatar: "bg-slate-400",
                    user_type: "Client",
                    message: "We are the biggest car rental company in Goa, so our website should also be the best while being easy to book a car",
                    time: "12 h",
                },
                {
                    avatar: "bg-slate-400",
                    user_type: "User",
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
                    avatar: "bg-slate-400",
                    user_type: "Client",
                    message: "We need a corporate site within 2 weeks.",
                    time: "6 h",
                },
                {
                    avatar: "bg-slate-400",
                    user_type: "User",
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

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.value,
                pin: true,
                start: "top 17.5%",
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
                if (i > 0) {
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
