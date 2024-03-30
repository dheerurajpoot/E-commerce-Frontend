import React from "react";
import FeaturedProduct from "../components/FeaturedProduct";

const Shop = () => {
	return (
		<>
			<div className='shop-container'>
				<div className='shop-page-title'>
					<h1>Shop</h1>
				</div>
				<div className='container shop-section'>
					<FeaturedProduct />
					<FeaturedProduct />
					<FeaturedProduct />
					<FeaturedProduct />
					<FeaturedProduct />
				</div>
			</div>
		</>
	);
};

export default Shop;
