<script lang="ts">
	import ItemSlot from '$lib/comps/ItemSlot.svelte'
	import Title from '$lib/comps/Title.svelte'
	import { roster } from '$stores/roster.svelte'


	let blank = $derived(
		Array.from({ length: 6 }).map((_, i) => roster.active.equipped[i] ?? '')
	)

	function commit() {
		roster.active.equipped = [...roster.active.equipped]
	}
</script>

<div class="equipment">
	<Title label="field_equipment" />

	{#each blank as item, index}
		<ItemSlot
			bind:item={roster.active.equipped[index]}
			empty={!item?.length}
			oncommit={commit}
		/>
	{/each}
</div>

<style lang="scss">
	.equipment {
		display: flex;
		flex-flow: column;
		gap: 8px;
	}
</style>
