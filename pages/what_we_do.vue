<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<div class="text-h6 text-center font-weight-bold white--text">WHAT WE DO</div>
			<v-divider class="divider"></v-divider>
			<div class="text-body-1 font-weight-normal white--text">
				Through our partnerships around the world, Finbrid is able to harness greater project value than its competitors.
				<br />
				<br />Using Finbrid as your consultancy not only reduces our client’s costs but also eliminates all the hassle and complications of working with various vendors to create your perfect solution, with our in-depth knowledge of leading supplier’s
				technology into the battery, propulsion and charging technology. Once we know your operational needs, we will harmonise the most suitable, safe and cost-effective solution tailored to your needs.
				We provide consultancy documentation and reports to enable you to fast track your decision as well.
			</div>
		</div>
		<v-row class="px-14 mt-4">
			<v-col v-for="card in cards" :key="card.title" :cols="card.flex">
				<v-card class="rounded-lg">
					<v-img
						:src="card.src"
						class="white--text align-end"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="280px"
					>
						<v-card-title class="font-weight-bold" v-text="card.title"></v-card-title>
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
				title: 'Technology Evaluation',
				src: require('@/components/yacht.jpg'),
				flex: 3,
			},
			{
				title: 'Business Evaluation',
				src: require('@/components/business.jpg'),
				flex: 3,
			},
			{
				title: 'Solutions',
				src: require('@/components/solutions.jpg'),
				flex: 3,
			},
			{
				title: 'Project Financing & Investment',
				src: require('@/components/investment.jpg'),
				flex: 3,
			},
		],
	}),
};
</script>

<style>
.top-container {
	padding-top: 20px;
	padding-left: 280px;
	padding-right: 280px;
}
.divider {
	background-color: white;
	margin-left: 350px;
	margin-right: 350px;
	margin-top: 10px;
	margin-bottom: 30px;
}
</style>

