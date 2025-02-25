const ProductColors = () => {
  return (
    <div>
      <h2 className="font-xl mb-2">Colors:</h2>
      <div className="flex gap-2">
        <span className="rounded-full cursor-pointer w-6 h-6 bg-primary"></span>
        <span className="rounded-full cursor-pointer w-6 h-6 bg-red-500"></span>
        <span className="rounded-full cursor-pointer w-6 h-6 bg-yellow-500"></span>
      </div>
    </div>
  );
};

export default ProductColors;
