import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "@types";
import actGetProducts from "./actions/actGetProducts";

type TInitialState = {
  products: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TInitialState = {
  products: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { actGetProducts };
export default productsSlice.reducer;
