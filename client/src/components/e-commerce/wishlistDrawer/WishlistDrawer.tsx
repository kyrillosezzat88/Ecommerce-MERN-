import { Drawer } from "@components/common";
import MiniProduct from "../miniProduct/MiniProduct";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useRef } from "react";
import { actGetWishlistProductsByIds } from "@store/wishlist/wishlistSlice";
import { Loading } from "@components/feedback";

type TWishlistDrawer = {
  isOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
};
const WishlistDrawer = ({ isOpen, setIsDrawerOpen }: TWishlistDrawer) => {
  const dispatch = useAppDispatch();
  const { productsFullInfo, loading, error, products } = useAppSelector(
    (state) => state.wishlist
  );
  const prevProductsRef = useRef(products); // Track previous products

  const productList = productsFullInfo.map((pro) => (
    <MiniProduct key={pro.id} type="wishlist" data={pro} />
  ));

  useEffect(() => {
    console.log("drawer ids changed");
    dispatch(actGetWishlistProductsByIds("productsIds"));
  }, [dispatch]);

  // Fetch full product info only when products change
  useEffect(() => {
    if (isOpen && products !== prevProductsRef.current) {
      dispatch(actGetWishlistProductsByIds("productsFullInfo"));
      // prevProductsRef.current = products; // Update the ref with the latest products
      console.log("drawer full info changed");
    }
  }, [isOpen, products, dispatch]);

  return (
    <Drawer
      isOpen={isOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      title="Your Wishlist"
    >
      <Loading status={loading} error={error} type="miniProduct">
        {productList.length ? (
          <div className="flex flex-col gap-4">{productList}</div>
        ) : (
          "there is no product"
        )}
      </Loading>
    </Drawer>
  );
};

export default WishlistDrawer;
