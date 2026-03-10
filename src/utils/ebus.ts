import { BusEvent } from '$types/e-bus'

export const bus = {
	create_race: new BusEvent<{ raceName?: string }>(),
	create_char: new BusEvent(),
	compendium: new BusEvent(),
}

const enh = window as Window & typeof globalThis & { ['EBUS']: typeof bus }
enh['EBUS'] = bus
