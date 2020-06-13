

import React from "react"
import styled from "@emotion/styled"

import Header from "./header"

import { ThemeContext } from "./ThemeContext"

const themes = {
  light: {
    foreground: "inherit",
    background: "inherit",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;

  & a {
    color: ${props => (props.theme.name === "dark" ? "#B38CD9" : "inherit")};
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <ThemedLayout theme={theme}>
          <Header theme={theme} />

          <>
            <div>
              <main>{children}</main>
            </div>
          </>
        </ThemedLayout>
      )}
    </ThemeContext.Consumer>
  )
}

export default Layout
