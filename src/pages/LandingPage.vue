<template>
	<section id="hero-intro" class="text-center">
		<header class="z-logo">
			<img class="pt-5" src="@/assets/zuri-logo-full.svg" />
		</header>
		<main class="hero p-2">
			<h1 class="pt-3 pb-4 fw-bold">Learn, Build, Grow.</h1>

			<p class="hero-description mt-2 opacity-75">
				Unlock your Brilliance with our hands-on
				<a href="https://udee101.github.io/zuri-training/">beginner</a> and
				<a href="https://internship.zuri.team">expert training</a>. Zuri Team
				has been immensely successful in creating a global network of a highly
				adept intelligent workforce that can help your company achieve their
				mission-critical
				<a href="https://talent.zuri.team">projects and goals</a>
			</p>

			<div class="hero-btn mt-5 mb-4 p-3">
				<a href="https://udee101.github.io/zuri-training/" target="blank"
					><button-label
						value="I'm new to the Industry"
						class="btn1 mt-3 mb-2"
					></button-label
				></a>
				<a href="https://talent.zuri.team" target="blank"
					><button-label
						value="I need industry experience"
						class="btn2 mt-3"
					></button-label
				></a>
			</div>
		</main>
	</section>

	<section id="programs">
		<div class="container-fluid my-container ps-3 pe-3">
			<h2 class="text-center">BY ZURI team</h2>
			<p class="mantra text-center">
				We cater for every level of <br />expertise and needs in the industry.
			</p>
			<div class="container-fluid ps-3 pe-3">
				<div class="row">
					<div class="col-lg-4 program-box">
						<div class="program-card text-left mx-auto m-4 m-lg-0 content">
							<img
								class="png1 d-xl-block d-none"
								src="@/assets/left_bvmv7q.png"
								alt=""
							/>
							<div>
								<program-box
									:image_src="require('@/assets/zuri-training-img.svg')"
									content="We understand a complete beginner cannot become a professional after a few weeks, the aim here is to get you familiar enough with each tools such that you'll be able to continue learning on your own with minimal support."
									web_link="https://udee101.github.io/zuri-training/"
									value="I want to be trained >"
								></program-box>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="program-card text-left mx-auto m-4 m-lg-0">
							<program-box
								:image_src="require('@/assets/zuri-internship-img.svg')"
								content="We place you in a work simulation. We give you tasks every week, the tasks ranges from easy to hard as you progress from stage to stage, making it to the final stage means you are ready for actual work."
								web_link="https://internship.zuri.team"
								value="I want to join the internship >"
							></program-box>
						</div>
					</div>
					<div class="col-lg-4 program-box">
						<div class="program-card text-left mx-auto m-4 m-lg-0">
							<img
								class="png2 d-xl-block d-none"
								src="@/assets/right_yz6hn3.png"
								alt=""
							/>
							<div>
								<program-box
									:image_src="require('@/assets/zuri-talent-img.svg')"
									content="Keeping pace	with projects and being on the look out for the extremely talented individuals has become ever more challenging. Here is where Zuri
										Team comes into play to bring the best suited talent for your company"
									web_link="https://talent.zuri.team"
									value="I am looking for talent >"
								></program-box>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="my-container foot mx-auto">
		<div class="foot-container text-center">
			<div class="foot1">
				<img class="zuri-logo" src="@/assets/zuri-logo-full.svg" alt="" />
			</div>
			<div class="foot2">
				<h3>Links</h3>
				<div class="links">
					<a href="https://flutterwave.com/store/zuriteam"><p>Store</p></a>
					<a href="https://blog.zuri.team"><p>Blog</p></a>
				</div>
			</div>
			<div class="foot3">
				<h3>Contact</h3>
				<p class="contact-address">
					8 Jubilee-CMD Road, Magodo,<br />
					Lagos State
				</p>
				<p><a href="mailto:hello@zuri.team">hello@zuri.team</a></p>
			</div>
			<div class="foot4 contact">
				<h3>Follow Us</h3>
				<div class="contact-icons">
					<a href="https://web.facebook.com/thezuriteam" target="blank"
						><img src="@/assets/fb.png" alt=""
					/></a>

					<a href="https://twitter.com/theZuriTeam" target="blank"
						><img src="@/assets/twitter.png" alt=""
					/></a>

					<a href="https://instagram.com/thezuriteam" target="blank"
						><img src="@/assets/IG.png" alt=""
					/></a>

					<a href="#"><img src="@/assets/in.png" alt="" /></a>
				</div>
			</div>
		</div>

		<div>
			<hr class="m-3 md-0" />
		</div>

		<div class="copyright text-center mx-auto">
			<p>&copy; 2020 ZURI TEAM</p>
		</div>
	</footer>
</template>

<script>
	import ButtonLabel from "@/components/Button.vue";
	import ProgramBox from "@/components/ProgramBox.vue";
	export default {
		name: "LandingPage",
		components: {
			ButtonLabel,
			ProgramBox,
		},
	};
</script>

<style scoped>
	#hero-intro {
		width: 100%;
		height: 800px;
		font-family: "Averta";
		background: url(../assets/hero-bg.svg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.z-logo {
		margin: 0 0 69px;
		padding: 69px 0 0;
	}
	.hero {
		max-width: 700px;
		margin: 0 auto;
	}
	.hero h1 {
		font-size: 1.9em;
		color: #514949;
	}
	.hero p {
		font-size: 16px;
		line-height: 24px;
	}
	.hero-description a {
		color: #e7332b;
		text-decoration: none;
	}
	.hero-description a:hover {
		color: #eb5850;
	}
	.hero-btn {
		max-width: 700px;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		cursor: pointer;
	}
	.btn1 {
		padding: 11px 26px;
		color: #fff;
		background: #e7332b;
		border: 1px solid #e7332b;
		font-size: 16px;
		transition: 0.2s;
		cursor: pointer;
	}
	.btn2 {
		padding: 10px 28px;
		color: #e7332b;
		background: #fff;
		border: 1px solid #e7332b;
		font-size: 16px;
		transition: 0.2s;
		cursor: pointer;
	}
	.btn1:hover {
		background: #fff;
		color: #e7332b;
	}
	.btn2:hover {
		background: #e7332b;
		color: #fff;
	}
	#programs {
		font-family: "Averta";
		background: #fff;
		overflow: hidden;
	}
	.container-fluid {
		max-width: 1440px !important;
	}
	.my-container {
		max-width: 1240px !important;
	}
	.my-container h2 {
		color: #e7332b;
		font-size: 0.9em;
		margin: 7rem 0 1em;
	}
	.my-container .mantra {
		font-size: 1.5em;
		color: #514949;
		margin: 0 0 4em;
		line-height: 40px;
	}
	.program-box {
		position: relative;
		z-index: 1;
	}
	.program-card .png1 {
		width: 100%;
		position: absolute;
		left: -120px;
		top: -75px;
		z-index: -1;
	}
	.program-card .png2 {
		width: 90%;
		position: absolute;
		right: -120px;
		top: -75px;
		z-index: -1;
	}
	.foot {
		font-family: "Averta";
		margin-top: 215px;
		max-width: 1440px;
	}
	.text-center {
		text-align: center !important;
	}
	.foot-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 0 0 56px;
		padding: 20px;
	}
	.foot-container h3 {
		font-size: 1.1em;
		font-weight: bold;
		line-height: 24px;
		color: #514949;
		margin-bottom: 10px;
	}
	.foot .links a {
		display: block;
		text-decoration: none;
		line-height: 20px;
		color: #e7332b;
	}
	.foot .links a:hover {
		color: #eb5850;
	}
	.contact-address {
		font-size: 14px;
		line-height: 20px;
		color: #514949;
		opacity: 90%;
	}
	.foot3 a {
		text-decoration: none;
		font-size: 14px;
		color: #e7332b;
	}
	.foot3 a:hover {
		color: #eb5850;
	}
	.foot2,
	.foot3,
	.foot4 {
		text-align: left;
	}
	.contact-icons img {
		width: 18px;
		margin: 0 5px 0 5px;
	}
	footer hr {
		opacity: 20%;
		border: 0.7px solid #514949;
	}
	.copyright p {
		font-size: 16px;
		line-height: 24px;
		font-weight: bold;
		margin: 32px 0 0;
		color: #514949;
		padding: 0 0 97px;
	}
	@media (max-width: 768px) {
		.foot-container {
			flex-direction: column;
			justify-content: center !important;
			align-items: center;
		}
		.zuri-logo {
			width: 150px;
			margin: 0 0 15px;
		}
		.foot-container h3 {
			font-size: 1.49em;
			margin: 20px 0 0;
			margin-bottom: 10px;
		}
		.foot2,
		.foot3,
		.foot4 {
			text-align: center;
		}
	}
</style>
