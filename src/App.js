import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/about";
import Banner from "./components/banner";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Header from "./components/header";
import Services from "./pages/services";

export default function App() {
	return (
		<div className="bg-colorThree h-screen overflow-auto">
			<Router>
				<Banner />
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}
