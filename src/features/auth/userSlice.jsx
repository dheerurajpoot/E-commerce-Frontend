import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

const initialState = {
	user: "",
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
			});
	},
});

export default userSlice.reducer;
