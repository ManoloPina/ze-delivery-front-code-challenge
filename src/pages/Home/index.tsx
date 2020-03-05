import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { Container } from "styles";
import Search from "components/Search";
import {
  useAddressPredictions,
  useGeoPosition,
  usePOC
} from "shared/customHooks";
import List from "components/List";
import { RouteChildrenProps } from "react-router-dom";
import { PRODUCTS } from "constants/routes";

interface Props extends RouteChildrenProps {}

const Home: React.FC<Props> = ({ history, ...props }) => {
  const [search, setSearch] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [
    predictions,
    loadingPredictions,
    errorPredictions,
    setPredictions
  ] = useAddressPredictions(search);
  const [position, loadingPosition, errorPosition] = useGeoPosition(address);
  const [poc, pocLoading, pocError, setPoc] = usePOC(position);

  const onChangeSearch = (event: any) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleSelected = (item: any) => {
    setAddress(item);
    setPredictions([]);
  };

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
        {loadingPredictions ? (
          <span>Loading...</span>
        ) : (
          <List items={predictions} handleSelected={handleSelected} />
        )}
      </S.HomeContainer>
    </Container>
  );
};

export default Home;
