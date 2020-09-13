<template>
	<v-container fluid class="pa-0">
		<div class="top-container">
			<div
				class="text-h6 text-center font-weight-bold white--text"
			>
				CONTACT US
			</div>
			<v-divider class="divider"></v-divider>
			<v-row>
				<v-col cols="8">
					<iframe
						width="700"
						height="450"
						class="g-maps"
						style="border:0"
						frameborder="0"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Qh66cVcsfDGcTFUcRPkvX-PCVTtAY9E
    &q=Simonkatu+1,00100+Helsinki,Finland"
						allowfullscreen
					>
					</iframe>
				</v-col>
				<v-col cols="4">
					<v-form
						ref="form"
						class="contact-form"
						v-model="valid"
						lazy-validation
					>
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

						<v-btn
							rounded
							outlined
							color="green"
							class="mr-6 pa-4 primary--text font-weight-bold"
							href="/"
							small
						>
							<v-icon x-small class="mr-2"
								>far fa-paper-plane</v-icon
							>Submit
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<style>
.top-container {
	padding-top: 20px;
	padding-left: 180px;
	padding-right: 180px;
}
.divider {
	background-color: white;
	margin-left: 450px;
	margin-right: 450px;
	margin-top: 10px;
	margin-bottom: 50px;
}
.g-maps {
	border-radius: 30px;
}
</style>
