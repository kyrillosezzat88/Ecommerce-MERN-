import { StarIcon, StarSolidIcon } from "@assets/icons";

type TProductRate = {
  rate: number;
};

const ProductRate = ({ rate }: TProductRate) => {
  return (
    <div className="flex items-center gap-[2px] mb-2">
      {Array.from({ length: rate }).map((_, idx) => (
        <StarSolidIcon key={idx} />
      ))}
      {Array.from({ length: 5 - rate }).map((_, idx) => (
        <StarIcon key={idx} />
      ))}
      <span className="ml-2 text-sm"> (1,364) reviews</span>
    </div>
  );
};

export default ProductRate;
