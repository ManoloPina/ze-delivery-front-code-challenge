import React, { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });
  const [error, setError] = useState<string | null>(null);

  const onChange = ({ coords: { latitude, longitude } }: Position) => {
    setPosition({ longitude, latitude });
  };

  const onError = (error: PositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation isn't supported");
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
