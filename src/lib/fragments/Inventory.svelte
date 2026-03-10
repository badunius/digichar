<script lang="ts">
	import ItemSlot from '$lib/comps/ItemSlot.svelte'
	import Title from '$lib/comps/Title.svelte'
	import { roster } from '$stores/roster.svelte'

	const { max } = Math
	let max_capacity = $derived(max(0, roster.active.might))

	let blank = $derived(
		Array.from({ length: max(max_capacity, 12) }).map(
			(_, i) => roster.active.stashed[i] ?? ''
		)
	)

	function commit() {
		roster.active.stashed = [...roster.active.stashed]
	}

</script>

<div class="inventory">
	<div>
		<Title label="field_inventory" />
		(MAX: {max_capacity})
	</div>
	{#each blank as item, index}
		<ItemSlot
			bind:item={roster.active.stashed[index]}
			empty={!item}
			disabled={index >= max_capacity}
			oncommit={commit}
		/>
	{/each}
</div>

<style lang="scss">
	.inventory {
		display: flex;
		flex-flow: column;
		gap: 8px;
	}
</style>
