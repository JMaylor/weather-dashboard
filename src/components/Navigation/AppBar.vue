<template>
	<v-app-bar app color="transparent" dense elevate-on-scroll>
		<v-app-bar-nav-icon
			@click="$emit('toggle-drawer')"
		></v-app-bar-nav-icon>

		<v-toolbar-title>
			<v-form @submit.prevent="submit"
				><v-text-field
					placeholder="Search"
					hide-details="true"
					prepend-icon="mdi-crosshairs-gps"
					@click:prepend="find"
					v-model="input"
					@submit="submit"
				></v-text-field
			></v-form>
		</v-toolbar-title>
	</v-app-bar>
</template>

<script>
	export default {
		data() {
			return {
				input: ""
			};
		},
		methods: {
			submit() {
				this.$store.dispatch("initialiseSearch", this.input);
				this.input = "";
			},
			find() {
				this.$store.dispatch('getWeatherForCurrentLocation')
				this.input=''
			}
		}
	};
</script>