import { IAccount, IAccountRequest } from "@/interfaces/Account";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOGIN_ENDPOINT } from "../constant/apiConfig";
import axiosInstance from "../constant/axiosInstance";
import { toast } from "react-toastify";

type AuthState = {
  auth: IAccount | null;
  loading: boolean;
  error: string | unknown;
  success: boolean;
};

const initialState: AuthState = {
  auth: null,
  loading: false,
  error: null,
  success: false,
};

export const loginAccount = createAsyncThunk<IAccount, IAccountRequest>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInstance.post(LOGIN_ENDPOINT, data);
      const { token } = response.data;
      localStorage.setItem("childcareToken", token);
      toast.success("Login successful");
      return response.data;
    } catch (error) {
      toast.error("Login failed");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string[] | unknown>) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.auth = null;
      localStorage.removeItem("childcareToken");

      // Reset state
      state.loading = false;
      state.error = null;
      state.success = false;
      toast.success("Logout successful");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.auth = action.payload;
      state.success = true;
    });
    builder.addCase(loginAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setError, logoutUser } = authSlice.actions;
export default authSlice.reducer;
