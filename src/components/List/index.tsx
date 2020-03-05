import React from "react";
import * as S from "./index.styles";

interface Props {
  items: any[];
  handleSelected(item: any): void;
}

const List: React.FC<Props> = ({ items = [], handleSelected }) => {
  return (
    <S.ListContainer>
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <S.Item onClick={() => handleSelected(item)} key={index}>
            {item}
          </S.Item>
        ))}
    </S.ListContainer>
  );
};

export default List;
