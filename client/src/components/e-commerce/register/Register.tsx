import { Button, Input } from "@components/form";
import { TRegister } from "@types";
import { RegisterValidation } from "@validations";
import { Form, Formik } from "formik";

const initialValues: TRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterValidation}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors }) => (
        <Form>
          <Input
            name="name"
            type="string"
            placeholder="Enter Your name"
            label="Full Name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Enter Your email"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter Your password"
            label="Password"
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Your password"
            label="Confirm Password"
          />
          <Button
            text="Register"
            type="submit"
            className="btn btn-primary w-1/3 ml-auto mt-4"
            disabled={Object.keys(errors).length > 0}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Register;
