import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello 👋,</h1>
      <h3>
        I'm Aadarsha, a full stack developer living in beautiful city Kathmandu.
      </h3>
      <p>
      <Link to="/about/" className="home-button">Learn about me &rarr;</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
