<script lang="ts">
	import Title from '$lib/comps/Title.svelte'
	import { roster } from '$stores/roster.svelte'
</script>

<div class="status">
	<Title label="field_skills_and_bonds" />
	<textarea class="text-block" bind:value={roster.active.skills_and_bonds}
	></textarea>
</div>

<style lang="scss">
	.status {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.text-block {
		width: 100%;
		flex: 1;
		max-width: 100%;
		border: 1px dotted;
		outline: none;
		background-color: transparent;
		border-radius: 8px;
		transition: all 0.25s;
		padding: 8px;
		resize: none;

		&:active,
		&:focus {
			background-color: #0001;
		}
	}
</style>
