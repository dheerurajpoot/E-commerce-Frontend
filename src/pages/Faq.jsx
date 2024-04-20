import React from "react";

const Faq = () => {
	return (
		<>
			<div className='faq-container'>
				<div className='container'>
					<h2 className='faq-title'>Frequently Asked Questions</h2>
					<div className='faq'>
						<input id='faq-a' type='checkbox' />
						<label for='faq-a'>
							<p className='faq-heading'>
								What payment methods do you accept?
							</p>
							<div className='faq-arrow'></div>
							<p className='faq-text'>
								Customers often want to know the available
								payment options. You can list the various
								payment methods your store accepts, such as
								credit/debit cards, PayPal, bank transfers, or
								any other payment gateways you support.
							</p>
						</label>
						<input id='faq-b' type='checkbox' />
						<label for='faq-b'>
							<p className='faq-heading'>
								What is your return policy?
							</p>
							<div className='faq-arrow'></div>
							<p className='faq-text'>
								Providing details about your return policy helps
								customers feel more confident about their
								purchase. Explain the conditions for returns,
								including time limits, product condition
								requirements, and whether there are any
								restocking fees.
							</p>
						</label>
						<input id='faq-c' type='checkbox' />
						<label for='faq-c'>
							<p className='faq-heading'>
								How long will it take for my order to arrive?
							</p>
							<div className='faq-arrow'></div>
							<p className='faq-text'>
								Shipping timeframes are crucial information for
								customers, especially if they need the product
								by a specific date. Provide estimated delivery
								times based on shipping methods and
								destinations. Additionally, offer tracking
								options if available.
							</p>
						</label>
						<input id='faq-d' type='checkbox' />
						<label for='faq-d'>
							<p className='faq-heading'>
								Are my personal and payment details secure on
								your website?
							</p>
							<div className='faq-arrow'></div>
							<p className='faq-text'>
								Security concerns are common among online
								shoppers. Assure your customers about the
								security measures in place, such as SSL
								encryption for data transmission, PCI compliance
								for payment processing, and any other security
								certifications your website may have.
							</p>
						</label>
						<input id='faq-e' type='checkbox' />
						<label for='faq-e'>
							<p className='faq-heading'>
								Do you offer discounts for bulk or wholesale
								orders?
							</p>
							<div className='faq-arrow'></div>
							<p className='faq-text'>
								Some customers may be interested in purchasing
								items in bulk or as wholesale orders for resale
								purposes. Clarify whether your store offers
								discounts or special pricing for such orders,
								and provide details on how customers can inquire
								about bulk purchasing options.
							</p>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Faq;