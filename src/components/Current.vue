<template>
	<v-row>
		<v-col cols="12">
			<h2 class="text-center white--text">
				{{ description }}
			</h2>
		</v-col>
	</v-row>
</template>

<script>
	import moment from "moment";
	export default {
		data: () => ({
			icons: {
				clear: "mdi-weather-sunny",
				clouds: "mdi-weather-cloudy"
			}
		}),
		computed: {
			now() {
				return moment().format("hh:mm a");
			},
			current() {
				return this.$store.getters.getCurrent;
			},
			temp() {
				return this.$store.getters.getCurrentTemp;
			},
			description() {
				return this.$store.getters.getCurrentDescription;
			},
			location() {
				return this.$store.getters.getLocation;
			}
		}
	};
</script>