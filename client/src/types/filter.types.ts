export type TFilterState = {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  ratings: number[];
  sizes: string[];
  colors: string[];
  availability: string;
};

export type TFilterOptions = {
  categories: Array<{
    id: number;
    title: string;
    img: string;
    prefix: string;
  }>;
  brands: string[];
  sizes: string[];
  colors: string[];
  maxPrice: number;
};

export type TFilterSection = {
  price: boolean;
  categories: boolean;
  brands: boolean;
  ratings: boolean;
  sizes: boolean;
  colors: boolean;
  availability: boolean;
};
