import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  // make piece of state based on localstorage or default (get item from localstorage)
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      // get item from local storage
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (err) {
      val = defaultVal;
    }
    return val;
  });

  // make useEffect to update localstorage web storage changes (set item to localstorage) 
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;

// JSON.parse() is for "parsing" something that was received as JSON.
// JSON.stringify() is to create a JSON string out of an object/array.
