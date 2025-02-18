import ContentLoader from "react-content-loader";

const MiniProductSkeleton = () => (
  <ContentLoader
    speed={2}
    width={600}
    height={140}
    viewBox="0 0 600 140"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Product Image */}
    <rect x="10" y="20" rx="10" ry="10" width="100" height="100" />

    {/* Product Title */}
    <rect x="130" y="20" rx="4" ry="4" width="200" height="18" />

    {/* Quantity Label */}
    <rect x="130" y="50" rx="3" ry="3" width="80" height="14" />

    {/* Quantity Buttons */}
    <rect x="380" y="45" rx="8" ry="8" width="35" height="35" />
    <rect x="425" y="55" rx="3" ry="3" width="30" height="15" />
    <rect x="465" y="45" rx="8" ry="8" width="35" height="35" />

    {/* Price Label & Value */}
    <rect x="130" y="80" rx="3" ry="3" width="100" height="14" />
    <rect x="250" y="80" rx="3" ry="3" width="50" height="14" />

    {/* Total Price Label & Value */}
    <rect x="130" y="100" rx="3" ry="3" width="120" height="14" />
    <rect x="270" y="100" rx="3" ry="3" width="50" height="14" />

    {/* Remove Button */}
    <rect x="130" y="120" rx="6" ry="6" width="150" height="30" />
  </ContentLoader>
);

export default MiniProductSkeleton;
