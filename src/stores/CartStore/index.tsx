import { observable, action, computed, extendObservable } from "mobx";
import { Cart } from "types/Cart";
import { createContext } from "react";
import ProductCart from "types/ProductCart";

export class CartStore implements Cart {
  @observable
  products: ProductCart[] = [];
  @action
  addProduct = (product: ProductCart) => {
    const { id } = product;
    if (this.products.findIndex(product => product.id === id) === -1) {
      this.products.push(product);
    } else {
      this.products.find(product => product.id === id)!.itemQty += 1;
    }
  };

  @action
  removeProduct = (product: ProductCart) => {
    try {
      const { id } = product;
      const updatedProduct = this.products.find(product => product.id === id);
      if (updatedProduct && updatedProduct.itemQty > 1) {
        updatedProduct!.itemQty = product.itemQty - 1;
      } else {
        const updatedProductPosition = this.products.findIndex(
          product => product.id === id
        );
        if (updatedProductPosition > -1)
          this.products.splice(updatedProductPosition, 1);
      }
    } catch (error) {
      console.error("Error on decrease number of items:", error);
    }
  };
}

export const cartStoreContext = createContext<Cart>(new CartStore());
