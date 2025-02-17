import { createSlice } from "@reduxjs/toolkit";
import { TCategory, TLoading } from "@types";
import actGetCategories from "./actions/actGetCategories";

type TInitialState = {
  categories: TCategory[];
  loading: TLoading;
  error: string | null;
};

const initialState: TInitialState = {
  categories: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;
