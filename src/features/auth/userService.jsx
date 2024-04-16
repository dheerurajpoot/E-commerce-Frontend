import axios from "axios";
import { base_url } from "../../utils/base_url";

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
		return response.data;
	} catch (error) {
		console.error("Error white logging in user :", error);
		throw error;
	}
};

const userService = {
	registerUser,
	loginUser,
};
export default userService;
