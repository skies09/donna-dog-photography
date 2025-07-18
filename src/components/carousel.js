import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"pic1.jpg",
	"pic2.jpg",
	"pic3.jpg",
	"pic4.jpg",
	"pic5.jpg",
	"pic6.jpg",
	"pic7.jpg",
	"pic8.jpg",
	"pic9.jpg",
];

const ImageCarousel = () => {
	let mobileSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 9000,
		autoplaySpeed: 50,
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
		autoplaySpeed: 50,
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
								src={`../../assets/images/${image}`}
								alt={`Dog ${index + 1}`}
								className="w-full h-[18rem] mx-auto object-cover border-2 border-colorFive rounded-3xl bg-center"
							/>
						</div>
					))}
				</Slider>
			</div>
			{/* Desktop Carousel */}
			<div className="slider-container w-full mx-auto hidden lg:block py-12">
				<Slider {...desktopSettings}>
					{images.map((image, index) => (
						<div
							className="w-full flex-shrink-0 justify-center items-center flex-row px-1"
							key={index}
						>
							<img
								src={`../../assets/images/${image}`}
								alt={`Dog ${index + 1}`}
								className="w-auto h-[30rem] mx-auto object-cover border-2 border-colorFive rounded-3xl bg-center"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default ImageCarousel;
