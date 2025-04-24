import { motion } from "framer-motion";
import Button from "../components/button";

export default function About() {
	return (
		<div className="w-screen h-auto bg-colorThree pt-10 pb-16">
			<div className="flex flex-col lg:flex-row lg:gap-x-12 items-center justify-center w-full mx-auto px-6 lg:px-12">
				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
					className="w-full lg:w-1/2 mb-8 lg:mb-0"
				>
					<img
						src="../../assets/images/img7.jpg"
						alt="Photographer's portrait"
						className="w-full h-auto rounded-xl shadow-lg"
					/>
				</motion.div>

				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
					className="lg:w-1/2 text-center lg:text-left text-colorFour"
				>
					<h2 className="text-3xl lg:text-4xl font-bold mb-4 font-satisfy">
						About Me
					</h2>
					<p className="text-lg lg:text-xl mb-6 font-mono text-colorOne">
						Hi, I'm Donna, a passionate dog photographer. My goal is
						to capture the unique personalities and beautiful
						moments of every dog I work with. Photography is not
						just a job to me, it's a way to freeze time and create
						cherished memories for you and your furry friend.
					</p>
					<p className="text-lg lg:text-xl mb-6 font-mono text-colorOne">
						With years of experience and a love for animals, I take
						great pride in creating images that not only showcase
						the beauty of your dog but also capture their playful
						spirit and bond with you. Whether it's a fun outdoor
						session or an elegant portrait, I'll make sure your
						dog's personality shines through.
					</p>
					<p className="text-lg lg:text-xl mb-6 font-mono text-colorOne">
						Let's work together to create timeless photographs that
						will bring joy for years to come. Feel free to get in
						touch and book a session today!
					</p>
					<Button onClick={() => (window.location.href = "#contact")}>
						Book a Session
					</Button>
				</motion.div>
			</div>
		</div>
	);
}
