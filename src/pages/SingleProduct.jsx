import React from "react";

const SingleProduct = () => {
	return (
		<>
			<div className='single-product-container'>
				<div className='container'>
					<div className='single-product-details'>
						<div className='single-product-image'>
							<img
								src='./images/capsicum.png'
								alt='Product Image'
							/>
						</div>
						<div className='single-product-info'>
							<h2 className='single-product-name'>
								Red Capsicum
							</h2>
							<p className='single-product-description'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed sed ante justo. Integer
								euismod libero id mauris malesuada tincidunt.
							</p>
							<div className='product-details-row'>
								<div className='single-price'>
									<span className='single-label'>Price:</span>
									<span className='single-value'>$5.99</span>
								</div>
								<div className='single-availability'>
									<span className='single-label'>
										Availability:
									</span>
									<span className='single-value'>
										In Stock
									</span>
								</div>
							</div>
							<div className='single-product-options'>
								<div className='size-options'>
									<span className='single-label'>
										Select Weight:
									</span>
									<div className='weight-button'>
										<input type='number' placeholder='kg' />
									</div>
								</div>
							</div>
							<div className='action-buttons'>
								<button className='add-to-cart'>
									Add to Cart
								</button>
								<button className='add-to-wishlist'>
									Add to Wishlist
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
