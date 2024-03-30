import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Cart = () => {
	return (
		<>
			<div className='cart-container'>
				<div className='cart container'>
					<div className='shopping-cart'>
						<h1 className='page-title'>Shopping Cart</h1>
						<div className='cartpage-items'>
							<div className='cart-product-details'>
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
														src='./images/capsicum.png'
														alt='Product image'
													/>
													<h4 className='cart-product-name'>
														Red Capsicum
													</h4>
												</div>
											</td>
											<td className='cart-product-price'>
												$5.99
											</td>
											<td className='cart-product-quantity'>
												<div className='quantity-wrapper'>
													<button className='cart-quantity-btn'>
														-
													</button>
													<p className='cart-quantity'>
														1
													</p>
													<button className='cart-quantity-btn'>
														+
													</button>
												</div>
											</td>
											<td className='product-total'>
												$5.99
											</td>
										</tr>
										{/* More product rows */}
									</tbody>
								</table>
							</div>
						</div>
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
									<button type='button' className='apply-btn'>
										Apply
									</button>
								</div>
								<Link
									to={"/shop"}
									className='continue-btn-link'>
									<button className='continue-btn'>
										<FaArrowLeftLong /> Continue Shopping
									</button>
								</Link>
							</div>
							<div className='summary-content'>
								<div className='summary-item'>
									<p className='summary-label'>Subtotal</p>
									<p className='summary-value'>$5.99</p>
								</div>
								<div className='summary-item'>
									<p className='summary-label'>Shipping</p>
									<p className='summary-value'>$1.99</p>
								</div>
								<hr className='separator' />
								<div className='summary-item'>
									<p className='total-label'>Total</p>
									<div className='total-content'>
										<p className='total-value'>$7.98 USD</p>
										<p className='total-info'>
											including VAT
										</p>
									</div>
								</div>
								<button className='checkout-btn'>
									Check out
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
