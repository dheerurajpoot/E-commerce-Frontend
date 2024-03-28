import React from "react";
import { useState, useEffect } from "react";

const slidesData = [
	{
		title: "Slide 1",
		subtitle: "Subtitle for Slide 1",
		buttonText: "Buy Now",
		image: "./images/banner1.jpg",
	},
	{
		title: "Slide 2",
		subtitle: "Subtitle for Slide 2",
		buttonText: "Buy Now",
		image: "./images/banner2.jpg",
	},
	{
		title: "",
		subtitle: "",
		buttonText: "Shop Now",
		image: "./images/banner3.jpg",
	},
];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : slidesData.length - 1
		);
	};

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < slidesData.length - 1 ? prevIndex + 1 : 0
		);
	};
	return (
		<>
			<div className='carousel'>
				{slidesData.map((slide, index) => (
					<div
						key={index}
						className={
							index === currentIndex ? "slide active" : "slide"
						}>
						<img src={slide.image} alt={`Slide ${index + 1}`} />
						<div className='content container'>
							<button className='prev' onClick={goToPrevSlide}>
								&#10094;
							</button>
							<button className='next' onClick={goToNextSlide}>
								&#10095;
							</button>
							<h3>{slide.title}</h3>
							<p>{slide.subtitle}</p>
							<button className='carousel-btn'>
								{slide.buttonText} &#10095;
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Carousel;
