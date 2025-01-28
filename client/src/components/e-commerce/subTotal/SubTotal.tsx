import { Button } from "@components/form";

const SubTotal = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="font-semibold">SubTotal</span>
        <span>200.00 EG</span>
      </div>
      <Button text="View Cart" className="btn-primary" />
      <Button text="Checkout" className="btn-secondary" />
    </>
  );
};

export default SubTotal;
