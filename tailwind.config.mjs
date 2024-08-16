// tailwind.config.js
module.exports = {
	content: [
	  './src/**/*.{js,ts,jsx,tsx,astro,mdx}',
	],
	theme: {
	  extend: {
		transitionProperty: {
		  'colors': 'background-color, border-color, color, fill, stroke',
		},
	  },
	},
	plugins: [
		require('@tailwindcss/typography'),
	  ],
	darkMode: 'class',
  }