import React from "react";
import { RxCross2 } from "react-icons/rx";
import MetaTitle from "../components/MetaTitle";

const TrackOrder = () => {
	return (
		<>
			<MetaTitle title={"Track Your Order"} />
			<div className='track-container'>
				<div className='container'>
					<section className='order-summary__container'>
						<div className='order-summary__content'>
							<h2 className='order-summary__title'>
								Payment Successful
							</h2>
							<p className='order-summary__message'>
								Thanks for making a purchase. You can check our
								order summary from below.
							</p>
							<div className='order-summary__box'>
								<div className='order-summary__details'>
									<p className='order-summary__detail'>
										Order Id:{" "}
										<span className='order-summary__id'>
											#10234987
										</span>
									</p>
									<p className='order-summary__detail'>
										Order Payment:{" "}
										<span className='order-summary__payment-date'>
											18th march 2021
										</span>
									</p>
								</div>
								<button className='order-summary__button'>
									Track Your Order
								</button>
							</div>
							<div className='order-summary__items'>
								<div className='order-summary__item'>
									<div className='order-summary-info-box'>
										<div className='order-summary__image-box'>
											<img
												src='./images/capsicum.png'
												alt='Premium Watch image'
												className='order-summary__image'
											/>
										</div>
										<div className='order-summary'>
											<h2 className='order-summary__product-name'>
												Red Capsicum
											</h2>
											<p className='order-summary__manufacturer'>
												Vegitables
											</p>
										</div>
									</div>
									<div className='order-summary__pricing'>
										<p className='order-summary__price-label'>
											Price
										</p>
										<p className='order-summary__price'>
											$100
										</p>
									</div>
									<div className='order-summary__status'>
										<p className='order-summary__status-label'>
											Status
										</p>
										<p className='order-summary__status-text order-summary__status-ready'>
											Ready for Delivery
										</p>
									</div>
									<div className='order-summary__delivery'>
										<p className='order-summary__delivery-label'>
											Expected Delivery Time
										</p>
										<p className='order-summary__delivery-date'>
											23rd March 2021
										</p>
									</div>
								</div>
							</div>
							<div className='order-summary__payments'>
								<div className='order-summary__action'>
									<button className='order-summary__cancel'>
										<RxCross2 size={25} />
										Cancel Order
									</button>
									<p className='order-summary__payment'>
										Paid using Credit Card{" "}
										<span className='order-summary__card'>
											ending with 8822
										</span>
									</p>
								</div>
								<p className='order-summary__total'>
									Total Price:{" "}
									<span className='order-summary__total-price'>
										$200.00
									</span>
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default TrackOrder;
