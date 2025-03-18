import { TCategory } from "@types";
import categoryModal from "@models/category";

const createCategory = async ({ title, mainImage }: TCategory) => {
  const getCategory = await categoryModal.findOne({ title });
  if (getCategory) throw new Error("Category already exists");
  // create a new category
  const newCategory = new categoryModal({ title, mainImage });
  await newCategory.save();
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await categoryModal.find();
  return categories;
};

const getCategoryById = async (categoryId: string) => {
  const category = await categoryModal.findById(categoryId);
  if (!category) throw new Error("Category not found");
  return category;
};

const updateCategory = async (categoryData: TCategory) => {
  const newCategory = await categoryModal.findOneAndUpdate(
    { _id: categoryData._id },
    categoryData,
    { new: true }
  );
  if (!newCategory) throw new Error("Category not found");
  // update the category
  await newCategory.save();
  return newCategory;
};

const deleteCategory = async (categoryId: string) => {
  const category = await categoryModal.findByIdAndDelete(categoryId);
  if (!category) throw new Error("Category not found");
  return category;
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
