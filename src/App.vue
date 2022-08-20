<template>
	<landing-page></landing-page>
</template>

<script>
	import LandingPage from "@/pages/LandingPage.vue";
	export default {
		name: "App",
		components: {
			LandingPage,
		},
	};
</script>

<style>
	@font-face {
		font-family: "Averta";
		src: url(https://res.cloudinary.com/dafsch2zs/raw/upload/v1596618987/Zuri%20Landing/AvertaDemoPECuttedDemo-Regular_dghpn7.otf);
	}
	* {
		margin: 0;
		box-sizing: border-box;
	}
</style>
