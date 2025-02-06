<template>
    <div class="antialiased font-inter bg-[#1c1c1c] relative text-[#F1F1F1] selection:text-background-black selection:bg-white-color min-h-screen overflow-hidden">
        <the-header />

        <main>
            <slot />
        </main>

        <the-footer />
    </div>
</template>
