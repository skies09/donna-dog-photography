import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks({ variant = "default", className = "" }) {
	const isLight = variant === "light";
	const linkClass = isLight
		? "text-white/85 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-colorOne rounded-full p-1"
		: "text-colorFour hover:text-colorTwo transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-colorFour focus-visible:ring-offset-2 rounded-full p-1";

	return (
		<div className={`flex flex-row justify-center items-center gap-4 ${className}`} role="list">
			<a
				href="https://www.facebook.com/profile.php?id=100002920786337"
				target="_blank"
				rel="noopener noreferrer"
				className={linkClass}
				aria-label="Donna's Dog Photography on Facebook"
			>
				<FontAwesomeIcon icon={faFacebook} size="lg" />
			</a>
			<a
				href="https://www.instagram.com/skies009/"
				target="_blank"
				rel="noopener noreferrer"
				className={linkClass}
				aria-label="Donna's Dog Photography on Instagram"
			>
				<FontAwesomeIcon icon={faInstagram} size="lg" />
			</a>
		</div>
	);
}
