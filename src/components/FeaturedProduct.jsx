import React from "react";

const FeaturedProduct = () => {
	return (
		<>
			<section className='featured-product'>
				<div className='f-product-container'>
					<div className='featured-product-container'>
						<img
							className='featured-product-image'
							src='/images/apple.png'
							alt=''
						/>
						<div className='featured-product-badge-container'>
							<p className='featured-product-badge featured-product-badge--sale'>
								Sale
							</p>
						</div>
					</div>
					<div className='featured-container'>
						<div className='featured-price-container'>
							<p className='featured-price'>$9.00</p>
							<del className='featured-discount'>$7.00</del>
						</div>
						<h3 className='featured-product-name'>Fresh Apples</h3>
					</div>
					<button className='featured-product-button'>
						<div className='default-state'>Add to Cart</div>
						<div className='plus-state'>+</div>
					</button>
				</div>
			</section>
		</>
	);
};

export default FeaturedProduct;
