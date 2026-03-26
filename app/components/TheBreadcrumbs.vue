<template>
    <div class="breadcrumbs flex gap-[.5vw] text17px-desktop text14px-mobile uppercase">
        <span>{{ number }}</span>
        <span>/</span>
        <span>{{ title }}</span>
    </div>
</template>

<script setup>
    //props for number and text
    defineProps({
        number: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    });
</script>