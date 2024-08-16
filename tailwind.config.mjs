// tailwind.config.js
module.exports = {
	darkMode: 'class', 
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}',
	],
	theme: {
	  extend: {},
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }
  