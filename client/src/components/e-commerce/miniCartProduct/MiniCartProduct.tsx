import { useState } from "react";
import { Quantity } from "@components/e-commerce";

const MiniCartProduct = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="flex gap-4 border-b border-gray-200 py-3">
      <img
        className="w-28 h-28 object-cover rounded-lg border border-gray-200"
        src="https://pepco.pt/wp-content/uploads/2024/01/602091-1440x1744.jpg"
        alt="Product"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-gray-800">Product Name</h1>
          <div className="text-sm text-gray-600">
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium">Quantity</span>
              <Quantity quantity={quantity} setQuantity={setQuantity} />
            </div>
            <p>
              Price: <span className="font-medium">100€</span>
            </p>
            <p>
              Total Price:
              <span className="font-medium">{quantity * 100}€</span>
            </p>
          </div>
        </div>
        <button
          className="self-end text-red-500 hover:text-red-700 font-bold text-lg"
          aria-label="Remove product"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default MiniCartProduct;
