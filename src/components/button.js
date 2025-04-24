// components/button.js
import { motion } from "framer-motion";

export default function Button({ children, onClick, className = "" }) {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
			className={`px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-lg bg-colorFour text-colorThree hover:bg-colorFive hover:text-colorOne ${className}`}
		>
			{children}
		</motion.button>
	);
}
