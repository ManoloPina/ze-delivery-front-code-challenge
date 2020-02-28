import React from "react";
import { usePosition } from "shared/customHooks";
import * as S from "./index.styles";
import { Container } from "styles";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const { latitude, longitude, error } = usePosition();
  return (
    <Container>
      <S.HomeContainer>
        <h1>Home</h1>
        <code>
          latitude: {latitude}
          <br />
          longitude: {longitude}
          <br />
          error: {error}
          <br />
        </code>
      </S.HomeContainer>
    </Container>
  );
};

export default Home;
