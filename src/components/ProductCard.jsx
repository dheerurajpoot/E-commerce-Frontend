import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const { _id, title, category, price, images, totalRating } = product;
	const addItemToWishlist = (productId) => {
		dispatch(addToWishlist(productId));
		toast.success("Product Added to Wishlist!");
	};

	return (
		<>
			<div className='card'>
				<figure>
					{images.map((image, index) => (
						<img
							key={index}
							className='product-card-img'
							src={`${image.url}`}
							alt='product image'
						/>
					))}
				</figure>
				<section className='details'>
					<div className='min-details'>
						<Link
							to={`/product/${_id}`}
							className='product-card-name'>
							<h1 className='product-name'>{`${title.substr(
								0,
								40
							)}....`}</h1>
							<span className='card-category'>{category}</span>
						</Link>
						<h1 className='price'>{`₹${price}`}</h1>
					</div>
					<div>
						<ReactStars
							count={5}
							value={Number(totalRating)}
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
						<Link
							className='card-wishlist'
							onClick={(e) => addItemToWishlist(_id)}>
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
