import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
