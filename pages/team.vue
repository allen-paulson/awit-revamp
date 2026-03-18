<template>
	<div class="mt-[27vw] md:mt-[8vw]">
		<!-- Team Section Start -->
		<section class="relative text-[#F1F1F1]">
			<div class="px-[5vw] md:px-[3vw] pt-[35vw] md:pt-0 pb-[5vw] relative">
				<!-- Desktop View -->
				<h1 v-split-text="{ splitBy: 'words, char' }"
					class="main-heading text262px-desktop font-anton -tracking-[.01vw] leading-[1.12] -space-y-[2.25vw] hidden md:flex flex-col justify-center">
					<span class="overflow-hidden">A DESIGN AGENCY</span>
					<span class="overflow-hidden">BASED IN</span>
					<div class="!inline-flex justify-end">
						<span class="overflow-hidden">BENGALURU</span>
					</div>
				</h1>

				<!-- Mobile View -->
				<h1 v-split-text="{ splitBy: 'words, char' }"
					class="main-heading-mobile text76px-mobile font-anton -tracking-[.01vw] leading-[1.12] -space-y-[2.25vw] md:hidden flex flex-col justify-center">
					<span class="overflow-hidden">A DESIGN</span>
					<span class="overflow-hidden">AGENCY</span>
					<span class="overflow-hidden">BASED IN</span>
					<span class="overflow-hidden text-[21vw]">BENGALURU</span>
				</h1>

				<div class="flex justify-end md:mt-0 mt-[1vw]">
					<div
						class="subtitle text24px-desktop font-inter font-bold flex items-center gap-[1vw] md:gap-[.5vw]">
						( KARNATAKA, INDIA <span>
							<NuxtImg width="93" height="69" class="w-[6vw] md:w-[2vw]" src="/images/about/india.webp"
								alt="Indian flag image" />
						</span> )
					</div>
				</div>

				<div class="main-image md:absolute md:bottom-[7vw] md:left-[3vw] w-[70%] md:w-[23%] md:mt-0 mt-[25vw]">
					<NuxtImg width="926" height="526" class="w-full h-auto" src="/images/about/table.webp"
						alt="Table image" />
				</div>
			</div>
		</section>
		<!-- Team Section End -->

		<!-- Border Section Start -->
		<div class="px-[5vw] md:px-[1.5vw]">
			<div class="border-t-[.5px] border-[#FFFFFF]"></div>
		</div>
		<!-- Border Section End -->

		

		<!-- Our Team Section Start -->
		<section class="relative overflow-hidden pb-[20vw] md:pb-[3vw]">
			<div class="relative z-[2]">
				<div class="section-heading-work px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
					<!-- Desktop View -->
					<div class="hidden md:block">
						<the-breadcrumbs number="01" title="A LI'L About US" />
						<div class="flex justify-center items-end gap-[3vw]">
							<div class="pt-[2vw] relative w-max">
								<NuxtImg width="518" height="518" src="/images/about/rocket.webp"
									alt="Team Rocket Image"
									class="work-heading-img absolute left-1/2 top-1/2 w-[13vw] translate-x-[50%] -translate-y-[40%] z-[1]" />
								<h1 v-split-text="{ splitBy: 'words, char' }"
									class="work-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center z-[0]">
									<span class="overflow-hidden">MEET OUR </span>
									<span id="heading-space" class="inline-block w-[12vw]"></span>
									<span class="overflow-hidden">TEAM </span>
								</h1>
							</div>
						</div>
					</div>

					<!-- Mobile View -->
					<div class="md:hidden flex flex-col">
						<div>
							<div class="overflow-hidden pl-[10vw]">
								<the-breadcrumbs number="01" title=" A LI'L ABOUT US" />
							</div>
							<div class="pt-[4vw] md:pt-[2vw] relative">
								<NuxtImg
									class="work-heading-img-mobile absolute w-[28vw] md:w-[6.5vw] right-0 bottom-0 z-[1]"
									width="518" height="518" src="/images/about/rocket.webp" alt="Team Rocket Image" />
								<h2 v-split-text="{ splitBy: 'words, char' }"
									class="work-heading-mobile font-anton text-[19vw] -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden w-full">
									<span class="overflow-hidden">MEET OUR </span>
									<span class="overflow-hidden">TEAM </span>
								</h2>
							</div>
						</div>
					</div>
				</div>
				
				<!-- tanvi: edit from here -->
				<div class="content-section">
					<!-- desktopppp -->
					<div class="grid grid-cols-3 grid-rows-6 gap-x-0 gap-y-0 ml-[9.15vw] mr-[6.8vw] max-md:hidden">
						<div v-for="item in team" :key="item.name || item.image"
							:style="{ gridRow: item.row, gridColumn: item.col }" :class="[
								'flex justify-center items-center py-[3vw] relative',
								item.border?.top ? 'border-t-[0.05vw] border-[#5C5C5C]' : '',
								item.border?.bottom ? 'border-b-[0.05vw] border-[#5C5C5C]' : '',
								item.border?.left ? 'border-l-[0.05vw] border-[#5C5C5C]' : '',
								item.border?.right ? 'border-r-[0.05vw] border-[#5C5C5C]' : ''
							]">
							<small-boxes v-for="dir in item.boxes" :key="dir" :direction="dir" />
							<!-- MEMBER -->
							<a v-if="item.type === 'member'" :href="item.link" target="_blank" rel="noopener"
								class="w-[19.92vw] flex flex-col items-start cursor-pointer">
								<div class="relative w-full h-[23.4375vw] flex justify-center rounded-[0.1vw]"
									:style="{ backgroundColor: item.bg_color }">
									<img :src="getImage(item)" :class="[
										'absolute object-contain',
										item.name === 'Koko' ? 'top-0' : 'bottom-0',
									]" @mouseenter="setHover(item)" @mouseleave="removeHover" @error="handleError($event, item)" />
								</div>
								<div class="flex flex-col items-start mt-[1.5vw] gap-[0.78vw]" style="width:stretch;">
									<div class="flex justify-between items-end w-full">
										<p class="font-anton text-[2.8125vw] text-white leading-none w-max">
											{{ item.name }}
										</p>
										<img v-if="item.sticker"
											:src="{ dev: '/images/stickers/code.png', uiux: '/images/stickers/pencil.png', bone: '/images/stickers/bone.png' }[item.sticker]"
											class="w-[3.15039vw] object-contain flex-shrink-0" />
									</div>
									<p
										class="font-inter text-[1.25vw] text-white leading-[1.875vw] tracking-[-0.0125vw] w-max">
										{{ item.role }}
									</p>
								</div>
							</a>
							<!-- STICKER -->
							<div v-else-if="item.type === 'sticker'" class="flex items-center justify-center h-full">
								<img :src="item.image" :style="{ width: item.size || '6vw' }" class="object-contain" />
							</div>
						</div>
					</div>
				</div>
				<!-- mobileee -->
				<div class="grid grid-cols-1 auto-rows-auto mx-[4.6vw] my-[10vw] md:hidden">
					<div v-for="(item, index) in team.filter(i => i.type === 'member')" :key="item.name" :class="[
						'flex gap-[9.8vw] items-center pt-[7vw] pb-[2.74vw] pl-[0.5vw]',
						index !== team.filter(i => i.type === 'member').length - 1 ? 'border-b border-white/30' : ''
					]">
						<!-- IMAGE -->
						<div class="  w-[25.34vw] h-[24.65vw] rounded-[1.5vw] overflow-hidden flex items-end justify-center"
							:style="{ backgroundColor: item.bg_color }">
							<img :src="item.image" :class="[ 'w-full h-full object-cover', item.name === 'Koko' ? 'object-top' : 'object-[center_-20%]' ]" />
						</div>
						<!-- TEXT BLOCK -->
						<div class=" flex flex-col gap-[1.4vw] flex-1">
							<!-- NAME + STICKER -->
							<div class="flex items-start justify-between">
								<a :href="item.link" target="_blank"
									class="font-anton text-[#F1F1F1] text-[7.442vw] tracking-[-0.223vw]">
									{{ item.name }}
								</a>
								<img v-if="item.sticker" :src="{
									dev: '/images/stickers/code.png',
									uiux: '/images/stickers/pencil_2.png',
									bone: '/images/stickers/bone.png'
								}[item.sticker]" class="w-[7vw] relative -top-[4vw]" />
							</div>
							<!-- ROLE -->
							<p
								class="font-inter italic font-light text-[#F1F1F1] text-[4.5vw] leading-[5.395vw] tracking-[-0.046vw] text-left">
								{{ item.role }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Our Team Section End -->


		<!-- Border Section Start -->
		<div class="px-[5vw] md:px-[1.5vw]">
			<div class="border-t-[.5px] border-[#FFFFFF]"></div>
		</div>
		<!-- Border Section End -->

		<!-- Our Gallery Section Start -->
		<section class="relative overflow-hidden pb-[20vw] md:pb-[6vw]">
			<div class="relative z-[2]">
				<div class="section-heading-work px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
					<!-- Desktop View -->
					<div class="hidden md:block">
						<the-breadcrumbs number="02" title="BEHIND THE SCENES OF WORK" />
						<div class="flex justify-center items-end gap-[3vw]">
							<div class="pt-[2vw] relative w-max">
								<NuxtImg width="348" height="540" src="/images/about/camera.webp" alt="Camera Image"
									class="work-heading-img absolute left-[53.5%] top-1/2 w-[9vw] translate-x-[100%] -translate-y-[45%] z-[1]" />
								<h1 v-split-text="{ splitBy: 'words, char' }"
									class="work-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center z-[0]">
									<span class="overflow-hidden">DAY IN LIFE </span>
									<span id="heading-space" class="inline-block w-[7vw]"></span>
									<span class="overflow-hidden">AWIT </span>
								</h1>
							</div>
						</div>
					</div>

					<!-- Mobile View -->
					<div class="md:hidden flex flex-col">
						<div>
							<div class="overflow-hidden pl-[10vw]">
								<the-breadcrumbs number="02" title=" BEHIND THE SCENES OF WORK" />
							</div>
							<div class="pt-[4vw] md:pt-[2vw] relative">
								<NuxtImg
									class="work-heading-img-mobile absolute top-0 right-0 w-[15vw] translate-y-1 translate-x-2 z-[1]"
									width="348" height="540" src="/images/about/camera.webp" alt="Camera Image" />
								<h2 v-split-text="{ splitBy: 'words, char' }"
									class="work-heading-mobile font-anton text-[19vw] -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden w-full">
									<span class="overflow-hidden">DAY IN LIFE </span>
									<span class="overflow-hidden">ARTWORKSIT </span>
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div class="gallery-content-section mt-[8vw] md:mt-0">
					<div class="px-[5vw] md:px-[4vw] py-[5vw]">
						<div class="grid grid-cols-3 md:grid-cols-4 text-white gap-[1.5vw] md:gap-[.75vw]">
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-3.webp" loading="lazy"
									alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="hidden md:flex icon-container aspect-square items-center justify-center">
								<div class="w-[30%]">
									<NuxtImg width="130" height="130" src="/images/about/awit.svg" loading="lazy"
										alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-6.webp" loading="lazy"
									alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="hidden md:flex icon-container aspect-square items-center justify-center">
								<div class="w-[25.5%]">
									<NuxtImg width="238" height="292" src="/images/about/thumb.webp" loading="lazy" alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="hidden md:flex icon-container aspect-square items-center justify-center">
								<div class="w-[25%]">
									<NuxtImg width="326" height="300" src="/images/about/pencil.webp" loading="lazy"
										alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-4.webp" loading="lazy"
									alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="hidden md:flex icon-container aspect-square items-center justify-center">
								<div class="w-[35%]">
									<NuxtImg width="481" height="366" src="/images/about/laptop.webp" loading="lazy"
										alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-1.webp" loading="lazy"
									alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-5.webp" loading="lazy"
									alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="hidden md:flex icon-container aspect-square items-center justify-center">
								<div class="w-[35%]">
									<NuxtImg width="400" src="/images/about/dino.png" loading="lazy"
										alt="AWIT" class="w-full h-full" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-2.webp" loading="lazy"
									alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="hidden md:flex icon-container aspect-square items-center justify-center">
								<div class="w-[35%]">
									<NuxtImg width="481" height="366" src="/images/about/cup.png" loading="lazy"
										alt="AWIT" class="w-full h-auto" />
								</div>
							</div>

							<!-- <div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-4.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="icon-container aspect-square flex items-center justify-center">
								<div class="w-[25.5%]">
									<NuxtImg width="238" height="292" src="/images/about/thumb.webp" loading="lazy" alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-5.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Our Gallery Section End -->

		<!-- Contact Section Start -->
		<LazyContactForm />
		<!-- Contact Section End -->
	</div>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const team = ref([]);
const config = useRuntimeConfig();

import { ref } from "vue"

const hoveredMember = ref(null)

function getImage(item) {
	if (hoveredMember.value === item.name) {
		return `/images/team-members-overlay/${item.name.toLowerCase()}.png`
	}
	return item.image
}

function setHover(item) {
	hoveredMember.value = item.name
}

function removeHover() {
	hoveredMember.value = null
}

function handleError(e, item) {
	e.target.src = item.image
}

onMounted(async () => {
	team.value = await $fetch("/data/team-members.json");
})


const refreshScrollTrigger = () => {
	ScrollTrigger.refresh();
};

const animations = () => {
	const tl = gsap.timeline();
	const isMobile = window.innerWidth < 768;

	const headingWords = document.querySelectorAll(isMobile ? ".main-heading-mobile .char" : ".main-heading .char");
	const subtitle = document.querySelector(".subtitle");
	const image = document.querySelector(".main-image");

	tl.fromTo(
		headingWords,
		{
			y: "100%",
			opacity: 0,
		},
		{
			y: "0%",
			opacity: 1,
			stagger: 0.05,
			duration: 0.3,
			ease: "power1.inout",
		}
	);

	tl.fromTo(
		subtitle,
		{
			y: "100%",
			opacity: 0,
		},
		{
			y: "0%",
			opacity: 1,
			duration: 0.3,
			ease: "power2.out",
		},
		"-=0.2"
	);

	tl.fromTo(
		image,
		{
			scale: 0,
			opacity: 0,
		},
		{
			scale: 1,
			opacity: 1,
			duration: 3,
			ease: "elastic.out(1, 0.6)",
		},
		"-=0.3"
	);

	// Second section animations
	document.querySelectorAll(".section-heading").forEach((section) => {
		const breadcrumbs = section.querySelector(".breadcrumbs");
		const headings = section.querySelectorAll(".heading");
		const images = section.querySelectorAll(".heading-img");
		const headingsMobile = section.querySelectorAll(".heading-mobile");
		const imagesMobile = section.querySelectorAll(".heading-img-mobile");

		// Common ScrollTrigger start values
		const startPosition = "top 90%";

		// Desktop Animation
		if (!isMobile) {
			const tlDesktop = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: startPosition,
					end: "top 70%",
					scrub: false,
					toggleActions: "play none none reverse",
					id: `desktop-${section.id || Math.random()}`,
				},
			});

			if (breadcrumbs) {
				tlDesktop.from(breadcrumbs, { y: "100%", opacity: 0, duration: 0.6, ease: "power2.out" });
			}

			headings.forEach((heading) => {
				const chars = heading.querySelectorAll(".char");
				if (chars.length) {
					tlDesktop.from(
						chars,
						{
							y: "100%",
							opacity: 0,
							stagger: 0.05,
							duration: 0.3,
							ease: "power2.inout",
						},
						"-=0.3"
					);
				}
			});

			images.forEach((image) => {
				tlDesktop.from(image, { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
			});
		}

		// Mobile Animation (Independent from Desktop)
		if (isMobile) {
			const tlMobile = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: startPosition,
					end: "top 80%",
					scrub: false,
					toggleActions: "play none none reverse",
					id: `mobile-${section.id || Math.random()}`,
				},
			});

			headingsMobile.forEach((heading) => {
				const chars = heading.querySelectorAll(".char");
				if (chars.length) {
					tlMobile.from(chars, {
						y: "100%",
						opacity: 0,
						stagger: 0.05,
						duration: 0.3,
						ease: "power2.inout",
					});
				}
			});

			imagesMobile.forEach((image) => {
				tlMobile.from(image, { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
			});
		}
	});

	// Third section animations
	document.querySelectorAll(".section-heading-work").forEach((section, i) => {
		// Set initial state
		gsap.set(section.querySelectorAll(".work-heading .char, .work-heading-mobile .char"), {
			opacity: 0,
			y: "100%",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				id: `heading-${i}`, // Unique ID helps debugging
			},
		});

		tl.to(section.querySelectorAll(".work-heading .char, .work-heading-mobile .char"), {
			opacity: 1,
			y: "0%",
			duration: 0.3,
			ease: "power1.inout",
			stagger: {
				amount: 1,
				from: "start",
			},
		})
			.from(
				section.querySelector("#heading-space"),
				{
					width: "2vw",
					duration: 0.5,
				},
				"-=0.5"
			)
			.from(
				section.querySelectorAll(".work-heading-img, .work-heading-img-mobile"),
				{
					scale: 0,
					duration: 1.2,
					ease: "elastic.out(1, 0.6)",
				},
				"-=.6"
			);
	});

	// Fourth section animations
	const gallerySection = document.querySelector(".gallery-content-section");
	const images = gallerySection.querySelectorAll(".image-container");

	images.forEach((el) => {
		gsap.set(el, {
			opacity: 0,
		});

		gsap.to(el, {
			opacity: 1,
			ease: "power2.out",
			duration: 1.2,
			scrollTrigger: {
				trigger: el,
				start: "top 100%",
				toggleActions: "play none none none",
				once: true,
			},
		});
	});
};

onMounted(() => {
	refreshScrollTrigger();
	animations();
});

// SEO Meta Tags
useSeoMeta({
	ogSiteName: "ArtWorksIT",
	title: "Team behind ArtWorksIT",
	description: "Meet the artisans of ArtWorksIT. We’re hiring front-end developers and designers!",
	ogTitle: "Team behind ArtWorksIT",
	ogDescription: "Meet the artisans of ArtWorksIT. We’re hiring front-end developers and designers!",
	ogImage: () => config.public.siteUrl + "/images/meta/team.webp",
	ogUrl: () => config.public.siteUrl,
	twitterTitle: "Team behind ArtWorksIT",
	twitterDescription: "Meet the artisans of ArtWorksIT. We’re hiring front-end developers and designers!",
	twitterImage: () => config.public.siteUrl + "/images/meta/team.webp",
	twitterCard: "Meet the artisans of ArtWorksIT. We’re hiring front-end developers and designers!",
});

useHead({
	titleTemplate: (title) => (title ? `${title}` : "ArtWorksIT - Web Design Studio"),
	htmlAttrs: {
		lang: "en",
	},
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				"name": "Team - ArtWorksIT",
				"url": "https://artworksit.com/team"
			})
		}
	],
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: config.public.siteUrl + "/favicon.webp",
		},
		{
			rel: "canonical",
			href: config.public.siteUrl,
		},
	],
});
</script>
