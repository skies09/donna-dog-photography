import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const featured = [
	{
		name: "Moz",
		description:
			"Moz is a pint-sized beagle bursting with sunshine and sass. Don't let the floppy ears fool you—this little mischief-maker is always scheming his next snack heist. When the zoomies wear off, he's all about warm cuddles and melting hearts with those puppy-dog eyes.",
		images: [
			"/assets/photos/IMG_2.jpeg",
			"/assets/photos/IMG_0500.jpeg",
			"/assets/photos/IMG_0228.jpeg",
		],
	},
	{
		name: "Neo",
		description:
			"Neo is a high-energy German Shepherd with a mission. Whether he's on patrol from the living room window or launching into a full sprint after a frisbee, this guy doesn't know the meaning of chill. Loyal, sharp and endlessly active, with one eye on the action and the other on the ball.",
		images: [
			"/assets/photos/IMG_1.jpeg",
			"/assets/photos/IMG_0930.jpeg",
			"/assets/photos/IMG_0231.jpeg",
		],
	},
];

export default function Gallery() {
	return (
		<div className="w-full min-h-screen bg-colorThree px-6 py-14">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h1 className="text-3xl lg:text-4xl font-serif font-semibold text-colorOne mb-2">
						Featured work
					</h1>
					<p className="text-colorOne/80 font-sans">
						A selection of recent sessions and their stars.
					</p>
				</motion.div>

				{featured.map((subject, subjectIndex) => (
					<section key={subject.name} className="mb-16 last:mb-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: subjectIndex * 0.1,
							}}
							className="text-center mb-8"
						>
							<div className="flex flex-row justify-center items-center gap-3 mb-3">
								<FontAwesomeIcon
									icon={faPaw}
									className="text-colorFour text-sm"
								/>
								<h2 className="text-2xl lg:text-3xl font-serif font-semibold text-colorOne">
									{subject.name}
								</h2>
								<FontAwesomeIcon
									icon={faPaw}
									className="text-colorFour text-sm"
								/>
							</div>
							<p className="text-base text-colorOne/85 font-sans max-w-2xl mx-auto leading-relaxed">
								{subject.description}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: 0.2 + subjectIndex * 0.1,
								duration: 0.5,
							}}
							className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 place-items-center"
						>
							{subject.images.map((src, i) => (
								<motion.img
									key={src}
									src={src}
									alt={`${subject.name} ${i + 1}`}
									className={`w-full max-w-sm h-44 sm:h-80 object-cover rounded-2xl shadow-shadow-card border border-colorFive/70 ${
										i === 2 ? "hidden sm:block" : ""
									}`}
									whileHover={{ scale: 1.02 }}
									transition={{
										type: "spring",
										stiffness: 300,
									}}
								/>
							))}
						</motion.div>
					</section>
				))}
			</div>
		</div>
	);
}
