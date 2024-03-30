import React from "react";

const SignUp = () => {
	return (
		<>
			<div className='signup-container'>
				<div className='container'>
					<section className='signin-section'>
						<div className='signin-container'>
							<a href='/' className='signin-logo'>
								<img
									className='logo-icon'
									src='./images/drstoreicon.png'
									alt='logo'
								/>
								DR Store
							</a>
							<div className='signin-form-container'>
								<div className='signin-form'>
									<h1 className='signin-title'>
										Sign up Here
									</h1>
									<form
										className='signin-form-fields'
										action='#'>
										<div className='form-field'>
											<label
												htmlFor='email'
												className='form-label'>
												Your Name
											</label>
											<input
												type='text'
												name='name'
												id='name'
												className='form-input'
												placeholder='Full Name'
												required
											/>
										</div>
										<div className='form-field'>
											<label
												htmlFor='email'
												className='form-label'>
												Phone Number
											</label>
											<input
												type='number'
												name='number'
												id='number'
												className='form-input'
												placeholder='+91-1234567890'
												required
											/>
										</div>
										<div className='form-field'>
											<label
												htmlFor='email'
												className='form-label'>
												Your email
											</label>
											<input
												type='email'
												name='email'
												id='email'
												className='form-input'
												placeholder='name@drstore.com'
												required
											/>
										</div>
										<div className='form-field'>
											<label
												htmlFor='password'
												className='form-label'>
												Password
											</label>
											<input
												type='password'
												name='password'
												id='password'
												placeholder='••••••••'
												className='form-input'
												required
											/>
										</div>
										<div className='form-checkbox'>
											<input
												id='remember'
												aria-describedby='remember'
												type='checkbox'
												className='checkbox-input'
												required
											/>
											<label
												htmlFor='remember'
												className='checkbox-label'>
												Remember me
											</label>
										</div>
										<button
											type='submit'
											className='signin-button'>
											Sign up
										</button>
										<p className='signup-text'>
											Already have an account?{" "}
											<a
												href='/sign-in'
												className='signup-link'>
												Sign in
											</a>
										</p>
									</form>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default SignUp;
