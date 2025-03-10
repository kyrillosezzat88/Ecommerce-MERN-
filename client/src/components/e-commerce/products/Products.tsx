import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/products/productsSlice";
import Product from "../product/Product";
import GridList from "../gridList/GridList";
import { Loading } from "@components/feedback";
import { Tabs } from "@components/common";

const Products = () => {
  const dispatch = useAppDispatch();
  const { products, error, loading } = useAppSelector(
    (state) => state.products
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.products);
  const [activeTab, setActiveTab] = useState("men");

  const productsFullInfo = products.map((pro) => ({
    ...pro,
    quantity: pro.id ? cartItems[pro.id] : 0,
    isLiked: wishlistItemsId.includes(pro.id),
    isAuthenticated: false,
  }));

  useEffect(() => {
    dispatch(actGetProducts(activeTab));
  }, [activeTab, dispatch]);

  const tabHandler = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Tabs
        tabs={["men", "women", "on Sale"]}
        tabHandler={tabHandler}
        activeTab={activeTab}
      />
      <Loading status={loading} error={error} type="product">
        <GridList
          records={productsFullInfo}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
