import { motion } from "framer-motion";

export default function Intro() {
	return (
		<div
			className="w-screen overflow-hidden h-[70vh] md:h-screen bg-colorThree mt-8"
			id="intro"
		>
			<motion.div
				className="relative flex flex-col justify-center items-center pt-20 w-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
				<p className="text-colorOne text-3xl lg:text-8xl font-greatVibes">
					Donna's Dog Photography
				</p>
			</motion.div>
		</div>
	);
}
