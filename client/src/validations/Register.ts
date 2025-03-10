import * as Yup from "yup";

const RegisterValidation = Yup.object().shape({
  name: Yup.string()
    .min(4, "Please Enter Valid Name")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default RegisterValidation;
