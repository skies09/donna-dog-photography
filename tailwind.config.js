/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	theme: {
		colors: {
			colorOne: "#374151",   // Professional slate for text
			colorTwo: "#7C6B9E",   // Refined lavender accent
			colorThree: "#F0FFFF", // Background (azure/cyan-tinted white)
			colorFour: "#5B7A9E",  // Muted blue for links & CTAs
			colorFive: "#E8E4F0",  // Light border/secondary
			buttonBlue: "#4A6B8A",
			buttonPurple: "#6B5B95",
			white: "#ffffff",
			black: "#111111",
		},
		fontFamily: {
			sans: ["Open Sans", "system-ui", "sans-serif"],
			serif: ["Playfair Display", "Georgia", "serif"],
			mono: ["Montserrat", "sans-serif"],
			satisfy: ["Satisfy", "cursive"],
			greatVibes: ["Great Vibes", "cursive"],
		},
		extend: {
			transitionDuration: {
				2000: "2000ms",
			},
			boxShadow: {
				"shadow-colorOne":
					"0 0 5px #5B7A9E, 0 0 10px rgba(91, 122, 158, 0.15)",
				"shadow-colorTwo":
					"0 0 5px #7C6B9E, 0 0 10px rgba(124, 107, 158, 0.15)",
				"shadow-elegant": "0 4px 24px rgba(55, 65, 81, 0.08), 0 2px 8px rgba(55, 65, 81, 0.04)",
				"shadow-card": "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(55, 65, 81, 0.06)",
			},
			borderRadius: {
				"xl": "1rem",
				"2xl": "1.25rem",
			},
		},
	},
  plugins: [],
}

