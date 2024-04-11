import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const RecProductCard = ({ product }) => {
	const { title, price, images, tags } = product;

	return (
		<>
			<div className='rec-product-card'>
				<div className='product-grid'>
					<div className='product-image'>
						<Link href='#' className='image'>
							{images.map((image, index) => (
								<img
									key={index}
									className='rec-product-img'
									src={`${image.url}`}
									alt=''
								/>
							))}
						</Link>
						<span className='product-discount-label'>{tags}</span>
						<ul className='product-links'>
							<li>
								<Link
									href='#'
									className='product-icon'
									data-tip='Add to Wishlist'>
									<FaRegHeart size={25} />
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='product-icon'
									data-tip='Add to Cart'>
									<HiOutlineShoppingCart size={25} />
								</Link>
							</li>
						</ul>
					</div>
					<div className='product-content'>
						<h3 className='title'>
							<Link className='product-name' href='#'>
								{title}
							</Link>
						</h3>
						<ReactStars
							count={5}
							value={3}
							edit={false}
							size={15}
							activeColor='#FF504E'
						/>
						<div className='price'>
							<span>{`₹${price + (price * 20) / 100}`}</span>{" "}
							{`₹${price}`}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecProductCard;
