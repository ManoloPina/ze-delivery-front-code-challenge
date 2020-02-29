import styled from "styled-components";
import {
  BLUE_PRIMARY_COLOR,
  BLUE_SECONDARY_COLOR,
  GREY_PRIMARY_COLOR,
  GREY_SECONDARY_COLOR
} from "constants/styles";

export const SearchContainer = styled.div``;

export const InputGroup = styled.div`
  display: flex;
  align-content: stretch;
  height: 4.5rem;
  & > input {
    flex: 4 0 auto;
    border: ${GREY_SECONDARY_COLOR} solid 0.12rem;
    border-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0.375rem 0.75rem;
    align-items: stretch;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${BLUE_PRIMARY_COLOR};
  border: 1px solid ${BLUE_SECONDARY_COLOR};
  color: white;
  flex: 1;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  cursor: pointer;
`;
