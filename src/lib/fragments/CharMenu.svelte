<script lang="ts">
	import CheckBox from '$lib/fields/CheckBox.svelte'
	import MenuIcon from '$lib/icons/MenuIcon.svelte'
	import { is_editing } from '$stores/flags.svelte'
	import { roster } from '$stores/roster.svelte'
	import { intl } from '$stores/tr.svelte'

	function toggleLanguage() {
		const langs = intl.list
		const pos = langs.findIndex((lang) => lang === intl.locale)
		const next = langs[(pos + 1) % langs.length]
		intl.select(next)
	}
</script>

<div class="menu">
	<div class="item">
		<div class="icon">
			<MenuIcon />
		</div>
		<span>{intl.tr('menu_header')}</span>
	</div>
	<button class="item" onclick={() => ($is_editing = !$is_editing)}>
		<div class="icon">
			<CheckBox checked={$is_editing} />
		</div>
		<span>{intl.tr('menu_edit_mode')}</span>
	</button>
	<button class="item" onclick={toggleLanguage}>
		<div class="icon">🌐</div>
		<span>{intl.tr('language')}</span>
	</button>
	<button class="item" onclick={() => roster.reroll()}>
		<div class="icon">🎲</div>
		<span>{intl.tr('menu_re_roll')}</span>
	</button>
</div>

<style lang="scss">
	.menu {
		position: absolute;
		right: 0;
		top: 0;
		transform: translateX(calc(100% + 16px));
		height: 28px;
		max-width: 28px;
		padding: 0;
		overflow: hidden;
		transition: box-shadow 0.25s;
		box-shadow: none;
		background-color: #333;
		border-radius: 8px;

		&:hover {
			max-width: unset;
			height: auto;
			box-shadow: 0 2px 4px #000c;
		}

		.item {
			gap: 8px;
			padding: 4px;
			align-items: center;
			cursor: pointer;
			border: none;
			outline: none;
			background: transparent;
			width: 100%;

			display: grid;
			grid-template-columns: 20px auto;
			gap: 8px;

			.icon {
				width: 20px;
				height: 20px;
				display: grid;
				place-content: center;
			}

			span {
				white-space: nowrap;
				text-align: left;
				padding-right: 8px;
			}

			&:hover {
				background-color: #fff1;
			}
		}
	}
</style>
