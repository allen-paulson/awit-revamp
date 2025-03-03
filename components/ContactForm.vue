<template>
    <!-- Contact Landing Section Start -->
    <section v-if="path === '/contact'" id="contact-heading" class="relative">
        <div class="px-[6vw] md:px-[4.5vw] pt-[5vw] pb-[8vw] md:pb-[6vw]">
            <div class="relative text-[#F1F1F1]">
                <!-- Desktop View -->
                <div class="relative md:w-full hidden md:block">
                    <NuxtImg id="pencil" width="311" class="heading-img absolute bottom-[37.5%] w-[9vw] right-[17%] -translate-x-[70%] -translate-y-[10%] z-[1]" src="/images/contact/phone.png" alt="phone Image" />
                    <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex flex-col justify-center z-[0] w-full">
                        <span class="overflow-hidden">LET’S WORK </span>
                        <span class="!inline-flex justify-end -mt-[2.75vw]">
                            <span class="overflow-hidden">TOGETHER </span>
                        </span>
                    </h1>
                </div>
                <!-- Mobile View -->
                <div class="pt-[2vw] relative md:w-[60%] md:hidden">
                    <NuxtImg height="349" class="heading-img-mobile absolute bottom-0 w-[21vw] left-1/4 translate-x-[35%] -translate-y-[100%] z-[2]" src="/images/contact/phone.png" alt="phone Image" />
                    <h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading-mobile font-anton -tracking-[.1vw] leading-[1.12] flex flex-col">
                        <span class="overflow-hidden text76px-mobile !inline-flex justify-between"><span>LET’S</span> <span>WORK</span> </span>
                        <span class="overflow-hidden text-[24.9vw]">TOGETHER</span>
                    </h1>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Landing Section End -->

    <!-- Form Section Start -->
    <section class="form-section relative">
        <div class="px-[5vw] md:px-[4vw] pb-[20vw] md:pb-[5vw]">
            <div class="flex flex-col md:flex-row gap-[15vw] md:gap-[0vw] border-t-[.75px] border-[#FFFFFF] md:pt-[1vw] pt-[4vw]">
                <div class="section-heading md:w-[39%] md:pt-[2vw]">
                    <!-- Desktop View -->
                    <div class="hidden md:block">
                        <div v-if="path != '/contact'">
                            <div class="pl-[8vw] md:pl-0">
                                <the-breadcrumbs number="03" title="LET’S COLLABORATE" />
                            </div>
                        </div>
                        <div class="md:pl-[4.75vw] pt-[4vw] md:pt-[2vw] relative">
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading overflow-hidden font-anton text105px-desktop text56px-mobile -tracking-[.1vw] leading-[1.12] text-[#F1F1F1] flex flex-col"><span>LET’S GET</span> <span class="md:!ml-[6vw]">IN TOUCH</span></h2>
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="md:hidden">
                        <div class="pl-[8vw] md:pl-0">
                            <the-breadcrumbs number="03" title="LET’S COLLABORATE" />
                        </div>
                        <div class="md:pl-[4.75vw] pt-[4vw] md:pt-[2vw] relative">
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading overflow-hidden font-anton text-[20vw] -tracking-[.1vw] leading-[1.12] text-[#F1F1F1] flex flex-col w-full">
                                <span>LET’S GET</span>
                                <span class="!inline-flex justify-end">
                                    <span class="md:!ml-[6vw]">IN TOUCH</span>
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div id="socials" class="md:pl-[4.75vw] pl-[8vw] mt-[6vw] md:mt-[10vw]">
                        <div class="grid grid-cols-3 w-max">
                            <div class="col-start-2">
                                <NuxtLink to="https://www.behance.net/ashwind" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45.569" height="28.76" class="w-[30%] md:w-[35%] duration-500 group-hover:text-[#003ECB]" viewBox="0 0 45.569 28.76">
                                        <path
                                            id="_8a7a186666c0d51cd04d97fca1b9ee64"
                                            data-name="8a7a186666c0d51cd04d97fca1b9ee64"
                                            d="M43.138,7.168H31.6v3.21H43.184ZM40.7,29.251a5.077,5.077,0,0,1-2.96.842,5.077,5.077,0,0,1-3.87-1.229,5.669,5.669,0,0,1-1.411-4.007H47.532a14.73,14.73,0,0,0-.387-4.553,11.565,11.565,0,0,0-1.821-3.939,9.493,9.493,0,0,0-3.233-2.755,9.949,9.949,0,0,0-4.553-1.024,11.11,11.11,0,0,0-4.326.842,10.268,10.268,0,0,0-3.347,2.277,10.017,10.017,0,0,0-2.163,3.46,12.294,12.294,0,0,0-.751,4.348,12.567,12.567,0,0,0,.729,4.417,10.154,10.154,0,0,0,2,3.483,9.107,9.107,0,0,0,3.324,2.277,11.838,11.838,0,0,0,4.417.774,10.859,10.859,0,0,0,6.01-1.594,9.585,9.585,0,0,0,3.711-5.35H42.114A3.506,3.506,0,0,1,40.7,29.251Zm-7.809-9.38a4.257,4.257,0,0,1,2.277-2.6,5.191,5.191,0,0,1,2.277-.455,3.939,3.939,0,0,1,3.1,1.116,6.625,6.625,0,0,1,1.434,3.3H32.529a6.83,6.83,0,0,1,.25-1.366ZM20.85,18.778A6.966,6.966,0,0,0,23.764,16.5a6.192,6.192,0,0,0,.979-3.6,7.467,7.467,0,0,0-.66-3.369,5.464,5.464,0,0,0-1.867-2.277,7.376,7.376,0,0,0-2.891-1.184,17.166,17.166,0,0,0-3.734-.364H2v28.64H15.887a14.912,14.912,0,0,0,3.756-.478,10.358,10.358,0,0,0,3.256-1.48,7.126,7.126,0,0,0,2.277-2.6,7.763,7.763,0,0,0,.842-3.756,7.9,7.9,0,0,0-1.3-4.553,6.83,6.83,0,0,0-3.984-2.709ZM8.306,10.605h5.9a9.493,9.493,0,0,1,1.616.137,3.734,3.734,0,0,1,1.389.5,2.39,2.39,0,0,1,.956,1,3.233,3.233,0,0,1,.364,1.639,3.1,3.1,0,0,1-1.07,2.618,4.553,4.553,0,0,1-2.777.8H8.306ZM19.325,27.543A2.914,2.914,0,0,1,18.3,28.682a4.553,4.553,0,0,1-1.48.592,7.581,7.581,0,0,1-1.776.182H8.215V21.6h6.83a5.464,5.464,0,0,1,3.3.933A3.756,3.756,0,0,1,19.575,25.7,4.03,4.03,0,0,1,19.325,27.543Z"
                                            transform="translate(-2 -5.709)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </NuxtLink>
                            </div>
                            <div class="col-start-3">
                                <NuxtLink to="tel:+918792745204" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40.091" height="40.433" class="w-[30%] md:w-[35%] duration-500 group-hover:text-[#0156A4]" viewBox="0 0 40.091 40.433">
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
                            </div>
                            <div class="row-start-2">
                                <NuxtLink id="instagram" to="https://www.instagram.com/_artworksit/" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38.057" height="38.057" class="w-[30%] md:w-[35%] duration-500" viewBox="0 0 38.057 38.057">
                                        <!-- Define gradient -->
                                        <defs>
                                            <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stop-color="#fccc63" />
                                                <stop offset="25%" stop-color="#fbad50" />
                                                <stop offset="50%" stop-color="#cd486b" />
                                                <stop offset="100%" stop-color="#4c68d7" />
                                            </linearGradient>
                                        </defs>

                                        <!-- Apply gradient fill -->
                                        <path
                                            id="instagram-icon"
                                            d="M21.028,16.309a4.719,4.719,0,1,0,4.719,4.719A4.719,4.719,0,0,0,21.028,16.309Zm18.9-4.662a12.425,12.425,0,0,0-.8-4.3A7.611,7.611,0,0,0,34.71,2.932a12.426,12.426,0,0,0-4.3-.8C27.955,2,27.232,2,21.028,2s-6.926,0-9.381.133a12.426,12.426,0,0,0-4.3.8A7.611,7.611,0,0,0,2.932,7.347a12.426,12.426,0,0,0-.8,4.3C2,14.1,2,14.825,2,21.028s0,6.926.133,9.381a13.053,13.053,0,0,0,.8,4.319,7.5,7.5,0,0,0,1.732,2.664,7.4,7.4,0,0,0,2.683,1.732,12.426,12.426,0,0,0,4.3.8c2.455.133,3.178.133,9.381.133s6.926,0,9.381-.133a12.426,12.426,0,0,0,4.3-.8,7.4,7.4,0,0,0,2.683-1.732,7.5,7.5,0,0,0,1.732-2.664,12.559,12.559,0,0,0,.8-4.319c.133-2.455.133-3.178.133-9.381S40.057,14.1,39.924,11.647ZM35.091,26.87a10.9,10.9,0,0,1-.742,3.425A7.345,7.345,0,0,1,30.3,34.348a10.9,10.9,0,0,1-3.444.666H15.206a10.9,10.9,0,0,1-3.444-.666A7.083,7.083,0,0,1,7.709,30.3a10.447,10.447,0,0,1-.647-3.444c0-1.5,0-1.9,0-5.823V15.206a10.447,10.447,0,0,1,.647-3.444A6.679,6.679,0,0,1,9.345,9.269a6.831,6.831,0,0,1,2.417-1.56,10.9,10.9,0,0,1,3.444-.666H26.851a10.9,10.9,0,0,1,3.444.666,7.083,7.083,0,0,1,4.053,4.053,10.9,10.9,0,0,1,.666,3.444c0,1.5,0,1.9,0,5.823s.133,4.319.076,5.823ZM32.046,12.713a4.529,4.529,0,0,0-2.683-2.683,7.611,7.611,0,0,0-2.626-.419H15.32a7.611,7.611,0,0,0-2.626.495,4.529,4.529,0,0,0-2.683,2.588,8.125,8.125,0,0,0-.4,2.626V26.737a8.125,8.125,0,0,0,.495,2.626,4.529,4.529,0,0,0,2.683,2.683,8.125,8.125,0,0,0,2.531.495H26.737a7.611,7.611,0,0,0,2.626-.495,4.529,4.529,0,0,0,2.683-2.683,7.611,7.611,0,0,0,.495-2.626V15.32a7.193,7.193,0,0,0-.495-2.626ZM21.028,28.3a7.25,7.25,0,0,1-7.25-7.269h0a7.269,7.269,0,1,1,7.25,7.269ZM28.64,15.187a1.713,1.713,0,0,1,0-3.406h0a1.713,1.713,0,0,1,0,3.406Z"
                                            fill="currentColor"
                                            class="fill-white group-hover:fill-[url(#instagramGradient)] transition-all duration-500"
                                        />
                                    </svg>
                                </NuxtLink>
                            </div>
                            <div class="row-start-2">
                                <NuxtLink to="https://www.linkedin.com/company/artworksit/posts/?feedView=all" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41.705" height="39.853" class="w-[30%] md:w-[35%] duration-500 group-hover:text-[#0156A4]" viewBox="0 0 41.705 39.853">
                                        <path
                                            id="b5783c601e16032733df8073caacab72"
                                            d="M0,9.629A4.335,4.335,0,0,1,1.409,6.308,5.169,5.169,0,0,1,5.072,5,5.015,5.015,0,0,1,8.655,6.288,4.541,4.541,0,0,1,10.064,9.75,4.239,4.239,0,0,1,8.7,12.971a5.178,5.178,0,0,1-3.7,1.328h-.04a4.926,4.926,0,0,1-3.583-1.328A4.462,4.462,0,0,1,0,9.629ZM.523,44.853V17.962H9.46V44.853Zm13.888,0h8.937V29.838a5.241,5.241,0,0,1,2.033-4.489A4.374,4.374,0,0,1,28.26,24.4q4.509,0,4.509,6.079V44.853h8.937V29.435q0-5.958-2.818-9.037a9.613,9.613,0,0,0-7.447-3.08,9.135,9.135,0,0,0-8.091,4.468v.081h-.04l.04-.081V17.962H14.412q.08,1.288.081,8.011T14.412,44.853Z"
                                            transform="translate(0 -5)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </NuxtLink>
                            </div>
                            <div class="row-start-2">
                                <NuxtLink to="mailto:uday@artworksit.com" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg id="sign-at--mail-email-at-sign-read-address" class="w-[30%] md:w-[35%] duration-500 group-hover:text-[#DA483A]" xmlns="http://www.w3.org/2000/svg" width="41.02" height="41.126" viewBox="0 0 41.02 41.126">
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
                            <div class="row-start-3">
                                <NuxtLink to="https://wa.me/+918792745204?text=Hi" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41.119" height="41.127" class="w-[30%] md:w-[35%] group-hover:text-[#23D366] duration-500" viewBox="0 0 41.119 41.127">
                                        <path
                                            id="d8f677886d275cf001bf618e1fa3bda3"
                                            d="M21.622,1.058A20.559,20.559,0,0,0,4,32.214l-1.1,7.46a2.077,2.077,0,0,0,2.543,2.469l8.337-1.519A20.559,20.559,0,1,0,21.622,1.058ZM14.8,10.566a1.578,1.578,0,0,1,1.052.47,2.3,2.3,0,0,1,.253.293l1.93,4.439a1.826,1.826,0,0,1-.383,2L15.8,20.26a22.1,22.1,0,0,0,3.778,4.264A22.1,22.1,0,0,0,24.2,27.849L26.5,25.756a1.824,1.824,0,0,1,1.948-.584l4.613,1.468a2.34,2.34,0,0,1,.316.221c1.391,1.168,0,3.151-.772,4a7.583,7.583,0,0,1-7.1,2.208c-2.764-.539-5.663-2.238-8.947-5.2s-5.269-5.676-6.087-8.37a7.579,7.579,0,0,1,1.475-7.286c.576-.639,1.749-1.692,2.85-1.645Z"
                                            transform="translate(-1.063 -1.058)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </NuxtLink>
                            </div>
                            <div>
                                <NuxtLink to="https://calendly.com/artworksit/30min" target="_blank" class="group hover:bg-white-color duration-500 border-[.5px] border-[#5C5C5C] md:border md:border-white-color md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] flex justify-center items-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-[30%] md:w-[35%] h-auto duration-500 group-hover:text-[#016AFF]" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M19.655 14.262q.421.001.828.064c0 .005-.005.01-.005.014a6 6 0 0 1-.381.786l-1.219 2.106a6.24 6.24 0 0 1-5.411 3.127h-2.432a6.25 6.25 0 0 1-5.412-3.127l-1.218-2.106a6.25 6.25 0 0 1 0-6.252l1.218-2.106a6.24 6.24 0 0 1 5.412-3.127h2.432a6.25 6.25 0 0 1 5.411 3.127l1.219 2.106c.147.252.271.519.381.786c0 .004.005.009.005.014a5.5 5.5 0 0 1-.828.064c-1.816 0-2.501-.607-3.291-1.306c-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278c-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099c.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517c.791-.703 1.471-1.306 3.287-1.301m.005-3.237q.6 0 1.179-.11q-.003-.007-.002-.014a6.3 6.3 0 0 0-.349-1.218a4.6 4.6 0 0 0 1.986-.819c0-.004-.005-.013-.005-.018a10.6 10.6 0 0 0-1.489-3.03a10.9 10.9 0 0 0-2.331-2.395a10.64 10.64 0 0 0-6.428-2.138c-1.448 0-2.855.28-4.175.841c-1.273.543-2.423 1.315-3.407 2.299S2.878 6.552 2.341 7.83a10.7 10.7 0 0 0-.842 4.175c0 1.448.281 2.855.842 4.174c.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324.556 2.727.841 4.175.841c2.34 0 4.561-.74 6.428-2.137a10.8 10.8 0 0 0 2.331-2.396a10.8 10.8 0 0 0 1.489-3.03c0-.004.005-.014.005-.018a4.6 4.6 0 0 0-1.986-.819c.161-.395.276-.804.349-1.218c.005-.009.005-.014.005-.023a5.85 5.85 0 0 1 2.404 1.035c.685.505.552 1.075.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0-12-5.375-12-12s5.37-12 12-12c5.398 0 9.963 3.563 11.471 8.464c.106.341.239.915-.446 1.421a5.8 5.8 0 0 1-2.404 1.034c.128.716.128 1.45 0 2.166a6.3 6.3 0 0 0-1.182-.11c-4.184 0-3.968 2.823-6.736 2.823h-1.029c-1.899 0-3.15-1.357-3.15-3.095v-1.411c0-1.738 1.251-3.094 3.15-3.094h1.034c2.768 0 2.552 2.823 6.731 2.827"
                                        />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:w-[61%] md:pr-[6.5vw] md:border-l md:border-[#FFFFFF]/25 md:pl-[8vw] md:pt-[8vw] md:pb-[10vw]">
                    <!-- Desktop View -->
                    <div v-show="!formSubmitted" id="contact-form" class="relative hidden md:block">
                        <form @submit.prevent="submitForm" class="flex flex-col gap-[8vw] md:gap-[3.5vw]">
                            <p class="relative font-inter text26px-desktop font-medium text-white leading-[1.5]">
                                <span>Hi ArtworksIT team,</span>

                                <span class="inline-block mt-[1.75vw]">
                                    I,
                                    <span class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <span class="relative inline-block">
                                            <span ref="nameText" class="absolute invisible whitespace-nowrap inline-block pointer-events-none">{{ name }}</span>

                                            <span class="absolute w-full bottom-0 h-px bg-white/25"></span>
                                            <input :style="{ width: nameWidth + 'px' }" ref="nameWidth" required type="text" name="name" v-model="name" placeholder=" Your name here " autocomplete="false" class="w-full bg-transparent focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white min-w-[10vw] max-w-[35vw]" />
                                        </span>
                                        }
                                    </span>

                                    want help kicking off a project. You can reach me via

                                    <span class="inline-block !font-light relative">
                                        {
                                        <span class="absolute right-0 translate-y-[5%] -translate-x-[15%] top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="size-[1.75vw] -rotate-90 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
                                            </svg>
                                        </span>
                                        <span class="inline-block relative">
                                            <span ref="contactTypeText" class="absolute invisible whitespace-nowrap">{{ contactType }}</span>
                                            <select :style="{ width: contactTypeWidth + 'px' }" @change="updateWidth" v-model="contactType" name="contact-via" id="contact-via" class="bg-transparent border-none ring-0 outline-none appearance-none">
                                                <option value="Email">Email</option>
                                                <option value="Phone">Phone</option>
                                            </select>
                                        </span>
                                        }
                                    </span>

                                    &nbsp; at &nbsp;

                                    <span class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <span v-if="contactType === 'Email'" class="inline-block">
                                            <input type="email" name="name" v-model="email" placeholder=" anedoe@gmail.com " required autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[16vw]" />
                                        </span>
                                        <span v-else class="inline-block">
                                            <input type="tel" name="phone" required v-model="phone" placeholder=" 9876543210 " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[16vw]" />
                                        </span>

                                        }
                                    </span>
                                </span>

                                <span class="mt-[1.65vw] inline-block">
                                    My business or project is called
                                    <span class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <span ref="businessText" class="absolute invisible whitespace-nowrap inline-block pointer-events-none">{{ projectName }}</span>
                                        <input ref="businessWidth" :style="{ width: businessWidth + 'px' }" required type="text" name="name" placeholder=" Business/project name " v-model="projectName" autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white min-w-[15vw] max-w-[35vw]" />
                                        } </span
                                    >. I’m looking for

                                    <span class="inline-block !font-light relative">
                                        {
                                        <span class="absolute right-0 translate-y-[5%] -translate-x-[15%] top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="size-[1.75vw] -rotate-90 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
                                            </svg>
                                        </span>
                                        <span class="inline-block relative">
                                            <span ref="lookingForText" class="absolute invisible whitespace-nowrap">{{ lookingFor }}</span>
                                            <select required :style="{ width: lookingForWidth + 'px' }" name="contact-via" id="contact-via" v-model="lookingFor" class="bg-transparent border-none ring-0 outline-none appearance-none md:w-[9vw]">
                                                <option value="Website">Website</option>
                                                <option value="E-commerce">E-commerce</option>
                                                <option value="UI/UX">UI/UX</option>
                                            </select>
                                        </span>
                                        }
                                    </span>

                                    and I’m aiming to launch by
                                    <span class="inline-block !font-light relative">
                                        {
                                        <span class="absolute right-0 translate-y-[5%] -translate-x-[15%] top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="size-[1.75vw] -rotate-90 text-white" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
                                            </svg>
                                        </span>
                                        <span class="inline-block relative">
                                            <span ref="timelineText" class="absolute invisible whitespace-nowrap inline-block">{{ timeline }}</span>
                                            <select required :style="{ width: timelineWidth + 'px' }" name="contact-via" id="contact-via" v-model="timeline" class="bg-transparent border-none ring-0 outline-none appearance-none md:w-[9vw]">
                                                <option value="3 weeks">3 weeks</option>
                                                <option value="1 - 3 months">1 - 3 months</option>
                                                <option value=">3 months">>3 months</option>
                                            </select>
                                        </span>
                                        }
                                    </span>
                                </span>

                                <span class="mt-[1.75vw] inline-block">
                                    And here’s more about what I have in mind

                                    <span class="inline-flex items-center text-[#FFFFFF]/25 gap-[.1vw] font-light">
                                        {
                                        <input type="text" required name="name" v-model="message" placeholder=" Anything else " autocomplete="false" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white md:w-[39vw]" />
                                        }.
                                    </span>
                                </span>

                                <span class="mt-[1.75vw] inline-block">
                                    Cheers,
                                    <span class="flex items-center text-[#FFFFFF] gap-[.1vw] font-light max-w-[20vw] leading-[1] mt-[2vw] text-wrap">
                                        <span class="text36px-desktop font-alex">{{ name }}</span>
                                    </span>
                                </span>
                            </p>
                            <div class="flex justify-end mt-[1vw]">
                                <button class="rounded-full bg-white-color text-background-black inline-block py-[2.5vw] md:py-[.7vw] pl-[4vw] md:pl-[1vw] relative group">
                                    <div class="relative w-full pr-[12vw] md:pr-[4vw]">
                                        <p class="text15px-desktop text14px-mobile font-semibold">SEND MESSAGE</p>
                                        <div class="rounded-full bg-background-black aspect-square w-[6.5vw] md:w-[2.05vw] absolute right-[1vw] md:right-[.2vw] flex items-center justify-center top-1/2 -translate-y-1/2 md:scale-[30%] md:group-hover:scale-100 duration-500 will-change-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[50%] text-[#F1F1F1] duration-500 md:group-hover:opacity-100 md:opacity-0" viewBox="0 0 13.216 13.216">
                                                <path id="_9ca54370bbdf94fe6f5a6be762b92d08" data-name="9ca54370bbdf94fe6f5a6be762b92d08" d="M12.4,8.927a.5.5,0,0,0,0-.721L9.251,5.149a.537.537,0,0,0-.743,0,.5.5,0,0,0,0,.721l2.255,2.188H1.525a.51.51,0,1,0,0,1.019h9.238L8.508,11.264a.5.5,0,0,0,0,.721.537.537,0,0,0,.743,0Z" transform="translate(-4.243 5.343) rotate(-45)" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <NuxtTurnstile v-model="token" />
                        </form>
                    </div>

                    <!-- Mobile View -->
                    <div v-show="!formSubmitted" id="contact-form-mobile" class="relative md:hidden">
                        <form @submit.prevent="submitForm" class="text20px-mobile grid gap-[9vw]">
                            <div class="flex flex-col gap-[2vw]">
                                <p class="font-medium">My name is</p>
                                <input type="text" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white" v-model="name" placeholder=" Your name " autocomplete="false" />
                            </div>

                            <div class="flex flex-col gap-[1vw]">
                                <p class="font-medium leading-[1.15]">
                                    I want help kicking off a project.<br />
                                    You can reach me via
                                </p>

                                <div class="mt-[3vw]">
                                    <div class="flex items-center gap-[2vw]">
                                        <button type="button" @click="selectedContactType = 'email'" :class="selectedContactType === 'email' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4.5vw] py-[2.5vw] text18px-mobile">Email</button>
                                        <button type="button" @click="selectedContactType = 'phone'" :class="selectedContactType === 'phone' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4.5vw] py-[2.5vw] text18px-mobile">Phone</button>
                                    </div>
                                </div>
                                <div class="mt-[3vw]">
                                    <div v-if="selectedContactType === 'email'">
                                        <input type="email" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white" v-model="email" placeholder=" Your email " autocomplete="false" />
                                    </div>
                                    <div v-else>
                                        <input type="tel" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white" v-model="phone" placeholder=" Your phone number " autocomplete="false" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-[2vw]">
                                <p class="font-medium">My business or project is called</p>
                                <input type="text" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white" v-model="name" placeholder=" Your name " autocomplete="false" />
                            </div>

                            <div class="flex flex-col gap-[1vw]">
                                <p class="font-medium leading-[1.15]">I’m looking for</p>

                                <div class="mt-[3vw]">
                                    <div class="flex items-center flex-wrap gap-[1.5vw] tracking-tight">
                                        <button type="button" @click="lookingFor = 'website'" :class="lookingFor === 'website' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4vw] py-[2.5vw] text18px-mobile">Website</button>
                                        <button type="button" @click="lookingFor = 'graphic design'" :class="lookingFor === 'graphic design' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4vw] py-[2.5vw] text18px-mobile">Graphic design</button>
                                        <button type="button" @click="lookingFor = 'e-commerce'" :class="lookingFor === 'e-commerce' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4vw] py-[2.5vw] text18px-mobile">E-commerce</button>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-[1vw]">
                                <p class="font-medium leading-[1.15]">I’m aiming to launch by</p>

                                <div class="mt-[3vw]">
                                    <div class="flex items-center flex-wrap gap-[1.5vw] tracking-tight">
                                        <button type="button" @click="timeline = '2 weeks'" :class="timeline === '2 weeks' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4vw] py-[2.5vw] text18px-mobile">2 weeks</button>
                                        <button type="button" @click="timeline = '1-3 months'" :class="timeline === '1-3 months' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4vw] py-[2.5vw] text18px-mobile">1-3 months</button>
                                        <button type="button" @click="timeline = '3-6 months'" :class="timeline === '3-6 months' ? 'border-white bg-background-black' : 'border-[#2C2C2C] bg-[#2C2C2C]'" class="border-[.5px] rounded-full px-[4vw] py-[2.5vw] text18px-mobile">3-6 months</button>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-[2vw]">
                                <p class="font-medium">Here’s more about what I have in mind</p>
                                <textarea name="message" id="message" v-model="message" placeholder="Anything else" class="w-full bg-transparent !border-b !border-[#FFFFFF]/25 focus:outline-none focus:ring-0 placeholder-[#FFFFFF]/25 text-white"></textarea>
                            </div>

                            <div class="mt-[10vw]">
                                <button type="submit" class="w-full bg-white text-[#1F1F1F] flex items-center justify-between px-[5vw] py-[2vw] rounded-full text14px-mobile font-inter font-semibold">
                                    SEND MESSAGE
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.216" height="13.216" class="duration-400 rotate-45 size-[6vw]" viewBox="0 0 13.216 13.216">
                                        <path id="_9ca54370bbdf94fe6f5a6be762b92d08" data-name="9ca54370bbdf94fe6f5a6be762b92d08" d="M12.4,8.927a.5.5,0,0,0,0-.721L9.251,5.149a.537.537,0,0,0-.743,0,.5.5,0,0,0,0,.721l2.255,2.188H1.525a.51.51,0,1,0,0,1.019h9.238L8.508,11.264a.5.5,0,0,0,0,.721.537.537,0,0,0,.743,0Z" transform="translate(-4.243 5.343) rotate(-45)" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>

                            <NuxtTurnstile v-model="token" />
                        </form>
                    </div>

                    <!-- Success Message -->
                    <div v-show="formSubmitted" v-split-text="{ splitBy: 'words, char' }" id="success-message" class="relative font-inter text26px-desktop font-medium text-white leading-[1.35]">
                        <p>Hi {{ name }},</p>
                        <div class="mt-[3vw] md:mt-[2vw]">
                            <p>Thanks for reaching out! We'd love to help with your {{ lookingFor }}. I will contact you shortly.</p>
                        </div>
                        <div class="mt-[3vw] md:mt-[2vw] !inline-flex flex-col">
                            <p>Best Wishes,</p>
                            <p>Uday</p>
                            <p class="font-bold">ArtWorksIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Form Section End -->
</template>

<script setup>
    import { gsap } from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    const { path } = useRoute();

    const name = ref("");
    const contactType = ref("Email");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const lookingFor = ref("Website");
    const projectName = ref("");
    const timeline = ref("3 weeks");
    const token = ref("");

    const selectedContactType = ref("email");

    const contactOptions = [
        { id: "checkbox-id", value: "website", label: "WEBSITE" },
        { id: "checkbox-id2", value: "ui/ux", label: "UI/UX" },
        { id: "checkbox-id3", value: "e-commerce", label: "E-COMMERCE" },
    ];

    // Add refs for each select's text measurement
    const contactTypeWidth = ref(0);
    const lookingForWidth = ref(0);
    const timelineWidth = ref(0);
    const nameWidth = ref(0);
    const businessWidth = ref(0);

    // Create refs for invisible measurement spans
    const contactTypeText = ref(null);
    const lookingForText = ref(null);
    const timelineText = ref(null);
    const nameText = ref(null);
    const businessText = ref(null);

    const formSubmitted = ref(false);

    // Form submission
    const FORMSPARK_ACTION_URL = "https://submit-form.com/AQbUAba3m";

    const submitForm = async () => {
        const formData = {
            name: name.value,
            contactType: contactType.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
            looking: lookingFor.value,
            projectName: projectName.value,
            timeline: timeline.value,
            "cf-turnstile-response": token.value,
        };

        await fetch(FORMSPARK_ACTION_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                formSubmitted.value = true;
                showFromSuccess();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const showFromSuccess = () => {
        // First hide the form
        gsap.to("#contact-form", {
            opacity: 0,
            y: -50,
            duration: 0.5,
            onComplete: () => {
                // Make the success message container visible but keep characters invisible
                gsap.set("#success-message", {
                    visibility: "visible",
                    opacity: 1,
                });
                const charss = document.querySelectorAll("#success-message .char");
                console.log("Found characters:", charss.length);
                console.log(charss); // Look at the actual elements
                const chars = gsap.utils.toArray("#success-message .char");
                // Animate each character
                chars.forEach((char, index) => {
                    gsap.fromTo(
                        char,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 0.1,
                            delay: index * 0.04, // Incremental delay for each character
                            ease: "none",
                        }
                    );
                });
            },
        });
    };

    const formAnimation = () => {
        const form = document.querySelector("#contact-form");
        const socials = document.querySelector("#socials");

        // create an animation to slide up the form when it reaches the viewport using gsap and scrolltrigger
        gsap.fromTo(
            [form, socials],
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".form-section",
                    start: "top 70%",
                    end: "top 60%",
                },
            }
        );
    };

    const headinganimation = () => {
        const contactHeading = document.querySelector("#contact-heading");
        if (contactHeading) {
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
        }
    };

    // Update width function for all selects
    const updateSelectWidths = () => {
        nextTick(() => {
            if (contactTypeText.value) {
                contactTypeWidth.value = contactTypeText.value.offsetWidth + 20;
            }
            if (lookingForText.value) {
                lookingForWidth.value = lookingForText.value.offsetWidth + 20;
            }
            if (timelineText.value) {
                timelineWidth.value = timelineText.value.offsetWidth + 20;
            }
            if (nameText.value) {
                nameWidth.value = nameText.value.offsetWidth + 20;
            }
            if (businessText.value) {
                businessWidth.value = businessText.value.offsetWidth + 20;
            }
        });
    };

    // Watch all select values for changes
    watch([contactType, lookingFor, timeline, name, projectName], updateSelectWidths);

    onMounted(() => {
        nextTick(() => {
            gsap.registerPlugin(ScrollTrigger);
            headinganimation();
            updateSelectWidths();
            formAnimation();
        });
    });
</script>

<style scoped>
    #success-message {
        opacity: 0;
        visibility: hidden; /* Prevents flickering */
    }

    #success-message .char {
        opacity: 0;
    }

    .cf-turnstile iframe[title="Widget containing a Cloudflare security challenge"] {
        opacity: 0.0001;
    }
</style>
