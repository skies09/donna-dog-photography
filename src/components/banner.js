// import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaw, faPhone } from "@fortawesome/free-solid-svg-icons";
// import SocialLinks from "../components/socialLinks";

export default function Banner() {
	return (
		<div className="w-screen overflow-hidden h-10 md:h-12 bg-gradient-to-r from-colorFour/90 to-colorTwo/80 items-center justify-center md:justify-start flex md:pl-4">
			<div className="relative flex flex-row justify-center items-center">
				<div className="flex flex-row items-center">
					<FontAwesomeIcon
						icon={faPaw}
						size="xs"
						className="text-colorThree drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
					/>
				</div>
				<div className="flex flex-row items-center ml-4">
					<FontAwesomeIcon
						icon={faEnvelope}
						size="xs"
						className="text-colorThree drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
					/>
					<span className="ml-2 text-xs md:text-sm text-colorThree tracking-wider font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
						ddp@hotmail.com
					</span>
				</div>
				<div className="flex flex-row items-center ml-4">
					<FontAwesomeIcon
						icon={faPhone}
						size="xs"
						className="text-colorThree drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
					/>
					<span className="ml-2 text-xs md:text-sm text-colorThree tracking-wider font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
						07950981097
					</span>
				</div>
				<div className="flex flex-row items-center ml-4">
					<FontAwesomeIcon
						icon={faPaw}
						size="xs"
						className="text-colorThree drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
					/>
				</div>
			</div>
		</div>
	);
}
