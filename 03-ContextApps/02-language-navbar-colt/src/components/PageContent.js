import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "#292C34" : "white",
    height: "100vh",
    width: "100%",
  };
  return <div style={styles}>{props.children}</div>;
}
