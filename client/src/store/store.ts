import { configureStore } from "@reduxjs/toolkit";
import products from "./products/productsSlice";
import categories from "./categories/categoriesSlice";
import cart from "./cart/CartSlice";
import wishlist from "./wishlist/wishlistSlice";
import compare from "./compare/compareSlice";

const store = configureStore({
  reducer: {
    products,
    categories,
    cart,
    wishlist,
    compare,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
