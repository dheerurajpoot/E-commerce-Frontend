import React from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";

const FeaturedProduct = ({ product }) => {
	const { _id, title, tags, price, images } = product;

	return (
		<>
			<section className='featured-product'>
				<div className='f-product-container'>
					<div className='featured-product-container'>
						{images.map((image, index) => (
							<Link key={index} to={`/product/${_id}`}>
								<img
									className='featured-product-image'
									src={`${image.url}`}
									alt=''
								/>
							</Link>
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
					<Link to={`/product/${_id}`} className='f-product-link'>
						<button className='featured-product-button'>
							<div className='default-state'>View Details</div>
							<div className='plus-state'>
								<FiEye />
							</div>
						</button>
					</Link>
				</div>
			</section>
		</>
	);
};

export default FeaturedProduct;
