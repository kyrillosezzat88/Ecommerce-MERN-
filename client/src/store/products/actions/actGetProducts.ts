import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetProducts = createAsyncThunk(
  "products/actGetProductByCategory",
  async (prefix: string | null, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    const url = `/products${prefix ? `?cat_prefix=${prefix}` : ""}`;
    try {
      const res = await axios.get(`${url}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProducts;
