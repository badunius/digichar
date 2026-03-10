<script lang="ts">
	import Title from '$lib/comps/Title.svelte'
	import { roster } from '$stores/roster.svelte'
</script>

<div class="background">
	<Title label="field_background" />
	<input bind:value={roster.active.background} />
</div>

<style lang="scss">
	.background {
		display: flex;
		flex-direction: column;
		gap: 8px;

		input {
			width: 100%;
			min-height: 36px;
			border: 1px dotted;
			border-radius: 8px;
			padding: 8px;
			outline: none;
			background: transparent;
			text-align: center;
			transition: all 0.25s;

			&:active,
			&:focus {
				background-color: #0001;
			}

			// &.empty:not(:focus) {
			// 	opacity: 0.6;
			// }
		}
	}
</style>
