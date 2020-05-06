import React from "react"
import Layout from "../components/Layout"
import PostPreview from "../components/PostPreview"
import usePosts from "../hooks/use-posts"

const BlogPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Read my blogs.</h1>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default BlogPage
