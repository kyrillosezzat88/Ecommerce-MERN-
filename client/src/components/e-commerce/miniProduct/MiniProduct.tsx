import { useEffect, useState, useCallback } from "react";
import { Quantity } from "@components/e-commerce";
import { Button } from "@components/form";
import { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { cartItemChangeQuantity, cartItemRemove } from "@store/cart/CartSlice";

type TMiniProduct = {
  type?: "cart" | "wishlist";
  data?: TProduct; // Make data optional
};

const MiniProduct = ({ type, data }: TMiniProduct) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && data.quantity) {
      setQuantity(data.quantity);
    }
  }, [data]);

  const quantityHandler = useCallback(
    (type: string, quantity: number = 1) => {
      if (data) {
        dispatch(cartItemChangeQuantity({ type, id: data.id, quantity }));
      }
    },
    [dispatch, data]
  );

  const renderPriceInfo = () => (
    <p>
      Price: <span className="font-medium">{data?.price}€</span>
    </p>
  );

  const renderCartDetails = () => (
    <div className="text-sm text-gray-600">
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium">Quantity</span>
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          quantityHandler={quantityHandler}
        />
      </div>
      {renderPriceInfo()}
      <p>
        Total Price:
        <span className="font-medium">{quantity * (data?.price || 0)}€</span>
      </p>
      <Button
        text="Remove"
        className="btn-danger mt-4 w-full"
        onClick={() => dispatch(cartItemRemove(data?.id))}
      />
    </div>
  );

  const renderWishlistDetails = () => (
    <>
      {renderPriceInfo()}
      <Button text="Add To Cart" className="btn-primary mt-4" />
      <Button
        text="Remove"
        className="btn-danger"
        onClick={() => dispatch(cartItemRemove(data?.id))}
      />
    </>
  );

  if (!data) {
    return <div>Product data is not available</div>;
  }

  return (
    <div className="flex gap-4 border-b border-gray-200 py-3">
      <img
        className="w-28 h-28 object-cover rounded-lg border border-gray-200"
        src={data.mainImage}
        alt={data.name}
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-gray-800">{data.name}</h1>
          {type === "cart" && renderCartDetails()}
          {type === "wishlist" && renderWishlistDetails()}
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
