import React, { useEffect } from "react";
import FeaturedProduct from "../components/FeaturedProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const Sale = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const totalProduct = useSelector((state) => state?.product?.products);
	const totalProducts = [...totalProduct].reverse();
	const saleProducts = totalProducts.filter(
		(product) => product.tags === "popular"
	);
	return (
		<>
			<div className='sale-container'>
				<div className='container shop-section'>
					<div className='sale-banner'>
						<img src='./images/sale-banner.jpg' alt='sale banner' />
					</div>
					{saleProducts.map((product, index) => {
						return (
							<FeaturedProduct key={index} product={product} />
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Sale;
