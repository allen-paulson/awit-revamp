<template>
    <div class="antialiased font-inter bg-[#151515] relative text-[#F1F1F1] selection:text-background-black selection:bg-white-color min-h-screen overflow-hidden">
        <!-- Loader Start -->
        <Loader v-if="isLoading" @animation-end="onLoadFinished" />>
        <!-- Loader End -->

        <the-header />

        <NuxtLink to="/" target="_blank" class="fixed bottom-[5vw] right-[5vw] md:bottom-[2vw] md:right-[2vw] z-[4] flex group overflow-hidden" aria-label="Whatsapp Link">
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

        <main>
            <slot />
        </main>

        <div class="fixed bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-background-black to-transparent z-[5] pointer-events-none"></div>

        <the-footer />
    </div>
</template>

<script setup>
    const isLoading = useState("isLoading", () => true);

    const onLoadFinished = () => {
        isLoading.value = false;
    };
</script>
