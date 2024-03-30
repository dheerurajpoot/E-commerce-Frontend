import React from "react";
import { ImPower } from "react-icons/im";
import ProductCard from "./ProductCard";

const FlashDeals = () => {
	return (
		<>
			<div className='flash-container'>
				<div className='flash-title-timer container'>
					<div className='flash-title'>
						<ImPower />
						<h2>Flash Deals</h2>
					</div>
					<div className='countdown-container'>
						<span>Ends in</span>
						<div className='countdown'>
							<span id='hours'>0 hours</span> :
							<span id='minutes'>0 mins</span> :{" "}
							<span id='seconds'>0 secs</span>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='flash-products'>
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default FlashDeals;
