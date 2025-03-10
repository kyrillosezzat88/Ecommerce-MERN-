import { Input } from "@components/form";
import { Form, Formik } from "formik";

const initialValues = { search: "" };

const Search = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => {
        console.log(value);
      }}
    >
      <Form>
        <Input name="search" placeholder="search" />
      </Form>
    </Formik>
  );
};

export default Search;
