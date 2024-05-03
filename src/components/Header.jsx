import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../features/category/categorySlice";
import { getCart, getWishlistItems } from "../features/auth/userSlice";

const Header = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategory());
		dispatch(getWishlistItems());
		dispatch(getCart());
	}, [dispatch]);

	const totalCategory = useSelector((state) => state?.category?.category);
	const loggedUser = useSelector((state) => state?.auth?.user);
	const products = useSelector((state) => state.product?.products);
	const wishlistItems = useSelector(
		(state) => state.auth?.wishlist?.wishlist
	);
	const cartProducts = useSelector((state) => state?.auth?.getCart);

	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const resetSearch = () => {
		setSearchQuery("");
	};
	// logout user
	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	};
	return (
		<>
			<div className='header-container'>
				<div className='topbar'>
					<div className='header-top container'>
						<div className='header-top-sections'>
							<div>
								<p>Purana Shivli Road, Kalyanpur, Kanpur</p>
							</div>
							<span className='menu-line'></span>
							<div>
								<p>Hotline: +91 1234567890</p>
							</div>
						</div>
						<div className='header-top-sections '>
							{loggedUser && loggedUser ? (
								<Link
									onClick={handleLogout}
									className='top-checkout'>
									<p>Logout</p>
								</Link>
							) : (
								<Link to={"/sign-in"} className='top-checkout'>
									<p>Login</p>
								</Link>
							)}

							<span className='menu-line'></span>
							<Link to={"/profile"} className='top-checkout'>
								<p>
									Username:{" "}
									{loggedUser
										? loggedUser.name
										: "You need to login again!"}
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className='container '>
					<div className='header-main'>
						<div className='header-left'>
							<div className='logo'>
								<Link to={"/"}>
									<img
										src='./images/drstore.png'
										alt='logo'
									/>
								</Link>
							</div>
							<div className='need-help'>
								<Link
									to={"/contact"}
									className='need-help-text'>
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
												{totalCategory.map(
													(i, index) => {
														return (
															<option
																key={index}
																value={i.title}>
																{i.title}
															</option>
														);
													}
												)}
											</select>
										</div>
									</div>
									<div className='line'></div>
									<div className='search-main-container'>
										<div className='search-main'>
											<input
												type='text'
												className='search_text'
												id='search_text'
												placeholder='Search by Category or products ..'
												value={searchQuery}
												onChange={handleSearchChange} // Attach onChange event handler
											/>

											<IoSearchSharp
												className='search_icon'
												size={22}
											/>
										</div>
										<div className='search-products'>
											{searchQuery && (
												<div>
													{filteredProducts.map(
														(product, index) => (
															<div
																className='search-product-details'
																key={index}>
																<Link
																	className='search-product-title'
																	to={`/product/${product?._id}`}
																	onClick={
																		resetSearch
																	}>
																	{
																		product?.title
																	}
																</Link>
																{/* Display other details of the product */}
															</div>
														)
													)}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='header-right'>
							<div>
								<Link
									to={"wishlist"}
									className='header-wishlist'>
									<FaRegHeart color='#fff' size={25} />
									{loggedUser && loggedUser ? (
										<span className='wishlist-count'>
											{wishlistItems?.length !== 0
												? wishlistItems?.length
												: 0}
										</span>
									) : (
										""
									)}
								</Link>
							</div>
							<div className='cart'>
								<Link to={"/cart"}>
									<HiOutlineShoppingCart
										color='#fff'
										size={25}
									/>
								</Link>
								{loggedUser && loggedUser ? (
									<span>
										{cartProducts?.length !== 0
											? cartProducts?.length
											: 0}
									</span>
								) : (
									""
								)}
							</div>
							<div className='user'>
								<Link to={"/profile"} title=''>
									<FaRegUser color='#fff' size={25} />
									<span className='tooltip'>
										{loggedUser
											? loggedUser.name
											: "Login Again"}
									</span>
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
									{totalCategory.map((i, index) => {
										return (
											<Link to={"/"} key={index}>
												{i.title}
											</Link>
										);
									})}

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
							<NavLink to={"/shop"} className={"h-menu"}>
								{"Shop"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/sale"} className={"h-menu"}>
								{"Sale"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/contact"} className={"h-menu"}>
								{"Contact"}
							</NavLink>
							<span className='menu-line'></span>
							<NavLink to={"/about"} className={"h-menu"}>
								{"About"}
							</NavLink>
						</div>
						<div className='h-bottom-right'>
							<Link to={"/track-order"} className='track-order'>
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
