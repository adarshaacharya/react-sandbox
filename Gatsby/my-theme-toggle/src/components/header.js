import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Switch from "react-switch"

import sunIcon from "../images/sun-icon.svg"
import moonIcon from "../images/moon-icon.svg"

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

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
