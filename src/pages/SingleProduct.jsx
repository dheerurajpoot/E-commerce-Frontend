import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getProduct } from "../features/products/productSlice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const productId = location.pathname.split("/")[2];
	useEffect(() => {
		dispatch(getProduct(productId));
		window.scrollTo(0, 0);
	}, [dispatch]);
	const product = useSelector((state) => state.product?.product);
	const addItemToWishlist = (prodId) => {
		dispatch(addToWishlist(prodId));
		toast.success("Product Added to Wishlist!");
	};
	return (
		<>
			<div className='single-product-container'>
				<div className='container'>
					<div className='single-product-details'>
						<div className='single-product-image'>
							<img
								src={`${product?.images[0]?.url}`}
								alt='Product Image'
							/>
						</div>
						<div className='single-product-info'>
							<h2 className='single-product-name'>
								{product?.title}
							</h2>
							<ReactStars
								count={5}
								value={
									Number(product?.totalRating)
										? Number(product?.totalRating)
										: 0
								}
								edit={false}
								size={18}
								activeColor='#FF504E'
							/>
							<div
								className='single-product-description'
								dangerouslySetInnerHTML={{
									__html: product?.description.substr(0, 100),
								}}></div>
							<div className='product-details-row'>
								<div className='single-price'>
									<span className='single-label'>
										Category:
									</span>
									<span className='single-value'>
										{product?.category}
									</span>
								</div>
								<div className='single-availability'>
									<span className='single-label'>Brand:</span>
									<span className='single-value'>
										{product?.brand}
									</span>
								</div>
							</div>
							<div className='size-color'>
								{/* <ul className='size-color-ul'>
									<p>Size :-</p>
									<li className='bg'>7</li>
									<li className='bg'>8</li>
									<li className='bg'>9</li>
									<li className='bg'>10</li>
									<li className='bg'>11</li>
								</ul> */}
								<ul className='size-color-ul'>
									<p>Color :-</p>
									{product?.color.map((item, index) => {
										return (
											<li
												style={{
													background: `${item}`,
												}}
												className='yellow p-color'
												key={index}></li>
										);
									})}
									{/* <li className='black p-color'></li> */}
									{/* <li className='blue p-color'></li> */}
								</ul>
							</div>
							<div className='single-product-options'>
								<div className='size-options'>
									<span className='single-label'>
										Quantity:
									</span>
									<div className='quantity-button'>
										<input
											type='number'
											placeholder='Quantity'
										/>
									</div>
								</div>
							</div>
							<div className='product-details-row'>
								<div className='single-price'>
									<span className='single-label'>Price:</span>
									<span className='single-value'>{`₹${product?.price}`}</span>
								</div>
								<div className='single-availability'>
									<span className='single-label'>Stock:</span>
									<span className='single-value'>
										{String(
											product?.quantity - product?.sold
										)}
									</span>
								</div>
							</div>
							<div className='action-buttons'>
								<button className='add-to-cart'>
									Add to Cart
								</button>
								<button
									onClick={(e) =>
										addItemToWishlist(product?._id)
									}
									className='add-to-wishlist'>
									Add to Wishlist
								</button>
							</div>
						</div>
					</div>
					<hr />
					<div className='prod-description'>
						<h2 className='prod-desc-heading'>Description</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: product?.description,
							}}></div>
					</div>
					<hr />
					<div className='prod-review'>
						<h2 className='prod-desc-heading'>Review</h2>
						<form action='#'>
							<textarea
								type='text'
								rows='8'
								cols='100'
								className='review-input'
							/>
							<div className='review-submit-btn'>
								<button type='submit' className='submit-review'>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
