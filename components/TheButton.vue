<template>
    <NuxtLink class="rounded-full bg-white-color text-background-black inline-block py-[2.5vw] md:py-[.7vw] pl-[4vw] md:pl-[1vw] relative group" :to="to">
        <div class="relative w-full pr-[12vw] md:pr-[4vw]">
            <p class="text15px-desktop text14px-mobile font-semibold">{{ text }}</p>
            <div class="rounded-full bg-background-black aspect-square w-[6.5vw] md:w-[2.05vw] absolute right-[1vw] md:right-[.2vw] flex items-center justify-center top-1/2 -translate-y-1/2 md:scale-[30%] md:group-hover:scale-100 duration-500 will-change-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="13.216" height="13.216" class="w-[50%] text-[#F1F1F1] duration-500 md:group-hover:opacity-100 md:opacity-0" viewBox="0 0 13.216 13.216">
                    <path id="_9ca54370bbdf94fe6f5a6be762b92d08" data-name="9ca54370bbdf94fe6f5a6be762b92d08" d="M12.4,8.927a.5.5,0,0,0,0-.721L9.251,5.149a.537.537,0,0,0-.743,0,.5.5,0,0,0,0,.721l2.255,2.188H1.525a.51.51,0,1,0,0,1.019h9.238L8.508,11.264a.5.5,0,0,0,0,.721.537.537,0,0,0,.743,0Z" transform="translate(-4.243 5.343) rotate(-45)" fill="currentColor" />
                </svg>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    // props
    const props = defineProps({
        text: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    });
</script>
