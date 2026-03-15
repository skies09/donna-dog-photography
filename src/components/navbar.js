import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/gallery", label: "Gallery" },
	{ to: "/about", label: "About" },
	{ to: "/services", label: "Services" },
	{ to: "/contact", label: "Contact" },
];

export default function Navbar() {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);

	const linkClass = (path) =>
		`font-serif text-sm md:text-base lg:text-lg text-colorOne py-2 md:py-0 px-4 md:px-5 rounded-md transition-all duration-200 hover:text-colorFour hover:bg-colorFive/30 md:hover:bg-transparent ${
			location.pathname === path
				? "text-colorFour font-semibold border-b-2 border-colorFour md:border-b-2 md:border-colorFour"
				: ""
		}`;

	return (
		<nav className="pt-4 pb-2" role="navigation" aria-label="Main">
			{/* Desktop */}
			<ul className="hidden md:flex flex-row items-center justify-center gap-1">
				{navLinks.map(({ to, label }) => (
					<li key={to}>
						<Link to={to} className={linkClass(to)}>
							{label}
						</Link>
					</li>
				))}
			</ul>

			{/* Mobile toggle */}
			<div className="md:hidden flex justify-center">
				<button
					type="button"
					onClick={() => setMobileOpen(!mobileOpen)}
					className="flex items-center gap-2 text-colorOne font-serif font-medium py-2 px-3 rounded-lg hover:bg-colorFive/40 transition-colors"
					aria-expanded={mobileOpen}
					aria-controls="mobile-menu"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
				>
					<FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} className="text-lg" />
					{mobileOpen ? "Close" : "Menu"}
				</button>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<ul
					id="mobile-menu"
					className="md:hidden mt-2 py-3 border-t border-colorFive/50 flex flex-col items-center gap-1"
				>
					{navLinks.map(({ to, label }) => (
						<li key={to} className="w-full text-center">
							<Link
								to={to}
								className={`block w-full ${linkClass(to)}`}
								onClick={() => setMobileOpen(false)}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
}
