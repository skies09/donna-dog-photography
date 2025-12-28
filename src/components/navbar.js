// import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	return (
		<div className="h-10 lg:h-16 items-center justify-center flex pb-3 mx-auto">
			<ul className="flex flex-row">
				<Link
					to="/"
					className={`font-serif text-sm md:text-md lg:text-xl text-colorOne mx-4 lg:mx-8 hidden md:flex transition-all duration-300 hover:text-colorFour ${
						location.pathname === "/"
							? "border-b-2 border-colorFour"
							: ""
					}`}
				>
					Home
				</Link>
				<Link
					to="/gallery"
					className={`font-serif text-sm md:text-md lg:text-xl text-colorOne mx-4 lg:mx-8 transition-all duration-300 hover:text-colorFour ${
						location.pathname === "/gallery"
							? "border-b-2 border-colorFour"
							: ""
					}`}
				>
					Gallery
				</Link>
				<Link
					to="/about"
					className={`font-serif text-sm md:text-md lg:text-xl text-colorOne mx-4 lg:mx-8 transition-all duration-300 hover:text-colorFour ${
						location.pathname === "/about"
							? "border-b-2 border-colorFour"
							: ""
					}`}
				>
					About
				</Link>
				<Link
					to="/services"
					className={`font-serif text-sm md:text-md lg:text-xl text-colorOne mx-4 lg:mx-8 transition-all duration-300 hover:text-colorFour ${
						location.pathname === "/services"
							? "border-b-2 border-colorFour"
							: ""
					}`}
				>
					Services
				</Link>
				<Link
					to="/contact"
					className={`font-serif text-sm md:text-md lg:text-xl text-colorOne mx-4 lg:mx-8 transition-all duration-300 hover:text-colorFour ${
						location.pathname === "/contact"
							? "border-b-2 border-colorFour"
							: ""
					}`}
				>
					Contact
				</Link>
			</ul>
		</div>
	);
}
