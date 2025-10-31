import { Button } from "@components/form";
import { TProduct } from "@types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type TCartSubTotal = {
  products: TProduct[];
};
const SubTotal = ({ products }: TCartSubTotal) => {
  const [cartSubtotal, setCartSubTotal] = useState(0);
  useEffect(() => {
    setCartSubTotal(
      products.reduce(
        (acc, product) => acc + product.price * (product.quantity ?? 1),
        0
      )
    );
  }, [products]);

  return (
    <>
      <div className="flex justify-between items-center">
        <span className="font-semibold">SubTotal</span>
        <span>{cartSubtotal.toFixed(2)} EG</span>
      </div>
      <NavLink to="/cart" className="w-full">
        <Button text="View Cart" className="btn btn-primary w-full" />
      </NavLink>
      <Button text="Checkout" className="btn btn-secondary" />
    </>
  );
};

export default SubTotal;
