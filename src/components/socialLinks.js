import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
	

	return (
		<div className="flex flex-row justify-center items-center pt-6">
        <a id='facebook' href="https://www.facebook.com/profile.php?id=100002920786337"
        className="mx-3 inline-block text-lg text-colorFour hover:text-colorTwo">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
        <a id='instagram' href="https://www.instagram.com/skies009/"
          className="mx-3 inline-block text-lg text-colorFour hover:text-colorTwo">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
		</div>
	);
}
