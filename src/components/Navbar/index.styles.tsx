import styled from "styled-components";
import {
  GREY_PRIMARY_COLOR,
  BLACK_PRIMARY_HOVER,
  BLACK_PRIMARY_LIGHTER
} from "constants/styles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${GREY_PRIMARY_COLOR};
  padding: 0.5rem 3rem;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  max-width: 200px;
  img {
    max-width: 100%;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const NavItem = styled(Link)`
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  color: ${BLACK_PRIMARY_LIGHTER};
  &:hover {
    color: ${BLACK_PRIMARY_HOVER};
  }
  &:not(:first-child) {
    margin-left: 1.5rem;
  }
`;
