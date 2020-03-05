import { Product } from "./Product";

interface ProductCart extends Product {
  itemQty: number;
}

export interface Cart {
  products: ProductCart[];
  addProduct: (product: ProductCart) => void;
  removeProduct: (product: ProductCart) => void;
}
