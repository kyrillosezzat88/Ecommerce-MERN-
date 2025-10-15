import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetProductDetails = createAsyncThunk(
  "products/actGetProductDetails",
  async (id: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(`products/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductDetails;
