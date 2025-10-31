import {
  addToCart,
  cartItemChangeQuantity,
  cartItemRemove,
} from "@store/cart/CartSlice";
import { actCompareToggle } from "@store/compare/compareSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actWishlistToggle } from "@store/wishlist/wishlistSlice";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { loading: wishlistLoading, error: wishlistError } = useAppSelector(
    (state) => state.wishlist
  );
  const { items } = useAppSelector((state) => state.compare);

  const [compareLoading, setCompareLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  const addToCartHandler = (id: number, quantity?: number, name?: string) => {
    setCartLoading(true);
    setTimeout(() => {
      dispatch(addToCart({ id, quantity }));
      setCartLoading(false);
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

  const compareHandler = (id: number, name: string) => {
    // compare logic here
    setCompareLoading(true);
    setTimeout(() => {
      dispatch(actCompareToggle({ id, name }));
      setCompareLoading(false);
    }, 300);
  };

  // check if product is in compare list
  const isProductInCompare = (id: number) => {
    return items.includes(id);
  };

  const quantityHandler = useCallback(
    (type: string, id: number, quantity: number = 1) => {
      console.log("useProduct quantityHandler:", type, id, quantity);
      dispatch(cartItemChangeQuantity({ type, id, quantity }));
    },
    [dispatch]
  );

  const handleRemoveItem = (id: number) => {
    dispatch(cartItemRemove(id));
  };

  return {
    cartLoading,
    openProductModal,
    setOpenProductModal,
    addToCartHandler,
    openProductModalHandler,
    addToWishlistHandler,
    wishlistLoading,
    wishlistError,
    compareHandler,
    compareLoading,
    isProductInCompare,
    quantityHandler,
    handleRemoveItem,
  };
};

export default useProduct;
