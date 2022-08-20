<template>
	<img :src="image_src" alt="" />
	<p>{{ content }}</p>
	<a :href="web_link">{{ value }}</a>
</template>

<script>
	export default {
		name: "ProgramBox",
		props: {
			content: String,
			web_link: String,
			value: String,
			image_src: String,
		},
	};
</script>


<style>
	.program-card {
		background: #fffafa;
		width: 100%;
		padding: 61px 47px 82px 36px;
		text-align: justify all;
	}
	.program-card img {
		margin-bottom: 48px;
	}
	.program-card p {
		font-size: 16px;
		margin: 0 0 1em;
		padding: 0;
		line-height: 24px;
		color: #514949;
		opacity: 90%;
	}
	.program-card a {
		color: #e7332b;
		text-decoration: none;
	}
	.program-card a:hover {
		color: #eb5850;
	}
</style>
