import React from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ product }) => {
	const { _id, title, tags, price, images } = product;

	return (
		<>
			<section className='featured-product'>
				<div className='f-product-container'>
					<div className='featured-product-container'>
						{images.map((image, index) => (
							<img
								key={index}
								className='featured-product-image'
								src={`${image.url}`}
								alt=''
							/>
						))}
						<div className='featured-product-badge-container'>
							<p className='featured-product-badge'>{tags}</p>
						</div>
					</div>
					<div className='featured-container'>
						<div className='featured-price-container'>
							<p className='featured-price'>{`₹${price}`}</p>
							<del className='featured-discount'>{`₹${
								price + (price * 20) / 100
							}`}</del>
						</div>
						<Link to={`/product/${_id}`} className='featured-title'>
							<h3 className='featured-product-name'>
								{`${title.substr(0, 24)}....`}
							</h3>
						</Link>
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
