<template>
    <section class="section relative overflow-hidden md:pb-[6vw]">
        <div class="relative z-[2]">
            <div class="section-heading px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
                <!-- Desktop View -->
                <div class="hidden md:block">
                    <the-breadcrumbs number="03" title="WHY YOU NEED US" />
                    <div class="flex items-end gap-[3vw]">
                        <div class="pl-[4.75vw] pt-[2vw] relative w-max">
                            <NuxtImg width="309" height="315" class="heading-img absolute bottom-0 w-[6.5vw] left-1/4 translate-x-[70%] translate-y-[10%]" src="/images/home/eye.png" alt="Eye Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading font-anton flex flex-col text105px-desktop -tracking-[.1vw] leading-[1.12]">
                                <span class="overflow-hidden">HERE’S OUR</span>
                                <span class="overflow-hidden">TOP 5 <span class="inline-block w-[5vw]"></span> BEST WORKS</span>
                            </h2>
                        </div>
                        <div class="pb-[1vw]">
                            <the-button text="SEE ALL OF THEM" to="/" />
                        </div>
                    </div>
                </div>

                <!-- Mobile View -->
                <div class="md:hidden flex flex-col">
                    <div class="">
                        <div class="oveflow-hidden pl-[22vw]">
                            <the-breadcrumbs number="02" title=" WHY YOU NEED US" />
                        </div>
                        <div class="pt-[4vw] md:pt-[2vw] relative w-max">
                            <NuxtImg width="309" height="315" class="heading-img-mobile absolute bottom-0 w-[18vw] md:w-[6.5vw] left-1/4 translate-x-[60%] md:translate-x-[70%] -translate-y-[70%] md:translate-y-[10%]" src="/images/home/eye.png" alt="Eye Image" />
                            <h2 v-split-text="{ splitBy: 'words, char' }" class="heading-mobile font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden">
                                <span class="overflow-hidden">HERE’S OUR </span>
                                <span class="overflow-hidden">TOP 5 <span class="w-[13vw] inline-block"></span> BEST </span>
                                <span class="overflow-hidden">WORKS</span>
                            </h2>
                        </div>
                    </div>
                    <div class="flex justify-end -mt-[10vw]">
                        <the-button text="SEE ALL OF THEM" to="/" />
                    </div>
                </div>
            </div>

            <div class="relative mt-[16vw] md:mt-[3vw]">
                <div v-if="!projects">No projects...</div>
                <div v-else>
                    <div class="hidden md:grid gap-[10vw]">
                        <div v-for="(project, index) in projects" :key="index">
                            <ProjectCard :project="project" :index="index" />
                        </div>
                    </div>

                    <!-- Mobile View -->
                    <div class="grid gap-[15vw] md:hidden px-[12vw]">
                        <div v-for="(project, index) in projects" :key="index">
                            <ProjectCardPenta :project="project" :index="index" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const emit = defineEmits(["projects-loaded"]);
    const projects = ref([]);

    onMounted(async () => {
        projects.value = await $fetch("/data/projects.json");
        await nextTick();
        emit("projects-loaded");
    });
</script>
