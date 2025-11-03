import { useAppSelector } from "@store/hooks";
import { Loading } from "@components/feedback";
import { ProductCard } from "@components/e-commerce";
import { EmptyCart } from "@components/common";
import { Button } from "@components/form";
import { useNavigate } from "react-router-dom";
import { calculateSubtotal } from "@utils/calculation";

const Cart = () => {
  const { productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="flex flex-wrap md:flex-nowrap gap-12">
          <div className="w-full md:w-2/3">
            <Loading status={loading} error={error} type="product">
              {productsFullInfo.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <div className="w-full">
                      {/* Header */}
                      <div className="hidden md:flex bg-gray-50 text-sm font-medium text-gray-500">
                        <div className="px-6 py-4 text-left w-[40%]">
                          Product
                        </div>
                        <div className="px-6 py-4 text-left w-[15%]">Price</div>
                        <div className="px-6 py-4 text-left w-[20%]">
                          Quantity
                        </div>
                        <div className="px-6 py-4 text-left w-[15%]">Total</div>
                        <div className="px-6 py-4 text-left w-[10%]">
                          Action
                        </div>
                      </div>

                      {/* Body */}
                      <div className="divide-y divide-gray-200">
                        {productsFullInfo.map((product, idx) => (
                          <ProductCard key={idx} product={product} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <EmptyCart />
              )}
            </Loading>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums">
                    ${calculateSubtotal(productsFullInfo).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-right">Calculated at checkout</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium text-gray-900">
                    <span>Total</span>
                    <span className="tabular-nums">
                      ${calculateSubtotal(productsFullInfo).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                className=" btn btn-primary w-full mt-6 "
                disabled={productsFullInfo.length === 0}
                text="Proceed to Checkout"
                onClick={() => navigate("/checkout")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
