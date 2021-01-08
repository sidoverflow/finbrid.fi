<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<div
				class="text-h5 text-center font-weight-bold white--text"
			>
				ABOUT US
			</div>
			<v-divider class="hidden-sm-and-down divider"></v-divider>
			<v-divider dark class="my-4 hidden-md-and-up"></v-divider>
			<div class="text-h6 font-weight-regular white--text">
				<span class="font-italic font-weight-medium">
					FINBRID is a partnership of visionary consultants
					with an impeccable reputation in the global marine
					and electrification sector.
				</span>
				​
				<br />
				<br />A combined knowledge of over two decades, we
				know the industry back to front. We're impartial - so
				you will get exactly what you need. <br />​ <br />No
				smoke or mirrors. Straightforward transparent advice
				which helps you navigate the agile tech market. We
				curate the best possible supply chain. Locate long
				term battery solutions. Your needs are our number one
				priority.
				<br />
				<br />Like many, we have embraced the planetary
				seismic shift this year.
				<span class="font-italic"
					>Nature hit the rest button.</span
				>
				<br />
				<br />In response, demand for new vessels and upgraded
				technologies has soared across the globe.
				<br />
				<br />Coastal and inland waterways stakeholders are
				now in a race to exceed regulations.
				<br />
				<br />Finance has become critical factor in everyone's
				process. So our watertight reports enable clients to
				fast track large scale infrastructure projects in a
				seamless manner.
				<br />
				<br />We are proud to be immersed in an incredible
				industry which ushers in cleaner marine environments.
				<br />
				<br />And helping partners both large and small to be
				part of the solution is what makes us tick.
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	head: () => {
		return {
			titleTemplate: '%s - About Us',
		};
	},
};
</script>

<style>
.top-container {
	padding-top: 2.5em;
	padding-left: 18em;
	padding-right: 18em;
}

@media (max-width: 1024px) {
	.top-container {
		padding-top: 1.5em;
		padding-left: 1.5em;
		padding-right: 1.5em;
		padding-bottom: 1.5em;
	}
}

.divider {
	background-color: white;
	margin-left: 30em;
	margin-right: 30em;
	margin-top: 0.8em;
	margin-bottom: 2em;
}
</style>
