import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";

const Contact = () => {
	return (
		<>
			<div className='contact-container'>
				<div className='container'>
					<div className='contact-content'>
						<div className='contact-header'>
							<p className='contact-label'>Contact</p>
							<h2 className='contact-heading'>Get in Touch</h2>
							<p className='contact-description'>
								Do not hasitate to contact us on
							</p>
						</div>
						<div className='contact-info'>
							<div className='contact-item'>
								<div className='icon-wrapper'>
									<GrLocation />
								</div>
								<div className='info'>
									<h3 className='info-heading'>
										Our Address
									</h3>
									<p className='info-text'>
										Purana Shivli Road Kalyanpur, Kanpur
									</p>
									<p className='info-text'>
										Uttar Pradesh, India
									</p>
								</div>
							</div>
							<div className='contact-item'>
								<div className='icon-wrapper'>
									<TbPhoneCall />
								</div>
								<div className='info'>
									<h3 className='info-heading'>Contact</h3>
									<p className='info-text'>
										Mobile: +91 9026315148
									</p>
									<p className='info-text'>
										Mail: contact@dheeru.org
									</p>
								</div>
							</div>
							<div className='contact-item'>
								<div className='icon-wrapper'>
									<MdOutlineWatchLater color='#fff' />
								</div>
								<div className='info'>
									<h3 className='info-heading'>
										Working hours
									</h3>
									<p className='info-text'>
										We are Available: 24*7
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='contact-form'>
						<h2 className='form-heading'>Ready to Get Started?</h2>
						<form id='contactForm'>
							<div className='form-group'>
								<input
									type='text'
									id='name'
									autoComplete='given-name'
									placeholder='Your name'
									className='form-input'
									name='name'
								/>
							</div>
							<div className='form-group'>
								<input
									type='email'
									id='email'
									autoComplete='email'
									placeholder='Your email address'
									className='form-input'
									name='email'
								/>
							</div>
							<div className='form-group'>
								<textarea
									id='textarea'
									name='textarea'
									cols='30'
									rows='5'
									placeholder='Write your message...'
									className='form-textarea'></textarea>
							</div>
							<div className='text-center'>
								<button type='submit' className='submit-btn'>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
