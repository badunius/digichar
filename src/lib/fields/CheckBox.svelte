<script lang="ts">
	type Props = {
		checked?: boolean
	}

	let { checked = $bindable(false) }: Props = $props()
</script>

<div class="box">
	<div class="check" class:checked></div>
</div>

<style lang="scss">
	.box {
		padding: 2px;
		margin: 4px;
		height: 12px;
		width: 12px;
		border: 1px solid;
		background-color: transparent;

		.check {
			transition: all 0.25s;
			background-color: transparent;
			height: 100%;

			&.checked {
				background-color: var(--color-text);
			}
		}
	}
</style>
