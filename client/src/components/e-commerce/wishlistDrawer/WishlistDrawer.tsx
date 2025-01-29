import { Drawer } from "@components/common";
import MiniProduct from "../miniProduct/MiniProduct";

type TWishlistDrawer = {
  isOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
};
const WishlistDrawer = ({ isOpen, setIsDrawerOpen }: TWishlistDrawer) => {
  const productList = Array.from({ length: 4 }).map(() => (
    <MiniProduct type="wishlist" />
  ));
  return (
    <Drawer
      isOpen={isOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      title="Your Wishlist"
    >
      {productList.length ? (
        <div className="flex flex-col gap-4">{productList}</div>
      ) : (
        "there is no product"
      )}
    </Drawer>
  );
};

export default WishlistDrawer;
