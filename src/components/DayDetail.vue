<template>
	<v-row class="day-detail">
		
		<v-col cols="2">
			<h1 class="display-4">{{ Math.round(forecast.temp.day) }}&deg;C</h1>
			<h2 class="display-3">
				{{ forecast.weather[0].main }}
			</h2>
		</v-col>
		<v-col cols="2">
			image goes here
		</v-col>
		<v-col cols="2">
			<h2>{{ formattedDate }}</h2>

		</v-col>
	</v-row>
</template>

<script>
	import moment from 'moment'
	export default {
		props: [
			'forecast'
		],
		computed: {
			formattedDate() {
				return moment(this.forecast.dt, 'X').format('ddd D MMM YY')
			}
		}
	};
</script>

<style scoped>
	.day-detail {
		background: rgb(104, 135, 104);
	}
</style>