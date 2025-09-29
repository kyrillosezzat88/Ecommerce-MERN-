import ProductRateBar from "./ProductRateBar";

type TRatingData = {
  rate: number; // from 5 to 1
  percentage: number; // 0 to 100
};

type TProductRateBreakdown = {
  data: TRatingData[];
};

const ProductRateBarList = ({ data }: TProductRateBreakdown) => {
  return (
    <div className="space-y-2">
      {data
        .sort((a, b) => b.rate - a.rate) // ensure 5 -> 1 order
        .map(({ rate, percentage }) => (
          <ProductRateBar key={rate} rate={rate} percentage={percentage} />
        ))}
    </div>
  );
};

export default ProductRateBarList;
