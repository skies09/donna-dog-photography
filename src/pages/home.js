import { motion } from "framer-motion";
import ImageCarousel from "../components/carousel";

export default function Home() {
	return (
		<div className="w-screen overflow-hidden h-[80vh] bg-colorThree">
			<ImageCarousel />
		</div>
	);
}
