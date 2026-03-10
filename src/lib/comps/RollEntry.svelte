<script lang="ts">
	import { diceRoller } from '$stores/dice.svelte'
	import { intl } from '$stores/tr.svelte'

	type Props = {
		index: number
		primary?: boolean
	}
	let { index, primary = false }: Props = $props()

	let roll = $derived(diceRoller.history[index])
	let sign = $derived(roll.plus < 0 ? '-' : '+')
</script>

<div class={`roll panel ${roll.attr}`} class:primary>
	<div class="title" class:roll.attr>
		{intl.tr(roll.attr)}: {roll.roll + roll.plus}
	</div>
	<div class="result">
		{#if primary}
			{roll.roll}
			{sign}
			{Math.abs(roll.plus)}
		{/if}
	</div>
</div>

<style lang="scss">
	.roll {
		display: flex;
		flex-direction: row;
		gap: 8px;
		padding: 8px;
		align-items: center;
		min-width: 160px;

		.title {
			font-size: 16px;
			text-transform: capitalize;
		}

		&.primary {
			flex-direction: column;

			.title {
				font-size: 24px;
			}
		}

		.result {
			font-size: 32px;
			font-weight: 700;
		}
	}
</style>
