<template>
    <div>
        <hover-grid />

        <div class="relative z-[1]">
            <!-- Heading Section Start -->
            <section class="relative">
                <div class="pl-[4.5vw] pr-[6vw] pt-[5vw] pb-[8vw]">
                    <div class="flex justify-between items-end text-[#F1F1F1]">
                        <div class="pl-[4.75vw] pt-[2vw] relative w-max">
                            <NuxtImg width="309" height="315" class="absolute bottom-0 w-[8.5vw] left-1/4 translate-x-[40%] translate-y-[10%]" src="/images/home/rocket.png" alt="Rocket Image" />
                            <h1 class="font-anton text105px-desktop -tracking-[.1vw] leading-[1.12]">
                                ALL WEBSITES <br />
                                CRAFTED WITH &nbsp;&nbsp; LOVE
                            </h1>
                        </div>

                        <div class="md:pb-[.65vw]">
                            <p class="font-anton text40px-desktop text-right leading-[1.1]">
                                YOU NAME IT<br />
                                WE’VE DONE IT !
                            </p>
                            <p class="mt-[1.5vw] font-inter text16px-desktop text-right">NARROW DOWN YOUR SEARCH HERE</p>
                        </div>
                    </div>

                    <div class="mt-[4vw] pl-[4.75vw]">
                        <div class="flex justify-between items-start gap-[5vw]">
                            <div class="flex-1">
                                <div class="flex items flex-wrap gap-[.5vw]">
                                    <button v-for="cat in categories" :key="cat.name" class="font-inter text16px-desktop rounded-full flex items-center gap-[1vw] text-[#F1F1F1] px-[1vw] py-[.5vw] leading-[1] bg-transparent border border-[#F1F1F1] duration-500 hover:text-[#151515] hover:bg-[#F1F1F1] whitespace-nowrap">{{ cat.icon }} {{ cat.name }}</button>
                                </div>
                            </div>
                            <button class="font-inter text16px-desktop rounded-full flex items-center gap-[1vw] text-[#151515] px-[1vw] py-[.5vw] leading-[1] bg-[#F1F1F1] border border-[#F1F1F1]">MORE</button>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Heading Section End -->
        </div>
    </div>
</template>

<script setup>
    import { categories } from "~/utils/data.js";
</script>
