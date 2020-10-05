<template>
	<v-slide-item>
		<v-card width="150" tile @click="$emit('choose-day', forecast)">
			<v-sheet height="10" color="info"></v-sheet>
			<v-card-title class="justify-center pb-0 mb-0">{{
				dayOfWeek
			}}</v-card-title>
			<v-card-text class="text-center">
				{{ forecast.weather[0].main }}
			</v-card-text>
			<v-img
				:src="
					`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
				"
			></v-img>
			<v-card-text class="text-center">
				{{ Math.round(forecast.temp.day) }}&deg;C
			</v-card-text>
			<!-- <v-row class="fill-height" align="center" justify="center">
				<v-scale-transition>
					{{ dayOfWeek }}
					<v-icon
						v-if="active"
						color="white"
						size="48"
						v-text="'mdi-close-circle-outline'"
					></v-icon>
				</v-scale-transition>
			</v-row> -->
		</v-card>
	</v-slide-item>
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
		props: ["forecast", "index"],
		computed: {
			dayOfWeek() {
				return this.index == 0
					? "Today"
					: moment(this.forecast.dt, "X").format("dddd");
			},
			temp() {
				return this.$store.getters.getCurrentTemp;
			},
			description() {
				return this.$store.getters.getCurrentDescription;
			}
		}
	};
</script>

<style scoped>
.v-card {
	background: rgba(0, 0, 0, 0.261);
	min-width: 12.5%;
}
</style>