// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// navbar links

export default function Navbar() {
	return (
		<div className="h-10 lg:h-16 items-center justify-center flex mb-3 lg:mb-6">
			<ul className="flex flex-row">
				<Link
					to="/gallery"
					className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8"
				>
					Gallery
				</Link>

				<Link
					to="/about"
					className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8"
				>
					About
				</Link>
				<Link
					to="/services"
					className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8"
				>
					Services
				</Link>
				<Link
					to="/contact"
					className="font-serif text-md lg:text-2xl text-colorOne mx-4 lg:mx-8"
				>
					Contact
				</Link>
			</ul>
		</div>
	);
}
