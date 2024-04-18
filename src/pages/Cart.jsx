import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCartItem } from "../features/auth/userSlice";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCart());
		window.scrollTo(0, 0);
	}, [dispatch]);

	const cartProducts = useSelector((state) => state.auth?.getCart);
	const deleteCartItem = (id) => {
		dispatch(removeCartItem(id));
		setTimeout(() => {
			dispatch(getCart());
		}, 200);
	};

	return (
		<>
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
														<button className='cart-quantity-btn'>
															-
														</button>
														<p className='cart-quantity'>
															{item?.quantity}
														</p>
														<button className='cart-quantity-btn'>
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
										<p className='summary-label'>
											Subtotal
										</p>
										<p className='summary-value'>$5.99</p>
									</div>
									<div className='summary-item'>
										<p className='summary-label'>
											Shipping
										</p>
										<p className='summary-value'>{`₹ ${50}`}</p>
									</div>
									<hr className='separator' />
									<div className='summary-item'>
										<p className='total-label'>Total</p>
										<div className='total-content'>
											<p className='total-value'>
												$7.98 USD
											</p>
											<p className='total-info'>
												including VAT
											</p>
										</div>
									</div>
									<button className='checkout-btn'>
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
