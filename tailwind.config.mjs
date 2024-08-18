// tailwind.config.js
module.exports = {
	darkMode: 'class', 
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}', // Ensure all relevant files are included
	],
	theme: {
	  extend: {
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  pre: false, 
			  code: false,
			},
		  },
		}),
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }
  