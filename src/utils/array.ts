export const blank = (length: number) => Array.from({ length })

export const pick = <T = unknown>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

export const pickSome = <T = unknown>(arr: T[], n = 1): T[] =>
	blank(n)
		.map(() => pick(arr))
		.filter(Boolean)
