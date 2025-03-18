import Z from "zod";

const loginValidation = Z.object({
  email: Z.string()
    .email({ message: "Please enter a valid email" })
    .nonempty({ message: "email required!" }),
  password: Z.string()
    .min(8, { message: "Please enter a valid password" })
    .nonempty({ message: "password required!" }),
});

export default loginValidation;
