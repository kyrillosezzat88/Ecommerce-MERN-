import { TrashIcon } from "@assets/icons";
import { Quantity } from "@components/e-commerce";
import useProduct from "@hooks/useProduct";
import { useState, useEffect } from "react";
import { TProduct } from "@types";

type TCartProduct = {
  product: TProduct;
  type?: "cart" | "order"; // cart from cart page, order from order overview page the different will be the QTY
};

const CartProduct = ({ product, type = "cart" }: TCartProduct) => {
  const { quantityHandler, handleRemoveItem } = useProduct();
  const [quantity, setQuantity] = useState(product.quantity || 1);

  useEffect(() => {
    if (product.quantity) {
      setQuantity(product.quantity);
    }
  }, [product.quantity]);

  return (
    <div
      key={product.id}
      className="flex flex-col md:flex-row items-start md:items-center hover:bg-gray-50 transition-colors"
    >
      {/* Product */}
      <div className="px-6 py-4 w-full md:w-[40%]">
        <div className="flex items-center gap-4">
          <img
            src={product.mainImage || product.gallery?.[0] || ""}
            alt={product.name}
            className="w-16 h-16 object-cover rounded flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 truncate">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>
            {type === "order" && (
              <Quantity
                className="mt-3 w-fit"
                quantity={quantity}
                setQuantity={setQuantity}
                quantityHandler={(type, qty) =>
                  quantityHandler(type, product.id, qty ?? quantity)
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="px-6 py-4 w-full md:w-[15%]">
        <span className="text-gray-900 whitespace-nowrap">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Quantity */}
      {type === "cart" && (
        <div className="px-6 py-4 w-full md:w-[20%]">
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            quantityHandler={(type, qty) =>
              quantityHandler(type, product.id, qty ?? quantity)
            }
          />
        </div>
      )}
      {/* Total */}
      <div className="px-6 py-4 w-full md:w-[15%]">
        <span className="font-medium text-gray-900 whitespace-nowrap">
          ${(product.price * (product.quantity || 1)).toFixed(2)}
        </span>
      </div>

      {/* Action */}
      {type === "cart" && (
        <div className="px-6 py-4 w-full md:w-[10%] flex md:justify-start">
          <button
            onClick={() => handleRemoveItem(product.id)}
            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <TrashIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
