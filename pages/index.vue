<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<v-card-text class="text-h4 font-weight-bold white--text mb-4 text-center">
				Utilizing industry and technological knowhow.
			</v-card-text>
			<v-divider class="hidden-sm-and-down divider"></v-divider>
			<v-divider dark class="hidden-md-and-up"></v-divider>
			<div align="center">
				<v-img
					class="hidden-sm-and-down mb-n5 mt-6"
					contain
					width="18%"
					:src="this.finbridLogo"
				></v-img>
			</div>
			<div align="center">
				<v-img
					class="hidden-md-and-up mb-n5 mt-6"
					contain
					width="50%"
					:src="this.finbridLogo"
				></v-img>
			</div>

			<v-card-text class="text-h5 font-weight-medium white--text font-italic text-center">
				brings together power with propulsion for operational success
			</v-card-text>
		</div>
		<div class="bottom-container">
			<v-row class="px-12 mt-4 hidden-sm-and-down">
				<v-col v-for="card in cards" :key="card.title" :cols="card.flex">
					<v-card class="rounded-lg" href="/finbrid-website/what_we_do">
						<v-img
							:src="card.src"
							class="white--text align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							height="16em"
						>
							<v-card-title class="font-weight-bold" v-html="card.title"></v-card-title>
						</v-img>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="px-4 mt-2 hidden-md-and-up">
				<v-col v-for="card in cards" :key="card.title" :cols="6">
					<v-card class="rounded-lg" href="/finbrid-website/what_we_do">
						<v-img
							:src="card.src"
							class="white--text align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							height="13em"
						>
							<v-card-title class="font-weight-bold" v-html="card.title"></v-card-title>
						</v-img>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				title: 'Technology',
				src: require('@/assets/yacht.jpg'),
				flex: 3,
				dialog: 'techModal',
			},
			{
				title: 'Business',
				src: require('@/assets/business.jpg'),
				flex: 3,
				dialog: 'businessModal',
			},
			{
				title: 'Solutions',
				src: require('@/assets/solutions.jpg'),
				flex: 3,
				dialog: 'solutionsModal',
			},
			{
				title: 'Project <br class="responsive" /> Financing & <br /> Investment',
				src: require('@/assets/investment.jpg'),
				flex: 3,
				dialog: 'financingModal',
			},
		],
	}),
	computed: {
		finbridLogo() {
			return require('@/assets/finbrid_text.png');
		},
	},
	head: () => {
		return {
			title: 'Home',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Utilizing industry and technological knowhow. Finbrid brings together power with propulsion for operational success. ',
				},
			],
		};
	},
};
</script>

<style>
.top-container {
	padding-top: 2.5em;
	padding-left: 2em;
	padding-right: 2em;
}
@media (max-width: 960px) {
	.bottom-container {
		padding-top: 1em;
		padding-left: 1em;
		padding-right: 1em;
		padding-bottom: 0.1em;
	}
}
.divider {
	background-color: white;
	margin-left: 20em;
	margin-right: 20em;
}
br.responsive {
	display: none;
}

@media (max-width: 600px) {
	br.responsive {
		display: inline;
	}
}
</style>
