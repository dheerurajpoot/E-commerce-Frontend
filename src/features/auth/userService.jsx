import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const registerUser = async (userData) => {
	try {
		const response = await axios.post(`${base_url}user/register`, userData);
		return response.data;
	} catch (error) {
		console.error("Error in registering user :", error);
		throw error;
	}
};
const loginUser = async (userData) => {
	try {
		const response = await axios.post(`${base_url}user/login`, userData);
		if (response.data) {
			localStorage.setItem("customer", JSON.stringify(response.data));
		}
		return response.data;
	} catch (error) {
		console.error("Error white logging in user :", error);
		throw error;
	}
};
const getWishlistItems = async () => {
	try {
		const response = await axios.get(`${base_url}user/wishlist`, config);

		return response.data;
	} catch (error) {
		console.error("Error white logging in user :", error);
		throw error;
	}
};

const userService = {
	registerUser,
	loginUser,
	getWishlistItems,
};
export default userService;
