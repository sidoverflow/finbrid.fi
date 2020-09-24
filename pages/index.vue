<template>
	<v-container fluid class="pa-0">
		<!-- <v-card class="rounded-t-xl mb-4" color="tran" width="auto" height="300px" elevation="0"> -->
		<div class="top-container">
			<v-card-text class="text-h4 font-weight-bold white--text mb-4 text-center">
				Utilizing industry and technological
				knowhow.
			</v-card-text>
			<v-divider class="hidden-sm-and-down divider"></v-divider>
			<v-divider dark class="hidden-md-and-up"></v-divider>
			<div align="center">
				<v-img class="hidden-sm-and-down mb-n5 mt-6" contain width="18%" :src="this.finbridLogo"></v-img>
			</div>
			<div align="center">
				<v-img class="hidden-md-and-up mb-n5 mt-6" contain width="50%" :src="this.finbridLogo"></v-img>
			</div>

			<v-card-text class="text-h5 font-weight-medium white--text font-italic text-center">
				brings together power with propulsion for operational
				success
			</v-card-text>
		</div>
		<!-- </v-card> -->
		<v-row class="px-12 mt-4 hidden-sm-and-down">
			<v-col v-for="card in cards" :key="card.title" :cols="card.flex">
				<v-card class="rounded-lg" href="/finbrid-website/what_we_do">
					<v-img
						:src="card.src"
						class="white--text align-end"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="26em"
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
	</v-container>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				title: 'Technology',
				src: require('@/components/yacht.jpg'),
				flex: 3,
				dialog: 'techModal',
			},
			{
				title: 'Business',
				src: require('@/components/business.jpg'),
				flex: 3,
				dialog: 'businessModal',
			},
			{
				title: 'Solutions',
				src: require('@/components/solutions.jpg'),
				flex: 3,
				dialog: 'solutionsModal',
			},
			{
				title:
					'Project <br class="responsive" /> Financing <br /> & Investment',
				src: require('@/components/investment.jpg'),
				flex: 3,
				dialog: 'financingModal',
			},
		],
	}),
	computed: {
		finbridLogo() {
			return require('@/components/fintext_ps.png');
		},
	},
};
</script>

<style>
.top-container {
	padding-top: 2.5em;
	padding-left: 2em;
	padding-right: 2em;
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
