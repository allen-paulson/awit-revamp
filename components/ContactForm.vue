<template>
    <!-- Form Section Start -->
    <section class="section relative">
        <div class="px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[10vw] md:pb-[5vw]">
            <div class="flex flex-col md:flex-row gap-[15vw] md:gap-[0vw]">
                <div class="section-heading md:w-[39%] md:pt-[2vw]">
                    <div>
                        <div class="pl-[8vw] md:pl-0">
                            <the-breadcrumbs number="03" title="LET’S COLLABORATE" />
                        </div>
                        <div class="md:pl-[4.75vw] pt-[4vw] md:pt-[2vw] relative">
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading overflow-hidden font-anton text105px-desktop text56px-mobile -tracking-[.1vw] leading-[1.12] text-[#F1F1F1] flex flex-col"><span>LET’S GET</span> <span class="md:!ml-[6vw]">IN TOUCH</span></h2>
                        </div>
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
                <div class="md:w-[61%] md:pr-[6.5vw] border-l border-[#FFFFFF]/25 md:pl-[8vw] md:pt-[8vw] md:pb-[10vw]">
                    <div class="relative">
                        <form class="flex flex-col gap-[8vw] md:gap-[3.5vw]">
                            <div class="relative font-inter text26px-desktop font-medium text-white leading-[1.35]">
                                <p>Hi ArtworksIT team,</p>

                                <div class="mt-[1.75vw]">
                                    I,
                                    <div class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <input type="text" name="name" v-model="name" placeholder=" Your name here " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white" />
                                        }
                                    </div>

                                    want help kicking off a project. You <span class="md:w-[1.5vw] inline-block"></span> can reach me via

                                    <div class="inline-block !font-light relative">
                                        {
                                        <div class="absolute right-0 translate-y-[20%] -translate-x-[15%] top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="size-[1.75vw] -rotate-90 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
                                            </svg>
                                        </div>
                                        <div class="inline-block relative">
                                            <select v-model="contactType" name="contact-via" id="contact-via" class="bg-transparent border-none ring-0 outline-none appearance-none md:w-[5vw]">
                                                <option value="Email">Email</option>
                                                <option value="Phone">Phone</option>
                                            </select>
                                        </div>
                                        }
                                    </div>

                                    &nbsp; at &nbsp;

                                    <div class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <div v-if="contactType === 'Email'" class="inline-block">
                                            <input type="email" name="name" placeholder=" anedoe@gmail.com " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[16vw]" />
                                        </div>
                                        <div v-else class="inline-block">
                                            <input type="tel" name="phone" placeholder=" 9876543210 " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[16vw]" />
                                        </div>

                                        }
                                    </div>
                                </div>

                                <div class="mt-[1.65vw]">
                                    My business or project is called
                                    <div class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <input type="text" name="name" placeholder=" Business/project name " v-model="projectName" autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[34vw]" />
                                        }.
                                    </div>
                                    &nbsp;&nbsp; And, I’m looking for

                                    <div class="inline-block !font-light relative">
                                        {
                                        <div class="absolute right-0 translate-y-[20%] -translate-x-[15%] top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="size-[1.75vw] -rotate-90 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
                                            </svg>
                                        </div>
                                        <div class="inline-block relative">
                                            <select name="contact-via" id="contact-via" v-model="lookingFor" class="bg-transparent border-none ring-0 outline-none appearance-none md:w-[9vw]">
                                                <option value="website">Website</option>
                                                <option value="ecom">E-commerce</option>
                                                <option value="ui/ux">UI/UX</option>
                                            </select>
                                        </div>
                                        }
                                    </div>
                                </div>

                                <div class="mt-[1.75vw]">
                                    and I’m aiming and I’m aiming
                                    <div class="inline-block !font-light relative">
                                        {
                                        <div class="absolute right-0 translate-y-[20%] -translate-x-[15%] top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="size-[1.75vw] -rotate-90 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
                                            </svg>
                                        </div>
                                        <div class="inline-block relative">
                                            <select name="contact-via" id="contact-via" v-model="timeline" class="bg-transparent border-none ring-0 outline-none appearance-none md:w-[9vw]">
                                                <option value="3weeks">3 weeks</option>
                                                <option value="ecom">1 - 3 months</option>
                                                <option value="ui/ux">>3 months</option>
                                            </select>
                                        </div>
                                        }
                                    </div>
                                </div>

                                <div class="mt-[1.75vw]">
                                    <span class="w-[13vw] inline-block"></span> And here’s more about what I have in mind

                                    <div class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <input type="text" name="name" v-model="message" placeholder=" Anything else " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[39vw]" />
                                        }.
                                    </div>
                                </div>

                                <div class="mt-[1.75vw]">
                                    Cheers,
                                    <div class="flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light w-max">
                                        {
                                        <input type="text" name="name" v-model="name" placeholder=" Jane Dane " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-max" />
                                        }.
                                    </div>
                                </div>

                                <div class="flex justify-end">
                                    <button class="rounded-full px-[1vw] py-[.5vw] flex items-center gap-[2vw]"></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Form Section End -->
</template>

<script setup>
    const name = ref("");
    const contactType = ref("Email");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const lookingFor = ref("website");
    const projectName = ref("");
    const timeline = ref("3weeks");
</script>
