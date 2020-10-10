<template>
	<v-slide-item v-slot:default="{ toggle }">
		<v-card width="150" tile @click="$emit('choose-day', forecast); toggle" class="text-center">
			<v-sheet height="10" color="info"></v-sheet>
			<v-card-title class="justify-center">{{
				dayOfWeek
			}}</v-card-title>
			<v-card-text>
				{{ forecast.weather[0].main }}
			</v-card-text>
			<v-img
				:src="require('@/assets/icons/static/' + icon + '.svg')"
			></v-img>
			<v-card-text>
				{{ Math.round(forecast.temp.day) }}&deg;C
			</v-card-text>
		</v-card>
	</v-slide-item>
</template>

<script>
	import moment from "moment";
	import icons from '@/utils/icons'
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
			},
			icon() {
				return icons[this.forecast.weather[0].icon]
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