import React from "react";

import Intro from "./pages/intro";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";

export default function App() {
	return (
		<div>
			<Navbar />
			<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
				<Intro />
				<Contact/>
			</div>
		</div>
	);
}
