import React, { useRef, useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

export const useAddressPredictions = (input: string) => {
  const [predictions, setPredictions] = useState<string[]>([]);
  const autocomplete = useRef<google.maps.places.AutocompleteService>();

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService();
  }

  const getPlacePredictions = (input: string) => {
    if (input.length > 3 && autocomplete.current !== undefined) {
      autocomplete.current.getPlacePredictions({ input }, predictions => {
        setPredictions(predictions.map(prediction => prediction.description));
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

  return predictions;
};
