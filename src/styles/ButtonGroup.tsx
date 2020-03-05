import styled from "styled-components";
import { GREY_SECONDARY_COLOR, GREY_PRIMARY_COLOR } from "constants/styles";

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.25rem;
  overflow: hidden;
  border: ${GREY_SECONDARY_COLOR} 1px solid;
  button {
    flex: 1;
    border: none;
    padding: 1.4rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    &:not(:last-child) {
      border-right: ${GREY_SECONDARY_COLOR} 1px solid;
    }
    &:hover,
    &:visited,
    &:active {
      background-color: ${GREY_PRIMARY_COLOR};
    }
  }
`;
