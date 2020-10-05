<template>
	<v-col cols="12" class="justify-center">
		<h1 class="text-center">{{ location }}</h1>
	</v-col>
</template>

<script>
	export default {
		computed: {
			location() {
				return this.$store.getters.getLocation
			}
		}
	};
</script>
