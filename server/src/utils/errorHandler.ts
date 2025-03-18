import { Response } from "express";

export const handleError = (
  res: Response,
  status: number,
  message: string | object
) => {
  return res.status(status).json({ message });
};
