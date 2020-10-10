<template>
	<v-row class="day-detail" justify="center" align="center">
		<v-col cols="2">
			<v-img :src="require('@/assets/icons/animated/' + icon + '.svg')"></v-img>
		</v-col>
		<v-col cols="2">
			<h1 class="display-4">{{ Math.round(forecast.temp.day) }}&deg;C</h1>
			<h2 class="display-3">
				{{ forecast.weather[0].main }}
			</h2>
		</v-col>

		<v-col cols="2">
			<h2>{{ formattedDate }}</h2>
			<h2>Sunrise - {{ sunrise }}</h2>
			<h2>Sunset - {{ sunset }}</h2>
			<h2>Humidty - {{ forecast.humidity }}%</h2>
			<h2>Pressure - {{ forecast.pressure }}mb</h2>
			<h2>UV Index - {{ forecast.uvi }}</h2>
		</v-col>
	</v-row>
</template>

<script>
	import moment from "moment";
	import icons from "@/utils/icons";
	export default {
		props: ["forecast"],
		computed: {
			formattedDate() {
				return moment(this.forecast.dt, "X").format("ddd D MMM YY");
			},
			sunrise() {
				return moment(this.forecast.sunrise, "X").format("HH:mm");
			},
			sunset() {
				return moment(this.forecast.sunset, "X").format("HH:mm");
			},
			icon() {
				return icons[this.forecast.weather[0].icon];
			}
		}
	};
</script>

<style scoped>
	.day-detail {
		background: rgb(104, 135, 104);
	}
</style>