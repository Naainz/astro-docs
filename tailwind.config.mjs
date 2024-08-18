// tailwind.config.mjs
module.exports = {
	darkMode: 'class', 
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}', 
	],
	theme: {
	  extend: {
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  pre: {
				backgroundColor: theme('colors.gray.800'), 
				color: theme('colors.gray.100'), 
				padding: theme('spacing.4'), 
				borderRadius: theme('borderRadius.md'), 
				fontSize: theme('fontSize.sm'), 
				overflowX: 'auto', 
				position: 'relative', 
			  },
			  code: {
				backgroundColor: theme('colors.gray.800'), 
				color: theme('colors.gray.100'), 
				padding: theme('spacing.1'), 
				borderRadius: theme('borderRadius.sm'), 
				fontSize: theme('fontSize.sm'), 
			  },
			  'code::before': {
				content: 'none', 
			  },
			  'code::after': {
				content: 'none', 
			  },
			},
		  },
		  
		  dark: {
			css: {
			  pre: {
				backgroundColor: theme('colors.gray.900'), 
				color: theme('colors.gray.100'), 
			  },
			  code: {
				backgroundColor: theme('colors.gray.900'), 
				color: theme('colors.gray.100'), 
			  },
			},
		  },
		}),
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }
  