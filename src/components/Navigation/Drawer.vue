<template>
	<v-navigation-drawer :value="value" app>
		hi
	</v-navigation-drawer>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			}
		}
	};
</script>