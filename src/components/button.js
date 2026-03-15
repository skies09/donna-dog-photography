import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const baseClass =
	"inline-flex justify-center items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out shadow-shadow-elegant bg-gradient-to-r from-colorThree to-colorThree border-2 border-colorFour/40 text-buttonBlue hover:border-colorFour hover:shadow-lg font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-colorFour focus-visible:ring-offset-2";

export default function Button({ children, onClick, to, className = "", type = "button" }) {
	if (to) {
		return (
			<motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<Link to={to} className={`${baseClass} ${className}`}>
					{children}
				</Link>
			</motion.span>
		);
	}
	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			onClick={onClick}
			type={type}
			className={`${baseClass} ${className}`}
		>
			{children}
		</motion.button>
	);
}
