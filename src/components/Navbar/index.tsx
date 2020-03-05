import React from "react";
import * as S from "./index.styles";
import { HOME, PRODUCTS } from "constants/routes";
import { Link } from "react-router-dom";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <S.Background>
      <S.NavbarContainer>
        <Link to="/">
          <S.Brand>
            <img src="/assets/images/logo.png" />
          </S.Brand>
        </Link>

        <S.NavItems>
          <S.NavItem to={HOME}>Home</S.NavItem>
          <S.NavItem to={PRODUCTS}>Products</S.NavItem>
        </S.NavItems>
      </S.NavbarContainer>
    </S.Background>
  );
};

export default Navbar;
