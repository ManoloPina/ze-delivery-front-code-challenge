import React, { useState, useEffect } from "react";
import axios from "axios";
import { MAPS_KEY } from "constants/index";

interface Position {
  lat: string | null;
  lng: string | null;
}

type Hook = (address: string) => [Position, boolean, boolean];

export const useGeoPosition: Hook = (address: string) => {
  const [position, setPosition] = useState<Position>({ lat: null, lng: null });
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosition = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${MAPS_KEY}`
      );

      const result: Position = res.data.results[0].geometry.location;

      if (result.lat !== null && result.lng !== null) {
        setPosition({ lat: result.lat, lng: result.lng });
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    fetchPosition();
  }, [address]);

  return [position, loading, error];
};
