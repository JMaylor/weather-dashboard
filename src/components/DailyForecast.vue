<template>
	<v-slide-group v-model="model" dark show-arrows style="width: 100%">
		<Day
			v-for="(day, i) in days"
			:key="day.sunrise"
			:index="i"
			:forecast="day"
			v-on:choose-day="$emit('choose-day', day)"
			@click="chooseDay(day)"
		/>
	</v-slide-group>
</template>

<script>
	import Day from "@/components/Day";
	export default {
		data() {
			return {
				model: null
			};
		},
		computed: {
			days() {
				return this.$store.getters.getDailyForecast || [];
			}
		},
		components: {
			Day
		},
		methods: {
			chooseDay(day) {
				console.log('choosing day')
				console.log(day)
			}
		}
	};
</script>

<style scoped>
.theme--dark .v-card {
	background: rgba(0, 0, 0, 0.261);
}
</style>