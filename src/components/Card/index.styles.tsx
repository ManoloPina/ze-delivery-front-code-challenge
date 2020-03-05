import styled from "styled-components";
import { BLUE_PRIMARY_COLOR } from "constants/styles";

export const CardContainer = styled.div<{ maxWidth?: string | number }>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const Actions = styled.div`
  button {
    font-size: 1.8rem;
    font-weight: bold;
    &:nth-child(1) {
      background-color: ${BLUE_PRIMARY_COLOR};
      color: white;
    }
  }
`;

export const Image = styled.img`
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;
