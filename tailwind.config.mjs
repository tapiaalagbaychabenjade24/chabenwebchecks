/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				midnight: '#1B1E2B',
				gray: '#292D3E',
				periwinkle: '#A6ACCD',
				blue: '#89DDFF',
				lavender: '#C792EA',
				pink: '#FF5370',
				yellow: '#FFCB6B'
			}
		}
	},
	plugins: []
};
