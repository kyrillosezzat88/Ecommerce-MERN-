export type TProduct = {
  _id?: string;
  title: string;
  description: string;
  basePrice: number;
  salePrice: number;
  category: string;
  mainImage: string;
  gallery: string[];
  stock: number;
  sku: string;
  tags: string[];
  sizes: { size: string; stock: number; price: number; image: string }[];
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
