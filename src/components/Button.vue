<template>
	<button>{{ value }}</button>
</template>

<script>
	export default {
		name: "ButtonLabel",
		props: {
			value: {
				type: String,
				default: () => "Label",
			},
		},
	};
</script>

<style scoped>
</style>