<script lang="ts">
	import { roster } from '$stores/roster.svelte'
	import { intl } from '$stores/tr.svelte'
	import CharMenu from './CharMenu.svelte'
</script>

<div class="title panel">
	<input
		bind:value={roster.active.name}
		placeholder={intl.tr('field_character_name')}
	/>
	<CharMenu />
</div>

<style lang="scss">
	.title {
		grid-column: span 3;
		padding: 8px;
		text-align: center;
		position: relative;

		& > input {
			border: none;
			outline: none;
			background: transparent;
			padding: 0;
			margin: 0;
			width: 100%;
			text-align: center;
		}
	}
</style>
