<script lang="ts">
	import StatBox from '$lib/comps/StatBox.svelte'
	import { is_editing } from '$stores/flags.svelte'
	import { roster } from '$stores/roster.svelte'
</script>

<StatBox
	label="attr_might"
	bind:value={roster.active.might}
	bind:xp={roster.active.might_xp}
	editing={$is_editing}
/>
<StatBox
	label="attr_skill"
	bind:value={roster.active.skill}
	bind:xp={roster.active.skill_xp}
	editing={$is_editing}
/>
<StatBox
	label="attr_will"
	bind:value={roster.active.will}
	bind:xp={roster.active.will_xp}
	editing={$is_editing}
/>
