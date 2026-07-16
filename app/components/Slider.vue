<template>
    <div
        ref="sliderRef"
        data-cascading-slider-wrap
        class="cascading-slider"
        aria-label="Featured projects"
        aria-roledescription="carousel"
    >
        <div class="cascading-slider__collection">
            <div data-cascading-viewport class="cascading-slider__list">
                <div
                    v-for="(project, index) in projects"
                    :key="project.src"
                    aria-roledescription="slide"
                    data-cascading-slide
                    role="group"
                    class="cascading-slider__item"
                >
                    <div class="cascading-slider__item-inner">
                        <div class="cascading-slider__item-bg">
                            <img
                                :src="project.src"
                                :alt="project.title"
                                :loading="index === 0 ? 'eager' : 'lazy'"
                                draggable="false"
                                class="cascading-slider__img aspect-[1.52/1]"
                                width="0"
                                height="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="slider navigation" class="cascading-slider__nav">
            <button
                data-cascading-slider-prev
                aria-label="previous slide"
                class="cascading-slider__button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="cascading-slider__button-arrow is--prev"
                >
                    <path
                        d="M14 19L21 12L14 5"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M21 12H2"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                    ></path>
                </svg>
            </button>
            <button
                data-cascading-slider-next
                aria-label="next slide"
                class="cascading-slider__button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="cascading-slider__button-arrow"
                >
                    <path
                        d="M14 19L21 12L14 5"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                    ></path>
                    <path
                        d="M21 12H2"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                    ></path>
                </svg>
            </button>
        </nav>
    </div>
</template>

<script setup>
import { gsap } from "gsap";

const sliderRef = ref(null);

const projects = [
    { src: "/images/home/work-slider/herba.webp", title: "Aaiwini" },
    { src: "/images/home/work-slider/calcium.webp", title: "Acme" },
    { src: "/images/home/work-slider/axcend.webp", title: "Axcend" },
    { src: "/images/home/work-slider/axis.webp", title: "Axis" },
    { src: "/images/home/work-slider/acme.webp", title: "Calcium" },
    { src: "/images/home/work-slider/goacars.webp", title: "Goacars" },
    { src: "/images/home/work-slider/aaiwini.webp", title: "Herba" },
    {
        src: "/images/home/work-slider/rottengrapes.webp",
        title: "Rottengrapes",
    },
    { src: "/images/home/work-slider/ultramotive.webp", title: "Ultramotive" },
];

let cleanupSlider = null;

function initCascadingSlider(wrapper) {
    const duration = 0.65;
    const ease = "power3.inOut";

    const breakpoints = [
        { maxWidth: 479, activeWidth: 0.78, siblingWidth: 0.08 },
        { maxWidth: 767, activeWidth: 0.7, siblingWidth: 0.1 },
        { maxWidth: 991, activeWidth: 0.6, siblingWidth: 0.1 },
        { maxWidth: Infinity, activeWidth: 0.6, siblingWidth: 0.13 },
    ];

    const viewport = wrapper.querySelector("[data-cascading-viewport]");
    const prevButton = wrapper.querySelector("[data-cascading-slider-prev]");
    const nextButton = wrapper.querySelector("[data-cascading-slider-next]");
    const slides = Array.from(
        viewport.querySelectorAll("[data-cascading-slide]"),
    );
    const removers = [];
    let totalSlides = slides.length;

    if (totalSlides === 0) return null;

    if (totalSlides < 9) {
        const originalSlides = slides.slice();
        while (slides.length < 9) {
            originalSlides.forEach(function (original) {
                const clone = original.cloneNode(true);
                clone.setAttribute("data-clone", "");
                viewport.appendChild(clone);
                slides.push(clone);
            });
        }
        totalSlides = slides.length;
    }

    let activeIndex = 0;
    let isAnimating = false;
    let slideWidth = 0;
    let slotCenters = {};
    let slotWidths = {};
    let resizeTimer;
    let animationUnlock;

    function addListener(target, event, handler) {
        target.addEventListener(event, handler);
        removers.push(function () {
            target.removeEventListener(event, handler);
        });
    }

    function readGap() {
        const raw = getComputedStyle(viewport).getPropertyValue("--gap").trim();
        if (!raw) return 0;
        const temp = document.createElement("div");
        temp.style.width = raw;
        temp.style.position = "absolute";
        temp.style.visibility = "hidden";
        viewport.appendChild(temp);
        const px = temp.offsetWidth;
        viewport.removeChild(temp);
        return px;
    }

    function getSettings() {
        const windowWidth = window.innerWidth;
        for (let i = 0; i < breakpoints.length; i++) {
            if (windowWidth <= breakpoints[i].maxWidth) return breakpoints[i];
        }
        return breakpoints[breakpoints.length - 1];
    }

    function getOffset(slideIndex, fromIndex) {
        if (fromIndex === undefined) fromIndex = activeIndex;
        let distance = slideIndex - fromIndex;
        const half = totalSlides / 2;
        if (distance > half) distance -= totalSlides;
        if (distance < -half) distance += totalSlides;
        return distance;
    }

    function measure() {
        const settings = getSettings();
        const viewportWidth = viewport.offsetWidth;
        const gap = readGap();

        const activeSlideWidth = viewportWidth * settings.activeWidth;
        const siblingSlideWidth = viewportWidth * settings.siblingWidth;
        const farSlideWidth = Math.max(
            0,
            (viewportWidth -
                activeSlideWidth -
                2 * siblingSlideWidth -
                4 * gap) /
                2,
        );

        slideWidth = activeSlideWidth;

        const visibleSlots = [
            { slot: -2, width: farSlideWidth },
            { slot: -1, width: siblingSlideWidth },
            { slot: 0, width: activeSlideWidth },
            { slot: 1, width: siblingSlideWidth },
            { slot: 2, width: farSlideWidth },
        ];

        let x = 0;
        visibleSlots.forEach(function (def, i) {
            slotCenters[String(def.slot)] = x + def.width / 2;
            slotWidths[String(def.slot)] = def.width;
            if (i < visibleSlots.length - 1) x += def.width + gap;
        });

        slotCenters["-3"] =
            slotCenters["-2"] - farSlideWidth / 2 - gap - farSlideWidth / 2;
        slotWidths["-3"] = farSlideWidth;
        slotCenters["3"] =
            slotCenters["2"] + farSlideWidth / 2 + gap + farSlideWidth / 2;
        slotWidths["3"] = farSlideWidth;

        slides.forEach(function (slide) {
            slide.style.width = slideWidth + "px";
        });
    }

    function getSlideProps(offset) {
        const clamped = Math.max(-3, Math.min(3, offset));
        const slotWidth = slotWidths[String(clamped)];
        const clipAmount = Math.max(0, (slideWidth - slotWidth) / 2);
        const translateX = slotCenters[String(clamped)] - slideWidth / 2;

        return {
            x: translateX,
            "--clip": clipAmount,
            zIndex: 10 - Math.abs(clamped),
        };
    }

    function layout(animate, previousIndex) {
        slides.forEach(function (slide, index) {
            const offset = getOffset(index);

            if (offset < -3 || offset > 3) {
                if (animate && previousIndex !== undefined) {
                    const previousOffset = getOffset(index, previousIndex);
                    if (previousOffset >= -2 && previousOffset <= 2) {
                        const exitSlot = previousOffset < 0 ? -3 : 3;
                        gsap.to(
                            slide,
                            Object.assign({}, getSlideProps(exitSlot), {
                                duration: duration,
                                ease: ease,
                                overwrite: true,
                            }),
                        );
                        return;
                    }
                }

                const parkSlot = offset < 0 ? -3 : 3;
                gsap.set(slide, getSlideProps(parkSlot));
                return;
            }

            const props = getSlideProps(offset);
            slide.setAttribute(
                "data-status",
                offset === 0 ? "active" : "inactive",
            );

            if (animate) {
                gsap.to(
                    slide,
                    Object.assign({}, props, {
                        duration: duration,
                        ease: ease,
                        overwrite: true,
                    }),
                );
            } else {
                gsap.set(slide, props);
            }
        });
    }

    function goTo(targetIndex) {
        const normalizedTarget =
            ((targetIndex % totalSlides) + totalSlides) % totalSlides;
        if (isAnimating || normalizedTarget === activeIndex) return;
        isAnimating = true;

        const previousIndex = activeIndex;
        const travelDirection =
            getOffset(normalizedTarget, previousIndex) > 0 ? 1 : -1;

        slides.forEach(function (slide, index) {
            const currentOffset = getOffset(index, previousIndex);
            const nextOffset = getOffset(index, normalizedTarget);
            const wasInRange = currentOffset >= -3 && currentOffset <= 3;
            const willBeVisible = nextOffset >= -2 && nextOffset <= 2;

            if (!wasInRange && willBeVisible) {
                const entrySlot = travelDirection > 0 ? 3 : -3;
                gsap.set(slide, getSlideProps(entrySlot));
            }

            const wasInvisible = Math.abs(currentOffset) >= 3;
            const willBeStaging = Math.abs(nextOffset) === 3;
            const crossesSides = currentOffset * nextOffset < 0;
            if (wasInvisible && willBeStaging && crossesSides) {
                gsap.set(slide, getSlideProps(nextOffset > 0 ? 3 : -3));
            }
        });

        activeIndex = normalizedTarget;
        layout(true, previousIndex);
        animationUnlock?.kill();
        animationUnlock = gsap.delayedCall(duration + 0.05, function () {
            isAnimating = false;
        });
    }

    if (prevButton) {
        addListener(prevButton, "click", function () {
            goTo(activeIndex - 1);
        });
    }

    if (nextButton) {
        addListener(nextButton, "click", function () {
            goTo(activeIndex + 1);
        });
    }

    slides.forEach(function (slide, index) {
        addListener(slide, "click", function () {
            if (index !== activeIndex) goTo(index);
        });
    });

    addListener(document, "keydown", function (event) {
        if (event.key === "ArrowLeft") goTo(activeIndex - 1);
        if (event.key === "ArrowRight") goTo(activeIndex + 1);
    });

    addListener(window, "resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            measure();
            layout(false);
        }, 100);
    });

    measure();
    layout(false);

    return function () {
        clearTimeout(resizeTimer);
        animationUnlock?.kill();
        gsap.killTweensOf(slides);
        removers.forEach(function (remove) {
            remove();
        });
    };
}

onMounted(() => {
    nextTick(() => {
        if (!sliderRef.value) return;
        cleanupSlider = initCascadingSlider(sliderRef.value);
    });
});

onBeforeUnmount(() => {
    cleanupSlider?.();
    cleanupSlider = null;
});
</script>

<style scoped>
[data-cascading-viewport] {
    --gap: 0.5vw;
}

[data-cascading-slide] {
    --clip: 0;
}

.cascading-slider {
    --slider-width: 92vw;
    --active-slide-ratio: 0.6;
    --slide-aspect: 1.55;
    width: 92vw;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.cascading-slider__collection {
    width: 100%;
}

.cascading-slider__list {
    width: 100%;
    height: calc(
        var(--slider-width) * var(--active-slide-ratio) / var(--slide-aspect)
    );
    position: relative;
    overflow: hidden;
}

.cascading-slider__item {
    color: #fff;
    cursor: pointer;
    will-change: transform, clip-path;
    clip-path: inset(0px calc(var(--clip) * 1px));
    -webkit-user-select: none;
    user-select: none;
    height: 100%;
    position: absolute;
    inset: 0% auto auto 0%;
}

.cascading-slider__item[data-status="active"] {
    cursor: default;
}

.cascading-slider__item-inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.cascading-slider__item-bg {
    z-index: 0;
    position: absolute;
    inset: 0%;
}

.cascading-slider__item-bg::after {
    content: "";
    background-color: rgb(0 0 0 / 0);
    backdrop-filter: blur(0) saturate(1) brightness(1);
    pointer-events: none;
    position: absolute;
    inset: 0%;
    transition:
        background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        backdrop-filter 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

[data-cascading-slide][data-status="inactive"]
    .cascading-slider__item-bg::after {
    background-color: rgb(210 235 255 / 0.18);
    backdrop-filter: blur(4px) saturate(0.78) brightness(0.96);
}

.cascading-slider__img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0%;
}

.cascading-slider__item-content {
    z-index: 2;
    background-image: linear-gradient(0deg, #0009, #0000);
    padding: 2vw 2vw 3vw 2.5vw;
    position: absolute;
    inset: auto 0% 0%;
}

.cascading-slider__h {
    opacity: 0;
    letter-spacing: -0.03em;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Anton, Arial, sans-serif;
    font-size: 2.75vw;
    font-weight: 400;
    line-height: 1;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translate(0, 0.25em);
    transition-delay: 0ms;
}

[data-cascading-slide][data-status="active"] .cascading-slider__h {
    transition-delay: 400ms;
    opacity: 1;
    transform: translate(0px, 0em);
}

.cascading-slider__nav {
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    margin-top: 4vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.cascading-slider__button {
    color: #000000;
    background-color: #ffffff;
    border-radius: 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 3vw;
    height: 3vw;
    padding: 0.75vw;
    display: flex;
    transition:
        transform 0.18s cubic-bezier(0.645, 0.045, 0.355, 1),
        background-color 0.18s cubic-bezier(0.645, 0.045, 0.355, 1),
        color 0.18s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.cascading-slider__button:hover {
    transform: translateY(-0.12vw);
}

.cascading-slider__button:active {
    transform: translateY(0) scale(0.88);
}

.cascading-slider__button:focus-visible {
    outline: 0.12vw solid #ffffff;
    outline-offset: 0.25vw;
}

@media (max-width: 767px) {
    [data-cascading-viewport] {
        --gap: 1.25vw;
    }

    .cascading-slider {
        --slider-width: 94vw;
        --active-slide-ratio: 0.7;
        width: var(--slider-width);
    }

    .cascading-slider__list {
        height: calc(
            var(--slider-width) * var(--active-slide-ratio) /
                var(--slide-aspect)
        );
    }

    .cascading-slider__nav {
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
        margin-top: 7vw;
    }

    .cascading-slider__button {
        width: 10vw;
        height: 10vw;
        padding: 2.75vw;
    }
}

@media (max-width: 479px) {
    .cascading-slider {
        --active-slide-ratio: 0.78;
    }
}

.cascading-slider__button-arrow.is--prev {
    transform: rotate(-180deg);
}
</style>
