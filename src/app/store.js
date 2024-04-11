import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import categoryReducer from "../features/category/categorySlice";

export const store = configureStore({
	reducer: {
		product: productReducer,
		category: categoryReducer,
	},
});
