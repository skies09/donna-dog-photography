// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// navbar links

export default function Navbar() {
	return (
		<div className="h-20 items-center justify-center flex mt-0 lg:mt-2">
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
