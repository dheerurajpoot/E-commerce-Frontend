import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToWishlist,
	getProduct,
	getProducts,
	rateProduct,
} from "../features/products/productSlice";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { addToCart, getCart } from "../features/auth/userSlice";
import { useNavigate } from "react-router-dom";
import FeaturedProduct from "../components/FeaturedProduct";
import MetaTitle from "../components/MetaTitle";

const SingleProduct = () => {
	const [color, setColor] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [cartItem, setCartItem] = useState(false);
	const [imageLoading, setImageLoading] = useState(true);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const productId = location.pathname.split("/")[2];
	useEffect(() => {
		dispatch(getProduct(productId));
		setTimeout(() => {
			setImageLoading(false);
		}, 600);

		dispatch(getCart());
		window.scrollTo(0, 0);
	}, [dispatch]);

	const product = useSelector((state) => state?.product?.product);
	const cartProducts = useSelector((state) => state?.auth?.getCart);

	const addItemToWishlist = (prodId) => {
		dispatch(addToWishlist(prodId));
		toast.success("Product Added to Wishlist!");
	};

	useEffect(() => {
		for (let i = 0; i < cartProducts?.length; i++) {
			if (productId === cartProducts[i]?.productId?._id) {
				setCartItem(true);
			}
		}
	});
	const addProductToCart = () => {
		if (color === null) {
			toast.error("Please Choose Color");
			return false;
		} else {
			dispatch(
				addToCart({ productId, quantity, color, price: product?.price })
			);
			setTimeout(() => {
				navigate("/cart");
			}, 800);
			dispatch(getCart());
		}
	};

	useEffect(() => {
		dispatch(getProducts());
	}, []);
	const totalProduct = useSelector((state) => state?.product?.products);
	const totalProducts = [...totalProduct].reverse();
	const popularProducts = totalProducts.filter(
		(product) => product?.tags === "popular"
	);

	const [star, setStar] = useState(null);
	const [comment, setComment] = useState(null);

	const addProductRating = () => {
		if (star === null) {
			toast.error("Please choose star rating");
			return false;
		} else if (comment === null) {
			toast.error("Please Write a Review first.");
			return false;
		} else {
			dispatch(
				rateProduct({
					star: star,
					comment: comment,
					productId: productId,
				})
			);
			setTimeout(() => {
				dispatch(getProduct(productId));
			}, 200);
		}
	};
	return (
		<>
			<MetaTitle title={product?.title} />
			<div className='single-product-container'>
				<div className='container'>
					<div className='single-product-details'>
						<div className='single-product-image'>
							{imageLoading ? (
								<div className='loader'></div>
							) : (
								<img
									src={`${product?.images[0]?.url}`}
									alt='Product Image'
								/>
							)}
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
							{cartItem === false && (
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
										{product?.color?.map((item, index) => {
											return (
												<li
													style={{
														background: `${item}`,
													}}
													className='p-color'
													key={index}
													onClick={() =>
														setColor(item)
													}></li>
											);
										})}
									</ul>
								</div>
							)}

							{cartItem === false && (
								<div className='single-product-options'>
									<div className='size-options'>
										<span className='single-label'>
											Quantity:
										</span>
										<div className='quantity-button'>
											<input
												type='number'
												min={1}
												placeholder='Qty'
												onChange={(e) =>
													setQuantity(e.target.value)
												}
												value={quantity}
											/>
										</div>
									</div>
								</div>
							)}

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
								{cartItem ? (
									<Link to={"/cart"}>
										<button className='add-to-cart'>
											Go to Cart
										</button>
									</Link>
								) : (
									<button
										onClick={() => addProductToCart()}
										className='add-to-cart'>
										Add to Cart
									</button>
								)}

								<button
									onClick={(e) =>
										addItemToWishlist(product?._id)
									}
									className='add-to-wishlist'>
									Add to Wishlist
								</button>
							</div>
							<div className='single-shipping-text'>
								<h4>Shipping & Returns</h4>
								<p>
									Free shipping and returns available on all
									orders. <br /> We ship all orders with in{" "}
									<b>5-10 business days</b>
								</p>
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
						<h2 className='prod-desc-heading'>Write a Review</h2>
						<div>
							<ReactStars
								count={5}
								value={3}
								edit={true}
								size={18}
								activeColor='#FF504E'
								onChange={(e) => {
									setStar(e);
								}}
							/>
							<textarea
								type='text'
								placeholder='Write your review here...'
								rows='6'
								cols='100'
								className='review-input'
								onChange={(e) => {
									setComment(e.target.value);
								}}
							/>
							<div className='review-submit-btn'>
								<button
									type='buttom'
									onClick={addProductRating}
									className='submit-review'>
									Submit
								</button>
							</div>
						</div>
						{product && product?.rating.length !== 0 ? (
							<h2>Recent Reviews</h2>
						) : (
							""
						)}
						{product &&
							product?.rating.slice(0, 5)?.map((item, index) => {
								return (
									<div key={index} className='recent-reviews'>
										<h3>{item?.postedBy?.name}</h3>
										<ReactStars
											count={5}
											value={item?.star}
											edit={false}
											size={18}
											activeColor='#FF504E'
										/>
										<p>{item?.comment}</p>
									</div>
								);
							})}
					</div>
					<div className='popular-products'>
						<h1>Popular Products</h1>
						<div className='p-products'>
							{popularProducts
								?.slice(0, 4)
								?.map((product, index) => {
									return (
										<FeaturedProduct
											key={index}
											product={product}
										/>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
