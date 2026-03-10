import type { Dict } from '$utils/dict'
import type { Abilities, Boon, Skills } from './char'
import type { FeatureID } from './features'

type Range = [number, number]

type Language = 'common' | 'giant'

type ToolID = 'flute'

export type Race = {
	id: string
	name: string
	adult_age: number
	elder_age: number
	terminal_age: number
	abilities?: Boon //Partial<Abilities>
	skills?: Partial<Skills>
	features?: FeatureID[]
	languages?: Language[]
	tools?: ToolID[]
	speed: number
	/* feet */
	height: Range
	/* pounds */
	weight: Range
	size: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
	/* -1 evil .. +1 good */
	good_evil: number
	/* -1 chaos .. +1 order */
	chaos_order: number
}

type SubRace = Partial<Race> & { id: string; origin: keyof typeof race }

export const race = {
	// race_human: {
	// 	id: 'race_human',
	// 	name: 'Human',
	// 	adult_age: 16,
	// 	elder_age: 50,
	// 	terminal_age: 80,
	// 	abilities: {}
	// },
	race_dwarf: {
		id: 'race_dwarf',
		name: 'Dwarf',
		adult_age: 50,
		elder_age: 250,
		terminal_age: 350,
		abilities: { type: 'get_all', gains: { ability_con: 2 } },
		speed: 25,
		height: [4, 5],
		weight: [120, 180],
		size: 'medium',
		good_evil: 0,
		chaos_order: 0,
	},
	race_goliath: {
		id: 'race_goliath',
		name: 'Goliath',
		adult_age: 24,
		elder_age: 75,
		terminal_age: 100,
		height: [7, 8],
		weight: [280, 340],
		size: 'medium',
		speed: 30,
		good_evil: 0,
		chaos_order: 0.5,
		abilities: {
			type: 'get_all',
			gains: {
				ability_str: 2,
				ability_con: 1,
			},
		},
		features: [
			'feat_natural_athelete',
			'feat_stone_s_endurance',
			'feat_mountain_born',
			'feat_powerful_build',
		],
	},
} satisfies Dict<Race>

export const sub_race = {
	sub_race_hill_dwarf: {
		id: 'sub_race_hill_dwarf',
		origin: 'race_dwarf',
	},
} satisfies Dict<SubRace>
