import colors from 'vuetify/es5/util/colors';

export default {
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'static',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		titleTemplate: '%s | Finbrid',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico',
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap',
			},
		],
	},
	/*
	 ** Global CSS
	 */
	css: ['~/assets/global.css'],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxtjs/vuetify', '@aceforth/nuxt-optimized-images'],
	/*
	 ** Nuxt.js modules
	 */
	modules: [],
	/*
	 ** vuetify module configuration
	 ** https://github.com/nuxt-community/vuetify-module
	 */
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			themes: {
				light: {
					primary: '#333c5a',
					accent: '#1D2951',
					secondary: '#ededed',
					info: '#414141',
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
		treeShake: true,
		defaultAssets: {
			font: {
				family: 'Nunito Sans',
			},
			icons: 'fa',
		},
	},
	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	// for lazyload (not setup)
	build: {
		extend(config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src'];
				vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
			}
		},
	},
	pageTransition: {
		appear: true,
	},
	loadingIndicator: {
		name: 'chasing-dots',
		color: 'white',
		background: '#141d36',
	},
};
