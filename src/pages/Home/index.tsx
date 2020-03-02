import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { Container } from "styles";
import Search from "components/Search";
import {
  useAddressPredictions,
  useGeoPosition,
  useProducts,
  usePOC
} from "shared/customHooks";
import List from "components/List";
import { API } from "constants/index";
import axios from "axios";
import { RouteChildrenProps } from "react-router-dom";
import { PRODUCTS } from "constants/routes";

interface Props extends RouteChildrenProps {}

const Home: React.FC<Props> = ({ history, ...props }) => {
  const [search, setSearch] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const predictions = useAddressPredictions(search);
  const [position, loading, error] = useGeoPosition(address);
  const [poc, pocLoading, pocError, setPoc] = usePOC(position);

  const onChangeSearch = (event: any) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleSelected = (item: any) => setAddress(item);

  useEffect(() => {
    if (poc && poc.length > 0) {
      const [{ id }] = poc;
      history.push(`${PRODUCTS}/${id}`);
    }
  }, [poc]);

  return (
    <Container>
      <h2>Find the nearest POC</h2>
      <S.HomeContainer>
        <Search
          value={search}
          onChange={onChangeSearch}
          handleSearch={() => {}}
        />
        {search.length > 3 && (
          <List items={predictions} handleSelected={handleSelected} />
        )}
      </S.HomeContainer>
    </Container>
  );
};

export default Home;
