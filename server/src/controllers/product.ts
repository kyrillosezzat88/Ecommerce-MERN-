import { handleError } from "@utils/errorHandler";
import { NextFunction, Request, Response } from "express";
import { productValidation } from "@validations";
import {
  createProduct,
  getProductsByCategory,
  updateProduct,
} from "@services/productServices";
import { deleteProduct } from "../services/productServices";

const createProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // Removed TProduct generic as Response typically doesn't need it
  try {
    const product = productValidation.safeParse(req.body);
    if (!product.success) {
      return handleError(res, 400, product.error.flatten());
    }

    // Assuming product.data is properly typed from your validation
    const newProduct = await createProduct(product.data);

    return res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return handleError(res, 500, (error as Error).message);
  }
};

const updateProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = productValidation.safeParse(req.body);
    if (!productData.success) {
      return handleError(res, 400, productData.error.flatten());
    }
    const updatedProduct = await updateProduct(productId, productData.data);
    return res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return handleError(res, 500, (error as Error).message);
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await deleteProduct(productId);
    return res
      .status(200)
      .json({ message: "Product deleted successfully", data: deletedProduct });
  } catch (error) {
    return handleError(res, 500, (error as Error).message);
  }
};

const getProductByCategoryController = async (req: Request, res: Response) => {
  try {
    if (res.paginatedResults) {
      return res.status(200).json({
        message: "Products fetched successfully",
        data: res.paginatedResults,
      });
    }
  } catch (error) {
    return handleError(res, 500, (error as Error).message);
  }
};

export {
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByCategoryController,
};
