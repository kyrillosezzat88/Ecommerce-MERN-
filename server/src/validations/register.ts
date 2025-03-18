import Z from "zod";

const registerValidation = Z.object({
  firstName: Z.string()
    .min(4, { message: "First name should be at least 4 characters" })
    .regex(/^\S*$/, {
      message: "First name cannot contain any whitespace",
    })
    .nonempty({ message: "First name is required" }),
  lastName: Z.string()
    .min(4, { message: "Last name should be at least 4 characters" })
    .regex(/^\S*$/, {
      message: "Last name cannot contain any whitespace",
    })
    .nonempty({ message: "Last name is required" }),
  email: Z.string()
    .email({ message: "Email is not valid" })
    .nonempty({ message: "Email is required" }),
  password: Z.string()
    .min(8, { message: "Password should be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }
    )
    .nonempty({ message: "Password is required" }),
  confirmPassword: Z.string()
    .min(8, { message: "Password should be at least 8 characters" })
    .nonempty({ message: "Password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password and confirm password should be the same",
  path: ["confirmPassword"],
});

export default registerValidation;
