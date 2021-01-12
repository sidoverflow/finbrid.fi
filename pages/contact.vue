<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<div class="text-h6 text-center font-weight-bold white--text">CONTACT US</div>
			<v-divider class="hidden-sm-and-down divider"></v-divider>
			<v-divider dark class="my-4 hidden-md-and-up"></v-divider>
			<v-row>
				<v-col cols="8" class="hidden-sm-and-down">
					<iframe
						width="90%"
						height="450em"
						class="g-maps"
						style="border: 0"
						frameborder="0"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Qh66cVcsfDGcTFUcRPkvX-PCVTtAY9E
    &q=Helsinki,Finland&zoom=13"
						allowfullscreen
					></iframe>
				</v-col>
				<v-col cols="4" class="hidden-sm-and-down">
					<form action="https://formspree.io/f/myyblppn" method="POST">
						<v-text-field
							dark
							color="white"
							label="Name"
							outlined
							rounded
							required
							name="name"
						></v-text-field>

						<v-text-field
							dark
							color="white"
							label="Email"
							outlined
							rounded
							required
							name="_replyto"
						></v-text-field>

						<v-text-field
							dark
							color="white"
							label="Subject"
							outlined
							rounded
							required
							name="_subject"
						></v-text-field>

						<v-textarea
							dark
							color="white"
							label="Message"
							height="200px"
							outlined
							no-resize
							rounded
							required
							name="message"
						></v-textarea>

						<v-btn
							rounded
							outlined
							color="green"
							class="mr-6 pa-4 font-weight-bold"
							type="submit"
						>
							<v-icon x-small class="mr-2">far fa-paper-plane</v-icon>Submit
						</v-btn>
					</form>
				</v-col>
				<v-col cols="12" class="hidden-md-and-up">
					<iframe
						width="100%"
						height="280em"
						class="g-maps"
						style="border: 0"
						frameborder="0"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Qh66cVcsfDGcTFUcRPkvX-PCVTtAY9E
    &q=Helsinki,Finland&zoom=13"
						allowfullscreen
					></iframe>
				</v-col>
				<v-col cols="12" class="hidden-md-and-up">
					<form action="https://formspree.io/f/xeqpvggk" method="POST">
						<v-text-field
							dark
							color="white"
							label="Name"
							outlined
							rounded
							required
							name="name"
						></v-text-field>

						<v-text-field
							dark
							color="white"
							label="Email"
							outlined
							rounded
							required
							name="_replyto"
						></v-text-field>

						<v-text-field
							dark
							color="white"
							label="Subject"
							outlined
							rounded
							required
							name="_subject"
						></v-text-field>

						<v-textarea
							dark
							color="white"
							label="Message"
							height="200px"
							outlined
							no-resize
							rounded
							required
							name="message"
						></v-textarea>

						<v-btn
							rounded
							outlined
							color="green"
							class="mr-6 pa-4 font-weight-bold"
							type="submit"
						>
							<v-icon x-small class="mr-2">far fa-paper-plane</v-icon>Submit
						</v-btn>
					</form>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
export default {
	head: () => {
		return {
			title: 'Contact',
			meta: [{ hid: 'description', name: 'description', content: 'Contact us' }],
		};
	},
};
</script>

<style>
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
.g-maps {
	border-radius: 2em;
}
</style>
