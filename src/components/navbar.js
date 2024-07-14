// import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	return (
		<div className="h-10 lg:h-16 items-center justify-center flex mb-3 lg:mb-6">
			<ul className="flex flex-row">
				<Link
					to="/"
					className={`font-serif text-md lg:text-xl text-colorOne mx-4 lg:mx-8 ${
						location.pathname === "/"
							? "border-b-2 border-colorTwo"
							: ""
					}`}
				>
					Home
				</Link>
				<Link
					to="/gallery"
					className={`font-serif text-md lg:text-xl text-colorOne mx-4 lg:mx-8 ${
						location.pathname === "/gallery"
							? "border-b-2 border-colorTwo"
							: ""
					}`}
				>
					Gallery
				</Link>
				<Link
					to="/about"
					className={`font-serif text-md lg:text-xl text-colorOne mx-4 lg:mx-8 ${
						location.pathname === "/about"
							? "border-b-2 border-colorTwo"
							: ""
					}`}
				>
					About
				</Link>
				<Link
					to="/services"
					className={`font-serif text-md lg:text-xl text-colorOne mx-4 lg:mx-8 ${
						location.pathname === "/services"
							? "border-b-2 border-colorTwo"
							: ""
					}`}
				>
					Services
				</Link>
				<Link
					to="/contact"
					className={`font-serif text-md lg:text-xl text-colorOne mx-4 lg:mx-8 ${
						location.pathname === "/contact"
							? "border-b-2 border-colorTwo"
							: ""
					}`}
				>
					Contact
				</Link>
			</ul>
		</div>
	);
}
