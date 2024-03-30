import React from "react";

const Login = () => {
	return (
		<>
			<div className='login-container'>
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
										Sign in to your account
									</h1>
									<form
										className='signin-form-fields'
										action='#'>
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
										<a
											href='#'
											className='forgot-password-link'>
											Forgot password?
										</a>
										<button
											type='submit'
											className='signin-button'>
											Sign in
										</button>
										<p className='signup-text'>
											Don’t have an account yet?{" "}
											<a
												href='/sign-up'
												className='signup-link'>
												Sign up
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

export default Login;
