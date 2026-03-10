<script lang="ts">
	import { inputNumber } from '$lib/actions/inputNumber'
	import { intl } from '$stores/tr.svelte'

	let { tr } = intl

	type Props = {
		label: string
		value: number
		capacity: number
		unlimited?: boolean
	}
	let {
		label,
		value = $bindable(),
		capacity,
		unlimited = false,
	}: Props = $props()

	function onChange(e: Event) {
		const target = e.target as HTMLInputElement
		const parsed = parseInt(target.value)
		if (!isNaN(parsed)) {
			value = parsed
		}
	}
</script>

<div class="box panel">
	<div class="label">{tr(label)}</div>
	<div class="inputs" class:unlimited>
		<div class="value">
			<input
				value={isNaN(value) ? '' : value}
				use:inputNumber={{
					max: capacity,
					value,
					min: unlimited ? 0 : -capacity,
				}}
				oninput={onChange}
			/>
		</div>
		{#if !unlimited}
			<div class="slash">/</div>
			<div class="capacity">{capacity}</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.box {
		padding: 8px;

		.label {
			// width: 50%;
			text-align: center;
			text-transform: capitalize;
			// white-space: nowrap;
			// overflow: hidden;
			// text-overflow: ellipsis;
		}

		.inputs {
			display: grid;
			grid-template-columns: 1fr min-content 1fr;
			align-items: baseline;

			&.unlimited {
				grid-template-columns: repeat(1, 1fr);
			}

			input,
			.capacity,
			.slash {
				font-size: 24px;
				width: 100%;
				text-align: center;
			}

			input {
				border: none;
				outline: none;
				background: transparent;
				border-bottom: 1px dotted;
			}
		}
	}
</style>
