import { Drawer } from "@components/common";
import { MiniProduct, SubTotal } from "@components/e-commerce";

type TCartDrawer = {
  isOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
};

const CartDrawer = ({ isOpen, setIsDrawerOpen }: TCartDrawer) => {
  const productList = Array.from({ length: 4 }).map(() => (
    <MiniProduct type="cart" />
  ));

  return (
    <Drawer
      isOpen={isOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      title="Shopping Cart"
    >
      {productList.length ? (
        <div className="flex flex-col gap-4">
          {productList}
          <SubTotal />
        </div>
      ) : (
        "there is no product"
      )}
    </Drawer>
  );
};

export default CartDrawer;
