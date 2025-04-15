import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductByCategoryController,
  updateProductController,
} from "@controllers/product";
import { paginate, adminJWT } from "@middlewares";
import productModal from "@models/product";

const productRoutes = express.Router();

productRoutes.post(`/create`, adminJWT, createProductController);
productRoutes.patch("/:productId", updateProductController);
productRoutes.delete("/:productId", deleteProductController);
productRoutes.get(
  "/:categoryID",
  paginate(productModal, "category"),
  getProductByCategoryController
);

export default productRoutes;
