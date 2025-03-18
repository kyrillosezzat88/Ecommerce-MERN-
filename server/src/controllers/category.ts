import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "@services/categoryServices";
import { handleError } from "@utils/errorHandler";
import { Request, Response } from "express";
import { categoryValidation } from "@validations";

const createNewCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = categoryValidation.safeParse(req.body);
    if (!categoryData.success)
      return handleError(res, 400, categoryData.error.flatten());

    const newCategory = await createCategory(categoryData.data);
    return res
      .status(201)
      .json({ message: "Category created successfully", data: newCategory });
  } catch (error) {
    return handleError(res, 400, (error as Error).message);
  }
};

const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json({ data: categories });
  } catch (error) {
    return handleError(res, 500, (error as Error).message);
  }
};

const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryById(req.params.categoryId);
    if (!category)
      return res.status(404).json({ message: "Category not found " });
    return res.status(200).json({ data: category });
  } catch (error) {
    return handleError(res, 500, (error as Error).message);
  }
};

const updateCat = async (req: Request, res: Response) => {
  try {
    const categoryData = categoryValidation.safeParse(req.body);
    if (!categoryData.success)
      return handleError(res, 400, categoryData.error.flatten());

    const categoryId = req.params.categoryId;
    const updatedCategory = await updateCategory({
      _id: categoryId,
      ...categoryData.data,
    });
    return res.status(200).json({
      data: updatedCategory,
      message: "category updated successfully",
    });
  } catch (error) {
    return handleError(res, 400, (error as Error).message);
  }
};

const removeCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await deleteCategory(categoryId);
    return res.status(200).json({
      message: "Category deleted successfully",
      data: deletedCategory,
    });
  } catch (error) {
    return handleError(res, 400, (error as Error).message);
  }
};

export {
  createNewCategory,
  getCategories,
  updateCat,
  removeCategory,
  getSingleCategory,
};
