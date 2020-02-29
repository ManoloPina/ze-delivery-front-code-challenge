import React from "react";
import * as S from "./index.styles";

interface Props {
  value: string;
  onChange(event: any): void;
  handleSearch(event: any): void;
}

const Search: React.FC<Props> = ({ value, onChange, handleSearch }) => {
  return (
    <S.SearchContainer>
      <S.InputGroup>
        <input type="text" name="search" value={value} onChange={onChange} />
        <S.Button onClick={handleSearch}>Search</S.Button>
      </S.InputGroup>
    </S.SearchContainer>
  );
};

export default Search;
