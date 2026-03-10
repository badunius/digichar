<script>
	import ResourceBox from '$lib/comps/ResourceBox.svelte'
	import { roster } from '$stores/roster.svelte'
	const { max } = Math
</script>

<ResourceBox
	label="res_stamina"
	bind:value={roster.active.stamina}
	capacity={max(6, roster.active.might + 6)}
/>
<ResourceBox
	label="res_health"
	bind:value={roster.active.health}
	capacity={max(6, roster.active.skill + 6)}
/>
<ResourceBox
	label="res_luck"
	bind:value={roster.active.luck}
	capacity={Infinity}
	unlimited
/>
