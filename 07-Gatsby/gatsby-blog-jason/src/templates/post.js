import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

import styles from "./post.module.scss"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p style={{ fontSize: "0.75rem" }}>Posted by {post.frontmatter.author} on {post.frontmatter.date}</p>

    <MDXRenderer>{post.body}</MDXRenderer>

    <Link to="/blog" className={styles.link}>
      &larr; Back to all posts
    </Link>
  </Layout>
)

export default PostTemplate
