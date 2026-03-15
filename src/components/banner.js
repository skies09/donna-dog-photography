import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const EMAIL = "dd.photography@hotmail.com";
const PHONE = "07777777777";

export default function Banner() {
	return (
		<header
			className="w-full bg-colorOne text-white py-2.5 px-4 md:px-6"
			role="banner"
		>
			<a
				href="#main"
				className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-colorThree focus:text-colorOne focus:rounded-lg focus:font-medium focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:[clip:auto]"
			>
				Skip to main content
			</a>
			<div className="mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
				<span className="font-serif font-medium tracking-wide text-white/95">
					Where every portrait tells their story
				</span>
				<div className="flex items-center gap-6">
					<a
						href={`mailto:${EMAIL}`}
						className="flex items-center gap-2 text-white/95 hover:text-white transition-colors"
						aria-label="Email Donna"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-colorFive"
						/>
						<span className="hidden sm:inline">{EMAIL}</span>
					</a>
					<a
						href={`tel:${PHONE.replace(/\s/g, "")}`}
						className="flex items-center gap-2 text-white/95 hover:text-white transition-colors"
						aria-label="Call Donna"
					>
						<FontAwesomeIcon
							icon={faPhone}
							className="text-colorFive"
						/>
						<span>{PHONE}</span>
					</a>
				</div>
			</div>
		</header>
	);
}
