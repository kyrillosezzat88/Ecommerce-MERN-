const productSizes = () => {
  return (
    <div className="my-4">
      <h2 className="font-xl mb-2">Sizes:</h2>
      <div className="flex gap-2">
        <span className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-sm border border-gray-200 hover:bg-black hover:text-white">
          XS
        </span>
        <span className="rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-sm border border-gray-200  hover:bg-black hover:text-white">
          M
        </span>
      </div>
    </div>
  );
};

export default productSizes;
