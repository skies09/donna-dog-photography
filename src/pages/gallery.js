import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Gallery() {
	return (
		<div className="w-screen overflow-hidden min-h-[80vh] bg-colorThree px-6 py-10">
			{/* Moz's Section */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="max-w-4xl mx-auto text-center mb-10"
			>
				<div className="flex flex-row justify-center items-center">
					<FontAwesomeIcon
						icon={faPaw}
						size="sm"
						className="text-colorFour pr-4"
					/>
					<h2 className="text-4xl font-bold text-colorFour mb-2 font-greatVibes">
						Moz
					</h2>
					<FontAwesomeIcon
						icon={faPaw}
						size="sm"
						className="text-colorFive pl-4"
					/>
				</div>
				<p className="text-md text-colorOne/80">
					Moz is a pint-sized beagle bursting with sunshine and sass.
					Don’t let the floppy ears fool you, this little
					mischief-maker is always scheming his next snack heist. But
					when the zoomies wear off, he’s all about warm cuddles and
					melting hearts with those puppy-dog eyes.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}
				className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12 place-items-center md:w-5/6"
			>
				{[
					"/assets/photos/IMG_2.jpeg",
					"/assets/photos/IMG_0500.jpeg",
					"/assets/photos/IMG_0228.jpeg",
				].map((src, i) => (
					<motion.img
						key={i}
						src={src}
						alt={`Moz ${i + 1}`}
						className={`w-auto h-44 object-cover shadow-shadow-elegant mx-auto border-2 border-colorFive/50 rounded-3xl bg-center ${
							i === 2 ? "hidden sm:block" : ""
						}`}
						whileHover={{ scale: 1.03 }}
						transition={{ type: "spring", stiffness: 200 }}
					/>
				))}
			</motion.div>

			{/* Neo's Section */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className="max-w-4xl mx-auto text-center mb-10"
			>
				<div className="flex flex-row justify-center items-center">
					<FontAwesomeIcon
						icon={faPaw}
						size="sm"
						className="text-colorFour pr-4"
					/>
					<h2 className="text-4xl font-bold text-colorFour mb-2 font-greatVibes">
						Neo
					</h2>
					<FontAwesomeIcon
						icon={faPaw}
						size="sm"
						className="text-colorFive pl-4"
					/>
				</div>
				<p className="text-md text-colorOne/80">
					Neo is a high-energy German Shepherd with a mission. Whether
					he’s on patrol from the living room window or launching into
					a full sprint after a frisbee, this guy doesn’t know the
					meaning of “chill.” Loyal, sharp, and endlessly active.
					Neo’s always got one eye on the action and the other on the
					ball.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}
				className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12 place-items-center md:w-5/6"
			>
				{[
					"/assets/photos/IMG_1.jpeg",
					"/assets/photos/IMG_0930.jpeg",
					"/assets/photos/IMG_0231.jpeg",
				].map((src, i) => (
					<motion.img
						key={i}
						src={src}
						alt={`Neo ${i + 1}`}
						className={`w-auto h-44 object-cover shadow-shadow-elegant mx-auto border-2 border-colorFive/50 rounded-3xl bg-center ${
							i === 2 ? "hidden sm:block" : ""
						}`}
						whileHover={{ scale: 1.03 }}
						transition={{ type: "spring", stiffness: 200 }}
					/>
				))}
			</motion.div>
		</div>
	);
}
