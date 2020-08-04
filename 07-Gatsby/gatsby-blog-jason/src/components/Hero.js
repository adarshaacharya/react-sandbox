import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroudImage from "gatsby-background-image"
import styles from "./Hero.module.scss"

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero-image.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroudImage
      className={styles.heroImage}
      Tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    >
      <div className={styles.textBox}>
        <h1>Frontend masters + Gatsby &hearts;</h1>
      </div>
    </BackgroudImage>
  )
}

export default Hero
