import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"IMG_1.jpeg",
	"IMG_2.jpeg",
	"IMG_0472.jpeg",
	"IMG_0231.jpeg",
	"IMG_0228.jpeg",
	"IMG_0472.jpeg",
	"IMG_0500.jpeg",
	"IMG_0930.jpeg",
];

const ImageCarousel = () => {
	let mobileSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 9000,
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
		speed: 9000,
		autoplaySpeed: 300,
		cssEase: "linear",
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<div>
			{/* Mobile Carousel */}
			<div className="slider-container w-full mx-auto lg:hidden pt-10">
				<Slider {...mobileSettings}>
					{images.map((image, index) => (
						<div
							className="w-full flex-shrink-0 justify-center items-center flex-row px-1"
							key={index}
						>
							<img
								src={`../../assets/photos/${image}`}
								alt={`Dog ${index + 1}`}
								className="w-full h-[30rem] mx-auto object-cover border-2 border-colorFive rounded-3xl bg-center"
							/>
						</div>
					))}
				</Slider>
			</div>
			{/* Desktop Carousel */}
			<div className="slider-container w-full mx-auto hidden lg:block pt-6">
				<Slider {...desktopSettings}>
					{images.map((image, index) => (
						<div
							className="w-full flex-shrink-0 justify-center items-center flex-row px-1"
							key={index}
						>
							<img
								src={`../../assets/photos/${image}`}
								alt={`Dog ${index + 1}`}
								className="w-full h-[35rem] mx-auto object-cover border-2 border-colorFive rounded-3xl bg-center"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default ImageCarousel;
