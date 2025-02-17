import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, currentVal) => {
      return acc + currentVal;
    }, 0);
    return totalQuantity;
  }
);
