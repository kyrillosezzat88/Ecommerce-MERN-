import { Request, Response, NextFunction } from "express";
import { Model, Document, FilterQuery } from "mongoose";

type TPaginatedResult<T> = {
  total: number;
  totalPages: number;
  currentPage: number;
  data: T[];
};

type TFilter = "category" | "orders";

interface PaginatedResponse<T> extends Response {
  paginatedResults?: TPaginatedResult<T>;
}

const paginate = <T extends Document>(model: Model<T>, filter?: TFilter) => {
  return async (
    req: Request,
    res: PaginatedResponse<T>,
    next: NextFunction
  ) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const startIndex = (page - 1) * limit;
    try {
      const queryFilter =
        filter === "category" ? { category: req.params.categoryID } : {};
      const total = await model.countDocuments(queryFilter);
      const data = await model
        .find(queryFilter)
        .limit(limit)
        .skip(startIndex)
        .exec();

      const result: PaginatedResult<T> = {
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        data,
      };
      console.log("result", result);
      res.paginatedResults = result;
      next();
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
};

export default paginate;
