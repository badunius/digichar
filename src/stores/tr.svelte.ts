const en = {
	language: 'English',
	attr_will: 'will',
	attr_skill: 'skill',
	attr_might: 'might',
	res_stamina: 'stamina',
	res_health: 'health',
	res_luck: 'luck',
	field_character_name: 'Your character name goes here',
	field_background: 'background',
	field_skills_and_bonds: 'skills & bonds',
	field_inventory: 'inventory',
	field_equipment: 'equipment',
	field_wearables: 'wearables',
	field_statuses: 'statuses',
	field_notes: 'notes',
	menu_header: 'Menu',
	menu_edit_mode: 'Edit mode',
	menu_re_roll: 'Reroll',
	roll_clear: 'Clear history',
}

type Dict = typeof en

const ru: Dict = {
	language: 'Русский',
	attr_will: 'воля',
	attr_skill: 'ловкость',
	attr_might: 'мощь',
	res_stamina: 'Выносливость',
	res_health: 'Здоровье',
	res_luck: 'Удача',
	field_character_name: 'Имя твоего персонажа',
	field_background: 'предыстория',
	field_skills_and_bonds: 'навыки и связи',
	field_inventory: 'инвентарь',
	field_equipment: 'снаряжение',
	field_wearables: 'носимые',
	field_statuses: 'статусы',
	field_notes: 'заметки',
	menu_header: 'Меню',
	menu_edit_mode: 'Редактирование',
	menu_re_roll: 'Переролить',
	roll_clear: 'Очистить историю',
}

const loc = {
	en,
	ru,
}

export type Lang = keyof typeof loc

type Translator = (id: string) => string

class Intl {
	#locale: Lang = $state('en')

	constructor() {
		const browserLang = navigator.language.split('-')[0]
		console.log({ browserLang })
		this.select('en')
	}

	get tr(): Translator {
		return (id: string) => {
			const dict: Dict = loc[this.#locale]
			return dict?.[id as keyof Dict] ?? id
		}
	}

	get locale() {
		return this.#locale
	}

	get list() {
		return Object.keys(loc) as Lang[]
	}

	select(locale: Lang) {
		this.#locale = locale
	}
}

export const intl = new Intl()
