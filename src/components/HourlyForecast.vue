<template>
	<div id="chart">
		<apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		computed: {
			forecast() {
				return this.$store.getters.getHourlyForecast;
			},
			series() {
				return [
					{
						name: "Temperature",
						data: this.forecast.map(x => x.temp)
					}
				];
			},
			chartOptions() {
				return {
					chart: {
						type: "line",
						dropShadow: {
							enabled: true,
							color: "#000",
							top: 18,
							left: 7,
							blur: 10,
							opacity: 0.2
						},
						toolbar: {
							show: false
						}
					},
					colors: ["#77B6EA", "#545454"],
					dataLabels: {
						enabled: true
					},
					stroke: {
						curve: "smooth"
					},
					title: {
						text: "Average High & Low Temperature",
						align: "left"
					},
					grid: {
						borderColor: "#e7e7e7",
						row: {
							colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
							opacity: 0.5
						}
					},
					markers: {
						size: 1
					},
					xaxis: {
						categories: this.forecast.map(x => Date(x.dt)),
						title: {
							text: "Hour"
						}
					},
					yaxis: {
						title: {
							text: "Temperature"
						},
					},
					legend: {
						position: "top",
						horizontalAlign: "right",
						floating: true,
						offsetY: -25,
						offsetX: -5
					}
				};
			}
		}
	};
</script>

<style scoped>
	#chart {
		width: 100%;
	}
</style>