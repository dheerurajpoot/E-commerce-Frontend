import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import FlashDeals from "../components/FlashDeals";
import RecProductSection from "../components/RecProductSection";
import MetaTitle from "../components/MetaTitle";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import FeaturedProduct from "../components/FeaturedProduct";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const totalProduct = useSelector((state) => state?.product?.products);
	const totalProducts = [...totalProduct].reverse();
	const specialProducts = totalProducts.filter(
		(product) => product.tags === "Special"
	);
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
						<h2 className='home-section-title'>Recommendations</h2>
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
						<h2 className='home-section-title'>Special for You</h2>
						<div className='home-special'>
							{specialProducts
								.slice(0, 4)
								?.map((product, index) => (
									<FeaturedProduct
										key={index}
										product={product}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
