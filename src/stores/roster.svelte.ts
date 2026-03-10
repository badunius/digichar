interface Char {
	name: string
	might: number
	skill: number
	will: number
	might_xp: number
	skill_xp: number
	will_xp: number
	stamina: number
	health: number
	luck: number
	background: string
	skills_and_bonds: string
	statuses: string
	equipped: string[]
	stashed: string[]
	wearables: string
	notes: string
}

const ROSTER_KEY = 'ELECTROCHA-1'

const d6 = () => Math.floor(Math.random() * 6) + 1

const defaultChar = (): Char => {
	const raw = {
		name: '',
		might: d6() + d6() + d6() - 10,
		skill: d6() + d6() + d6() - 10,
		will: d6() + d6() + d6() - 10,
		might_xp: 0,
		skill_xp: 0,
		will_xp: 0,
		stamina: 6,
		health: 6,
		luck: 6,
		background: '',
		skills_and_bonds: '',
		statuses: '',
		equipped: [],
		stashed: [],
		wearables: '',
		notes: '',
	}

	raw.stamina = Math.max(6 + raw.might, 6)
	raw.health = Math.max(6 + raw.skill, 6)
	raw.luck = Math.max(6 + raw.will, 6)

	return raw
}

let timer = setTimeout(() => void 0, 1)
const TIMEOUT = 1500

class Roster {
	chars = $state([]) as Char[]
	activeIndex = $state<number>(NaN)

	constructor() {
		$effect.root(() => {
			$effect(() => {
				this.chars.forEach(Object.values)

				clearTimeout(timer)
				timer = setTimeout(() => {
					this.save()
				}, TIMEOUT)
				console.log('Auto-saving pending')
			})
		})
	}

	get active() {
		return this.chars[this.activeIndex]
	}

	load() {
		const json = localStorage.getItem(ROSTER_KEY)
		if (json) {
			this.chars = JSON.parse(json) as Char[]
		} else {
			this.chars = []
			this.create()
		}
		this.activeIndex = 0
	}

	save() {
		const json = JSON.stringify(this.chars)
		localStorage.setItem(ROSTER_KEY, json)
		console.log('Saved')
	}

	create() {
		this.chars = [...this.chars, { ...defaultChar() }]
	}

	select(index: number) {
		this.activeIndex = index
	}

	reroll() {
		this.chars = this.chars.map((char, index) =>
			index === this.activeIndex ? defaultChar() : char
		)
	}
}

export const roster = new Roster()
