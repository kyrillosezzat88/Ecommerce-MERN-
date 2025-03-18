import { Request, Response } from "express";
import { registerValidation, loginValidation } from "@validations";
import { registerUser, loginUser } from "@services/userServices";
import { handleError } from "@utils/errorHandler";

const register = async (req: Request, res: Response) => {
  const data = registerValidation.safeParse(req.body);
  if (!data.success) return handleError(res, 400, data.error.flatten());

  try {
    await registerUser(data.data);
    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    return handleError(res, 400, (error as Error).message);
  }
};

const login = async (req: Request, res: Response) => {
  const data = loginValidation.safeParse(req.body);
  if (!data.success) return handleError(res, 400, data.error.flatten());

  try {
    const result = await loginUser({
      email: data.data.email,
      password: data.data.password,
    });
    return res.status(200).json({
      data: result.user,
      token: result.token,
      message: "You logged in successfully",
    });
  } catch (error) {
    return handleError(res, 400, (error as Error).message);
  }
};

export { register, login };
