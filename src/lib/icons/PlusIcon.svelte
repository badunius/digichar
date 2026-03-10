<script lang="ts">
	type Props = {
		size?: number
	}
	let { size = 16 }: Props = $props()
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	aria-hidden="true"
	role="img"
	width={size}
	height={size}
	preserveAspectRatio="xMidYMid meet"
	viewBox="0 0 24 24"
>
	<polygon
		points="6,10 10,10 10,6 14,6 14,10 18,10 18,14 14,14 14,18 10,18 10,14 6,14"
		stroke="currentColor"
		fill="none"
	/>
</svg>

<style lang="scss">
	svg {
		flex: 0 0 16px;
	}
</style>
