import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "@types";
import actGetProducts from "./actions/actGetProducts";
import actGetProductDetails from "./actions/actGetProductDetails";

type TInitialState = {
  products: TProduct[];
  productDetails: TProduct | null;
  loading: TLoading;
  error: string | null;
};

const initialState: TInitialState = {
  products: [],
  productDetails: null,
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

    // product details
    builder.addCase(actGetProductDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductDetails.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.productDetails = action.payload;
    });
    builder.addCase(actGetProductDetails.rejected, (state, action) => {
      state.loading = "failed";
      state.productDetails = null;
      state.error = action.payload as string;
    });
  },
});

export { actGetProducts, actGetProductDetails };
export default productsSlice.reducer;
