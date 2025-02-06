<template>
    <div>
        <hover-grid />

        <div class="z-[1]">
            <!-- Landing Section Start -->
            <section class="section relative">
                <!-- Desktop View -->
                <div class="hidden md:flex items-center justify-center pb-[9.5vw] pt-[7vw]">
                    <div class="relative">
                        <NuxtImg id="pencil" width="218" height="200" src="/images/home/pencil.png" class="absolute left-0 bottom-0 w-[6vw] -translate-x-1/2 -translate-y-1/2 z-[1]" alt="Pencil Image" />
                        <NuxtImg id="laptop" width="362" height="275" src="/images/home/laptop.png" class="absolute right-0 top-0 w-[9vw] translate-x-1/2 translate-y-[30%] z-[1]" alt="Laptop Image" />
                        <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading flex flex-col font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] text-[#F1F1F1] relative z-0">
                            <span class="overflow-hidden">WE ARE A TEAM OF WEB</span>
                            <span class="overflow-hidden">DESIGNERS AND DEVELOPERS</span>
                            <span class="overflow-hidden">WHO BUILD WEBSITES</span>
                        </h1>

                        <div class="button absolute bottom-[1vw] right-0">
                            <the-button text="LET'S TALK" to="/" />
                        </div>
                    </div>
                </div>

                <!-- Mobile View -->
                <div class="md:hidden px-[7vw] pt-[26vw] pb-[38vw]">
                    <div class="relative flex flex-col gap-[5vw]">
                        <div class="relative">
                            <NuxtImg width="218" height="200" src="/images/home/pencil.png" class="absolute right-[5%] top-[6%] translate-y-full w-[16vw] z-[1]" alt="Pencil Image" />
                            <NuxtImg width="362" height="275" src="/images/home/laptop.png" class="absolute left-0 bottom-0 w-[25vw] -translate-x-[25%] -translate-y-[5%] z-[1]" alt="Laptop Image" />
                            <h1 class="flex flex-col gap-[1vw] font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] text-[#F1F1F1]">
                                <span>WE ARE A</span>
                                <span>TEAM OF</span>
                                <span>WEB DESIGNERS</span>
                                <span>AND DEVELOPERS</span>
                                <span>WHO BUILD</span>
                                <span class="pl-[15vw]">WEBSITES</span>
                            </h1>
                        </div>

                        <div class="flex justify-end">
                            <the-button text="LET'S TALK" to="/" />
                        </div>
                    </div>
                </div>

                <div class="px-[5vw] md:px-[4vw]">
                    <div class="pv-[5vw] md:pb-[3vw] pt-[6vw] md:pt-[2vw] border-t border-[#F1F1F1]">
                        <div class="flex justify-between items-center text15px-desktop text12px-mobile font-medium leading-[2]">
                            <div class="flex gap-[4vw] md:gap-[3vw]">
                                <NuxtLink to="/" target="_blank" class="flex relative group overflow-hidden" aria-label="Linkedin Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">LINKEDIN</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">LINKEDIN</span>
                                </NuxtLink>
                                <NuxtLink to="/" target="_blank" class="flex relative group overflow-hidden" aria-label="Instagram Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">INSTAGRAM</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">INSTAGRAM</span>
                                </NuxtLink>
                                <NuxtLink to="/" target="_blank" class="flex relative group overflow-hidden" aria-label="Behance Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">BEHANCÉ</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">BEHANCÉ</span>
                                </NuxtLink>
                                <NuxtLink to="/" target="_blank" class="flex relative group overflow-hidden" aria-label="Behance Link">
                                    <span class="group-hover:-translate-y-full duration-500 leading-[1]">X</span>
                                    <span class="absolute top-full flex leading-[1] not-main-nav-link group-hover:-translate-y-full duration-500">X</span>
                                </NuxtLink>
                            </div>
                            <div>
                                <NuxtLink to="/" target="_blank" class="flex relative group overflow-hidden" aria-label="Whatsapp Link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34.716" height="34.924" class="w-[7vw]" viewBox="0 0 34.716 34.924">
                                        <g id="_2634e73b7621f1cbc45a568c3479d270" data-name="2634e73b7621f1cbc45a568c3479d270" transform="translate(0 0)">
                                            <path id="Path_57294" data-name="Path 57294" d="M2508.711,2476.11h19.155a7.8,7.8,0,0,1,7.78,7.781v19.354a7.805,7.805,0,0,1-7.78,7.789h-19.155a7.8,7.8,0,0,1-7.781-7.789v-19.354a7.8,7.8,0,0,1,7.781-7.781Z" transform="translate(-2500.93 -2476.11)" fill="#3c3" fill-rule="evenodd" />
                                            <path
                                                id="Path_57295"
                                                data-name="Path 57295"
                                                d="M3880.416,3891.314a9.676,9.676,0,0,1-5.294-1.582l-3.687,1.167,1.191-3.552a9.425,9.425,0,0,1-1.836-5.6,6.943,6.943,0,0,1,.064-.915,9.625,9.625,0,0,1,19.162.175c.016.254.016.509.016.739A9.61,9.61,0,0,1,3880.416,3891.314Zm11.428-9.84a11.436,11.436,0,0,0-22.85-.215c-.015.16-.015.334-.015.485a11.388,11.388,0,0,0,1.637,5.881l-2.066,6.088,6.342-2.011a11.485,11.485,0,0,0,16.977-9.958C3891.869,3881.649,3891.844,3881.57,3891.844,3881.474Z"
                                                transform="translate(-3862.851 -3864.6)"
                                                fill="#fefefe"
                                                fill-rule="evenodd"
                                            />
                                            <path
                                                id="Path_57296"
                                                data-name="Path 57296"
                                                d="M5384.257,5338.487c-.279-.071-.454-.135-.653.159-.286.453-.89,1.445-1.478,1.151a7.281,7.281,0,0,1-2.265-1.382,8.394,8.394,0,0,1-1.559-1.917c-.246-.46.533-.945.818-1.525a.469.469,0,0,0-.022-.484c-.054-.136-.62-1.518-.859-2.067s-.468-.468-.619-.468c-1.559,0-2.291,1.1-2.291,2.654a3.168,3.168,0,0,0,.159.938,6.278,6.278,0,0,0,.995,1.932,11.327,11.327,0,0,0,4.784,4.2c2.87,1.112,2.87.739,3.378.7a2.791,2.791,0,0,0,1.892-1.326,2.191,2.191,0,0,0,.15-1.327A24.674,24.674,0,0,0,5384.257,5338.487Z"
                                                transform="translate(-5363.353 -5320.047)"
                                                fill="#fefefe"
                                                fill-rule="evenodd"
                                            />
                                        </g>
                                    </svg>
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
                            <NuxtImg width="276" height="188" class="heading-img absolute w-[8vw] bottom-0 translate-y-[20%] right-[2.5%] -translate-x-full z-[1]" src="/images/home/saw.png" alt="Saw Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] flex gap-[3.5vw] relative z-[0] overflow-hidden"><span>TOOLS OF OUR</span> <span>TRADE</span></h2>
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="md:hidden">
                        <div class="oveflow-hidden pl-[22vw]">
                            <the-breadcrumbs number="01" title="TECHNOLOGIES" />
                        </div>
                        <div class="pl-[4.75vw] pt-[4vw] md:pt-[2vw] relative w-max">
                            <NuxtImg width="276" height="188" class="absolute w-[16vw] bottom-0 translate-y-[20%] right-[15%] -translate-x-full z-[1]" src="/images/home/saw.png" alt="Saw Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden">
                                <span>TOOLS OF </span>
                                <span>OUR <span class="w-[7vw] inline-block"></span> TRADE</span>
                            </h2>
                        </div>
                    </div>

                    <div class="md:pl-[15vw] mt-[13vw] md:-mt-[7vw]">
                        <div class="grid grid-cols-3 md:grid-cols-6">
                            <div class="md:col-start-5 aspect-square border md:border-b-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tl" />
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="290" height="100" src="/images/home/tailwind.png" class="w-[65%] relative z-[2]" alt="Tailwind Image" />
                            </div>
                            <div class="md:col-start-6 aspect-square border border-l-0 md:border-b-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="204" height="122" src="/images/home/gsap.png" class="w-[52.5%] relative z-[2]" alt="GSAP Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-l-0 md:border-l border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tl" />
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="276" height="48" src="/images/home/digital.png" class="w-[65%] relative z-[2]" alt="Digita lOcean Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                </div>

                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="236" height="48" src="/images/home/next.png" class="w-[55%] relative z-[2]" alt="NextJS Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="294" height="82" src="/images/home/laravel.png" class="w-[65%] relative z-[2]" alt="Laravel Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="266" height="100" src="/images/home/cloudflare.png" class="w-[65%] relative z-[2]" alt="Cloudflare Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                </div>

                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="320" height="83" src="/images/home/procreate.png" class="w-[65%] relative z-[2]" alt="Procreate Image" />
                            </div>
                            <div class="md:row-start-2 aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="308" height="160" src="/images/home/framer.png" class="w-[65%] relative z-[2]" alt="Framer Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 border-l-0 md:border-l border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tl" />
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <small-boxes direction="bl" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="134" height="136" src="/images/home/ae.png" class="w-[35%] relative z-[2]" alt="Ae Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="md:hidden">
                                    <small-boxes direction="tl" />
                                    <small-boxes direction="bl" />
                                </div>

                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="130" height="130" src="/images/home/ai.png" class="w-[35%] relative z-[2]" alt="Ai Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="137" height="135" src="/images/home/ps.png" class="w-[35%] relative z-[2]" alt="Ps Image" />
                            </div>
                            <div class="md:row-start-3 aspect-square border border-t-0 border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
                                <small-boxes direction="tr" />
                                <small-boxes direction="br" />
                                <div class="absolute inset-0 z-0 bg-[#151515]"></div>
                                <NuxtImg width="134" height="136" src="/images/home/xd.png" class="w-[35%] relative z-[2]" alt="Xd Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Technologies Section End -->

            <!-- Why You Need Us Section Start -->
            <section class="section relative">
                <div class="px-[5vw] md:px-[4vw] pt-[20vw] md:pt-[8vw] pb-[5vw]">
                    <!-- DEsktop View -->
                    <div class="hidden md:flex items-end gap-[6vw]">
                        <div>
                            <the-breadcrumbs number="02" title="WHY YOU NEED US" />
                            <div class="pl-[4.75vw] pt-[2vw] relative w-max">
                                <NuxtImg width="309" height="315" class="absolute bottom-0 w-[8.5vw] left-1/4 translate-x-[40%] translate-y-[10%]" src="/images/home/rocket.png" alt="Rocket Image" />
                                <h2 class="font-anton text105px-desktop -tracking-[.1vw] leading-[1.12]">
                                    HOW A WEBSITE CAN<br />
                                    BOOST &nbsp;&nbsp; YOUR BUSINESS
                                </h2>
                            </div>
                        </div>
                        <div>
                            <NuxtImg width="204" height="193" class="w-[20vw]" src="/images/home/illus.svg" alt="Illustration" />
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="md:hidden flex flex-col gap-[14vw]">
                        <div class="">
                            <div class="oveflow-hidden pl-[22vw]">
                                <the-breadcrumbs number="02" title=" WHY YOU NEED US" />
                            </div>
                            <div class="pt-[4vw] md:pt-[2vw] relative w-max">
                                <NuxtImg width="309" height="315" class="absolute bottom-0 w-[24vw] md:w-[8.5vw] left-1/2 md:left-1/4 translate-x-[60%] md:translate-x-[40%] -translate-y-[45%] md:translate-y-[10%]" src="/images/home/rocket.png" alt="Rocket Image" />
                                <h2 v-split-text="{ splitBy: 'words, char' }" class="font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden">
                                    <span>HOW A WEBSITE</span>
                                    <span>CAN BOOST</span>
                                    <span>YOUR BUSINESS?</span>
                                </h2>
                            </div>
                        </div>
                        <div class="flex justify-end pr-[5vw]">
                            <NuxtImg width="204" height="193" class="w-[50vw]" src="/images/home/illus.svg" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="border-y border-[#555555] mt-[14vw] md:mt-[2vw]">
                    <div class="flex flex-col md:flex-row">
                        <div v-for="whyNeed in whyNeedUs" :key="whyNeed.id" :class="{ 'md:border-l-0 border-t-0': whyNeed.id === 1 }" class="flex-1 px-[4.5vw] pb-[14vw] md:pb-[4vw] pt-[14vw] md:pt-[9vw] md:border-t-0 border-t md:border-l border-[#555555]">
                            <div class="flex flex-col">
                                <NuxtImg class="w-[14vw] md:w-[5.5vw]" :src="whyNeed.image" :alt="whyNeed.title" />
                                <p class="font-anton text48px-desktop text36px-mobile text-[#F1F1F1] mt-[4vw] md:mt-[2.75vw] leading-[1.1] max-w-[84%] md:max-w-[95%]">{{ whyNeed.title }}</p>
                                <p class="font-inter font-medium text16px-desktop text14px-mobile text-[#F1F1F1] mt-[4vw] md:mt-[1.65vw] leading-[1.7]">{{ whyNeed.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Why You Need Us Section End -->

            <!-- Projects Section Start -->
            <ProjectSectionHome @projects-loaded="refreshScrollTrigger" />
            <!-- Projects Section End -->

            <!-- Form Section Start -->
            <section class="section relative">
                <div class="px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[10vw] md:pb-[5vw]">
                    <div class="flex flex-col md:flex-row gap-[15vw] md:gap-[10vw]">
                        <div class="md:w-[50%]">
                            <div class="pl-[8vw] md:pl-0">
                                <the-breadcrumbs number="05" title="LET’S TALK" />
                            </div>
                            <div class="md:pl-[4.75vw] pt-[4vw] md:pt-[2vw] relative">
                                <h2 class="font-anton text105px-desktop text56px-mobile -tracking-[.1vw] leading-[1.12] text-[#F1F1F1]">HAVE A PROJECT IN MIND?</h2>
                            </div>
                            <div class="md:pl-[4.75vw] mt-[4vw] md:mt-[2vw] relative">
                                <p class="font-anton text105px-desktop text56px-mobile -tracking-[.1vw] leading-[1.12] text-[#F1F1F1]">DROP US A LINE.</p>
                            </div>

                            <div class="md:pl-[4.75vw] mt-[6vw] md:mt-[3vw]">
                                <div class="flex md:gap-[2vw] gap-[4vw]">
                                    <NuxtLink to="https://calendly.com/artworksit/30min" target="_blank" class="group hover:bg-white-color duration-500 border border-white-color md:w-[4.5vw] md:h-[4.5vw] w-[13vw] h-[13vw] flex justify-center items-center relative">
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-[50%] h-auto duration-500 group-hover:text-[#016AFF]" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M19.655 14.262q.421.001.828.064c0 .005-.005.01-.005.014a6 6 0 0 1-.381.786l-1.219 2.106a6.24 6.24 0 0 1-5.411 3.127h-2.432a6.25 6.25 0 0 1-5.412-3.127l-1.218-2.106a6.25 6.25 0 0 1 0-6.252l1.218-2.106a6.24 6.24 0 0 1 5.412-3.127h2.432a6.25 6.25 0 0 1 5.411 3.127l1.219 2.106c.147.252.271.519.381.786c0 .004.005.009.005.014a5.5 5.5 0 0 1-.828.064c-1.816 0-2.501-.607-3.291-1.306c-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278c-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099c.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517c.791-.703 1.471-1.306 3.287-1.301m.005-3.237q.6 0 1.179-.11q-.003-.007-.002-.014a6.3 6.3 0 0 0-.349-1.218a4.6 4.6 0 0 0 1.986-.819c0-.004-.005-.013-.005-.018a10.6 10.6 0 0 0-1.489-3.03a10.9 10.9 0 0 0-2.331-2.395a10.64 10.64 0 0 0-6.428-2.138c-1.448 0-2.855.28-4.175.841c-1.273.543-2.423 1.315-3.407 2.299S2.878 6.552 2.341 7.83a10.7 10.7 0 0 0-.842 4.175c0 1.448.281 2.855.842 4.174c.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324.556 2.727.841 4.175.841c2.34 0 4.561-.74 6.428-2.137a10.8 10.8 0 0 0 2.331-2.396a10.8 10.8 0 0 0 1.489-3.03c0-.004.005-.014.005-.018a4.6 4.6 0 0 0-1.986-.819c.161-.395.276-.804.349-1.218c.005-.009.005-.014.005-.023a5.85 5.85 0 0 1 2.404 1.035c.685.505.552 1.075.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0-12-5.375-12-12s5.37-12 12-12c5.398 0 9.963 3.563 11.471 8.464c.106.341.239.915-.446 1.421a5.8 5.8 0 0 1-2.404 1.034c.128.716.128 1.45 0 2.166a6.3 6.3 0 0 0-1.182-.11c-4.184 0-3.968 2.823-6.736 2.823h-1.029c-1.899 0-3.15-1.357-3.15-3.095v-1.411c0-1.738 1.251-3.094 3.15-3.094h1.034c2.768 0 2.552 2.823 6.731 2.827"
                                            />
                                        </svg>
                                    </NuxtLink>
                                    <NuxtLink to="tel:+918792745204" target="_blank" class="group hover:bg-white-color duration-500 border border-white-color md:w-[4.5vw] md:h-[4.5vw] w-[13vw] h-[13vw] flex justify-center items-center relative">
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40.091" height="40.433" class="w-[50%] duration-500 group-hover:text-[#0156A4]" viewBox="0 0 40.091 40.433">
                                            <g id="phone-ringing-1--android-phone-mobile-device-smartphone-iphone-ringing-incoming-call" transform="translate(40.091) rotate(90)">
                                                <path
                                                    id="Union"
                                                    d="M23.276,2.182A2.182,2.182,0,0,0,21.094,0,21.094,21.094,0,0,0,0,21.094a2.182,2.182,0,0,0,4.364,0,16.73,16.73,0,0,1,16.73-16.73A2.182,2.182,0,0,0,23.276,2.182ZM20.152,38.84a7.856,7.856,0,0,1-9.805-1.047L9.241,36.687a2.648,2.648,0,0,1,0-3.724L13.9,28.336a2.619,2.619,0,0,1,3.7,0,2.648,2.648,0,0,0,3.724,0l7.419-7.419a2.648,2.648,0,0,0,0-3.724,2.619,2.619,0,0,1,0-3.7l4.481-4.655a2.648,2.648,0,0,1,3.724,0l1.106,1.106a7.856,7.856,0,0,1,1.193,9.805A70.5,70.5,0,0,1,20.152,38.84ZM22.008,8.416a2.182,2.182,0,0,1,0,4.364,9.456,9.456,0,0,0-9.456,9.456,2.182,2.182,0,0,1-4.364,0,13.82,13.82,0,0,1,13.82-13.82Z"
                                                    transform="translate(0 0)"
                                                    fill="currentColor"
                                                    fill-rule="evenodd"
                                                />
                                            </g>
                                        </svg>
                                    </NuxtLink>
                                    <NuxtLink to="https://wa.me/+918792745204?text=Hi" target="_blank" class="group hover:bg-white-color duration-500 border border-white-color md:w-[4.5vw] md:h-[4.5vw] w-[13vw] h-[13vw] flex justify-center items-center relative">
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41.119" height="41.127" class="w-[50%] group-hover:text-[#23D366] duration-500" viewBox="0 0 41.119 41.127">
                                            <path
                                                id="d8f677886d275cf001bf618e1fa3bda3"
                                                d="M21.622,1.058A20.559,20.559,0,0,0,4,32.214l-1.1,7.46a2.077,2.077,0,0,0,2.543,2.469l8.337-1.519A20.559,20.559,0,1,0,21.622,1.058ZM14.8,10.566a1.578,1.578,0,0,1,1.052.47,2.3,2.3,0,0,1,.253.293l1.93,4.439a1.826,1.826,0,0,1-.383,2L15.8,20.26a22.1,22.1,0,0,0,3.778,4.264A22.1,22.1,0,0,0,24.2,27.849L26.5,25.756a1.824,1.824,0,0,1,1.948-.584l4.613,1.468a2.34,2.34,0,0,1,.316.221c1.391,1.168,0,3.151-.772,4a7.583,7.583,0,0,1-7.1,2.208c-2.764-.539-5.663-2.238-8.947-5.2s-5.269-5.676-6.087-8.37a7.579,7.579,0,0,1,1.475-7.286c.576-.639,1.749-1.692,2.85-1.645Z"
                                                transform="translate(-1.063 -1.058)"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </NuxtLink>
                                    <NuxtLink to="mailto:uday@artworksit.com" target="_blank" class="group hover:bg-white-color duration-500 border border-white-color md:w-[4.5vw] md:h-[4.5vw] w-[13vw] h-[13vw] flex justify-center items-center relative">
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <div class="border border-white-color md:w-[.3vw] md:h-[.3vw] w-[1vw] h-[1vw] absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 bg-[#F1F1F1]"></div>
                                        <svg id="sign-at--mail-email-at-sign-read-address" class="w-[50%] duration-500 group-hover:text-[#DA483A]" xmlns="http://www.w3.org/2000/svg" width="41.02" height="41.126" viewBox="0 0 41.02 41.126">
                                            <path
                                                id="Union"
                                                d="M20.568.03h-.019a20.563,20.563,0,1,0,7.972,39.545,2.213,2.213,0,0,0-1.7-4.085A16.138,16.138,0,1,1,20.553,4.455,16.392,16.392,0,0,1,34.6,12.564h0l.017.028c3.537,5.841,1.8,10.368-.28,12.387a3.128,3.128,0,0,1-2.383,1.164c-.073-.017-.149-.044-.251-.21a3.281,3.281,0,0,1-.322-1.67V20.574a10.683,10.683,0,1,0-3.368,7.8,4.761,4.761,0,0,0,2.943,2.077c2.354.545,4.766-.653,6.462-2.3,3.613-3.5,5.547-10.306.992-17.842A20.817,20.817,0,0,0,20.568.03Zm.024,14.306a6.257,6.257,0,1,1-3.447,1.1A6.257,6.257,0,0,1,20.592,14.336Z"
                                                transform="translate(-0.049 -0.03)"
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                            />
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-[50%] md:pr-[4vw]">
                            <div class="relative">
                                <form class="flex flex-col gap-[8vw] md:gap-[3.5vw]">
                                    <div class="relative">
                                        <fieldset class="flex flex-col gap-[1vw]">
                                            <legend class="text16px-desktop text12px-mobile font-inter font-medium">TYPE OF SERVICE</legend>
                                            <div class="flex gap-[1.5vw] md:gap-[.75vw] mt-[4vw] md:mt-[1.5vw]">
                                                <div>
                                                    <label for="website" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[4vw] md:px-[2vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">WEBSITE</p>
                                                        <input type="radio" name="service" value="website" id="website" class="sr-only" required />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label for="ui-ux" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[4vw] md:px-[2vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">UI/UX</p>
                                                        <input type="radio" name="service" value="ui-ux" id="ui-ux" class="sr-only" required />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label for="e-commerce" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[4vw] md:px-[2vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">E-COMMERCE</p>
                                                        <input type="radio" name="service" value="e-commerce" id="e-commerce" class="sr-only" required />
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="relative">
                                        <fieldset class="flex flex-col gap-[1vw]">
                                            <legend class="text16px-desktop text12px-mobile font-inter font-medium">BUDGET IN INR</legend>
                                            <div class="flex gap-[1.5vw] md:gap-[.75vw] mt-[4vw] md:mt-[1.5vw]">
                                                <div>
                                                    <label for="below-3-lakhs" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[2.5vw] md:px-[1vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">< ₹3 LAKHS</p>
                                                        <input type="radio" name="budget" value="below-3-lakhs" id="below-3-lakhs" class="sr-only" required />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label for="3-5-lakhs" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[2.5vw] md:px-[1vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">₹3-5 LAKHS</p>
                                                        <input type="radio" name="budget" value="3-5-lakhs" id="3-5-lakhs" class="sr-only" required />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label for="5-10-lakhs" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[2.5vw] md:px-[1vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">₹5-10 LAKHS</p>
                                                        <input type="radio" name="budget" value="5-10-lakhs" id="5-10-lakhs" class="sr-only" required />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label for="more-than-10-lakhs" class="flex cursor-pointer rounded-full border text-[#F1F1F1]-color border-white-color bg-transparent py-[2vw] md:py-[.75vw] px-[2.5vw] md:px-[1vw] text16px-desktop text9px-mobile font-medium hover:bg-white-color hover:text-background-black duration-500 has-[:checked]:bg-white-color has-[:checked]:text-background-black">
                                                        <p class="text-inherit">> ₹10 LAKHS</p>
                                                        <input type="radio" name="budget" value="more-than-10-lakhs" id="more-than-10-lakhs" class="sr-only" required />
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="relative -mt-[.95vw]">
                                        <div class="relative border-b border-[#707070]">
                                            <input type="text" name="name" id="name" placeholder="Enter your name" class="peer w-full bg-transparent py-[2.5vw] md:py-[.75vw] md:pr-[2vw] md:pl-[.5vw] text-[16px] md:text16px-desktop font-medium placeholder:text-transparent" required />
                                            <label for="name" class="pointer-events-none peer-focus:text9px-mobile md:peer-focus:text12px-desktop text9px-mobile md:text12px-desktop peer-placeholder-shown:text12px-mobile md:peer-placeholder-shown:text16px-desktop font-inter font-medium absolute left-0 top-full peer-focus:top-full translate-y-[70%] peer-focus:translate-y-[70%] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 duration-500">NAME</label>
                                        </div>
                                    </div>

                                    <div class="relative -mt-[.95vw]">
                                        <div class="relative border-b border-[#707070]">
                                            <input type="email" name="email" id="email" placeholder="Enter your email" class="peer w-full bg-transparent py-[2.5vw] md:py-[.75vw] md:pr-[2vw] md:pl-[.5vw] text-[16px] md:text16px-desktop font-medium placeholder:text-transparent" required />
                                            <label for="email" class="pointer-events-none peer-focus:text9px-mobile md:peer-focus:text12px-desktop text9px-mobile md:text12px-desktop peer-placeholder-shown:text12px-mobile md:peer-placeholder-shown:text16px-desktop font-inter font-medium absolute left-0 top-full peer-focus:top-full translate-y-[70%] peer-focus:translate-y-[70%] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 duration-500">E-MAIL</label>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <button class="flex justify-between items-center border border-[#F1F1F1] w-full rounded-full pl-[5vw] md:pl-[2vw] py-[1.5vw] md:py-[.25vw] pr-[1.25vw] md:pr-[.25vw] group">
                                            <p class="text14px-desktop text14px-mobile font-inter text-[#F1F1F1] leading-[1]">LET’S TALK</p>
                                            <div class="flex items-center justify-center bg-[#F1F1F1] w-[8vw] h-[8vw] md:w-[3.75vw] md:h-[3.75vw] rounded-full md:scale-[15%] md:group-hover:scale-100 duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[50%] text-[#1c1c1c] duration-500 md:group-hover:opacity-100 md:opacity-0 -rotate-45 md:group-hover:rotate-0">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Form Section End -->
        </div>
    </div>
</template>

<script setup>
    import { whyNeedUs } from "~/utils/data.js";

    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";

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
            const breadcrumbs = section.querySelector(".breadcrumbs");
            const heading = section.querySelector(".heading");
            const image = section.querySelector(".heading-img");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Start animation when 80% of section is in view
                    end: "top 50%", // Stop animation around 50%
                    scrub: false,
                    toggleActions: "play none none reverse",
                },
            });

            // Animate Breadcrumbs
            tl.from(breadcrumbs, { y: "100%", opacity: 0, duration: 0.6, ease: "power2.out" });

            // Animate Each Character in Heading Sequentially
            tl.from(".heading .char", {
                y: "100%",
                opacity: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power2.inout",
            });

            // Animate Image Scaling
            tl.from(image, { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4"); // Start slightly before text animation ends
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
        })

            // Scale up the pencil image from 0 to 1 with elasticity
            .from(
                "#pencil",
                {
                    scale: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)", // Elastic pop effect
                },
                "-=0.4"
            ) // Starts after text animation

            // Scale up the laptop image from 0 to 1 with elasticity
            .from(
                "#laptop",
                {
                    scale: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.6)",
                },
                "-=0.8"
            ) // Overlaps slightly for a natural effect

            .from(
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
        title: "ArtworksIT",
        description: "ArtworksIT",
        ogTitle: "ArtworksIT",
        ogDescription: "ArtworksIT",
        ogImage: "[og:image]",
        ogUrl: "[og:url]",
        twitterTitle: "ArtworksIT",
        twitterDescription: "ArtworksIT",
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
    .line {
        overflow: hidden !important;
    }
</style>
