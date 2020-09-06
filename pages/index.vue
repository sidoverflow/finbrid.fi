<template>
	<v-container fluid class="pa-0 my-4">
		<v-card class="rounded-t-xl mb-4" color="white" width="auto" height="300px" elevation="0">
			<v-row>
				<v-col cols="12" md="7">
					<div class="top-container">
						<v-card-text
							class="text-h4 font-weight-bold info--text"
						>Utilizing industry and technological knowhow</v-card-text>
						<v-card-text
							class="text-h5 font-weight-medium info--text"
						>FINBRID brings together power with propulsion for operational success</v-card-text>
					</div>
				</v-col>
				<v-col cols="8" md="4">
					<div class="img-container">
						<v-img contain="true" width="100%" :src="this.boatImage"></v-img>
					</div>
				</v-col>
			</v-row>
		</v-card>
		<v-row class="mx-2">
			<v-col v-for="card in cards" :key="card.title" :cols="card.flex">
				<v-card class="rounded-xl">
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
import Logo from '~/components/Logo.vue';

export default {
	data: () => ({
		cards: [
			{
				title: 'Technology',
				src: '@/components/yacht.jpg',
				flex: 3,
			},
			{
				title: 'Business',
				src:
					'https://cdn.vuetifyjs.com/images/cards/house.jpg',
				flex: 3,
			},
			{
				title: 'Solutions',
				src:
					'https://cdn.vuetifyjs.com/images/cards/road.jpg',
				flex: 3,
			},
			{
				title: 'Project Financing & Investment',
				src:
					'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
				flex: 3,
			},
		],
	}),
	components: {
		Logo,
	},
	computed: {
		boatImage() {
			return require(`../components/boat_vector.png`);
		},
	},
};
</script>

<style>
.top-container {
	padding-top: 80px;
	padding-left: 25px;
}
.img-container {
	padding-top: 50px;
	padding-right: 10px;
}
</style>

