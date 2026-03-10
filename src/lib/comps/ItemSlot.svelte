<script lang="ts">
	type Props = {
		item: string
		empty?: boolean
		disabled?: boolean
		oncommit?: () => void
	}

	let {
		item = $bindable(),
		empty = false,
		disabled = false,
		oncommit,
	}: Props = $props()

	let ref: HTMLInputElement
	let timer: ReturnType<typeof setTimeout>

	function onKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			oncommit?.()
		}
	}

	$effect(() => {
		const handler = () => {
			clearTimeout(timer)
			timer = setTimeout(() => oncommit?.(), 1000)
		}

		if (ref) {
			ref.addEventListener('input', handler)

			return () => ref.removeEventListener('input', handler)
		}
	})
</script>

<input
	class="item"
	class:empty
	class:disabled
	bind:value={item}
	onblur={oncommit}
	bind:this={ref}
	onkeypress={onKeyPress}
/>

<style lang="scss">
	.item {
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

		&.empty:not(:focus) {
			opacity: 1;
		}

		&.disabled {
			color: #f42;
		}
	}
</style>
