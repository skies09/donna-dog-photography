import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "./socialLinks";

const EMAIL = "dd.photography@hotmail.com";
const PHONE = "07777777777";

const footerLinks = [
	{ to: "/", label: "Home" },
	{ to: "/gallery", label: "Gallery" },
	{ to: "/about", label: "About" },
	{ to: "/services", label: "Services" },
	{ to: "/contact", label: "Contact" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer
			className="w-full bg-colorOne text-white py-12 px-6"
			role="contentinfo"
		>
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
					<div>
						<h3 className="font-serif font-semibold text-lg mb-3 text-white">
							Donna's Dog Photography
						</h3>
						<p className="text-white/85 text-sm font-sans leading-relaxed">
							Bespoke pet photography in the North West UK.
							Timeless portraits that capture their character.
						</p>
					</div>

					<div>
						<h3 className="font-serif font-semibold text-lg mb-3 text-white">
							Quick links
						</h3>
						<ul className="space-y-2">
							{footerLinks.map(({ to, label }) => (
								<li key={to}>
									<Link
										to={to}
										className="text-white/85 hover:text-white text-sm font-sans transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-colorOne rounded"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-serif font-semibold text-lg mb-3 text-white">
							Contact
						</h3>
						<a
							href={`mailto:${EMAIL}`}
							className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-sans mb-2 transition-colors"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="text-colorFive w-4"
							/>
							{EMAIL}
						</a>
						<a
							href={`tel:${PHONE.replace(/\s/g, "")}`}
							className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-sans transition-colors"
						>
							<FontAwesomeIcon
								icon={faPhone}
								className="text-colorFive w-4"
							/>
							{PHONE}
						</a>
						<div className="mt-4">
							<SocialLinks variant="light" />
						</div>
					</div>
				</div>

				<div className="mt-10 pt-8 border-t border-white/20 text-center">
					<p className="text-white/70 text-sm font-sans">
						© {year} Donna's Dog Photography. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
