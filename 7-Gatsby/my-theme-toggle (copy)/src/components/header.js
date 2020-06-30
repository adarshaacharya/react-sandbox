import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Switch from "react-switch"

// import sunIcon from "../images/sun-icon.svg"
// import moonIcon from "../images/moon-icon.svg"

import Switch from "./switch"
const Header = ({ siteTitle, theme }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Switch theme={theme} />
    </div>
  </header>
)


export default Header
