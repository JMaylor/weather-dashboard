<template>
	<v-col cols="4">
		<v-card height="200">
			<v-img
				class="white--text align-end"
				height="200"
				src="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			>
				<v-card-title>{{ sunsetTime }}</v-card-title>
			</v-img>
		</v-card>
	</v-col>
</template>

<script>
	import moment from "moment";
	export default {
		data: () => ({}),
		computed: {
			sunsetTime() {
				if (this.$store.getters.getSunset) {
					return moment(this.$store.getters.getSunset, "X").format(
						"HH:mm A"
					);
				}
				return null;
			}
		}
	};
</script>
