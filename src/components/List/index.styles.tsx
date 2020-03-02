import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  font-size: 1.5rem;
`;

export const Item = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1.75rem 1.25rem;
  cursor: pointer;
  &:first-child {
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  &:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  & + li {
    border-top-width: 0;
  }
  &:hover {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
  }
`;

export const ItemNotFound = styled.div``;
