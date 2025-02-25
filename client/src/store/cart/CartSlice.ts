import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "@types";
import getProductsFullInfo from "./actions/getProductsFullInfo";

type TCartState = {
  items: { [key: string]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
};

const initialState: TCartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      const quantity = action.payload.quantity || 1;
      if (state.items[id]) {
        state.items[id] += quantity;
      } else {
        state.items[id] = quantity;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      const { id, type, quantity } = action.payload;
      const product = state.productsFullInfo.find((p) => p.id === id);

      const updateQuantity = (delta: number) => {
        state.items[id] = (state.items[id] || 0) + delta;
        if (product && product.quantity !== undefined) {
          product.quantity += delta;
        }
      };

      if (type === "increment") {
        updateQuantity(1);
      } else if (type === "decrement") {
        if (state.items[id] > 1) {
          updateQuantity(-1);
        } else {
          delete state.items[id];
          state.productsFullInfo = state.productsFullInfo.filter(
            (p) => p.id !== id
          );
        }
      } else {
        state.items[id] = quantity;
      }
    },

    cartItemRemove: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      state.productsFullInfo = state.productsFullInfo.filter(
        (product) => product.id !== id
      );
    },
    cartCleanup: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsFullInfo.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProductsFullInfo.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
      state.error = null;
    });
    builder.addCase(getProductsFullInfo.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { getProductsFullInfo };
export const { addToCart, cartItemChangeQuantity, cartItemRemove } =
  cartSlice.actions;
export default cartSlice.reducer;
