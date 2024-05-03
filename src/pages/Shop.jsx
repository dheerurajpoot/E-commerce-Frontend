import React, { useEffect } from "react";
import FeaturedProduct from "../components/FeaturedProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const totalProduct = useSelector((state) => state?.product?.products);
	const totalProducts = [...totalProduct].reverse();
	return (
		<>
			<div className='shop-container'>
				<div className='shop-page-title'>
					<h1>Shop</h1>
				</div>
				<div className='container shop-section'>
					{totalProducts.map((product, index) => (
						<FeaturedProduct key={index} product={product} />
					))}
					{/* <FeaturedProduct /> */}
				</div>
			</div>
		</>
	);
};

export default Shop;
