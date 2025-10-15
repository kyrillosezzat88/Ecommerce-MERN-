import { Tabs } from "@components/common";
import {
  ProductColors,
  ProductGallery,
  ProductRate,
  ProductSizes,
  ProductActions,
  ProductQuantity,
  ProductRateBarList,
  ProductReview,
  ProductWriteReview,
} from "@components/e-commerce/productOptions";
import { LottieHandler } from "@components/feedback";
import useProductDetails from "@hooks/useProductDetails";

const ProductDetails = () => {
  const {
    productDetails,
    loading,
    error,
    selectedQuantity,
    setSelectedQuantity,
    tabHandler,
    activeTab,
    ratingData,
  } = useProductDetails();

  if (loading === "pending") {
    return <LottieHandler type="loading" message="Loading product..." />;
  }

  if (!productDetails) {
    return <LottieHandler type="NotFound" message="Product not found" />;
  }

  if (error) {
    return (
      <div className="pt-20">
        <LottieHandler
          type="invalid"
          message={error}
          ErrorClassName="text-red-500"
        />
      </div>
    );
  }

  const { name, gallery, price, id, isLiked, description, rate } =
    productDetails;
  return (
    <div className="pt-20">
      <div className="container">
        <div className="flex gap-6 h-full flex-wrap md:flex-nowrap relative">
          <div className="w-full md:w-1/2 sticky top-0">
            <ProductGallery gallery={gallery} isLiked={isLiked} />
          </div>
          <div className="w-full md:w-1/2 overflow-auto">
            <h1 className="text-xl md:text-3xl font-bold mb-2">{name}</h1>
            <ProductRate rate={rate ?? 0} />
            <div className="badge badge-primary text-sm">Best Seller</div>
            <p className="my-2 py-4 border-gray-200 border-b">{description}</p>
            <ProductColors />
            <ProductSizes />
            <div className="flex items-center justify-between my-4">
              <ProductQuantity
                quantity={selectedQuantity ?? 1}
                setQuantity={setSelectedQuantity}
              />
              <span className="text-2xl font-bold ">
                ${(price * selectedQuantity)?.toFixed(2)}
              </span>
            </div>
            <ProductActions id={id} name={name} quantity={selectedQuantity} />
          </div>
        </div>
        <div>
          <Tabs
            tabs={["Description", "Specifications"]}
            tabHandler={tabHandler}
            activeTab={activeTab}
          />
          <div className="py-4 px-6 bg-white rounded-lg shadow-md">
            {activeTab === "Description" ? (
              <p>{description}</p>
            ) : (
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Specifications</h3>
                <ul className="list-disc pl-5">
                  <li>Color: Black</li>
                  <li>Size: M</li>
                  <li>Material: Cotton</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Reviews Section */}
        <div className="mt-6 flex gap-14 p-4">
          <div className="w-full md:w-1/3">
            <h3 className="text-4xl ">Customer Reviews</h3>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-8xl font-medium">4.6</span>
              <ProductRate rate={4} style="vertical" />
            </div>
            <ProductRateBarList data={ratingData} />
          </div>
          <div>
            <ProductReview />
          </div>
        </div>
        <div className="mt-6 p-4">
          <h2 className="font-medium text-4xl capitalize mb-6">
            Leave a comment
          </h2>
          <ProductWriteReview />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
