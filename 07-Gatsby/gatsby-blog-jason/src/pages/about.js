import React from "react"

import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <p>
        I love writing codes to solve real world problems and enjoy turning
        complex problems into simple, beautiful and intuitive solutions. I love
        speaking and contributing open source too.
      </p>
      <Link to="/"> &larr; Back to home</Link>
    </Layout>
  )
}

export default AboutPage
