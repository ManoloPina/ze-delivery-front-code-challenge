import React from "react";
import * as S from "./index.styles";
import { RouteChildrenProps } from "react-router-dom";

interface Props extends RouteChildrenProps {}

const Products: React.FC<Props> = ({ ...props }) => {
  return (
    <S.ProductsContainer>
      <h2>Products</h2>
    </S.ProductsContainer>
  );
};

export default Products;
