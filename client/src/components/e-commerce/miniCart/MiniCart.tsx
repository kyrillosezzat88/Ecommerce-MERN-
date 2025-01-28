import { MiniCartProduct, SubTotal } from "@components/e-commerce";

const MiniCart = () => {
  const porductList = Array.from({ length: 4 }).map(() => <MiniCartProduct />);

  if (porductList.length) {
    return (
      <div className="flex flex-col gap-4">
        {porductList}
        <SubTotal />
      </div>
    );
  }

  return <p>There is no product</p>;
};

export default MiniCart;
