import { TProduct } from "@types";

export const calculateSubtotal = (products: TProduct[]) => {
  return products.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);
};

export const Total = (ShippingCost: number, products: TProduct[]) => {
  return ShippingCost + calculateSubtotal(products);
};
