import { motion } from "framer-motion";

const services = [
	{
		title: "Private studio session",
		price: "£250",
		image: "/assets/images/studio.jpg",
		description:
			"A relaxed indoor session with professional lighting. Ideal for elegant portraits and close-ups in a controlled, comfortable environment.",
	},
	{
		title: "Outdoor adventure session",
		price: "£300",
		image: "/assets/images/outdoor.jpg",
		description:
			"Natural-light sessions in parks, woods or by the coast. Perfect for active dogs who love to run and play while we capture their character.",
	},
	{
		title: "Birthday & themed shoots",
		price: "From £200",
		image: "/assets/images/birthday.jpg",
		description:
			"Celebrate milestones with props, costumes or a theme of your choice. Popular for birthdays, holidays or simply treating your pup.",
	},
];

export default function Services() {
	return (
		<div className="w-full bg-colorThree py-16 px-6 lg:px-12" id="services">
			<div className="max-w-5xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-3xl lg:text-4xl font-serif font-semibold text-colorOne text-center mb-4"
				>
					Session packages
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-center text-colorOne/80 font-sans text-lg mb-14 max-w-2xl mx-auto"
				>
					Choose a package that suits your dog and your style. All sessions include
					edited high-resolution images.
				</motion.p>

				<div className="space-y-16">
					{services.map((service, index) => (
						<motion.article
							key={service.title}
							initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
							className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center ${
								index % 2 !== 0 ? "lg:flex-row-reverse" : ""
							}`}
						>
							<div className="lg:w-1/2 w-full flex-shrink-0">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-auto object-cover rounded-2xl shadow-shadow-card border border-colorFive"
								/>
							</div>
							<div className="lg:w-1/2 w-full">
								<h2 className="text-xl lg:text-2xl font-serif font-semibold text-colorOne mb-3">
									{service.title}
								</h2>
								<p className="text-base lg:text-lg font-sans text-colorOne leading-relaxed mb-4">
									{service.description}
								</p>
								<p className="text-lg font-semibold font-sans text-colorFour">
									{service.price}
								</p>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</div>
	);
}
