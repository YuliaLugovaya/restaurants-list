import { useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

export function useLocalStorage(key, defaultValue) {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};