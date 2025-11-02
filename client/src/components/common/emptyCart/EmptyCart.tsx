import { LottieHandler } from "@components/feedback";
import { Link } from "react-router-dom";

type TEmptyCart = {
  setIsDrawerOpen?: (isOpen: boolean) => void;
};

const EmptyCart = ({ setIsDrawerOpen }: TEmptyCart) => {
  return (
    <div className="text-center bg-white rounded-lg">
      <LottieHandler type="EmptyCart" />
      <h2 className="text-2xl font-medium text-gray-900 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven't added anything to your cart yet.
      </p>
      <Link
        to="/shop"
        className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        onClick={() => setIsDrawerOpen && setIsDrawerOpen(false)}
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
