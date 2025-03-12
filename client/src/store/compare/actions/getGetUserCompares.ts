import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetUserCompares = createAsyncThunk(
  "compares/actGetUserCompares",
  async (_, thunkApi) => {
    const { rejectWithValue, fulfillWithValue } = thunkApi;
    try {
      const response = await axios.get("/compares?userId=1");
      if (!response) {
        return fulfillWithValue([]);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetUserCompares;
