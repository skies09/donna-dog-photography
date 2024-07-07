// import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaw, faPhone } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "../components/socialLinks";

export default function Banner() {
	return (
		<div className="w-screen overflow-hidden h-10 md:h-12 bg-colorFour items-center justify-center md:justify-start flex md:pl-4">
			<div className="relative flex flex-row justify-center items-center">
				<div className="flex flex-row items-center">
					<FontAwesomeIcon
						icon={faPaw}
						size="xs"
						className="text-colorOne"
					/>
				</div>
				<div className="flex flex-row items-center ml-4">
					<FontAwesomeIcon
						icon={faEnvelope}
						size="xs"
						className="text-colorThree"
					/>
					<span className="ml-2 text-xs md:text-sm text-colorThree tracking-wider">
						ddp@hotmail.com
					</span>
				</div>
				<div className="flex flex-row items-center ml-4">
					<FontAwesomeIcon
						icon={faPhone}
						size="xs"
						className="text-colorThree"
					/>
					<span className="ml-2 text-xs md:text-sm text-colorThree tracking-wider">
						07950981097
					</span>
				</div>
				<div className="flex flex-row items-center ml-4">
					<FontAwesomeIcon
						icon={faPaw}
						size="xs"
						className="text-colorOne"
					/>
				</div>
			</div>
		</div>
	);
}
