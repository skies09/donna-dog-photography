import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Header() {
	return (
		<div className="relative w-full -mt-8">
			<div className="w-screen overflow-hidden h-auto bg-colorThree mt-8 ">
				<motion.div
					className="relative flex flex-col justify-center items-center pt-8 w-full mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				>
					<Link
						to="/"
						className="flex justify-center items-center w-1/4 lg:w-1/12"
					>
						<img
							className="shadow-shadow-colorThree h-auto border-colorOne rounded-full"
							src={`../../assets/images/DDPLogo1.png`}
							alt="Project"
						/>
					</Link>

					<p className="text-colorOne text-2xl md:text-5xl lg:text-4xl font-greatVibes font-semibold tracking-wider mt-3 lg:mt-6">
						Donna's Dog Photography
					</p>
				</motion.div>
				<Navbar />
			</div>
			<div className="flex justify-center bg-colorThree">
				<div className="w-11/12 border-b-4 border-colorTwo"></div>
			</div>
		</div>
	);
}
