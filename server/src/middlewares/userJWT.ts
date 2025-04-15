import user from "@models/user";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const userJWT = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: "Please login" });
  const token = authorization.replace("Bearer ", "");
  try {
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      async (error, payload) => {
        if (error)
          return res.status(401).json({ message: "somthing went wrong" });
        const { userId } = payload as { userId: string };
        const userData = await user.findById(userId).select("-password");
        if (!userData) return res.status(401).json({ message: "Please login" });
        req.user = userData;
        next();
      }
    );
  } catch (error) {
    return res.status(401).json({ message: "Please login" });
  }
};

export default userJWT;
