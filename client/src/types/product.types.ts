export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  mainImage: string;
  quantity?: number;
  max: number;
  stock: number;
  isLiked?: boolean;
  gallery?: string[];
  rate?: number;
  comments?: {
    userId: number;
    comment: string;
  }[];
};
