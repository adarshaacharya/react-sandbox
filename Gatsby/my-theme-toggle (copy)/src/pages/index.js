import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { ThemeProvider } from "../components/ThemeContext"

const IndexPage = () => (
  <ThemeProvider>
    <Layout>
      <h1>Hi people</h1>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
