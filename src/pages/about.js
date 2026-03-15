import { motion } from "framer-motion";
import Button from "../components/button";

export default function About() {
	return (
		<div className="w-full bg-colorThree pt-12 px-6 mb-12 lg:mb-20 lg:px-12">
			<div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-16 items-center">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className="w-full lg:w-1/2 mb-0 mt-8 lg:mt-0 order-2 lg:order-1"
				>
					<img
						src="../../assets/images/me.jpg"
						alt="Donna, professional dog photographer"
						className="w-full h-auto rounded-2xl shadow-shadow-card border border-colorFive"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
					viewport={{ once: true }}
					className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
				>
					<h1 className="text-3xl lg:text-4xl font-serif font-semibold text-colorOne mb-6">
						About Me
					</h1>
					<p className="text-base lg:text-lg font-sans text-colorOne leading-relaxed mb-5">
						I'm Donna, a professional dog photographer based in the North West UK. I specialise in capturing the unique character and
						bond between dogs and their owners— whether that's a
						relaxed studio portrait, an outdoor adventure, or a
						themed celebration.
					</p>
					<p className="text-base lg:text-lg font-sans text-colorOne leading-relaxed mb-5">
						With years of experience and a genuine love for animals,
						I focus on creating images that you'll want to keep for
						life. Every session is tailored to your dog's
						personality, so we get natural expressions and moments
						that really mean something.
					</p>
					<p className="text-base lg:text-lg font-sans text-colorOne leading-relaxed mb-8">
						If you'd like to book a session or discuss a bespoke
						package, get in touch. I'd love to hear from you.
					</p>
					<Button to="/contact">Book a session</Button>
				</motion.div>
			</div>
		</div>
	);
}
