import { StarIcon, StarSolidIcon } from "@assets/icons";

type TProductRate = {
  rate: number;
  style?: "vertical" | "horizontal";
  totalReviews?: number;
};

const ProductRate = ({ rate, style, totalReviews }: TProductRate) => {
  return (
    <div
      className={`flex items-center gap-[2px] mb-2 ${
        style === "vertical" ? "flex-col" : "flex-row"
      }`}
    >
      <div className="flex">
        {Array.from({ length: rate }).map((_, idx) => (
          <StarSolidIcon key={idx} />
        ))}
        {Array.from({ length: 5 - rate }).map((_, idx) => (
          <StarIcon key={idx} />
        ))}
      </div>
      {totalReviews && (
        <span className="ml-2 text-sm"> ({totalReviews}) reviews</span>
      )}
    </div>
  );
};

export default ProductRate;
