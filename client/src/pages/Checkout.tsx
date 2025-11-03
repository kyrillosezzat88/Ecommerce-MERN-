import { EmptyCart } from "@components/common";
import { ProductCard } from "@components/e-commerce";
import { Button, Input } from "@components/form";
import useOrder from "@hooks/useOrder";
import { useAppSelector } from "@store/hooks";
import { calculateSubtotal, Total } from "@utils/calculation";
import { OrderValidation } from "@validations";
import { Formik, Form } from "formik";

const Checkout = () => {
  const { productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  const { initialValues, handleSubmit } = useOrder();

  if (productsFullInfo.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="py-20">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={OrderValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting, dirty }) => (
            <Form className="flex flex-wrap md:flex-nowrap gap-10">
              <div className="w-full md:w-1/2">
                <h1 className="font-medium text-3xl mb-8">Billing Details</h1>
                <div className="flex flex-col gap-6">
                  <Input
                    title="First Name"
                    type="text"
                    name="firstName"
                    label="First Name *"
                    required
                  />
                  <Input
                    title="Last Name"
                    type="text"
                    name="lastName"
                    label="Last Name *"
                    required
                  />
                  <Input
                    title="Country"
                    type="text"
                    name="country"
                    label="Country / Region *"
                    required
                  />
                  <Input
                    title="Address"
                    type="text"
                    name="address"
                    label="Address *"
                    required
                  />
                  <Input
                    title="City"
                    type="text"
                    name="city"
                    label="City *"
                    required
                  />
                  <Input
                    title="Zip Code"
                    type="number"
                    name="zipCode"
                    label="Zip Code *"
                    required
                  />
                  <Input
                    title="Phone"
                    type="tel"
                    name="phone"
                    label="Phone *"
                    required
                  />
                  <Input
                    title="Email"
                    type="email"
                    name="email"
                    label="Email Address *"
                    required
                  />
                  <Input
                    type="text"
                    name="note"
                    TagName="textarea"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="min-h-[200px]"
                    label="Order notes (optional)"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="font-medium text-3xl mb-8">Shopping Cart</h1>
                {productsFullInfo.map((product, idx) => (
                  <ProductCard
                    key={product.id || idx}
                    product={product}
                    type="order"
                  />
                ))}
                <div className="flex justify-between font-medium border-b border-gray-300 py-6">
                  <span className="font-medium">SubTotal</span>
                  <span>${calculateSubtotal(productsFullInfo).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium border-b border-gray-300 py-6">
                  <span className="font-medium">Shipping</span>
                  <span>$5</span>
                </div>
                <div className="flex justify-between font-medium text-3xl border-b border-gray-300 py-6">
                  <span className="font-medium">Total</span>
                  <span>${Total(5, productsFullInfo).toFixed(2)}</span>
                </div>
                <Button
                  text="Place Order"
                  className="btn btn-primary mt-6 w-full"
                  type="submit"
                  disabled={
                    Object.keys(errors).length > 0 || !dirty || isSubmitting
                  }
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Checkout;
