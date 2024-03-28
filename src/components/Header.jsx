import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
	return (
		<>
			<div className='header-container'>
				<div className='topbar'>
					<div className='header-top container'>
						<div className='header-top-sections'>
							<div>
								<p>8049 High Ridge St. Saint Joseph</p>
							</div>
							<span className='menu-line'></span>
							<div>
								<p>Hotline: 970 978-6290</p>
							</div>
						</div>
						<div className='header-top-sections'>
							<div>
								<p>Save More on Map</p>
							</div>
							<span className='menu-line'></span>
							<div>
								<p>Checkout</p>
							</div>
						</div>
					</div>
				</div>
				<div className='container '>
					<div className='header-main'>
						<div className='header-left'>
							<div className='logo'>
								<Link to={"/"}>
									<img src='./images/drstore.png' alt='' />
								</Link>
							</div>
							<div className='need-help'>
								<Link className='need-help-text'>
									Need <br /> Help
								</Link>
							</div>
						</div>
						<div className='header-middle'>
							<div className='search_box'>
								<div className='search'>
									<div className='select_area'>
										<div className='text search-menu'>
											<select
												name='search-category'
												id='search-category'>
												<option value='all-category'>
													All Categories
												</option>
												<option value='computer'>
													Computer
												</option>
												<option value='grocery'>
													Grocery
												</option>
												<option value='vegitables'>
													Vegitables
												</option>
											</select>
										</div>
									</div>
									<div className='line'></div>
									<div className='search-main'>
										<input
											type='text'
											className='search_text'
											id='search_text'
											placeholder='Search by Category or products ..'
										/>
										<IoSearchSharp
											className='search_icon'
											size={22}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className='header-right'>
							<div className='wishlist'>
								<Link>
									<FaRegHeart color='#fff' size={25} />
								</Link>
							</div>
							<div className='cart'>
								<Link>
									<HiOutlineShoppingCart
										color='#fff'
										size={25}
									/>
								</Link>
								<span>0</span>
							</div>
							<div className='user'>
								<Link>
									<FaRegUser color='#fff' size={25} />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='header-bottom'>
					<div className='container h-bottom'>
						<div className='h-bottom-left'>
							<Link className='hamburger'>
								<IoMenu color='#fff' size={25} />
							</Link>
							<div className='h-dropdown'>
								<button>
									All Categories <IoIosArrowDown />
								</button>
								<div className='dropdown-options'>
									<Link to={"/"}>Computer</Link>
									<Link to={"/"}>Grocery</Link>
									<Link to={"/"}>Vegitables</Link>
								</div>
							</div>
						</div>
						<div className='h-bottom-middle'>
							<NavLink to={"/"} className={"h-menu"}>
								{"Home"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/"} className={"h-menu"}>
								{"Shop"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/"} className={"h-menu"}>
								{"Blog"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/"} className={"h-menu"}>
								{"Pages"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/"} className={"h-menu"}>
								{"Flash Sale"}
							</NavLink>
						</div>
						<div className='h-bottom-right'>
							<Link to={"/"} className='track-order'>
								<span>Track My Order</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
