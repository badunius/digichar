<script lang="ts">
	import RollEntry from '$lib/comps/RollEntry.svelte'
	import { diceRoller } from '$stores/dice.svelte'

	let last = $derived(diceRoller.history.length - 1)
</script>

<div class="roller-root">
	{#if last >= 0}
		<button onclick={() => diceRoller.clear()}>Clear history</button>
	{/if}

	{#each diceRoller.history as _, index}
		<RollEntry {index} primary={index === last} />
	{/each}
</div>

<style lang="scss">
	.roller-root {
		position: fixed;
		left: 16px;
		bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
