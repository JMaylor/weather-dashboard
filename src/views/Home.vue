<template>
	<v-container fluid class="px-0" light>
		<v-row no-gutters>
			<Title />
		</v-row>
		<DayDetail :forecast="chosenDay"/>
		<v-row no-gutters justify="center">
			<DailyForecast v-on:choose-day="chooseDay"/>
		</v-row>
		
	</v-container>
</template>

<script>
	import Title from "@/components/Title";
	import DayDetail from "@/components/DayDetail";
	import DailyForecast from "@/components/DailyForecast";
	
	export default {
		data() {
			return {
				chosenDay: null
			}
		},
		components: {
			Title,
			DayDetail,
			DailyForecast
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
