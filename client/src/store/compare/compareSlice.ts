import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actCompareToggle from "./actions/actCompareToggle";
import actGetUserCompares from "./actions/getGetUserCompares";

type TInitialState = {
  items: number[];
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
};
const initialState: TInitialState = {
  items: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};
const CompareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // toggle compares items
    builder.addCase(actCompareToggle.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actCompareToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.items = [...state.items, action.payload.id];
      } else {
        state.items = state.items.filter((id) => id !== action.payload.id);
      }
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actCompareToggle.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // user compares items
    builder.addCase(actGetUserCompares.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetUserCompares.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(actGetUserCompares.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actCompareToggle, actGetUserCompares };
export default CompareSlice.reducer;
