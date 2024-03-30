import React from "react";

const About = () => {
	return (
		<>
			<div className='about-container'>
				<div className='container'>
					<div className='about-content'>
						<div className='about-image-container'>
							<img
								src='https://pixabay.com/illustrations/shopping-design-ecommerce-sale-5200288/'
								alt='About Us'
								className='about-image'
							/>
						</div>
						<div className='about-text-container'>
							<span className='about-section-label'>
								About us
							</span>
							<h2 className='about-section-heading'>
								About{" "}
								<span className='company-name'>
									Our Company
								</span>
							</h2>
							<p className='about-section-description'>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Aliquid, commodi doloremque,
								fugiat illum magni minus nisi nulla numquam
								obcaecati placeat quia, repellat tempore
								voluptatum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
