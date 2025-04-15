import { TProduct } from "@types";
import ProductModal from "@models/product";
import { Document } from "mongoose";
import { paginate } from "@middlewares";

const createProduct = async (
  product: TProduct
): Promise<TProduct & Document> => {
  const existingProduct = await ProductModal.findOne({ title: product.title });
  if (existingProduct) throw new Error("Product already exists");

  const newProduct = new ProductModal(product);
  await newProduct.save();

  return newProduct;
};

const updateProduct = async (productId: string, product: TProduct) => {
  const updatedProduct = await ProductModal.findByIdAndUpdate<TProduct>(
    { _id: productId },
    product,
    { new: true }
  );
  if (!updatedProduct) throw new Error("Product not found");
  return updatedProduct as TProduct;
};

const deleteProduct = async (productId: string) => {
  const deletedProduct = await ProductModal.findByIdAndDelete(productId);
  if (!deletedProduct) throw new Error("Product not found");
  return deletedProduct;
};

const getProductsByCategory = async (categoryId: string) => {
  const products = await ProductModal.find({ category: categoryId });
  if (!products) throw new Error("No products found in this category");
  return products;
};

export { createProduct, updateProduct, deleteProduct, getProductsByCategory };
