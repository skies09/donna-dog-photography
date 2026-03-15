import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function Header() {
	return (
		<header className="relative w-full bg-colorThree border-b border-colorFive/50">
			<div className="max-w-6xl mx-auto px-4 pt-8 pb-2">
				<motion.div
					className="flex flex-col items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<Link
						to="/"
						className="flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-colorFour focus-visible:ring-offset-2 rounded-full"
						aria-label="Donna's Dog Photography – Home"
					>
						<img
							className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full border-2 border-colorFive shadow-shadow-elegant"
							src={`../../assets/images/DDPLogo2.png`}
							alt="Donna's Dog Photography logo"
						/>
						<span className="mt-3 text-xl md:text-2xl lg:text-3xl font-greatVibes text-colorOne font-semibold tracking-wide">
							Donna's Dog Photography
						</span>
					</Link>
					<p className="mt-1 text-sm text-colorOne/80 font-sans font-medium tracking-wide text-center max-w-md">
						Capturing personality, one paw at a time.
					</p>
				</motion.div>
				<Navbar />
			</div>
		</header>
	);
}
