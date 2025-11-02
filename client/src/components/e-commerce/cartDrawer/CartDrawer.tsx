import { Drawer, EmptyCart } from "@components/common";
import { MiniProduct, SubTotal } from "@components/e-commerce";
import { Loading } from "@components/feedback";
import { getProductsFullInfo } from "@store/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { TDrawer } from "@types";
import { useEffect, useMemo } from "react";

const CartDrawer = ({ isOpen, setIsDrawerOpen }: TDrawer) => {
  const dispatch = useAppDispatch();
  const { loading, productsFullInfo, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (isOpen) {
      dispatch(getProductsFullInfo());
    }
  }, [dispatch, isOpen]);

  const productList = useMemo(() => {
    return productsFullInfo.map((product) => (
      <MiniProduct key={product.id} type="cart" data={product} />
    ));
  }, [productsFullInfo]);

  return (
    <Drawer
      isOpen={isOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      title="Shopping Cart"
    >
      <Loading status={loading} error={error} type="miniProduct">
        {productList.length ? (
          <div className="flex flex-col gap-4">
            {productList}
            <SubTotal
              products={productsFullInfo}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          </div>
        ) : (
          <EmptyCart setIsDrawerOpen={setIsDrawerOpen} />
        )}
      </Loading>
    </Drawer>
  );
};

export default CartDrawer;
