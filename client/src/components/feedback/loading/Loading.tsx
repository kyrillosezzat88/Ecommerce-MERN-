import { TLoading } from "@types";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import MiniProductSkeleton from "../skeleton/MiniProductSkeleton";

const skeletonTypes = {
  product: ProductSkeleton,
  miniProduct: MiniProductSkeleton,
};
type TLoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
  type: keyof typeof skeletonTypes;
};
const Loading = ({ status, error, children, type }: TLoadingProps) => {
  const Component = skeletonTypes[type];
  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") {
    return <div>failed loading data {error} </div>;
  }
  return <>{children}</>;
};

export default Loading;
