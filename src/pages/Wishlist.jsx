import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Wishlist = () => {
	return (
		<>
			<div className='wishlist-container'>
				<h2>Wishlist</h2>
				<div className='container wishlist-section'>
					<div className='wishlist'>
						<div className='wishlist-img'>
							<img src='./images/capsicum.png' alt='capsicum' />
							<div className='remove-item'>
								<RxCross2 size={30} />
							</div>
						</div>
						<div className='wishlist-title'>
							<Link className='wishlist-product-title'>
								<h3>Red Capsicum</h3>
							</Link>
						</div>
						<div className='price'>
							<span>Price:</span> $6.00
						</div>
					</div>
					<div className='wishlist'>
						<div className='wishlist-img'>
							<img src='./images/capsicum.png' alt='capsicum' />
							<div className='remove-item'>
								<RxCross2 size={30} />
							</div>
						</div>
						<div className='wishlist-title'>
							<Link className='wishlist-product-title'>
								<h3>Red Capsicum</h3>
							</Link>
						</div>
						<div className='price'>
							<span>Price:</span> $6.00
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Wishlist;
