import React from "react";
import { motion } from "framer-motion";

// Desktop images
const desktopImages = [
	{
		src: "pic6.jpg",
		span: "col-span-1 row-span-1",
		startRow: "row-start-1 col-start-1",
	},
	{ src: "pic2.jpg", span: "col-span-1 row-span-1" },
	{ src: "pic4.jpg", span: "col-span-1 row-span-1" },
	{ src: "pic3.jpg", span: "col-span-2 row-span-1" },
	{
		src: "pic5.jpg",
		span: "col-span-1 row-span-2",
		startRow: "row-start-1 col-start-4",
	},
	{
		src: "pic1.jpg",
		span: "col-span-1 row-span-2",
		startRow: "row-start-2 col-start-1",
	},
	{ src: "pic7.jpg", span: "col-span-1 row-span-1" },
	{ src: "pic8.jpg", span: "col-span-2 row-span-1" },
];

// Mobile images
const mobileImages = [
	{ src: "pic1.jpg", span: "" },
	{ src: "pic2.jpg", span: "" },
	{ src: "pic3.jpg", span: "" },
	{ src: "pic4.jpg", span: "" },
	{ src: "pic5.jpg", span: "" },
	{ src: "pic6.jpg", span: "" },
	{ src: "pic7.jpg", span: "" },
	{ src: "pic8.jpg", span: "" },
];

const ImageGrid = () => {
	return (
		<div className="w-full bg-colorThree py-8 lg:py-16 px-4 lg:px-8">
			{/* Mobile Grid - Simple 2 column layout */}
			<div className="lg:hidden grid grid-cols-2 gap-3 max-w-2xl mx-auto">
				{mobileImages.map((image, index) => (
					<motion.div
						key={`mobile-${index}`}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="relative overflow-hidden rounded-2xl shadow-shadow-elegant border-2 border-colorFive/30 group"
					>
						<img
							src={`../../assets/images/${image.src}`}
							alt={`Dog ${index + 1}`}
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-colorFour/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</motion.div>
				))}
			</div>

			{/* Desktop Grid - Asymmetric layout */}
			<div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-4 gap-4 max-w-[75%] mx-auto h-[800px]">
				{desktopImages.map((image, index) => (
					<motion.div
						key={`desktop-${index}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						className={`${image.span} ${
							image.startRow || ""
						} relative overflow-hidden rounded-2xl shadow-shadow-elegant border-2 border-colorFive/30 group cursor-pointer`}
					>
						<img
							src={`../../assets/images/${image.src}`}
							alt={`Dog ${index + 1}`}
							className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
						/>
						{/* Elegant overlay on hover */}
						<div className="absolute inset-0 bg-gradient-to-t from-colorFour/50 via-colorTwo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						{/* Subtle border glow on hover */}
						<div className="absolute inset-0 border-2 border-colorFour/0 group-hover:border-colorFour/60 rounded-2xl transition-all duration-500"></div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ImageGrid;
