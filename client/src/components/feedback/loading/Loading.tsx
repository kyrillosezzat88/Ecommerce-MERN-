import { TLoading } from "@types";
import ProductSkeleton from "../skeleton/ProductSkeleton";

type TLoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};
const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <ProductSkeleton />;
  }
  if (status === "failed") {
    return <div>failed loading data {error} </div>;
  }
  return <>{children}</>;
};

export default Loading;
