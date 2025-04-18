import { TLogin, TRegister } from "@types";
import userModal from "../models/user";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const registerUser = async (userData: TRegister) => {
  // Check if the email already exists in the database.
  const user = await userModal.findOne({ email: userData.email });
  if (user) throw new Error("User already exists");

  // Hash the password before saving it to the database.
  const hashedPassword = await bcrypt.hash(userData.password, 12);
  const newUser = new userModal({ ...userData, password: hashedPassword });
  await newUser.save();
  return newUser;
};

export const loginUser = async ({ email, password }: TLogin) => {
  const user = await userModal.findOne({ email });
  if (!user) throw new Error("email or password is incorrect");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid password");

  const token = JWT.sign(
    { userId: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  return {
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    token,
  };
};
