<template>
	<div class="mx-10">
		<img class="FinbridLogo" alt="Finbrid Logo" src="./fin_ps.png" />
		<img class="FinbridText my-6" alt="Finbrid Logo" src="./fintext_ps.png" />
	</div>
</template>

<style>
.FinbridLogo {
	height: 120px;
	transform: rotateY(560deg);
	animation: turn 3.5s ease-out forwards 1s;
}
.FinbridText {
	height: 60px;
}
@keyframes turn {
	100% {
		transform: rotateY(0deg);
	}
}
</style>
