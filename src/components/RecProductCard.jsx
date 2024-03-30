import React from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const RecProductCard = () => {
	return (
		<>
			<div className='rec-product-card'>
				<div class='product-grid'>
					<div class='product-image'>
						<Link href='#' class='image'>
							<img class='pic-1' src='images/capsicum.png' />
						</Link>
						<span class='product-discount-label'>-33%</span>
						<ul class='product-links'>
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
					<div class='product-content'>
						<h3 class='title'>
							<Link className='product-name' href='#'>
								Fresh Red Capsicum
							</Link>
						</h3>
						<ReactStars
							count={5}
							value='3'
							edit={false}
							size={16}
							activeColor='#FF504E'
						/>
						<div class='price'>
							<span>$90.00</span> $66.00
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecProductCard;
