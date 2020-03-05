import React, { useRef, useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

type Hook = (
  input: string
) => [string[], boolean, boolean, (predictions: string[]) => void];

export const useAddressPredictions: Hook = (input: string) => {
  const [predictions, setPredictions] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const autocomplete = useRef<google.maps.places.AutocompleteService>();

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService();
  }

  const getPlacePredictions = (input: string) => {
    if (input.length > 3 && autocomplete.current !== undefined) {
      setLoading(true);
      autocomplete.current.getPlacePredictions({ input }, predictions => {
        setPredictions(predictions.map(prediction => prediction.description));
        setLoading(false);
      });
    }
  };

  const debouncePlacePredictions = useCallback(
    debounce(getPlacePredictions, 300),
    []
  );

  useEffect(() => {
    debouncePlacePredictions(input);
  }, [input]);

  return [predictions, loading, error, setPredictions];
};
