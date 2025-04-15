import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import user from "@models/user";

interface JwtPayload {
  userId: string;
  isAdmin: boolean;
  iat?: number;
  exp?: number;
}

const adminJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({ message: "Please login first" });

    const token = authorization.replace("Bearer ", "");

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    const { userId, isAdmin } = payload;

    if (!isAdmin) return res.status(403).json({ message: "Access denied" });

    const userData = await user.findById(userId).select("-password");
    if (!userData) return res.status(404).json({ message: "User not found" });

    req.user = userData;
    next();
  } catch (err: any) {
    return res.status(401).json({ message: err.message || "Invalid token" });
  }
};

export default adminJWT;
