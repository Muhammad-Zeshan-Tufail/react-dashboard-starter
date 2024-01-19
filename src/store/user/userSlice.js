import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./userThunk";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  error: null,
  isSidebarOpen: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    login: (state, { payload }) => {
      state.user = payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        toast.success(payload?.message);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        toast.error(payload?.message);
        state.user = null;
        state.isLoading = false;
      });
  },
});

export const { toggleSidebar, logoutUser ,login } = userSlice.actions;
export default userSlice.reducer;
