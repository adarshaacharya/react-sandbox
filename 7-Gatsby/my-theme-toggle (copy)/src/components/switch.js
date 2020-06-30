import React from "react"
import Switch from "react-switch"

import sunIcon from "../images/sun-icon.svg"
import moonIcon from "../images/moon-icon.svg"

export default ( {theme}) => (
  <Switch
    onChange={() =>
      theme.updateTheme(theme.name === "light" ? "dark" : "light")
    }
    checked={theme.name === "dark"}
    onColor="#222"
    offColor="#333"
    checkedIcon={<img src={moonIcon} alt="moon icon" />}
    uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
    boxShadow="0 0 2px 3px #B38CD9"
    activeBoxShadow="0 0 2px 3px #dfb3e6"
  />
)


