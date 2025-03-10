import { RepeatIcon, ShareIcon } from "@assets/icons";
import { Button } from "@components/form";
import useProduct from "@hooks/useProduct";

type TProductActions = {
  id: number;
  name: string;
  quantity: number;
};

const ProductActions = ({ id, name, quantity }: TProductActions) => {
  const { addToCartHandler, loading } = useProduct();
  return (
    <div className="flex flex-col gap-4 uppercase mt-4">
      <Button
        text="Add To Cart"
        className="btn btn-primary"
        onClick={() => addToCartHandler(id, quantity, name)}
        loading={loading}
      />
      <Button text="Buy it now" className="btn btn-secondary" />
      <div className="flex justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          // onClick={compareHandler}
        >
          <button className="btn-circle">
            <RepeatIcon />
          </button>
          <span>Compare</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-circle">
            <ShareIcon />
          </button>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
