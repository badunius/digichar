export function inputNumber(
	node: HTMLInputElement,
	attr: { value: number; max?: number; min?: number }
) {

	const {
		value,
		max = Infinity,
		min = -Infinity
	} = attr

	const updateValue = () => {
		if (node.value === '') return

		let raw = parseFloat(node.value)

		if (isNaN(raw)) raw = 0

		const clamped = Math.max(min, Math.min(raw, max))

		if (raw !== clamped || node.value === '') {
			node.value = clamped.toString()
		}
	}

	node.addEventListener('input', updateValue)
	node.addEventListener('blur', updateValue)

	return {
		destroy() {
			node.removeEventListener('input', updateValue)
			node.removeEventListener('blur', updateValue)
		},
	}
}
