<template>
	<v-app>
		<v-app-bar min-width="1300px" class="rounded-b-xl hidden-sm-and-down" color="accent" prominent app>
			<v-img
				:src="this.headerLogo"
				max-height="5em"
				max-width="8em"
				class="FinbridLogo"
				contain
			></v-img>

			<div class="my-11 nav-container">
				<v-btn
					active-class
					text
					rounded
					color="white"
					class="mr-6 pa-4 font-weight-bold white--text"
					to="/"
				>
					<v-icon x-small class="mr-2">fa fa-home</v-icon>Home
				</v-btn>
				<v-btn
					text
					rounded
					color="white"
					class="mx-6 pa-4 font-weight-bold white--text"
					to="/about"
				>
					<v-icon x-small class="mr-2">fa fa-users</v-icon>About Us
				</v-btn>
				<v-btn
					text
					rounded
					color="white"
					dark
					class="mx-6 pa-4 font-weight-bold white--text"
					to="/what_we_do"
				>
					<v-icon x-small class="mr-2">fa fa-globe-europe</v-icon>What We Do
				</v-btn>
				<v-btn
					text
					rounded
					color="white"
					dark
					class="ml-6 pa-4 font-weight-bold white--text"
					to="/contact"
				>
					<v-icon x-small class="mr-2">fa fa-envelope</v-icon>Contact Us
				</v-btn>
			</div>
		</v-app-bar>
		<v-app-bar
			app
			extended
			min-height="3.9em"
			color="accent"
			class="rounded-b-lg hidden-md-and-up"
			:collapse-on-scroll="collapseOnScroll"
			:collapse="!collapseOnScroll"
		>
			<v-app-bar-nav-icon @click.stop="dialog = true">
				<v-img
					:src="this.headerLogo"
					class="mobile-finbrid-logo"
					max-width="8em"
					max-height="6em"
					contain
				></v-img>
			</v-app-bar-nav-icon>

			<v-spacer></v-spacer>
			<v-toolbar-title>
				<v-btn
					active-class
					text
					rounded
					color="white"
					class="pa-4 font-weight-bold white--text"
					@click.stop="dialog = true"
					v-if="collapseOnScroll"
					large
				>
					<v-icon class="mr-4">fa fa-chevron-circle-down</v-icon>Menu
				</v-btn>
			</v-toolbar-title>

			<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
				<v-card color="accent">
					<v-toolbar extended color="#141d36">
						<v-img
							:src="this.headerLogo"
							class="expanded-mobile-logo"
							max-width="7em"
							contain
						></v-img>
						<v-spacer></v-spacer>
						<v-btn color="white" icon @click.native="dialog = false" class="mr-2 mt-14">
							<v-icon>fa fa-times-circle</v-icon>
						</v-btn>
					</v-toolbar>

					<v-list color="accent" rounded>
						<v-list-item-group class="mt-6" v-model="item" color="white">
							<v-list-item
								v-for="(item, i) in items"
								:key="i"
								:to="item.link"
								@click="dialog = false"
							>
								<v-list-item-icon>
									<v-icon color="white" v-text="item.icon"></v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title
										class="font-weight-bold white--text"
										v-text="item.text"
									></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-card>
			</v-dialog>
		</v-app-bar>
		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<v-footer min-width="600px" color="#333c5a" padless height="40em" app class="hidden-sm-and-down">
			<div class="mx-auto text-overline white--text font-weight-thin">
				<v-chip text-color="white" class="pl-4" small color="#333c5a">
					<v-icon x-small left>fa fa-phone</v-icon>{{ this.phone }}
				</v-chip>
				<v-chip text-color="white" class="pl-4 mx-10" x-small disabled color="#333c5a"
					>&copy; {{ new Date().getFullYear() }} Finbrid Oy</v-chip
				>
				<v-chip text-color="white" class="pl-4" small color="#333c5a">
					<v-icon x-small left>fa fa-envelope</v-icon>{{ this.email }}
				</v-chip>
			</div>
		</v-footer>
		<v-footer color="#333c5a" padless height="80em" class="hidden-md-and-up">
			<div class="mx-auto text-overline white--text font-weight-thin">
				<v-chip text-color="white" class="mx-auto" x-small disabled color="#333c5a"
					>&copy; {{ new Date().getFullYear() }} Finbrid Oy</v-chip
				>
				<br />
				<v-chip text-color="white" class="mx-auto" x-small color="#333c5a">
					<v-icon x-small left>fa fa-phone</v-icon>{{ this.phone }}
				</v-chip>

				<v-chip text-color="white" class="mx-auto" x-small color="#333c5a">
					<v-icon x-small left>fa fa-envelope</v-icon>{{ this.email }}
				</v-chip>
			</div>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			phone: '+358-40-705-65-33',
			email: 'info@finbrid.fi',
			collapseOnScroll: true,
			dialog: false,
			item: 1,
			items: [
				{
					text: 'Home',
					icon: 'fa fa-home',
					link: '/',
				},
				{
					text: 'About Us',
					icon: 'fa fa-user',
					link: '/about',
				},
				{
					text: 'What We Do',
					icon: 'fa fa-globe-europe',
					link: '/what_we_do',
				},
				{
					text: 'Contact Us',
					icon: 'fa fa-envelope',
					link: '/contact',
				},
			],
			title: 'Finbrid',
		};
	},
	computed: {
		headerLogo() {
			return require('@/assets/finbrid_logo.png');
		},
	},
};
</script>

<style>
html {
	overflow-y: auto !important;
	overflow-x: hidden !important;
}

@media only screen and (max-width: 2000px) {
	.nav-container {
		margin-left: 18em;
	}
}

@media only screen and (max-width: 1750px) {
	.nav-container {
		margin-left: 5em;
	}
}
@media only screen and (max-width: 1350px) {
	.nav-container {
		margin-left: 2em;
	}
}
@media only screen and (max-width: 2000px) {
	.FinbridLogo {
		margin-left: 10em;
		object-fit: scale-down;
	}
}

@media only screen and (max-width: 1450px) {
	.FinbridLogo {
		margin-left: 3em;
		object-fit: scale-down;
	}
}
.mobile-finbrid-logo {
	margin-left: 8em;
	margin-top: 3em;
}
.expanded-mobile-logo {
	margin-top: 3em;
	margin-left: 1em;
}
</style>
