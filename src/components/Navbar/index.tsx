import React from "react";
import * as S from "./index.styles";
import { HOME, PRODUCTS } from "constants/routes";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <S.HeaderContainer>
      <S.Brand>
        <img src="public/assets/images/logo.png" />
      </S.Brand>
      <S.NavItems>
        <S.NavItem to={HOME}>Home</S.NavItem>
        <S.NavItem to={PRODUCTS}>Products</S.NavItem>
      </S.NavItems>
    </S.HeaderContainer>
  );
};

export default Navbar;
