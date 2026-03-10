type RollInfo = {
	attr: string
	roll: number
	plus: number
}

class DiceRoller {
	lastRoll = $state(0)
	history = $state<RollInfo[]>([])

	roll(attr: string, base: number, sides: number = 20) {
		const roll = Math.floor(Math.random() * sides) + 1
		this.lastRoll = roll
		this.history = [...this.history, { roll, attr, plus: base }].slice(-10)
		return roll
	}

	clear() {
		this.history = []
	}
}

export const diceRoller = new DiceRoller()
