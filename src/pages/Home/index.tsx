import React, { useState, SyntheticEvent } from "react";
import { usePosition } from "shared/customHooks";
import * as S from "./index.styles";
import { Container } from "styles";
import Search from "components/Search";
import axios from "axios";
import { API } from "constants/index";

const Home: React.FC = () => {
  const { latitude, longitude, error } = usePosition();
  const [search, setSearch] = useState<string>("");
  const onChangeSearch = (event: any) => {
    const value = event.target.value;
    setSearch(value);
  };
  const handleSearch = async () => {
    if (search && search.length >= 3) {
      let res = await axios.post(API, {
        query: `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
          pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
            __typename
            id
            status
            tradingName
            officialName
            deliveryTypes {
              __typename
              pocDeliveryTypeId
              deliveryTypeId
              price
              title
              subtitle
              active
            }
            paymentMethods {
              __typename
              pocPaymentMethodId
              paymentMethodId
              active
              title
              subtitle
            }
            pocWorkDay {
              __typename
              weekDay
              active
              workingInterval {
                __typename
                openingTime
                closingTime
              }
            }
            address {
              __typename
              address1
              address2
              number
              city
              province
              zip
              coordinates
            }
            phone {
              __typename
              phoneNumber
            }
          }
        }
        `,
        variables: {
          algorithm: search,
          lat: latitude,
          long: longitude,
          now: new Date()
        }
      });
    }
  };
  return (
    <Container>
      <h2>Find the nearest POC</h2>
      <S.HomeContainer>
        <Search
          value={search}
          onChange={onChangeSearch}
          handleSearch={handleSearch}
        />
      </S.HomeContainer>
    </Container>
  );
};

export default Home;
