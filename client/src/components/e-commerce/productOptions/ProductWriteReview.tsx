import { Formik, Form } from "formik";
import { Button, Input } from "@components/form";

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
            className="w-full md:w-1/2"
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2"
          />
        </div>
        <Input
          type="number"
          name="rating"
          placeholder="Enter your rating (1-5)"
        />
        <Input
          type="text"
          name="review"
          placeholder="Write your review here..."
        />
        <Button
          type="submit"
          text="Submit Review"
          className="btn btn-primary"
        />
      </Form>
    </Formik>
  );
};

export default ProductWriteReview;
