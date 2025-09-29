import ProductRate from "./ProductRate";

const ProductReview = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">John Doe</span>
        <span className="text-sm text-gray-500">
          <ProductRate rate={4} />
        </span>
      </div>
      <p className="text-sm text-gray-700">
        This product is amazing! I loved it and would recommend it to everyone.
      </p>
    </div>
  );
};

export default ProductReview;
