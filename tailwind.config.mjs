// tailwind.config.js
module.exports = {
	darkMode: 'class', // Enables dark mode by adding a 'dark' class
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}',
	],
	theme: {
	  extend: {},
	},
	plugins: [
	  require('@tailwindcss/typography'), // Enables the 'prose' class
	],
  }
  