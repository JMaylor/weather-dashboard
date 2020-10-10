<template>
	<v-slide-group v-model="model" show-arrows style="width: 100%" active-class="selected-forecast">
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
</style>