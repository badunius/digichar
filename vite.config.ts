import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		{
			name: 'markdown-loader',
			transform(code, id) {
				if (id.slice(-3) === '.md') {
					// For .md files, get the raw content as a string
					return `export default ${JSON.stringify(code)};`
				}
			},
		},
	],
	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$lib: path.resolve('./src/lib'),
			$utils: path.resolve('./src/utils'),
			$stores: path.resolve('./src/stores'),
			$data: path.resolve('./src/data'),
			$types: path.resolve('./src/types'),
		},
	},
	preview: {
		port: 8080,
	},
})
