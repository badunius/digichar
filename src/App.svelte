<script lang="ts">
	import CharSheet from '$lib/views/CharSheet.svelte'
	import { roster } from '$stores/roster.svelte'

	roster.load()

	$inspect(roster.active)
</script>

<main>
	{#if roster.active}
		<CharSheet />
	{:else}
		Wait for it...
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: var(--unit);
		align-items: center;
		position: relative;
		margin: 0 auto;
		width: fit-content;
	}
</style>
