<template>
	<v-col cols="4">
		<v-card height="200">
			<v-img
				class="white--text align-end"
				height="200"
				src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
			>
				<v-card-title>{{ sunriseTime }}</v-card-title>
			</v-img>
		</v-card>
	</v-col>
</template>

<script>
	import moment from "moment";
	export default {
		data: () => ({}),
		computed: {
			sunriseTime() {
				if (this.$store.getters.getSunrise) {
					return moment(this.$store.getters.getSunrise, "X").format(
						"HH:mm A"
					);
				}
				return null;
			}
		}
	};
</script>
