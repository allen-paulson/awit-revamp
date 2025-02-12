<template>
    <div class="absolute left-0 top-0 h-full z-0 hidden md:block">
        <div ref="projectCursor" class="project-cursor fixed w-16 h-16 rounded-full bg-[#fffcfc] blur-3xl z-[0]"></div>
        <div ref="gridContainer" class="grid-container absolute z-[1] left-0 top-0 w-full">
            <div v-for="i in totalGrids" :key="i"></div>
        </div>
    </div>
</template>

<script setup>
    import { gsap } from "gsap";

    const gridContainer = ref(null);
    const totalGrids = ref(0);
    const projectCursor = ref(null);

    const handleMouseMove = (e) => {
        if (!projectCursor.value) return;

        gsap.to(projectCursor.value, {
            left: e.clientX,
            top: e.clientY,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const updateGridCount = () => {
        if (!gridContainer.value) return;

        // Get viewport width and height
        const viewportWidth = window.innerWidth;
        const viewportHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

        // Set container dimensions
        gridContainer.value.style.width = `${viewportWidth}px`;
        gridContainer.value.style.height = `${viewportHeight}px`;

        // Calculate grid size based on viewport width
        const gridSize = viewportWidth / 30; // 30 columns

        // Calculate number of rows needed
        const rowCount = Math.ceil(viewportHeight / gridSize);

        // Update total grids
        totalGrids.value = rowCount * 30;

        // Force grid container to update its layout
        gridContainer.value.style.gridTemplateRows = `repeat(${rowCount}, 1fr)`;
    };

    // Update grid on content changes
    const observeContentChanges = () => {
        const observer = new ResizeObserver(() => {
            updateGridCount();
        });

        observer.observe(document.documentElement);
        return observer;
    };

    onMounted(() => {
        nextTick(() => {
            updateGridCount();
            const observer = observeContentChanges();

            // Clean up observer on component unmount
            onUnmounted(() => {
                observer.disconnect();
            });
        });

        window.addEventListener("resize", updateGridCount);
        window.addEventListener("mousemove", handleMouseMove);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateGridCount);
        window.removeEventListener("mousemove", handleMouseMove);
    });

    watchEffect(updateGridCount);
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(30, 1fr);
        gap: 0.75px;
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
    }

    .grid-container div {
        aspect-ratio: 1;
        background-color: #151515;
        border-radius: 5px;
    }

    .project-cursor {
        pointer-events: none;
        transform: translate(-50%, -50%) !important;
        transition: opacity 0.3s ease;
        will-change: transform;
    }
</style>
