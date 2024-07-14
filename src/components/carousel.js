import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"IMG_0930.jpeg",
	"IMG_0500.jpeg",
	"IMG_0472.jpeg",
	"IMG_0231.jpeg",
	"IMG_0228.jpeg",
];

const ImageCarousel = () => {
	let mobileSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 8000,
		autoplaySpeed: 300,
		cssEase: "linear",
		pauseOnHover: true,
		arrows: false,
	};
	let desktopSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 8000,
		autoplaySpeed: 300,
		cssEase: "linear",
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<>
			{/* Mobile Carousel */}
			<div className="slider-container w-11/12 mx-auto lg:hidden pt-10">
				<Slider {...mobileSettings}>
					{images.map((image, index) => (
						<div
							className="w-full flex-shrink-0 justify-center items-center flex-row"
							key={index}
						>
							<img
								src={`../../assets/photos/${image}`}
								alt={`Dog ${index + 1}`}
								className="w-80 h-80 mx-auto object-cover border-2 border-colorFour rounded-lg"
							/>
						</div>
					))}
				</Slider>
			</div>
			{/* Desktop Carousel */}
			<div className="slider-container w-4/5 mx-auto hidden lg:block pt-4">
				<Slider {...desktopSettings}>
					{images.map((image, index) => (
						<div
							className="w-full flex-shrink-0 justify-center items-center flex-row"
							key={index}
						>
							<img
								src={`../../assets/photos/${image}`}
								alt={`Dog ${index + 1}`}
								className="w-80 h-80 mx-auto object-cover border-2 border-colorFour rounded-lg"
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default ImageCarousel;
