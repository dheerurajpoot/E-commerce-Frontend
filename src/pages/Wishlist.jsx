import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../features/auth/userSlice";
import { addToWishlist } from "../features/products/productSlice";
import { toast } from "react-toastify";
import MetaTitle from "../components/MetaTitle";

const Wishlist = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getWishlistItems());
	});
	const wishlistItems = useSelector(
		(state) => state.auth?.wishlist?.wishlist
	);
	const removeWishlistItems = (itemId) => {
		dispatch(addToWishlist(itemId));
		toast.warning("Product Removed from Wishlist!");
	};
	return (
		<>
			<MetaTitle title={"Your Wishlist"} />
			<div className='wishlist-container'>
				<h2>Wishlist</h2>
				<div className='container wishlist-section'>
					{wishlistItems?.length === 0 && (
						<p className='empty-wishlist'>
							Your wishlist is empty!{" "}
							<Link to={"/shop"}>Start Shopping</Link>
						</p>
					)}
					{wishlistItems?.map((items, index) => {
						return (
							<div className='wishlist' key={index}>
								<div className='wishlist-img'>
									<img
										onClick={() =>
											navigate(`/product/${items?._id}`)
										}
										src={`${items.images[0].url}`}
										alt='product Image'
									/>
									<div className='remove-item'>
										<RxCross2
											size={30}
											onClick={(e) =>
												removeWishlistItems(items?._id)
											}
										/>
									</div>
								</div>
								<div className='wishlist-title'>
									<Link
										to={`/product/${items?._id}`}
										className='wishlist-product-title'>
										<h3>{items?.title}</h3>
									</Link>
								</div>
								<div className='price'>
									<span>Price:</span> {`₹${items?.price}`}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Wishlist;
