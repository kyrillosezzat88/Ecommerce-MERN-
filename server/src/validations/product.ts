import Z from "zod";

const sizeSchema = Z.object({
  size: Z.string({
    required_error: "Size is required",
    invalid_type_error: "Size must be a string",
  }).min(1, "Size cannot be empty"),
  stock: Z.number({
    required_error: "Stock is required",
    invalid_type_error: "Stock must be a number",
  }).min(0, "Size stock cannot be negative"),
  price: Z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }).min(0, "Size price cannot be negative"),
  image: Z.string({
    required_error: "Image is required",
    invalid_type_error: "Image must be a string",
  }).min(1, "Image cannot be empty"),
});

const productValidation = Z.object({
  title: Z.string()
    .min(3, "Product title must be at least 3 characters")
    .nonempty("Product title is required"),
  description: Z.string()
    .min(10, "Product description must be at least 10 characters")
    .nonempty("Product description is required"),
  basePrice: Z.number()
    .min(1, "Product price must be at least $1")
    .positive("Product price must be positive"),
  salePrice: Z.number()
    .min(1, "Product price must be at least $1")
    .positive("Product price must be positive"),
  category: Z.string()
    .min(3, "Product category must be at least 3 characters")
    .nonempty("product category required!"),
  mainImage: Z.string().url().nonempty("Product image required!"),
  gallery: Z.array(Z.string().url()),
  tags: Z.array(Z.string()),
  stock: Z.number()
    .min(1, "Product stock must be at least 1")
    .positive("Product stock must be positive"),
  sku: Z.string().nonempty("Product sku required!"),
  sizes: Z.array(sizeSchema).min(1, "At least one size is required"),
  quantity: Z.number()
    .min(1, "Product quantity must be at least 1")
    .positive("Product quantity must be positive")
    .optional(),
  published: Z.boolean().default(true),
}).refine((data) => data.salePrice <= data.basePrice, {
  message: "Sale price cannot be greater than base price",
  path: ["salePrice"],
});

export default productValidation;
