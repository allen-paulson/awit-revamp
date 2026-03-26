<template>
    <div
        class="aspect-square border border-[#5C5C5C] absolute w-[2vw] md:w-[.45vw] bg-background-black z-2"
        :class="{
            'top-0 right-0 translate-x-1/2 -translate-y-1/2':
                direction === 'tr',
            'bottom-0 right-0 translate-x-1/2 translate-y-1/2':
                direction === 'br',
            'bottom-0 left-0 -translate-x-1/2 translate-y-1/2':
                direction === 'bl',
            'top-0 left-0 -translate-x-1/2 -translate-y-1/2':
                direction === 'tl',
        }"
    ></div>
</template>

<script setup>
defineProps({
    direction: {
        type: String,
        validator: (value) => ["tr", "tl", "br", "bl"].includes(value),
        default: "",
    },
});
</script>
