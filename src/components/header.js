import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function Header() {
	return (
		<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
			<div className="w-screen overflow-hidden h-[40vh] lg:h-[48vh] bg-colorThree mt-8 ">
				<motion.div
					className="relative flex flex-col justify-center items-center pt-8 w-full mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				>
					<img
						className="shadow-shadow-colorThree w-1/5 lg:w-1/12 h-auto border-colorOne rounded-full"
						src={`../../assets/images/DDPLogo.png`}
						alt="Project"
					/>
					<p className="text-colorOne text-2xl md:text-5xl lg:text-4xl font-greatVibes font-semibold tracking-wider mt-8">
						Donna's Dog Photography
					</p>
				</motion.div>
				<Navbar />
			</div>
		</div>
	);
}
