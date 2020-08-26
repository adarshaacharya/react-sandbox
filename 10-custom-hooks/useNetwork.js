import React, { useEffect } from "react";
import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = React.useState(window.navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(window.navigator.onLine);
    }
    setStatus(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are now offline");
  };

  const onLine = useNetwork(handleNetworkChange);

  return <div className="App">{onLine ? "Online" : "Offline"}</div>;
}
