<template>
	<v-app>
		<v-app-bar min-width="1100px" class="rounded-b-xl" color="#1D2951" prominent app>
			<FinbridLogo />
			<!-- <v-toolbar-title color="white" v-text="title" /> -->
			<!-- <v-spacer /> -->
			<div class="my-10 nav-container">
				<v-btn text color="white" class="mr-6 pa-4 primary--text font-weight-bold" href="/" small>
					<v-icon x-small class="mr-2">fa fa-home</v-icon>Home
				</v-btn>
				<v-btn text color="white" class="mx-6 pa-4 primary--text font-weight-bold" href="/about" small>
					<v-icon x-small class="mr-2">fa fa-users</v-icon>About Us
				</v-btn>
				<v-btn
					text
					color="white"
					class="mx-6 pa-4 primary--text font-weight-bold"
					href="/what_we_do"
					small
				>
					<v-icon x-small class="mr-2">fa fa-globe-europe</v-icon>What We Do
				</v-btn>
				<v-btn text color="white" class="mx-6 pa-4 primary--text font-weight-bold" href="/" small>
					<v-icon x-small class="mr-2">fa fa-hands-helping</v-icon>Our Partners
				</v-btn>
				<v-btn
					text
					color="white"
					class="ml-6 pa-4 primary--text font-weight-bold"
					href="/contact"
					small
				>
					<v-icon x-small class="mr-2">fa fa-envelope</v-icon>Contact Us
				</v-btn>
			</div>
		</v-app-bar>
		<v-main>
			<nuxt />
		</v-main>
		<!-- <v-footer app>
			<span>&copy; {{ new Date().getFullYear() }} Finbrid Oy</span>
		</v-footer>-->
		<v-footer min-width="600px" color="#333c5a" padless height="40px" app>
			<!-- <div class="ml-4 float-left text-overline white--text font-weight-thin">
				<v-chip outlined pill small color="white">
					<v-icon x-small left>fa fa-home</v-icon>Default
				</v-chip>
			</div>-->
			<div class="mx-auto text-overline white--text font-weight-thin">
				<v-chip text-color="white" class="pl-4" small color="#333c5a">
					<v-icon x-small left>fa fa-phone</v-icon>+358-40-705-65-33
				</v-chip>
				<v-chip
					text-color="white"
					class="pl-4 mx-10"
					x-small
					disabled
					color="#333c5a"
				>&copy; {{ new Date().getFullYear() }} Finbrid Oy</v-chip>
				<v-chip text-color="white" class="pl-4" small color="#333c5a">
					<v-icon x-small left>fa fa-envelope</v-icon>info@finbrid.fi
				</v-chip>
			</div>
			<!-- <div class="mr-4 float-right text-overline white--text font-weight-thin">
				<v-chip outlined pill small color="white">
					<v-icon x-small left>fa fa-home</v-icon>Default
				</v-chip>
			</div>-->
		</v-footer>
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

@media only screen and (max-width: 2000px) {
	.nav-container {
		margin-left: 250px;
	}
}

@media only screen and (max-width: 1440px) {
	.nav-container {
		margin-left: 20px;
	}
}
</style>