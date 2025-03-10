import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = TProduct[];
type dataType = "productsFullInfo" | "productsIds";

const actGetWishlistProductsByIds = createAsyncThunk(
  "wishlist/getWishlistProductsByIds",
  async (dataType: dataType, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    // const { auth } = getState() as RootState;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=1`
      );
      console.log(userWishlist);
      if (!userWishlist.data.length) {
        return { data: [], dataType: "empty" };
      }
      if (dataType === "productsFullInfo") {
        const concatenatedItemsId = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");
        const response = await axios.get<TResponse>(
          `/products?${concatenatedItemsId}`,
          {
            signal,
          }
        );
        return { data: response.data, dataType: "productsFullInfo" };
      } else {
        const itemsIds = userWishlist.data.map((el) => el.productId);
        return { data: itemsIds, dataType: "productsIds" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlistProductsByIds;
