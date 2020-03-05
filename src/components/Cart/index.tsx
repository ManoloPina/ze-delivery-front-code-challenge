import React, { useEffect } from "react";
import * as S from "./index.styles";
import { Product } from "types/Product";
import { observer } from "mobx-react-lite";
import ProductCart from "types/ProductCart";

interface Props {
  products: ProductCart[];
  removeProduct: (product: ProductCart) => void;
}

const Cart: React.FC<Props> = observer(
  ({ products = [], removeProduct, ...props }) => {
    return (
      <S.CartContainer>
        <h3>Cart</h3>
        {products.length > 0 ? (
          products.map(product => (
            <S.CartItem key={product.id}>
              <S.Title>{product.title}</S.Title>
              <S.Number>{product.itemQty}</S.Number>
              <S.RemoveProduct onClick={removeProduct as any}>
                x
              </S.RemoveProduct>
            </S.CartItem>
          ))
        ) : (
          <span>Any item was added to the cart</span>
        )}
      </S.CartContainer>
    );
  }
);

export default Cart;
