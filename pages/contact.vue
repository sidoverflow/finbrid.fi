<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<div class="text-h6 text-center font-weight-bold white--text">CONTACT US</div>
			<v-divider class="divider"></v-divider>
			<v-row>
				<v-col cols="8" class="hidden-sm-and-down">
					<iframe
						width="90%"
						height="450em"
						class="g-maps"
						style="border:0"
						frameborder="0"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Qh66cVcsfDGcTFUcRPkvX-PCVTtAY9E
    &q=Helsinki,Finland&zoom=13"
						allowfullscreen
					></iframe>
				</v-col>
				<v-col cols="4" class="hidden-sm-and-down">
					<v-form ref="form" class="contact-form" v-model="valid" lazy-validation>
						<v-text-field
							v-model="name"
							dark
							color="white"
							:rules="nameRules"
							label="Name"
							outlined
							rounded
							required
						></v-text-field>

						<v-text-field
							v-model="email"
							dark
							:rules="emailRules"
							color="white"
							label="Email"
							outlined
							rounded
							required
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
						></v-textarea>

						<v-btn rounded outlined color="green" class="mr-6 pa-4 font-weight-bold" href="/">
							<v-icon x-small class="mr-2">far fa-paper-plane</v-icon>Submit
						</v-btn>
					</v-form>
				</v-col>
				<v-col cols="12" class="hidden-md-and-up">
					<iframe
						width="100%"
						height="280em"
						class="g-maps"
						style="border:0"
						frameborder="0"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Qh66cVcsfDGcTFUcRPkvX-PCVTtAY9E
    &q=Helsinki,Finland&zoom=13"
						allowfullscreen
					></iframe>
				</v-col>
				<v-col cols="12" class="hidden-md-and-up">
					<v-form ref="form" class="contact-form" v-model="valid" lazy-validation>
						<v-text-field
							v-model="name"
							dark
							color="white"
							:rules="nameRules"
							label="Name"
							outlined
							rounded
							required
						></v-text-field>

						<v-text-field
							v-model="email"
							dark
							:rules="emailRules"
							color="white"
							label="Email"
							outlined
							rounded
							required
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
						></v-textarea>

						<v-btn rounded outlined color="green" class="mr-6 pa-4 font-weight-bold" href="/">
							<v-icon x-small class="mr-2">far fa-paper-plane</v-icon>Submit
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

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
