<template>
	<v-container class="px-0">
		<v-row no-gutters>
			<Title />
		</v-row>
		<DayDetail :forecast="chosenDay" v-if="chosenDay"/>
		<v-row no-gutters justify="center">
			<DailyForecast v-on:choose-day="chooseDay"/>
		</v-row>
		<v-row>
			<HourlyForecast />
		</v-row>
		
	</v-container>
</template>

<script>
	import Title from "@/components/Title";
	import DayDetail from "@/components/DayDetail";
	import DailyForecast from "@/components/DailyForecast";
	import HourlyForecast from "@/components/HourlyForecast"
	
	export default {
		data() {
			return {
				chosenDay: null
			}
		},
		components: {
			Title,
			DayDetail,
			DailyForecast,
			HourlyForecast
		},
		methods: {
			chooseDay(day) {
				console.log('choosing day')
				console.log(day);
				this.chosenDay = day;
			}
		}
	};
</script>
