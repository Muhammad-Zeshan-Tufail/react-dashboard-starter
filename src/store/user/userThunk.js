import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../utils/instance";

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await instance.post("/admin/login", data);
      let token = response.data.token;
      localStorage.setItem("token", token);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.data);
    }
  }
);
