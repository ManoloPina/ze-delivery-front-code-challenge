import styled from "styled-components";
import { CONTAINER_WIDTH } from "constants/styles";

export const Container = styled.div`
  max-width: calc(${CONTAINER_WIDTH} - 1.5rem);
  display: block;
  margin: 3rem auto;
  padding: 1.5rem;
`;
