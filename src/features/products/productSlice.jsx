import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk(
	"product/get-products",
	async (thunkAPI) => {
		try {
			return await productService.getProducts();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const addToWishlist = createAsyncThunk(
	"product/wishlist",
	async (productId, thunkAPI) => {
		try {
			return await productService.addToWishlist(productId);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const initialState = {
	products: [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			})
			.addCase(addToWishlist.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addToWishlist.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = "Product added to Wishlist!";
				state.addedToWishlist = action.payload;
			})
			.addCase(addToWishlist.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.error;
			});
	},
});
export default productSlice.reducer;
