// import { motion } from "framer-motion";

export default function Navbar() {
	return (
		<div className="w-screen overflow-hidden h-20 bg-colorTwo items-center justify-end flex">
			<ul className="flex flex-row">
				<li className="font-satisfy text-md lg:text-2xl text-colorOne mx-4 lg:mx-8">About</li>
				<li className="font-satisfy text-md lg:text-2xl text-colorOne mx-4 lg:mx-8">Services</li>
				<li className="font-satisfy text-md lg:text-2xl text-colorOne mx-4 lg:mx-8">Contact</li>
			</ul>
		</div>
	);
}
