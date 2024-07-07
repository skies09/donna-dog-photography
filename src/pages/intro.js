import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function Intro() {
	return (
		<div
			className="w-screen overflow-hidden h-[70vh] md:h-screen bg-colorThree mt-8"
			id="intro"
		>
			<motion.div
				className="relative flex flex-col justify-center items-center pt-8 w-full mx-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
				<img
					className="shadow-shadow-colorThree w-1/12 mt-16 lg:mt-0 h-auto border-colorOne rounded-full"
					src={`../../assets/images/DDPLogo.png`}
					alt="Project"
				/>
				<p className="text-colorOne text-2xl md:text-5xl lg:text-8xl font-greatVibes font-semibold tracking-wider mt-8">
					Donna's Dog Photography
				</p>
			</motion.div>
			<Navbar />
		</div>
	);
}
