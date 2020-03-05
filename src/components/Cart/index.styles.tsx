import styled from "styled-components";
import { BLACK_PRIMARY_COLOR, BLACK_PRIMARY_LIGHTER } from "constants/styles";

export const CartContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.span`
  flex: 5;
`;

export const Number = styled.div`
  flex: 1;
`;

export const RemoveProduct = styled.button`
  flex: 1;
`;
