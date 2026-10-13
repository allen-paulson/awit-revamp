<template>
    <section
        ref="rootRef"
        class="project-cube"
        aria-label="Selected projects"
    >
        <div class="project-cube__stage">
            <div ref="cubeRef" class="project-cube__cube">
                <div
                    v-for="face in faces"
                    :key="face.id"
                    class="project-cube__face"
                    :data-face="face.id"
                    :data-layer="0"
                    :style="{ transform: face.transform }"
                >
                    <img
                        v-for="(project, layer) in face.projects"
                        :key="project.id"
                        class="project-cube__img"
                        :data-layer-index="layer"
                        :src="project.image"
                        :alt="project.title"
                        draggable="false"
                        decoding="async"
                        width="800"
                        height="800"
                    />
                </div>
            </div>
        </div>

        <div ref="hudRef" class="project-cube__hud" aria-hidden="true">
            <div ref="hudServicesRef" class="project-cube__services"></div>
            <div class="project-cube__bottom">
                <div ref="hudTitleRef" class="project-cube__title"></div>
            </div>
        </div>

        <!-- Reduced-motion fallback: plain list, no pinning or rotation -->
        <ul class="project-cube__fallback">
            <li v-for="project in cubeProjects" :key="project.id">
                <img :src="project.image" :alt="project.title" loading="lazy" />
                <span>{{ project.title }} — {{ project.category }}</span>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cubeProjects } from "~/data/cubeProjects";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------------------------------
 * Cube geometry — six face identities and their CSS transforms.
 * Face size comes from the --s custom property (see styles).
 * ------------------------------------------------------------- */
const FACE_TRANSFORMS = {
    front: "rotateY(0deg) translateZ(calc(var(--s) / 2))",
    right: "rotateY(90deg) translateZ(calc(var(--s) / 2))",
    back: "rotateY(180deg) translateZ(calc(var(--s) / 2))",
    left: "rotateY(-90deg) translateZ(calc(var(--s) / 2))",
    top: "rotateX(90deg) translateZ(calc(var(--s) / 2))",
    bottom: "rotateX(-90deg) translateZ(calc(var(--s) / 2))",
};

/* ---------------------------------------------------------------
 * Choreography — one entry per project, in presentation order.
 * `face`   : physical face that holds it
 * `rx, ry` : cube orientation (degrees) that brings that face to front.
 *            Always pure single-axis states, and angles keep accumulating in
 *            the same direction so every move is a short 90° turn.
 *   front→0/0   right→ry-90   back→ry-180   left→ry-270
 *   top→rx-90   bottom→rx-270 (continuing the X tumble)   front again→rx-360
 * Projects 7 and 8 reuse the front/right faces of projects 1 and 2.
 * ------------------------------------------------------------- */
const SEQUENCE = [
    { face: "front", rx: 0, ry: 0 },
    { face: "right", rx: 0, ry: -90 },
    { face: "back", rx: 0, ry: -180 },
    { face: "left", rx: 0, ry: -270 },
    { face: "top", rx: -90, ry: -360 },
    { face: "bottom", rx: -270, ry: -360 },
    { face: "front", rx: -360, ry: -360 },
    { face: "right", rx: -360, ry: -450 },
];

// Content swap happens in the middle of the hold on this project (0-based).
// At that point faces of projects 1 & 2 (front/right) are facing away
// (back-face culled), so the swap is never visible.
const SWAP_DURING = 2;

const TIMING = {
        hold: 1.2, // reading period per project
    move: 1.3, // rotation between projects
    tail: 0.4, // settle before the pin releases
    scrollPerUnit: 0.42, // viewport heights of scroll per timeline second
};
const ENTRANCE = { startAt: 0.4, pinVh: 1.1, scale: 0, rx: 150, ry: -720, rz: -60 };

/* Face -> projects it hosts (layer 0 first, replacement second). */
const faces = Object.keys(FACE_TRANSFORMS).map((id) => ({
    id,
    transform: FACE_TRANSFORMS[id],
    projects: SEQUENCE.map((s, i) => (s.face === id ? cubeProjects[i] : null)).filter(Boolean),
}));

const rootRef = ref(null);
const cubeRef = ref(null);
const hudRef = ref(null);
const hudTitleRef = ref(null);
const hudServicesRef = ref(null);

let mm = null;
let onLoad = null;
let hudTween = null;
let stopFx = null;

onMounted(() => {
    const root = rootRef.value;
    const cube = cubeRef.value;
    if (!root || !cube) return;

    mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const swapFaces = Array.from(root.querySelectorAll(".project-cube__face")).filter(
            (el) => el.querySelectorAll("img").length > 1,
        );
        const total = SEQUENCE.length;
        stopFx = useFaceShader(root, ".project-cube__face");

        // Initial state, applied before the first scrubbed frame.
        // GSAP's `scale` doesn't scale Z, which stretches a preserve-3d cube,
        // so the pose lives in a proxy and is written as one uniform scale3d.
        const pose = {
            s: ENTRANCE.scale,
            rx: ENTRANCE.rx,
            ry: ENTRANCE.ry,
            rz: ENTRANCE.rz,
        };
        const applyPose = () => {
            cube.style.transform = `scale3d(${pose.s},${pose.s},${pose.s}) rotateZ(${pose.rz}deg) rotateY(${pose.ry}deg) rotateX(${pose.rx}deg)`;
        };
        applyPose();
        swapFaces.forEach((f) => (f.dataset.layer = "0"));

        // Entrance: runs while the section scrolls into view (before the pin),
        // so the cube is already grown and settled when the pin engages.
        const entrance = gsap.timeline({
            scrollTrigger: {
                trigger: root,
                start: `top ${ENTRANCE.startAt * 100}%`,
                // runs through the approach AND the first part of the pin
                end: () => "+=" + Math.round((ENTRANCE.startAt + ENTRANCE.pinVh) * window.innerHeight),
                scrub: 1.2,
                invalidateOnRefresh: true,
            },
            onUpdate: applyPose,
        });
        entrance.to(pose, { s: 1, duration: 1, ease: "power2.out" }, 0);
        entrance.to(
            pose,
            { rx: SEQUENCE[0].rx, ry: SEQUENCE[0].ry, rz: 0, duration: 1, ease: "power2.out" },
            0,
        );

        const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
                trigger: root,
                start: "top top",
                end: () => "+=" + Math.round(tl.duration() * TIMING.scrollPerUnit * window.innerHeight),
                pin: true,
                scrub: 1.2,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });
        // Pinned timeline starts with a pad while the entrance finishes growing.
        const pad0 = ENTRANCE.pinVh / TIMING.scrollPerUnit;
        tl.to({}, { duration: pad0 });

        // Project timeline: record when each hold starts so we can drive the
        // HUD and the face swap from timeline time (works forward & backward).
        const holdStart = [];
        const switchAt = [pad0 - 0.2]; // timeline time at which HUD shows project i
        holdStart.push(tl.duration());
        tl.to({}, { duration: TIMING.hold });

        for (let i = 1; i < total; i++) {
            const moveStart = tl.duration();
            tl.fromTo(
                pose,
                { rx: SEQUENCE[i - 1].rx, ry: SEQUENCE[i - 1].ry },
                {
                    rx: SEQUENCE[i].rx,
                    ry: SEQUENCE[i].ry,
                    duration: TIMING.move,
                    immediateRender: false,
                },
            );
            switchAt.push(moveStart + TIMING.move / 2);
            holdStart.push(tl.duration());
            tl.to({}, { duration: TIMING.hold });
        }
        tl.to({}, { duration: TIMING.tail });

        const swapTime = holdStart[SWAP_DURING] + TIMING.hold / 2;
        let swapped = false;
        let shown = -2;
        

        // Text: every line sits in an overflow mask; whole lines slide out/in.
        const lineGroups = () => [
            [hudTitleRef.value, (i) => [cubeProjects[i].title]],
            [hudServicesRef.value, (i) => cubeProjects[i].services ?? []],
        ];
        const renderLines = (i) => {
            lineGroups().forEach(([el, getLines]) => {
                el.replaceChildren(
                    ...(i < 0 ? [] : getLines(i)).map((text) => {
                        const ln = document.createElement("span");
                        ln.className = "ln";
                        const inner = document.createElement("span");
                        inner.className = "ln__in";
                        inner.textContent = text;
                        ln.append(inner);
                        return ln;
                    }),
                );
            });
        };
        const showProject = (i, dir) => {
            shown = i;
            hudTween?.kill();
            const old = Array.from(hudRef.value.querySelectorAll(".ln__in"));
            const enter = () => {
                renderLines(i);
                const ins = Array.from(hudRef.value.querySelectorAll(".ln__in"));
                hudTween = gsap.fromTo(
                    ins,
                    { yPercent: 115 * dir },
                    { yPercent: 0, duration: 0.6, ease: "expo.out", stagger: 0.045 },
                );
            };
            if (!old.length) enter();
            else if (i < 0) {
                hudTween = gsap.to(old, { yPercent: -115 * dir, duration: 0.22, ease: "power3.in", stagger: 0.02, onComplete: () => renderLines(-1) });
            } else {
                hudTween = gsap.to(old, { yPercent: -115 * dir, duration: 0.22, ease: "power3.in", stagger: 0.02, onComplete: enter });
            }
        };

        const sync = () => {
            applyPose();
            const t = tl.time();
            const shouldSwap = t >= swapTime;
            if (shouldSwap !== swapped) {
                swapped = shouldSwap;
                const layer = swapped ? "1" : "0";
                swapFaces.forEach((f) => (f.dataset.layer = layer));
            }
            let idx = -1;
            for (let i = 0; i < switchAt.length; i++) if (t >= switchAt[i]) idx = i;
            if (idx !== shown) showProject(idx, idx > shown ? 1 : -1);
        };
        tl.eventCallback("onUpdate", sync);
        sync();

        // Re-measure once images/fonts have settled.
        onLoad = () => ScrollTrigger.refresh();
        if (document.readyState === "complete") requestAnimationFrame(onLoad);
        else window.addEventListener("load", onLoad, { once: true });

        return () => {
            window.removeEventListener("load", onLoad);
            stopFx?.();
            stopFx = null;
            hudTween?.kill();
            tl.scrollTrigger?.kill();
            tl.kill();
            entrance.scrollTrigger?.kill();
            entrance.kill();
            cube.style.transform = "";
            gsap.set(hudRef.value, { clearProps: "all" });
        };
    });
});

onBeforeUnmount(() => {
    if (onLoad) window.removeEventListener("load", onLoad);
    mm?.revert(); // kills timeline + ScrollTrigger, runs cleanup above
    mm = null;
});
</script>

<style scoped>
.project-cube {
    --s: min(60vh, 62vw, 620px);
    --s: min(60svh, 62vw, 620px);
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100svh;
    overflow: hidden;
    color: #f1f1f1;
    isolation: isolate;
}

.project-cube__stage {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    perspective: calc(var(--s) * 3.4);
    perspective-origin: 50% 50%;
}

.project-cube__cube {
    position: relative;
    width: var(--s);
    height: var(--s);
    transform-style: preserve-3d;
    will-change: transform;
}

.project-cube__face {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: #0e0e0e;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.project-cube__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
}

/* Faces hosting two projects: show only the active layer.
   visibility keeps both images decoded, so the swap is a pure paint toggle. */
.project-cube__face[data-layer="0"] .project-cube__img[data-layer-index="1"],
.project-cube__face[data-layer="1"] .project-cube__img[data-layer-index="0"] {
    visibility: hidden;
}

.project-cube__hud {
    position: absolute;
    inset: 0;
    z-index: 2;
    padding: 0 clamp(16px, 3vw, 48px);
    pointer-events: none;
    text-transform: uppercase;
}

.project-cube__services {
    position: absolute;
    left: clamp(16px, 3vw, 48px);
    top: 50%;
    transform: translateY(-50%);
    font-size: clamp(10px, 0.85vw, 15px);
    line-height: 1;
    letter-spacing: 0.02em;
    color: rgb(255 255 255 / 0.62);
}

.project-cube__bottom {
    position: absolute;
    left: clamp(16px, 3vw, 48px);
    right: clamp(16px, 3vw, 48px);
    bottom: clamp(14px, 3.5vh, 40px);
    display: flex;
    justify-content: center;
}

.project-cube__title {
    font-family: Anton, Arial, sans-serif;
    font-size: clamp(36px, min(8vw, 11vh), 150px);
    letter-spacing: -0.01em;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
}

:deep(.ln) {
    display: block;
    overflow: hidden;
    padding-bottom: 0.08em;
    margin-bottom: -0.08em;
}

:deep(.ln__in) {
    display: block;
    will-change: transform;
}

@media (max-width: 767px) {
    .project-cube__services {
        display: none;
    }
}

.project-cube__fallback {
    display: none;
}

@media (prefers-reduced-motion: reduce) {
    .project-cube {
        height: auto;
        overflow: visible;
    }

    .project-cube__stage,
    .project-cube__hud {
        display: none;
    }

    .project-cube__fallback {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
        gap: 16px;
        padding: 0 clamp(16px, 3vw, 48px);
        list-style: none;
    }

    .project-cube__fallback img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }

    .project-cube__fallback span {
        display: block;
        margin-top: 8px;
        font-size: 14px;
    }
}
</style>
