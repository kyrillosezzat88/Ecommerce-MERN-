import { addToCart } from "@store/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actWishlistToggle } from "@store/wishlist/wishlistSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { loading: wishlistLoading, error: wishlistError } = useAppSelector(
    (state) => state.wishlist
  );
  const [loading, setLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const addToCartHandler = (id: number, quantity?: number, name?: string) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addToCart({ id, quantity }));
      setLoading(false);
      toast(`${name} Added to cart`, { type: "success" });
    }, 300);
  };
  const openProductModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenProductModal((prev) => !prev);
  };
  const addToWishlistHandler = (id: number, name: string) => {
    dispatch(actWishlistToggle({ id, name }));
  };
  return {
    loading,
    openProductModal,
    setOpenProductModal,
    addToCartHandler,
    openProductModalHandler,
    addToWishlistHandler,
    wishlistLoading,
    wishlistError,
  };
};

export default useProduct;
