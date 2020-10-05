<template>
	<v-col cols="12" class="justify-center">
		<v-card height="400" dark flat>
			<v-sparkline
				:value="hourlyForecast"
				:labels="hourlyLabels"
				color="white"
				line-width="1"
				label-size="4"
				smooth
			></v-sparkline>
		</v-card>
	</v-col>
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
			hourlyForecast() {
				return this.$store.getters.getHourlyForecast.map(
					forecast => forecast.temp
				);
			},
			hourlyLabels() {
				return this.$store.getters.getHourlyForecast.map(
					(forecast, i) => i % 4 == 0 ? moment(forecast.dt, 'X').format('ha') : ' '
				);
			},
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

<style scoped>
	.v-card {
		background: rgba(0, 0, 0, 0.5);
	}
</style>