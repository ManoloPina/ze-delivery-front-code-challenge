import { observable, action } from "mobx";
import { Product } from "types/Product";

export class ProductCartStore implements Product {
  @observable
  id = "";

  @observable
  title = "";

  @observable
  price = 0;

  @observable
  images = [];

  @observable
  productVariants = [];

  @observable
  itemsQty = 0;
}
