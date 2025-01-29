import { useState } from "react";
import { Quantity } from "@components/e-commerce";
import { Button } from "@components/form";

type TMiniProduct = {
  type?: "cart" | "wishlist";
};

const PRODUCT_IMAGE_URL =
  "https://pepco.pt/wp-content/uploads/2024/01/602091-1440x1744.jpg";
const PRODUCT_NAME = "Product Name";
const PRODUCT_PRICE = 100;

const MiniProduct = ({ type }: TMiniProduct) => {
  const [quantity, setQuantity] = useState(2);

  const renderPriceInfo = () => (
    <p>
      Price: <span className="font-medium">{PRODUCT_PRICE}€</span>
    </p>
  );

  const renderCartDetails = () => (
    <div className="text-sm text-gray-600">
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium">Quantity</span>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>
      {renderPriceInfo()}
      <p>
        Total Price:
        <span className="font-medium">{quantity * PRODUCT_PRICE}€</span>
      </p>
      <Button text="Remove" className="btn-danger mt-4 w-full" />
    </div>
  );

  const renderWishlistDetails = () => (
    <>
      {renderPriceInfo()}
      <Button text="Add To Cart" className="btn-primary mt-4" />
      <Button text="Remove" className="btn-danger" />
    </>
  );

  return (
    <div className="flex gap-4 border-b border-gray-200 py-3">
      <img
        className="w-28 h-28 object-cover rounded-lg border border-gray-200"
        src={PRODUCT_IMAGE_URL}
        alt={PRODUCT_NAME}
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-gray-800">
            {PRODUCT_NAME}
          </h1>
          {type === "cart" && renderCartDetails()}
          {type === "wishlist" && renderWishlistDetails()}
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
