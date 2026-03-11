<script lang="ts">
	import { inputNumber } from '$lib/actions/inputNumber'
	import PlusIcon from '$lib/icons/PlusIcon.svelte'
	import { diceRoller } from '$stores/dice.svelte'
	import { intl } from '$stores/tr.svelte'
	import Title from './Title.svelte'

	type Props = {
		label: string
		value: number
		xp: number
		editing: boolean
	}
	let {
		label,
		value = $bindable(),
		xp = $bindable(),
		editing = false,
	}: Props = $props()

	const { tr } = intl

	function onChange(e: Event) {
		const target = e.target as HTMLInputElement
		const parsed = parseInt(target.value)
		console.log('changed %s to %d', label, parsed)
		if (!isNaN(parsed)) {
			console.log('updating')
			value = parsed
		}
	}

	function onUpgrade() {
		const next_xp = xp + 1
		const new_levels = Math.floor(next_xp / 12)
		xp = next_xp - new_levels * 12
		value = value + new_levels
	}

	function onRoll() {
		diceRoller.roll(label, value)
	}
</script>

<div class={`box panel ${label}`}>
	<div class="level" class:editing>
		{#if editing}
			<input
				value={isNaN(value) ? '' : value}
				use:inputNumber={{ value }}
				oninput={onChange}
			/>
		{:else}
			<button class="roller" onclick={onRoll}>
				{value}
			</button>
		{/if}
	</div>
	<div class="label">
		<div class="text">
			{tr(label)}
		</div>
		<div class="xp">
			{xp} / 12
		</div>
	</div>
	<button class="upper" class:editing disabled={editing} onclick={onUpgrade}>
		<PlusIcon size={36} />
	</button>
</div>

<style lang="scss">
	.box {
		padding: 8px;
		display: flex;
		flex-flow: row nowrap;
		gap: 16px;
		align-items: center;

		.level {
			border: 1px solid;
			width: 64px;
			height: 64px;
			flex: 0 0 64px;
			display: grid;
			place-content: center;
			font-size: 32px;
			font-weight: 700;
			border-radius: 50%;
			overflow: hidden;
			transition:
				border-radius 0.25s,
				background-color 0.25s,
				border-style 0.25s;

			input {
				font-size: 32px;
				font-weight: 700;
				text-align: center;
				border: none;
				outline: none;
				background-color: transparent;
			}

			.roller {
				width: 64px;
				height: 64px;
				border: none;
				outline: none;
				background-color: transparent;
				font-size: 32px;
				font-weight: 700;
				text-align: center;
				cursor: pointer;
				color: currentColor;
				transition: background-color 0.25s;

				&:hover {
					background-color: #0001;
				}
			}

			&.editing {
				border-radius: 0;
				border-style: dotted;
				background-color: #0001;
			}
		}

		.label {
			font-size: 24px;
			font-weight: 500;
			flex: 1 1 1px;
			width: 1px;
			position: relative;
			.text {
				text-transform: capitalize;
				white-space: nowrap;
				overflow-x: hidden;
				text-overflow: ellipsis;
			}

			.xp {
				position: absolute;
				font-size: 12px;
				opacity: 0.5;
			}
		}

		.upper {
			color: #8e6;
			border-radius: 50%;
			background-color: #0000;
			border: 1px solid;
			padding: 0;
			margin: 0;
			display: grid;
			place-content: center;
			cursor: pointer;
			transition:
				background-color 0.25s,
				box-shadow 0.25s;

			&:hover:not(.editing) {
				background-color: #0001;
				box-shadow: 0 0 8px;
			}

			&.editing {
				opacity: 0.5;
				cursor: default;
			}
		}
	}
</style>
