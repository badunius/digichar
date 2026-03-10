export interface Abilities {
	ability_str: number
	ability_dex: number
	ability_con: number
	ability_int: number
	ability_wis: number
	ability_cha: number
}

export interface Skills {
	skill_athletics: number
}

export type Gains = Partial<Skills & Abilities>

export type Boon = { gains: Gains } & (
	| {
			type: 'chose_n'
			count: number
	  }
	| {
			type: 'get_all'
	  }
	| { type: 'pick_some'; count: number }
)
