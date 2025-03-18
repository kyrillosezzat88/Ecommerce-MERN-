import {
  createNewCategory,
  getCategories,
  getSingleCategory,
  removeCategory,
  updateCat,
} from "@controllers/category";
import express from "express";

const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);
categoryRoutes.get("/:categoryId", getSingleCategory);
categoryRoutes.post("/create", createNewCategory);
categoryRoutes.patch("/:categoryId", updateCat);
categoryRoutes.delete("/:categoryId", removeCategory);

export default categoryRoutes;
