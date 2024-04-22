import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosConfig";
import { createOrder } from "../features/auth/userSlice";

const checkoutSchema = yup.object({
	name: yup.string().required("Name is Required"),
	address: yup.string().required("Address is Required"),
	city: yup.string().required("City is Required"),
	state: yup.string().required("State is Required"),
	country: yup.string().required("Country is Required"),
	pincode: yup.number().required("Pincode is Required"),
});

const Checkout = () => {
	const [cartSubTotal, setCartSubTotal] = useState(null);
	const [cartTotalQuantity, setCartTotalQuantity] = useState(null);
	const [shippingInfo, setShippingInfo] = useState(null);
	const [paymentInfo, setPaymentInfo] = useState({
		razorpayPaymentId: "",
		razorpayOrderId: "",
	});

	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			name: "",
			address: "",
			city: "",
			other: "",
			state: "",
			country: "",
			pincode: "",
		},

		validationSchema: checkoutSchema,
		onSubmit: (values) => {
			setShippingInfo(values);
			checkoutHandler();
			// formik.resetForm();
		},
	});

	const cartProducts = useSelector((state) => state?.auth?.getCart);

	useEffect(() => {
		let cartQuantity = 0;
		let cartSum = 0;
		for (let i = 0; i < cartProducts?.length; i++) {
			cartSum =
				cartSum +
				Number(cartProducts[i]?.quantity * cartProducts[i]?.price);
			cartQuantity = cartQuantity + cartProducts[i]?.quantity;
			setCartSubTotal(cartSum);
			setCartTotalQuantity(cartQuantity);
		}
	}, [cartProducts]);
	let shippingCharge = 50;

	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const checkoutHandler = async () => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Razorpay SDK is failed to Load");
			return;
		}
		const response = await axios.post(
			`${base_url}user/order/checkout`,
			"",
			config
		);
		if (!response) {
			alert("Something Went Wrong!");
			return;
		}
		const { amount, id: order_id, currency } = response.data.order;
		const options = {
			key: "rzp_test_SdOG1CYzMFFNZi",
			amount: amount,
			currency: currency,
			name: "DR Store.",
			description: "Test Transaction",
			// image: { logo },
			order_id: order_id,
			handler: async function (response) {
				const data = {
					orderCreationId: order_id,
					razorpayPaymentId: response.razorpay_payment_id,
					razorpayOrderId: response.razorpay_order_id,
				};

				const result = await axios.post(
					`${base_url}user/order/payment-verification`,
					data,
					config
				);
				setPaymentInfo({
					razorpayPaymentId: response.razorpay_payment_id,
					razorpayOrderId: response.razorpay_order_id,
				});
				dispatch(
					createOrder({
						totalPrice: cartSubTotal,
						totalPriceAfterDiscount: cartSubTotal,
						orderItems: [],
						paymentInfo,
						shippingInfo,
					})
				);
			},
			prefill: {
				name: "DR Store",
				email: "support@evtn.org",
				contact: "+919026315148",
			},
			notes: {
				address: "Kalyanpur kanpur",
			},
			theme: {
				color: "#61dafb",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<>
			<div className='checkout-container'>
				<div className='container'>
					<div className='checkout-main'>
						<div className='checkout-title'>
							<h2>Shipping Details</h2>
							<Link className='back-to-cart' to={"/cart"}>
								<FaArrowLeft />
								Back to Cart
							</Link>
						</div>
						<div className='checkout-d-flex'>
							<form action='#' onSubmit={formik.handleSubmit}>
								<div className='form-section'>
									<div className='checkout-form '>
										<label>
											<span className='fname'>
												Full Name{" "}
												<span className='required'>
													*
												</span>
											</span>
											<input
												type='text'
												name='name'
												placeholder='Full Name'
												value={formik.values.name}
												onChange={formik.handleChange(
													"name"
												)}
												onBlur={formik.handleBlur(
													"name"
												)}
											/>
											<div className='error'>
												{formik.touched.name &&
													formik.errors.name}
											</div>
										</label>

										<label>
											<span>
												Country{" "}
												<span className='required'>
													*
												</span>
											</span>
											<select
												name='selection'
												value={formik.values.country}
												onChange={formik.handleChange(
													"country"
												)}
												onBlur={formik.handleBlur(
													"country"
												)}>
												<option value='select'>
													Select a country...
												</option>
												<option value='IND'>
													India
												</option>
											</select>
											<div className='error'>
												{formik.touched.country &&
													formik.errors.country}
											</div>
										</label>
										<label>
											<span>
												Address{" "}
												<span className='required'>
													*
												</span>
											</span>
											<input
												type='text'
												name='address'
												placeholder='House number and street name'
												value={formik.values.address}
												onChange={formik.handleChange(
													"address"
												)}
												onBlur={formik.handleBlur(
													"address"
												)}
											/>
											<div className='error'>
												{formik.touched.address &&
													formik.errors.address}
											</div>
										</label>
										<label>
											<span>&nbsp;</span>
											<input
												type='text'
												name='other'
												placeholder='Apartment, suite, unit etc. (optional)'
												value={formik.values.other}
												onChange={formik.handleChange(
													"other"
												)}
												onBlur={formik.handleBlur(
													"other"
												)}
											/>
										</label>
										<label>
											<span>
												Town / City{" "}
												<span className='required'>
													*
												</span>
											</span>
											<input
												type='text'
												name='city'
												placeholder='Town / City'
												value={formik.values.city}
												onChange={formik.handleChange(
													"city"
												)}
												onBlur={formik.handleBlur(
													"city"
												)}
											/>
											<div className='error'>
												{formik.touched.city &&
													formik.errors.city}
											</div>
										</label>

										<label>
											<span>
												State / County{" "}
												<span className='required'>
													*
												</span>
											</span>
											<input
												type='text'
												name='state'
												placeholder='State'
												value={formik.values.state}
												onChange={formik.handleChange(
													"state"
												)}
												onBlur={formik.handleBlur(
													"state"
												)}
											/>
											<div className='error'>
												{formik.touched.state &&
													formik.errors.state}
											</div>
										</label>
										<label>
											<span>
												Pincode / ZIP{" "}
												<span className='required'>
													*
												</span>
											</span>
											<input
												type='number'
												name='pincode'
												placeholder='Pincode'
												value={formik.values.pincode}
												onChange={formik.handleChange(
													"pincode"
												)}
												onBlur={formik.handleBlur(
													"pincode"
												)}
											/>
											<div className='error'>
												{formik.touched.pincode &&
													formik.errors.pincode}
											</div>
										</label>
									</div>
									<div className='Yorder'>
										<table>
											<thead>
												<tr>
													<th colSpan='2'>
														Your order
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Total Products</td>
													<td>{cartTotalQuantity}</td>
												</tr>
												<tr>
													<td>Subtotal</td>
													<td>{`₹ ${cartSubTotal}`}</td>
												</tr>
												<tr>
													<td>Shipping</td>
													<td>{`₹ ${shippingCharge}`}</td>
												</tr>
												<tr className='total-ammount'>
													<td>Total</td>
													<td>{`₹ ${
														cartSubTotal +
														shippingCharge
													}`}</td>
												</tr>
											</tbody>
										</table>

										<br />
										<div>
											<input
												type='radio'
												name='dbt'
												value='dbt'
											/>{" "}
											Cash On Delivery
										</div>
										<p>
											Make your payment directly into our
											bank account. Please use your Order
											ID as the payment reference. Your
											order will not be shipped until the
											funds have cleared in our account.
										</p>

										<div>
											<input
												type='radio'
												name='dbt'
												value='cd'
											/>{" "}
											Razorpay{" "}
											<span>
												<img
													src='https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg'
													alt=''
													width='50'
												/>
											</span>
										</div>
									</div>
								</div>
								<div className='checkout-button'>
									<button type='submit'>Place Order</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
