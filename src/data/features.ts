import type { Dict } from '$utils/dict'
import type { Gains } from './char'

export interface Feature {
	id: string
	name: string
	description: string
	gains?: Gains
}


export const feats = {
	feat_natural_athelete: {
		id: 'feat_natural_athelete',
		name: 'Natural Athelete',
		description: 'You have proficiency in the [[Atheletics skill]]',
		gains: {
			skill_athletics: 1,
		},
	},
	feat_stone_s_endurance: {
		id: 'feat_stone_s_endurance',
		name: "Stone's Endurance",
		description:
			'You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a [d12]. Add your [[Constitution]] modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest',
	},
	feat_powerful_build: {
		id: 'feat_powerful_build',
		name: 'Powerful Build',
		description:
			'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
	},
	feat_mountain_born: {
		id: 'feat_mountain_born',
		name: 'Mountain Born',
		description: 'You have resistance to cold damage. You’re also acclimated to high altitude, including elevations above 20,000 feet.'
	}
} satisfies Dict<Feature>

export type FeatureID = keyof typeof feats
