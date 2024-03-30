import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = () => {
	return (
		<>
			<div className='card'>
				<figure>
					<img src='./images/capsicum.png' alt='capsicum' />
				</figure>
				<section className='details'>
					<div className='min-details'>
						<Link to={"/product"} className='product-card-name'>
							<h1 className='product-name'>Red Capsicum</h1>
							<span className='card-category'>Vegitable</span>
						</Link>
						<h1 className='price'>$5.99</h1>
					</div>
					<div>
						<ReactStars
							count={5}
							value='3'
							edit={false}
							size={18}
							activeColor='#FF504E'
						/>
					</div>
					<div className='product-options'>
						<div>
							<h3>Quantity</h3>
							<div className='quantity'>
								<span>-</span>
								<input type='number' placeholder='1' />
								<span>+</span>
							</div>
						</div>
						<Link className='card-wishlist'>
							<FaRegHeart size={25} />
						</Link>
					</div>
					<a href='#' className='atc-btn'>
						add to cart
					</a>
				</section>
			</div>
		</>
	);
};

export default ProductCard;
