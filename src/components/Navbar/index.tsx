import React from "react";
import * as S from "./index.styles";
import { HOME, PRODUCTS } from "constants/routes";
import { Container } from "styles";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <S.Background>
      <S.NavbarContainer>
        <S.Brand>
          <img src="public/assets/images/logo.png" />
        </S.Brand>
        <S.NavItems>
          <S.NavItem to={HOME}>Home</S.NavItem>
          <S.NavItem to={PRODUCTS}>Products</S.NavItem>
        </S.NavItems>
      </S.NavbarContainer>
    </S.Background>
  );
};

export default Navbar;
