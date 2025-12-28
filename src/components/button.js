// components/button.js
import { motion } from "framer-motion";

export default function Button({ children, onClick, className = "" }) {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
			className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out shadow-shadow-elegant bg-gradient-to-r from-colorThree to-white border-2 border-colorFour/40 text-buttonBlue hover:bg-gradient-to-r hover:from-white hover:to-colorThree hover:border-colorFour hover:shadow-lg hover:scale-105 font-bold ${className}`}
		>
			{children}
		</motion.button>
	);
}
