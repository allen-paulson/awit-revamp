<template>
	<div class="mt-[27vw] md:mt-[8vw]">
		<!-- Team Section Start -->
		<section class="relative text-[#F1F1F1]">
			<div class="px-[5vw] md:px-[3vw] pt-[35vw] md:pt-0 pb-[5vw] relative">
				<!-- Desktop View -->
				<h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading text262px-desktop font-anton -tracking-[.01vw] leading-[1.12] -space-y-[2.25vw] hidden md:flex flex-col justify-center">
					<span class="overflow-hidden">A DESIGN AGENCY</span>
					<span class="overflow-hidden">BASED IN</span>
					<div class="!inline-flex justify-end">
						<span class="overflow-hidden">BENGALURU</span>
					</div>
				</h1>

				<!-- Mobile View -->
				<h1 v-split-text="{ splitBy: 'words, char' }" class="main-heading-mobile text76px-mobile font-anton -tracking-[.01vw] leading-[1.12] -space-y-[2.25vw] md:hidden flex flex-col justify-center">
					<span class="overflow-hidden">A DESIGN</span>
					<span class="overflow-hidden">AGENCY</span>
					<span class="overflow-hidden">BASED IN</span>
					<span class="overflow-hidden text-[21vw]">BENGALURU</span>
				</h1>

				<div class="flex justify-end md:mt-0 mt-[1vw]">
					<div class="subtitle text24px-desktop font-inter font-bold flex items-center gap-[1vw] md:gap-[.5vw]">
						( KARNATAKA, INDIA <span><NuxtImg width="93" height="69" class="w-[6vw] md:w-[2vw]" src="/images/about/india.webp" alt="Indian flag image" /></span> )
					</div>
				</div>

				<div class="main-image md:absolute md:bottom-[7vw] md:left-[3vw] w-[70%] md:w-[23%] md:mt-0 mt-[25vw]">
					<NuxtImg width="926" height="526" class="w-full h-auto" src="/images/about/table.webp" alt="Table image" />
				</div>
			</div>
		</section>
		<!-- Team Section End -->

		<!-- Border Section Start -->
		<div class="px-[5vw] md:px-[1.5vw]">
			<div class="border-t-[.5px] border-[#FFFFFF]"></div>
		</div>
		<!-- Border Section End -->

		<!-- Our Clients Section Start -->
		<section class="relative pt-[20vw] md:pt-[6vw] md:pb-0 pb-[20vw]">
			<div class="section-heading px-[5vw] md:px-[3vw]">
				<!-- Desktop View -->
				<div class="hidden md:block">
					<div class="oveflow-hidden">
						<the-breadcrumbs number="01" title="OUR ESTEEMED CLIENTS" />
					</div>
					<div class="md:pl-[1vw] pt-[2vw] relative w-max">
						<NuxtImg width="400" height="400" class="heading-img absolute w-[9vw] bottom-0 left-[46%] z-[1] translate-y-[20%]" src="/images/about/saturn.webp" alt="Saturn image" />
						<h2 v-split-text="{ splitBy: 'words, char' }" class="heading font-anton text105px-desktop -tracking-[.1vw] leading-[1.12] flex flex-col relative z-[0] overflow-hidden">
							<span class="overflow-hidden">BRANDS THAT HAVE</span>
							<span class="overflow-hidden">SUCCESSFULLY</span>
							<span class="overflow-hidden">GONE LIVE <span class="heading-space w-[6.5vw] !inline-block"></span> WITH US</span>
						</h2>
					</div>
				</div>

				<!-- Mobile View -->
				<div class="md:hidden">
					<div class="overflow-hidden pl-[10vw]">
						<the-breadcrumbs number="01" title="OUR ESTEEMED CLIENTS" />
					</div>
					<div class="pt-[4vw] md:pt-[2vw] relative w-max">
						<NuxtImg width="218" height="200" format="webp" class="heading-img-mobile absolute w-[25vw] md:w-[16vw] right-0 bottom-0 md:bottom-0 -translate-y-1/2 md:translate-y-[20%] md:right-[15%] md:-translate-x-full z-[1]" src="/images/about/saturn.webp" alt="Saturn Image" />
						<h2 v-split-text="{ splitBy: 'words, char' }" class="heading-mobile font-anton text56px-mobile -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden">
							<span class="overflow-hidden">BRANDS THAT HAVE</span>
							<span class="overflow-hidden">SUCCESSFULLY</span>
							<span class="overflow-hidden">GONE LIVE <span class="w-[7vw] hidden md:inline-block"></span> WITH US</span>
						</h2>
					</div>
				</div>
			</div>

			<div class="mt-[15vw] md:mt-[4vw] md:px-0 px-[4vw]">
				<div class="grid grid-cols-3 md:grid-cols-6">
					<div class="aspect-square border border-l md:border-l-0 md:border-b-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="md:hidden">
							<small-boxes direction="tl" />
						</div>
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="278" height="92" src="/images/about/rotten.webp" class="w-[55%] relative z-[2]" alt="Rotten Grapes Logo" />
					</div>
					<div class="aspect-square border border-l-0 md:border-b-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="232" height="154" src="/images/about/aaiwini.webp" class="w-[50%] relative z-[2]" alt="Aaiwini Logo" />
					</div>
					<div class="aspect-square border border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="268" height="146" src="/images/about/hunan.webp" class="w-[55%] relative z-[2]" alt="Hunan Square Logo" />
					</div>
					<div class="aspect-square border border-t-0 md:border-t md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="md:hidden">
							<small-boxes direction="tl" />
						</div>
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="332" height="84" src="/images/about/strands.webp" class="w-[60%] relative z-[2]" alt="Strand Life Sciences Logo" />
					</div>
					<div class="aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="194" height="220" src="/images/about/mumbai.webp" class="w-[40%] relative z-[2]" alt="Mumbai Prost House Image" />
					</div>
					<div class="aspect-square border border-t-0 md:border-t border-l-0 md:border-x-0 border-[#5C5C5C] flex items-center justify-center relative">
						<div class="md:hidden">
							<small-boxes direction="tl" />
							<small-boxes direction="tr" />
						</div>
						<NuxtImg width="208" height="166" src="/images/about/vrieves.webp" class="w-[42%] relative z-[2]" alt="Vrieves Image" />

						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
					</div>

					<div class="aspect-square border border-t-0 md:border-t md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<small-boxes direction="br" />
						<div class="md:hidden">
							<small-boxes direction="tl" />
						</div>
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="186" height="188" src="/images/about/voc.webp" class="w-[45%] relative z-[2]" alt="VOC Image" />
					</div>
					<div class="aspect-square border border-t-0 md:border-t border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="374" height="274" src="/images/about/federate.webp" class="w-[55%] relative z-[2]" alt="Federate one Image" />
					</div>
					<div class="aspect-square border border-t-0 border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<small-boxes direction="br" />
						<small-boxes direction="bl" />
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="122" height="51" src="/images/about/acme.svg" class="w-[45%] relative z-[2]" alt="Acme Image" />
					</div>
					<div class="aspect-square border border-t-0 md:border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<small-boxes direction="br" />
						<div class="md:hidden">
							<small-boxes direction="tl" />
							<small-boxes direction="bl" />
						</div>
						<NuxtImg width="374" height="86" src="/images/about/ryze.webp" class="w-[60%] relative z-[2]" alt="Ryze chemie Image" />

						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
					</div>
					<div class="aspect-square border border-t-0 border-l-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="204" height="204" src="/images/about/banani.webp" class="w-[45%] relative z-[2]" alt="Banani Vista Image" />
					</div>
					<div class="aspect-square border border-t-0 md:border-t border-l-0 md:border-x-0 border-[#5C5C5C] flex items-center justify-center relative">
						<small-boxes direction="tr" />
						<small-boxes direction="br" />
						<div class="md:hidden">
							<small-boxes direction="tl" />
							<small-boxes direction="bl" />
						</div>

						<div class="absolute inset-0 z-0 bg-[#151515]"></div>
						<NuxtImg width="432" height="92" src="/images/about/open.webp" class="w-[55%] relative z-[2]" alt="Openstreet Image" />
					</div>
				</div>
			</div>
		</section>
		<!-- Our Clients Section End -->

		<!-- Border Section Start -->
		<div class="px-[2.5vw] md:px-[1.5vw] md:hidden">
			<div class="border-t-[.5px] border-[#FFFFFF]"></div>
		</div>
		<!-- Border Section End -->

		<!-- Our Team Section Start -->
		<section class="relative overflow-hidden pb-[20vw] md:pb-[3vw]">
			<div class="relative z-[2]">
				<div class="section-heading-work px-[5vw] md:px-[4vw] pt-[25vw] md:pt-[8vw] pb-[5vw]">
					<!-- Desktop View -->
					<div class="hidden md:block">
						<the-breadcrumbs number="02" title="A LI'L About US" />
						<div class="flex justify-center items-end gap-[3vw]">
							<div class="pt-[2vw] relative w-max">
								<NuxtImg width="518" height="518" src="/images/about/rocket.webp" alt="Team Rocket Image" class="work-heading-img absolute left-1/2 top-1/2 w-[13vw] translate-x-[50%] -translate-y-[40%] z-[1]" />
								<h1 v-split-text="{ splitBy: 'words, char' }" class="work-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center z-[0]">
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
								<the-breadcrumbs number="02" title=" A LI'L ABOUT US" />
							</div>
							<div class="pt-[4vw] md:pt-[2vw] relative">
								<NuxtImg class="work-heading-img-mobile absolute w-[28vw] md:w-[6.5vw] right-0 bottom-0 z-[1]" width="518" height="518" src="/images/about/rocket.webp" alt="Team Rocket Image" />
								<h2 v-split-text="{ splitBy: 'words, char' }" class="work-heading-mobile font-anton text-[19vw] -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden w-full">
									<span class="overflow-hidden">MEET OUR </span>
									<span class="overflow-hidden">TEAM </span>
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div class="content-section">
					<div class="px-[5vw] md:px-[8vw] py-[5vw]">
						<div class="grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-0 text-white">
							<div v-for="(team, index) in teamGrid" :key="index" :class="team.className" class="border-[.5px] border-[#D0D0D0] relative p-[3vw] md:p-[1.25vw]">
								<div class="flex justify-between">
									<div class="w-[55%]">
										<NuxtImg width="578" height="468" :src="team.image" class="w-full h-auto" alt="Ashwin Image" />
									</div>
									<p class="text16px-mobile text18px-desktop">{{ team.id }}</p>
								</div>

								<div class="mt-[28vw] md:mt-[4.5vw]">
									<p class="text60px-desktop text40px-mobile font-anton tracking-tight">{{ team.name }}</p>
									<div class="text16px-mobile text26px-desktop mt-[2vw] md:mt-[1vw]">{{ team.role }}</div>

									<div class="flex gap-[1.5vw] md:gap-[.25vw] flex-wrap mt-[6vw] md:mt-[4vw] pb-[.5vw]">
										<div v-for="(skill, index) in team.skills" :key="index" class="rounded-full border-[.5px] border-[#F1F1F1] px-[3vw] md:px-[.65vw] py-[1.5vw] md:py-[.35vw] text14px-mobile text16px-desktop">{{ skill }}</div>
									</div>
								</div>
							</div>
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
								<NuxtImg width="348" height="540" src="/images/about/camera.webp" alt="Camera Image" class="work-heading-img absolute left-[53.5%] top-1/2 w-[9vw] translate-x-[100%] -translate-y-[45%] z-[1]" />
								<h1 v-split-text="{ splitBy: 'words, char' }" class="work-heading font-anton text262px-desktop -tracking-[.1vw] leading-[1.12] flex justify-center z-[0]">
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
								<NuxtImg class="work-heading-img-mobile absolute top-0 right-0 w-[15vw] translate-y-1 translate-x-2 z-[1]" width="348" height="540" src="/images/about/camera.webp" alt="Camera Image" />
								<h2 v-split-text="{ splitBy: 'words, char' }" class="work-heading-mobile font-anton text-[19vw] -tracking-[.1vw] leading-[1.12] flex flex-col gap-[0vw] relative z-[0] overflow-hidden w-full">
									<span class="overflow-hidden">DAY IN LIFE </span>
									<span class="overflow-hidden">ARTWORKSIT </span>
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div class="gallery-content-section mt-[8vw] md:mt-0">
					<div class="px-[5vw] md:px-[4vw] py-[5vw]">
						<div class="grid grid-cols-2 md:grid-cols-3 text-white gap-[1.5vw] md:gap-[.75vw]">
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-3.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="icon-container aspect-square flex items-center justify-center">
								<div class="w-[30%]">
									<NuxtImg width="130" height="130" src="/images/about/awit.svg" loading="lazy" alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-6.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div>

							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-4.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-1.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="icon-container aspect-square flex items-center justify-center">
								<div class="w-[25%]">
									<NuxtImg width="326" height="300" src="/images/about/pencil.webp" loading="lazy" alt="AWIT" class="w-full h-auto" />
								</div>
							</div>

							<div class="icon-container aspect-square flex items-center justify-center">
								<div class="w-[35%]">
									<NuxtImg width="481" height="366" src="/images/about/laptop.webp" loading="lazy" alt="AWIT" class="w-full h-auto" />
								</div>
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-5.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
							</div>
							<div class="image-container aspect-square">
								<NuxtImg width="1050" height="1050" src="/images/about/team-2.webp" loading="lazy" alt="Team Image" class="w-full h-auto" />
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
		<ContactForm />
		<!-- Contact Section End -->
	</div>
</template>

<script setup>
	import { gsap } from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);

	const config = useRuntimeConfig();

	const teamGrid = [
		{
			id: "AWIT069",
			name: "Ashwin D",
			image: "/images/about/ashwin.webp",
			skills: ["Finance", "Accounts", "Marketing", "Sales", "Development", "HR"],
			role: "Director of Miscellaneous Things",
			className: "md:col-start-1 md:row-start-1",
		},
		{
			id: "AWIT007",
			name: "Uday Rathore",
			image: "/images/about/uday.webp",
			skills: ["Art Director", "Design Critique"],
			role: "Creative Director",
			className: "md:col-start-3 md:row-start-1",
		},
		{
			id: "AWIT016",
			name: "Sushma Jois",
			image: "/images/about/sushma.webp",
			skills: ["UI/UX Designer", "Figma", "Photoshop", "Illustrator", "Xd"],
			role: "Crafting pixels with Figma magic!",
			className: "md:col-start-2 md:row-start-2 md:border-r-0",
		},
		{
			id: "AWIT420",
			name: "Vinayak Dev",
			image: "/images/about/vinayak.webp",
			skills: ["Back-end Developer", "Laravel", "PHP"],
			role: "I feel the need.. The need for code",
			className: "md:col-start-3 md:row-start-2 md:border-y-0",
		},
		{
			id: "AWIT404",
			name: "Geethesh Nair",
			image: "/images/about/geethesh.webp",
			skills: ["Front-end Developer", "Tailwind CSS", "JS", "GSAP"],
			role: "Tailwind is better than bootstrap",
			className: "md:row-start-3",
		},
		{
			id: "AWIT001",
			name: "Koko",
			image: "/images/about/koko.webp",
			skills: ["Cuteness Overload", "Tail Wags", "Zoomies", "Barkitect"],
			role: "I'm the director of happiness",
			className: "md:col-start-3 md:row-start-3",
		},
	];

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
