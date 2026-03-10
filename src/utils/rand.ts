import { blank, pick, pickSome } from './array'

const { floor, random } = Math

export const randf = random

export const randi_range = (min = 0, max = 100) => floor(random() * (max - min + 1)) + min

export const makeVarNames = (count: number = 1): string[] => {
	const res: string[] = []

	const rand_name = (): string => {
		var set = pick(['ZZXXYYAAEECC0012', 'RNVVULOOP', '01234567889ABCDEF'].map((s) => s.split('')))

		return pickSome(set, 3).join('')

		// return blank(3)
		// 	.map(() => String.fromCharCode(randi_range(65, 90)))
		// 	.join('')
	}

	const isValid = (str: string): boolean => /^[A-Z]/.test(str)

	while (res.length < count) {
		const name = rand_name()
		if (isValid(name) && res.includes(name) === false) {
			res.push(name)
		}
	}

	return res
}
