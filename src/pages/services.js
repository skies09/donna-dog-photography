import { motion } from "framer-motion";

const services = [
	{
		title: "Private Studio Photoshoot",
		price: "£250",
		image: "/assets/images/studio.jpg",
		description:
			"A relaxed indoor session with professional lighting. Perfect for elegant portraits and close-up shots in a controlled, cozy space.",
	},
	{
		title: "Outdoor Adventure Session",
		price: "£300",
		image: "/assets/images/outdoor.jpg",
		description:
			"Capture your dog’s personality in natural settings like parks or beaches. Ideal for active dogs who love to explore!",
	},
	{
		title: "Birthday & Themed Shoots",
		price: "Starting at £200",
		image: "/assets/images/birthday.jpg",
		description:
			"Celebrate milestones with props, costumes, or custom themes. Great for birthday pups, holidays, or just because!",
	},
];

export default function Services() {
	return (
		<div
			className="w-full bg-colorThree py-12 px-6 lg:px-20 space-y-16"
			id="services"
		>
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-4xl font-bold text-center mb-6 font-greatVibes text-colorOne"
			>
				Picture-Perfect Packages for Every Pup!
			</motion.h2>

			{services.map((service, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: index * 0.2 }}
					className={`flex flex-col lg:flex-row ${
						index % 2 !== 0 ? "lg:flex-row-reverse" : ""
					} items-center gap-10`}
				>
					{/* Image */}
					<div className="lg:w-1/2 w-full">
						<img
							src={service.image}
							alt={service.title}
							className="w-full h-auto object-cover rounded-2xl shadow-lg"
						/>
					</div>

					{/* Text */}
					<div className="lg:w-1/2 w-full text-colorFour">
						<h3 className="text-2xl lg:text-3xl font-bold mb-4 font-sans">
							{service.title}
						</h3>
						<p className="text-lg lg:text-xl mb-4 font-mono text-colorOne">
							{service.description}
						</p>
						<p className="text-xl font-semibold font-serif text-colorTwo">
							{service.price}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
