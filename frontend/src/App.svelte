<script>
	import { onMount } from "svelte";

	import Splash from "./views/Splash.svelte";
	import Main from "./views/Main.svelte";
	import PlayRoom from "./views/PlayRoom.svelte";

	onMount(() => {
		setTimeout(() => (splashScreen = false), 4000);
	});
	let splashScreen = true;
	let page = "DASHBOARD";
</script>

<main>
	{#if splashScreen}
		<Splash />
	{:else if page == "DASHBOARD"}
		<div class="container">
			<Main on:joinRoom={() => (page = "PLAY")} />
		</div>
	{:else if page == "PLAY"}
		<div class="container">
			<PlayRoom />
		</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
		background: #a4bbd6;
		height: 100vh;
		width: 100%;
	}
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
