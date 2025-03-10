import { Button, Input } from "@components/form";
import { TLogin } from "@types";
import { LoginValidation } from "@validations";
import { Formik, Form } from "formik";

const initialValues: TLogin = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidation}
      onSubmit={(values) => console.log("Form Submitted:", values)}
    >
      {({ errors }) => (
        <Form>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <Button
            text="Login"
            type="submit"
            className="btn btn-primary w-1/3 ml-auto mt-4"
            disabled={Object.keys(errors).length > 0}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Login;
