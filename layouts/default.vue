<template>
	<Lenis :options="options" root>
		<div class="antialiased font-inter bg-[#151515] relative text-[#F1F1F1] selection:text-background-black selection:bg-white-color min-h-screen overflow-hidden">
			<!-- Loader Start -->
			<Loader v-if="isLoading" @animation-end="onLoadFinished" />
			<!-- Loader End -->

			<the-header />

			<main>
				<slot />
			</main>

			<div id="bottom-gradient" class="fixed bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-background-black to-transparent z-[5] pointer-events-none"></div>

			<the-footer />
		</div>
	</Lenis>
</template>

<script setup>
	import { gsap } from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	const options = {
		duration: 2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smooth: true,
		smoothTouch: false,
		direction: "vertical",
		gestureDirection: "vertical",
		lerp: 0.05,
	};

	const lenis = useLenis(({ scroll, velocity, progress, direction }) => {});

	const gradientTransitionAnimation = () => {
		gsap.registerPlugin(ScrollTrigger);
		const gradient = document.getElementById("bottom-gradient");

		gsap.from(gradient, {
			y: "100%",
			duration: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: gradient,
				start: "top 50%",
				end: "top 0%",
				scrub: true,
				toggleActions: "play reverse play reverse",
			},
		});
	};

	onMounted(() => {
		gradientTransitionAnimation();
	});

	const isLoading = useState("isLoading", () => true);

	const onLoadFinished = () => {
		isLoading.value = false;
	};
</script>
