import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

const getCustomerFromLocalStorage = localStorage.getItem("customer")
	? JSON.parse(localStorage.getItem("customer"))
	: null;

const initialState = {
	user: getCustomerFromLocalStorage,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

export const registerUser = createAsyncThunk(
	"auth/user-register",
	async (userData, thunkAPI) => {
		try {
			return await userService.registerUser(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const loginUser = createAsyncThunk(
	"auth/user-login",
	async (userData, thunkAPI) => {
		try {
			return await userService.loginUser(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const getWishlistItems = createAsyncThunk(
	"auth/wishlist",
	async (thunkAPI) => {
		try {
			return await userService.getWishlistItems();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const addToCart = createAsyncThunk(
	"auth/cart",
	async (cartData, thunkAPI) => {
		try {
			return await userService.addToCart(cartData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const getCart = createAsyncThunk("auth/get-cart", async (thunkAPI) => {
	try {
		return await userService.getCart();
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const removeCartItem = createAsyncThunk(
	"auth/remove-cart-product",
	async (id, thunkAPI) => {
		try {
			return await userService.removeCartItem(id);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const updateCartQty = createAsyncThunk(
	"auth/update-cart-product",
	async (updatedData, thunkAPI) => {
		try {
			return await userService.updateCartQty(updatedData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const createOrder = createAsyncThunk(
	"auth/cart/create-order",
	async (orderData, thunkAPI) => {
		try {
			return await userService.createOrder(orderData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const userSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.registedUser = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Account Created Succuessfully");
				}
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error(action.error);
				}
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.user = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					localStorage.setItem("token", action.payload.token);
					toast.success("You have Logged in Succuessfully");
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error(action.error);
				}
			})
			.addCase(getWishlistItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getWishlistItems.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.wishlist = action.payload;
				state.message = "Success";
			})
			.addCase(getWishlistItems.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(addToCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.cardProduct = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Product Added to Cart Succuessfully");
				}
			})
			.addCase(addToCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(getCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.getCart = action.payload;
				state.message = "Success";
			})
			.addCase(getCart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(removeCartItem.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(removeCartItem.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.removedCartItem = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Product Removed from Cart Succuessfully");
				}
			})
			.addCase(removeCartItem.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(updateCartQty.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateCartQty.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.updatedCartItem = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Product Quantity updated Succuessfully");
				}
			})
			.addCase(updateCartQty.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			})
			.addCase(createOrder.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.createdOrder = action.payload;
				state.message = "Success";
				if (state.isSuccess === true) {
					toast.success("Order Successfull!");
				}
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
				if (state.isError === true) {
					toast.error("Something Went Wrong!");
				}
			});
	},
});

export default userSlice.reducer;
