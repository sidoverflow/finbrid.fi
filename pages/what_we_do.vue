<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<div
				class="text-h5 text-center font-weight-bold white--text"
			>
				WHAT WE DO
			</div>
			<v-divider class="divider"></v-divider>
			<div class="text-h6 font-weight-normal white--text">
				<span class="font-italic">
					Through our partnerships around the world, FINBRID
					is able to harness greater project value than its
					competitors.
				</span>

				<br />
				<br />Using FINBRID as your consultancy not only
				reduces our client’s costs but also eliminates all the
				hassle and complications of working with various
				vendors to create your perfect solution, with our
				in-depth knowledge of leading supplier’s technology
				into the battery, propulsion and charging technology.
				Once we know your operational needs, we will harmonise
				the most suitable, safe and cost-effective solution
				tailored to your needs. We provide consultancy
				documentation and reports to enable you to fast track
				your decision as well.
			</div>
		</div>

		<div class="bottom-container">
			<v-row class="px-12 mt-4 hidden-sm-and-down">
				<v-col
					v-for="card in cards"
					:key="card.title"
					:cols="card.flex"
				>
					<v-card
						class="rounded-lg"
						@click.stop="card.dialog = true"
					>
						<v-img
							:src="card.src"
							class="card-img white--text align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							height="26em"
						>
							<v-card-title
								class="font-weight-bold"
								v-html="card.title"
							></v-card-title>
						</v-img>
					</v-card>
				</v-col>
			</v-row>

			<v-row class="px-4 mt-4 hidden-md-and-up">
				<v-col
					v-for="card in cards"
					:key="card.title"
					:cols="6"
				>
					<v-card
						class="rounded-lg"
						@click.stop="card.dialog = true"
					>
						<v-img
							:src="card.src"
							class="card-img white--text align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							height="13em"
						>
							<v-card-title
								class="font-weight-bold"
								v-html="card.title"
							></v-card-title>
						</v-img>
					</v-card>
				</v-col>
			</v-row>
		</div>

		<div
			v-for="card in cards"
			:key="card.title"
			style="white-space: pre-line;"
		>
			<v-dialog dark v-model="card.dialog" width="50em">
				<v-card color="#141d36" class="rounded-xl">
					<v-toolbar
						extended
						class="mb-3 pt-6"
						color="accent"
					>
						<v-card-title
							class="text-uppercase text-h5 font-weight-black"
							v-html="card.title"
						></v-card-title>
						<v-spacer></v-spacer>
						<v-btn
							color="white"
							icon
							@click.native="card.dialog = false"
						>
							<v-icon>fa fa-times-circle</v-icon>
						</v-btn>
					</v-toolbar>

					<v-card-text
						class="text-body-1 text-uppercase font-weight-bold red--text"
						v-for="tag in card.tags"
						:key="tag"
						v-html="tag"
					></v-card-text>

					<v-card-text
						class="text-body-1 font-italic"
						v-for="description in card.descriptions"
						:key="description"
						v-html="description"
					></v-card-text>

					<v-expansion-panels
						inset
						dark
						v-for="title in card.titles"
						:key="title"
						hover
					>
						<v-expansion-panel>
							<v-expansion-panel-header
								class="text-h5 font-weight-bold"
								v-text="title"
							></v-expansion-panel-header>
							<v-expansion-panel-content
								class="text-body-1 font-italic pa-5"
								v-html="card.expansions[title]"
							></v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>

					<div v-if="isReadMore" class="px-2">
						<v-card-text
							class="text-body-1 font-italic"
							v-for="read in card.readMore"
							:key="read"
							v-html="read"
						></v-card-text>
					</div>

					<v-card-actions v-if="card.readMore">
						<v-spacer></v-spacer>
						<v-btn
							v-if="!isReadMore"
							rounded
							outlined
							color="white"
							class="rm-btn ma-2"
							small
							@click="isReadMore = !isReadMore"
							>Read More</v-btn
						>
						<v-btn
							v-if="isReadMore"
							rounded
							outlined
							color="white"
							class="rm-btn ma-2"
							small
							@click="isReadMore = !isReadMore"
							>Read Less</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				title:
					'Technology <br class="responsive" /> Evaluation',
				src: require('@/components/wwd_technology.jpg'),
				flex: 3,
				tags: [
					'Hybrid propulsion system validation',
					'Battery technology and makers validation',
					'Propulsion system calculation',
					'Propulsion concept design development',
					'CAPEX, OPEX calculation',
					'System efficiency calculation',
					'Technology comparison',
					'ROI calculation',
				],
				descriptions: [
					'FINBRID are hard wired to set new trends. Improve on the old norm. Set new standards with constant horizon scanning.',
					"We only work with the most reliable partners. <br /> And here's a small boast - tech suppliers prefer working with us too.",
				],
				readMore: [
					'While the technology world is ever evolving, new chemistry and longer life cycles with higher efficiency are coming to market. FINBRID is in constant contact with the leading technology companies. ',
					'With our consultancy services we can quickly evaluate the most fit for purpose energy source. We would evaluate the most suitable battery technology. This would be based on main principles; safety and cooling matched to your operational needs and vessel safety. Best energy efficiency / density. Best space and weight. Best value in terms of capex vs life cycle as a result of operational needs. Classification evaluation needs.  Here we would deliver you a report to enable you expedite your decision process and or gain your investors / project owners approval.',
				],
				dialog: false,
			},
			{
				title:
					'Business <br class="responsive" /> Evaluation',
				src: require('@/components/wwd_business.jpg'),
				flex: 3,
				tags: [
					'Business development consultancy <br /> (new markets, clients, investment programs)',
					'Sales consultancy <br /> (new contracts, customers)',
					'Assisting technology companies with the growth plan into diverse markets',
					'Strong position to bring European technology and knowhow to APAC market',
					'Accelerate growth potential',
				],
				descriptions: [
					'Our range of expertise spans the entire spectrum to bring projects to life.',
					'We consistently deliver to large scale projects across Asia and Europe.',
					'Our success lies in strong relationships with partners in financial and tech services.  That means faster growth and access to richer market segments. All under one digital roof.',
				],
				dialog: false,
			},
			{
				title: 'Solutions',
				src: require('@/components/wwd_solutions.jpg'),
				flex: 3,
				titles: [
					'CHARGING',
					'ENERGY STORAGE SYSTEMS',
					'CONTAINER AND BARGING SOLUTIONS',
				],
				expansions: {
					CHARGING:
						'Energy storage and shore charge infrastructure play a pivotal role to both operational success and the balance between on and off vessel energy. <br /> <br /> Your fleet will have ultimate efficiency for operational success. While placing paying customers first. We never lose sight of our purpose. ',
					'ENERGY STORAGE SYSTEMS':
						"Markets are in current flux. That's why FINBRID offers smart grod load solutions to make everything more cost efficient. ",
					'CONTAINER AND BARGING SOLUTIONS':
						'Are you confused about switching from diesel to a cleaner form of energy? <br /> <br /> Our experts work alongside our clients to recommend the optimal charging and propulsion for every type of vessel.',
				},
				dialog: false,
			},
			{
				title:
					'Project <br class="responsive" /> Financing <br /> & Investment',
				src: require('@/components/wwd_finance.jpg'),
				flex: 3,
				descriptions: [
					'FINBRID has a powerful presence amongst banks and financing providers.',
					"It's what sets us apart from the rest. Our one stop shop approach means you hand over your problems to us.",
					'It just takes one call.',
				],
				dialog: false,
			},
		],
		isReadMore: false,
	}),
};
</script>

<style>
.top-container {
	padding-top: 2.5em;
	padding-left: 18em;
	padding-right: 18em;
}

@media (max-width: 960px) {
	.top-container {
		padding-top: 1.5em;
		padding-left: 1.5em;
		padding-right: 1.5em;
		padding-bottom: 1.5em;
	}
}

@media (max-width: 960px) {
	.bottom-container {
		padding-top: 1em;
	}
}

.divider {
	background-color: white;
	margin-left: 30em;
	margin-right: 30em;
	margin-top: 0.8em;
	margin-bottom: 2em;
}
.card-img:hover {
	opacity: 0.8;
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
