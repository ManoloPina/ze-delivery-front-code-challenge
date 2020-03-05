import React from "react";
import { Category } from "types/Category";
import * as S from "./index.styles";
import { ButtonGroup } from "styles";

interface Props {
  categories: Category[];
  handleSelected(id: string): void;
}

const Categories: React.FC<Props> = ({
  categories,
  handleSelected,
  ...props
}) => {
  return (
    <S.CategoriesContainer>
      <ButtonGroup>
        {categories.map(({ id, title }) => (
          <button key={id} onClick={() => handleSelected(id)}>
            {title}
          </button>
        ))}
      </ButtonGroup>
    </S.CategoriesContainer>
  );
};

export default Categories;
