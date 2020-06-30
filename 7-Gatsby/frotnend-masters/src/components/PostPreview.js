import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styles from "./PostPreview.module.scss"

const PostPreview = ({ post }) => (
  <article>

    <h3>
      <Link to={post.slug} className={styles.link}>
        {post.title}
      </Link>
    </h3>

    <div>
      <p>{post.excerpt}</p>
      <Link to={post.slug} className={styles.link}>
        read this post &rarr;
      </Link>
    </div>
  </article>
)

export default PostPreview
