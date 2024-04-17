import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sale from "./pages/Sale";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./pages/TrackOrder";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Profile from "./pages/Profile";

const AppRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Body />}>
						<Route index element={<Home />} />
						<Route path='/shop' element={<Shop />} />
						<Route
							path='/product/:id'
							element={<SingleProduct />}
						/>
						<Route path='/sale' element={<Sale />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/track-order' element={<TrackOrder />} />
						<Route path='/wishlist' element={<Wishlist />} />
						<Route path='/contact' element={<Contact />} />
						<Route
							path='/shipping-policy'
							element={<ShippingPolicy />}
						/>
						<Route
							path='/privacy-policy'
							element={<PrivacyPolicy />}
						/>
						<Route
							path='/terms-conditions'
							element={<TermsCondition />}
						/>
						<Route path='/about' element={<About />} />
						<Route path='/sign-in' element={<Login />} />
						<Route path='/sign-up' element={<SignUp />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AppRoutes;
