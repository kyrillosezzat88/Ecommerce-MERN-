import { StarSolidIcon } from "@assets/icons";

type TProductRateBar = {
  rate: number; // Rating from 1 to 5
  percentage: number; // Percentage from 0 to 100
};

const ProductRateBar = ({ rate, percentage }: TProductRateBar) => {
  return (
    <div className="flex items-center mt-3">
      <span className="flex items-center gap-1 min-w-[40px] text-sm">
        {rate} <StarSolidIcon className="w-4 h-4 text-yellow-400" />
      </span>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="ml-2 w-3">{percentage}%</span>
    </div>
  );
};

export default ProductRateBar;
