// tailwind.config.js
module.exports = {
	darkMode: 'class', 
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}', // Ensure all relevant files are included
	],
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }
  