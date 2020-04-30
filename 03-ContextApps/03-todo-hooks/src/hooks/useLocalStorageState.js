import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // make piece of state based on localstorage or default (get item from localstorage)
  const [state, setState] = useState(() => {
    let val;
    try {
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

  return [state, setState];
}

export default useLocalStorageState;

// JSON.parse() is for "parsing" something that was received as JSON.
// JSON.stringify() is to create a JSON string out of an object/array.
