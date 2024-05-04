import React from "react";
import Carousel from "../components/Carousel";
import FlashDeals from "../components/FlashDeals";
import RecProductSection from "../components/RecProductSection";
import MetaTitle from "../components/MetaTitle";

const Home = () => {
	return (
		<>
			<MetaTitle title={"DR Store: Best Online Shopping Platorm!"} />
			<div className='home-container'>
				<Carousel />
				<FlashDeals />
				<div className='mini-banner-section'>
					<div className='mini-banners container'>
						<img
							src='./images/minibanner.jpg'
							alt='product banners'
						/>
						<img
							src='./images/minibanner2.jpg'
							alt='product banners'
						/>
						<img
							src='./images/minibanner3.jpeg'
							alt='product banners'
						/>
					</div>
				</div>
				<div className='rec-section'>
					<div className='container'>
						<h2>RECOMMENDATIONS</h2>
						<div className='rec-products'>
							<RecProductSection />
						</div>
					</div>
				</div>
				<div className='home-sale'>
					<div className='container'>
						<div className='home-sale-banner'>
							<img src='./images/home-banner.png' alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
