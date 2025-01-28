import { ChangeEvent } from "react";

type TQuantity = {
  quantity: number;
  setQuantity: (value: number | ((prev: number) => number)) => void;
  className?: string;
};

const Quantity = ({ quantity, setQuantity, className }: TQuantity) => {
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const buttonClass =
    "px-3 py-1 text-gray-800  hover:bg-gray-100 transition-all duration-300 rounded-lg font-bold cursor-pointer";

  return (
    <div
      className={`flex items-center gap-1 rounded-lg py-1 border border-gray-300 ${className}`}
    >
      <button onClick={decrementQuantity} className={buttonClass}>
        -
      </button>
      <input
        type="number"
        className="w-10 text-gray-800 cursor-pointer bg-transparent outline-none text-center"
        value={quantity}
        onChange={handleQuantityChange}
        min="0"
      />
      <button onClick={incrementQuantity} className={buttonClass}>
        +
      </button>
    </div>
  );
};

export default Quantity;
