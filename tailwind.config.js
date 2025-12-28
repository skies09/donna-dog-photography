/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	theme: {
		colors: {
			colorOne: "#4A5568", // Soft slate blue-gray for elegant text
			colorTwo: "#B8A9D9", // Soft lavender purple for accents
			colorThree: "#F8F6F9", // Soft cream-ivory for backgrounds
			colorFour: "#9BB5D1", // Soft periwinkle blue for primary actions
			colorFive: "#D4C5E8", // Soft lilac for secondary accents
			buttonBlue: "#6B8FA8", // Darker blue for button backgrounds
			buttonPurple: "#8B7AA8", // Darker purple for button backgrounds
		},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
			serif: ["Playfair Display", "serif"],
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
					"0 0 5px #9BB5D1, 0 0 10px #9BB5D1, 0 0 20px #9BB5D1, 0 0 40px #9BB5D1",
				"shadow-colorTwo":
					"0 0 5px #B8A9D9, 0 0 10px #B8A9D9, 0 0 20px #B8A9D9, 0 0 40px #B8A9D9",
				"shadow-elegant": "0 4px 20px rgba(184, 169, 217, 0.15), 0 2px 8px rgba(155, 181, 209, 0.1)",
			},
		
		},
	},
  plugins: [],
}

