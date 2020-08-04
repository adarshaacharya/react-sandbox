import React from "react"
import Moment from "react-moment"

import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt

            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2> {edge.node.frontmatter.title}</h2>

              <p>
                <Moment format="D MMM YYYY" withTitle>
                  {edge.node.frontmatter.date}
                </Moment>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage
