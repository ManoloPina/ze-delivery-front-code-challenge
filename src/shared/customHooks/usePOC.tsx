import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "constants/index";

interface Position {
  lat: string | null;
  lng: string | null;
}

type Hook = (
  position: Position
) => [any, boolean, boolean, (position: Position) => void];

export const usePOC: Hook = (position: Position) => {
  const [poc, setPoc] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchPOC = async (position: Position) => {
    if (position.lat && position.lng) {
      try {
        setLoading(true);
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
            algorithm: "NEAREST",
            lat: position.lat,
            long: position.lng,
            now: new Date()
          }
        });
        setPoc(res.data.data.pocSearch);
        setLoading(false);
      } catch (error) {
        console.error("Fetch products errors:", error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    fetchPOC(position);
  }, [position]);

  return [poc, loading, error, fetchPOC];
};
