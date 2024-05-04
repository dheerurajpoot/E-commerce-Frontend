import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
	getCart,
	removeCartItem,
	updateCartQty,
} from "../features/auth/userSlice";
import { RxCross2 } from "react-icons/rx";
import MetaTitle from "../components/MetaTitle";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [cartSubTotal, setCartSubTotal] = useState(null);
	const [cartProductDetails, setCartProductDetails] = useState(null);
	useEffect(() => {
		dispatch(getCart());
		window.scrollTo(0, 0);
	}, [dispatch]);

	useEffect(() => {
		if (cartProductDetails !== null) {
			dispatch(
				updateCartQty({
					pId: cartProductDetails?.pId,
					quantity: cartProductDetails?.newquantity,
				})
			);
			setTimeout(() => {
				dispatch(getCart());
			}, 200);
		}
	}, [cartProductDetails]);

	const cartProducts = useSelector((state) => state?.auth?.getCart);
	const deleteCartItem = (id) => {
		dispatch(removeCartItem(id));
		setTimeout(() => {
			dispatch(getCart());
		}, 200);
	};
	let shippingCharge = 50;
	useEffect(() => {
		let cartSum = 0;
		for (let i = 0; i < cartProducts?.length; i++) {
			cartSum =
				cartSum +
				Number(cartProducts[i]?.quantity * cartProducts[i]?.price);
			setCartSubTotal(cartSum);
		}
	}, [cartProducts]);

	const incrementQuantity = (id) => {
		const newQuantity = cartProductDetails?.newquantity
			? parseInt(cartProductDetails?.newquantity) + 1
			: parseInt(cartProducts.find((item) => item._id === id).quantity) +
			  1;
		setCartProductDetails({ pId: id, newquantity: newQuantity });
	};

	const decrementQuantity = (id) => {
		const newQuantity = cartProductDetails?.newquantity
			? parseInt(cartProductDetails?.newquantity) - 1
			: parseInt(cartProducts.find((item) => item._id === id).quantity) -
			  1;
		if (newQuantity >= 0) {
			setCartProductDetails({ pId: id, newquantity: newQuantity });
		}
	};

	return (
		<>
			<MetaTitle title={"Your Cart Products"} />
			<div className='cart-container'>
				<div className='cart container'>
					<div className='shopping-cart'>
						<h1 className='page-title'>Shopping Cart</h1>
						{cartProducts?.length === 0 && (
							<p>Your cart is empty!</p>
						)}
						<div className='cartpage-items'>
							{cartProducts?.map((item, index) => (
								<div
									key={index}
									className='cart-product-details'>
									<table className='product-table'>
										<thead>
											<tr>
												<th className='product-column'>
													Product
												</th>
												<th className='product-column'>
													Price
												</th>
												<th className='product-column'>
													Quantity
												</th>
												<th className='product-column'>
													Total
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='cart-product-info'>
													<div className='product-info-wrapper'>
														<img
															className='cart-product-image'
															src={`${item?.productId?.images[0].url}`}
															alt='Product image'
														/>

														<div className='cart-product-title'>
															<h4 className='cart-product-name'>
																{
																	item
																		?.productId
																		?.title
																}
															</h4>
															<div className='cart-color'>
																Color:{" "}
																<p
																	style={{
																		background: `${item?.color}`,
																	}}></p>
															</div>
														</div>
													</div>
												</td>
												<td className='cart-product-price'>
													{`₹${item?.price}`}
												</td>
												<td className='cart-product-quantity'>
													<div className='quantity-wrapper'>
														<button
															className='cart-quantity-btn'
															onClick={() =>
																decrementQuantity(
																	item._id
																)
															}>
															-
														</button>
														<input
															type='number'
															className='cart-quantity'
															value={
																cartProductDetails?.newquantity
																	? cartProductDetails?.newquantity
																	: item?.quantity
															}
															onChange={(e) =>
																setCartProductDetails(
																	{
																		pId: item?._id,
																		newquantity:
																			e
																				.target
																				.value,
																	}
																)
															}
														/>
														<button
															className='cart-quantity-btn'
															onClick={() =>
																incrementQuantity(
																	item._id
																)
															}>
															+
														</button>
													</div>
												</td>
												<td className='product-total'>
													{`₹${
														item?.price *
														item?.quantity
													}`}
												</td>
												<td className='remove-cart-btn'>
													<RxCross2
														size={30}
														onClick={() =>
															deleteCartItem(
																item?._id
															)
														}
													/>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							))}
						</div>
						{cartProducts?.length !== 0 && (
							<div className='summary-container'>
								<div className='promo-container'>
									<h3 className='promo-title'>
										Apply promo code
									</h3>
									<div className='promo-input-container'>
										<input
											type='email'
											placeholder='Promo code'
											className='promo-input'
										/>
										<button
											type='button'
											className='apply-btn'>
											Apply
										</button>
									</div>
									<Link
										to={"/shop"}
										className='continue-btn-link'>
										<button className='continue-btn'>
											<FaArrowLeftLong /> Continue
											Shopping
										</button>
									</Link>
								</div>
								<div className='summary-content'>
									<div className='summary-item'>
										<p className='total-label'>
											Cart Total
										</p>
										<div className='total-content'>
											<p className='total-value'>
												{`₹ ${cartSubTotal}`}
											</p>
											<p className='total-info'>
												including All Taxes
											</p>
										</div>
									</div>
									<button
										onClick={() => navigate("/checkout")}
										className='checkout-btn'>
										Checkout
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
