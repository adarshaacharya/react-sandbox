import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import "../styles/index.scss"
import styles from "./Layout.module.scss"

import useSiteMetadata from "../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <> 
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout

