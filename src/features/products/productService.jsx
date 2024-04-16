import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProducts = async () => {
	try {
		const response = await axios.get(`${base_url}product/allproducts`);
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};
const addToWishlist = async (productId) => {
	try {
		const response = await axios.put(
			`${base_url}product/wishlist`,
			{
				productId,
			},
			config
		);
		return response.data;
	} catch (error) {
		console.error("Error in adding to wishlist", error);
		throw error;
	}
};

const productService = {
	getProducts,
	addToWishlist,
};
export default productService;
