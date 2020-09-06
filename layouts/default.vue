<template>
	<v-app>
		<v-app-bar class="rounded-b-xl" color="primary" prominent app>
			<FinbridLogo />
			<!-- <v-toolbar-title color="white" v-text="title" /> -->
			<v-spacer />
			<div class="my-10 mr-14">
				<v-btn rounded color="white" class="mx-4 pa-4 primary--text font-weight-bold">Home</v-btn>
				<v-btn rounded color="white" class="mx-4 pa-4 primary--text font-weight-bold">About Us</v-btn>
				<v-btn rounded color="white" class="mx-4 pa-4 primary--text font-weight-bold">What We Do</v-btn>
				<v-btn rounded color="white" class="mx-4 pa-4 primary--text font-weight-bold">Our Partners</v-btn>
				<v-btn rounded color="white" class="mx-4 pa-4 primary--text font-weight-bold">Contact Us</v-btn>
			</div>
		</v-app-bar>
		<v-main>
			<nuxt />
		</v-main>
		<!-- <v-footer app>
			<span>&copy; {{ new Date().getFullYear() }} Finbrid Oy</span>
		</v-footer>-->
	</v-app>
</template>

<script>
import FinbridLogo from '~/components/FinbridLogo.vue';
export default {
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/',
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire',
				},
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Finbrid',
		};
	},
	components: {
		FinbridLogo,
	},
};
</script>

<style>
html {
	overflow-y: auto !important;
}
</style>