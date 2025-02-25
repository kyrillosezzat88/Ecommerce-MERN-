import { addToCart } from "@store/cart/CartSlice";
import { useAppDispatch } from "@store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

const useProduct = () => {
  const [loading, setLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const dispatch = useAppDispatch();
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
  return {
    loading,
    openProductModal,
    setOpenProductModal,
    addToCartHandler,
    openProductModalHandler,
  };
};

export default useProduct;
