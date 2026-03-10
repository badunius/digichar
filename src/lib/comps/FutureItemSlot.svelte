<script lang="ts">
	type Props = {
		item: string
		empty?: boolean
	}
	let { item, empty = false }: Props = $props()
	let tier = ['i', 'ii', 'iii', 'x']?.[Math.floor(Math.random() * 4)]
</script>

<div class="item">
	{#if !empty}
		<span class={`tier ${tier}`}>{tier}</span>
		<span>
			{item || '+'}
		</span>
		<button>⋮</button>
		<!-- <span>🎲</span> -->
	{/if}
</div>

<style lang="scss">
	.item {
		width: 100%;
		min-height: 36px;
		border: 1px dotted;
		border-radius: 8px;
		padding: 8px;
		outline: none;
		background: transparent;
		display: grid;
		grid-template-columns: 20px 1fr 20px;
		align-items: center;
		text-align: center;
		cursor: default;

		button {
			opacity: 0;
			pointer-events: none;
			height: 20px;
			width: 20px;
			display: grid;
			align-items: center;
			border: none;
			background-color: transparent;
			border-radius: 8px;
		}

		&:hover {
			background-color: #fff1;

			button {
				opacity: 1;
				pointer-events: auto;
				cursor: pointer;

				&:hover {
					background-color: #fff1;
				}
			}
		}

		.tier {
			font-size: 12px;
			background-color: #840;
			color: #840;
			border: 1px solid #0005;
			border: 1px outset;
			text-shadow: 0 1px 3px #000;
			box-shadow: 0 0px 2px #000;
			height: 20px;
			width: 20px;
			border-radius: 12px;
			display: grid;
			text-transform: uppercase;

			&.i {
				background-color: #840;
				color: #840;
			}

			&.ii {
				background-color: #abc;
				color: #abc;
			}
			&.iii {
				background-color: #ca3;
				color: #ca3;
			}
			&.x {
				background-color: #b9e;
				color: #b9e;
			}
		}
	}
</style>
