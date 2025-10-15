import { Formik, Form } from "formik";
import { Button, Input } from "@components/form";
import RatingProduct from "./RatingProduct";

const initialValues = {
  rating: 0,
  review: "",
  name: "",
  email: "",
};

const ProductWriteReview = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log({ values })}
    >
      <Form>
        <div className="flex gap-3 w-full">
          <Input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="w-full"
            containerClassName="w-full md:w-1/2"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full"
            containerClassName="w-full md:w-1/2"
            required
          />
        </div>
        <div className="flex gap-2 items-center font-semibold">
          <span>Rate :</span> <RatingProduct />
        </div>
        <Input
          type="text"
          name="review"
          TagName="textarea"
          placeholder="Write your review here..."
          className=" min-h-[200px]"
        />
        <Button
          type="submit"
          text="Submit Review"
          className="btn btn-primary mt-4"
        />
      </Form>
    </Formik>
  );
};

export default ProductWriteReview;
