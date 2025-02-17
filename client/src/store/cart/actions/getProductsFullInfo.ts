import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { TProduct } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = TProduct[];

const getProductsFullInfo = createAsyncThunk(
  "cart/getProductsFullInfo",
  async (_, thunkApi) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkApi;
    const { cart } = getState() as RootState;
    const productIds = Object.keys(cart.items)
      .map((item) => `id=${item}`)
      .join("&");
    if (!productIds.length) {
      return fulfillWithValue([]);
    }
    try {
      const response = await axios.get<TResponse>(`/products?${productIds}`, {
        signal,
      });
      const productsWithQuantity = response.data.map((item) => {
        return { ...item, quantity: cart.items[item.id] };
      });
      return productsWithQuantity;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default getProductsFullInfo;
