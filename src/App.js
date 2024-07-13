import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/intro";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Banner from "./components/banner";

// <Navbar />
// <div>
// <Banner />

// <div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
// 	<Intro />
// 	<Contact />
// </div>
// </div>

export default function App() {
	return (
		<Router>
			<Banner />
			<Routes>
				<Route exact path="/" element={<Intro />} />

				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}
