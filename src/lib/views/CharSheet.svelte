<script lang="ts">
	import Background from '$lib/fragments/Background.svelte'
	import Equipment from '$lib/fragments/Equipment.svelte'
	import Experience from '$lib/fragments/Experience.svelte'
	import Inventory from '$lib/fragments/Inventory.svelte'
	import Notes from '$lib/fragments/Notes.svelte'
	import Resource from '$lib/fragments/Resource.svelte'
	import StatBlock from '$lib/fragments/StatBlock.svelte'
	import Status from '$lib/fragments/Status.svelte'
	import PageTitle from '$lib/fragments/PageTitle.svelte'
	import Wearables from '$lib/fragments/Wearables.svelte'
	import DiceRoller from '$lib/fragments/DiceRoller.svelte'
</script>

<div class="sheet essentials">
	<PageTitle />
	<StatBlock />
	<Resource />
</div>

<div class="sheet">
	<Equipment />
	<div class="two-cols exp-cell">
		<Background />
		<Experience />
	</div>
	<Inventory />
	<div class="two-cells">
		<Status />
		<Wearables />
	</div>
	<Notes />
</div>
<div class="footer"></div>

<DiceRoller />

<style lang="scss">
	.sheet {
		display: grid;
		grid-template-columns: repeat(3, 240px);
		gap: 12px 16px;
		padding: 0 16px;
	}

	.essentials {
		position: sticky;
		top: 0;
		background-image: linear-gradient(
			#333,
			#333 calc(100% - 12px),
			transparent
		);
		padding-bottom: 16px;
		margin-bottom: -16px;
		z-index: 2;
	}

	.two-cols {
		grid-column: span 2;
	}

	.two-cells {
		display: grid;
		grid-template-rows: 240px;
		gap: 12px;
	}

	.exp-cell {
		display: grid;
		grid-template-rows: min-content;
		gap: 12px;
	}

	.footer {
		height: 32px;
	}
</style>
