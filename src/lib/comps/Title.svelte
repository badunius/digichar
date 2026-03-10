<script lang="ts">
	import { intl } from '$stores/tr.svelte'

	type Props = {
		label: string
	}

	let { label }: Props = $props()
</script>

<div class="title">{intl.tr(label)}</div>

<style lang="scss">
	.title {
		text-transform: capitalize;
		overflow-x: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline;
	}
</style>
