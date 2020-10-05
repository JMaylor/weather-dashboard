<template>
	<v-app id="app">
		<Drawer v-model="drawer" />
		<AppBar @toggle-drawer="drawer = !drawer" />
		<v-main id="main">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
	import Drawer from "@/components/Navigation/Drawer";
	import AppBar from "@/components/Navigation/AppBar";

	export default {
		name: "App",

		components: {
			Drawer,
			AppBar
		},

		data: () => ({
			drawer: false
		})
	};
</script>

<style scoped>
	/* #app {
		background: url(https://images.unsplash.com/photo-1559678608-6ce34fceaea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80);
		background-size: cover;
	}

	#main {
		background: rgba(0, 0, 0, 0.494);
	} */
</style>