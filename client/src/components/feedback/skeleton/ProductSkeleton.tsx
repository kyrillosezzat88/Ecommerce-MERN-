import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      {Array.from({ length: 4 })
        .fill(0)
        .map((_, index) => (
          <ContentLoader
            key={index}
            speed={2}
            width={300}
            height={370}
            viewBox="0 0 300 370"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="59" y="354" rx="2" ry="2" width="140" height="10" />
            <rect x="59" y="334" rx="2" ry="2" width="140" height="10" />
            <rect x="59" y="67" rx="2" ry="2" width="256" height="256" />
          </ContentLoader>
        ))}
    </div>
  );
};

export default ProductSkeleton;
