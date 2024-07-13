// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// navbar links

export default function Navbar() {
	return (
		<div className="h-20 items-center justify-center flex mt-4">
			<ul className="flex flex-row">
				<li className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8">
					Gallery
				</li>
				<li className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8">
					About
				</li>
				<li className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8">
					Services
				</li>
				<Link to="/contact">Contact</Link>
			</ul>
		</div>
	);
}
