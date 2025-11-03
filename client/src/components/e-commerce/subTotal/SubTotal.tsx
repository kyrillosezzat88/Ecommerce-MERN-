import { Button } from "@components/form";
import { TProduct } from "@types";
import { calculateSubtotal } from "@utils/calculation";
import { NavLink } from "react-router-dom";

type TCartSubTotal = {
  products: TProduct[];
  setIsDrawerOpen: (isOpen: boolean) => void;
};
const SubTotal = ({ products, setIsDrawerOpen }: TCartSubTotal) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="font-semibold">SubTotal</span>
        <span>${calculateSubtotal(products).toFixed(2)}</span>
      </div>
      <NavLink to="/cart" className="w-full">
        <Button
          text="View Cart"
          className="btn btn-primary w-full"
          onClick={() => setIsDrawerOpen(false)}
        />
      </NavLink>
      <NavLink to="/checkout" className="w-full">
        <Button
          text="Checkout"
          className="btn btn-secondary w-full"
          onClick={() => setIsDrawerOpen(false)}
        />
      </NavLink>
    </>
  );
};

export default SubTotal;
