import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetProducts = createAsyncThunk(
  "products/actGetProductByCategory",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(`/products?cat_prefix=${prefix}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProducts;
