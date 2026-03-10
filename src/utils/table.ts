import { pick } from "./array"

export interface Table<T = unknown> {
	roll: () => T
}

export class List<T = unknown> implements Table<T> {
	#data: T[]

	constructor(data: T[]) {
		this.#data = data
	}

	roll() {
		return pick(this.#data)
	}
}

export class Joint<T = unknown> implements Table<T> {
	#data: T[]
	
	constructor(data: T[]) {
		this.#data = data
	}

	roll() {
		return pick(this.#data)
	}
}