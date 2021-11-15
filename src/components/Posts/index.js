import React from "react"
import Post from "./Post"
import Banner from "../Banner/"
// import SEO from "../SEO"

const Posts = ({ posts, title }) => {
  return (
    <>
      {/* <SEO title={title} /> */}
      <div className="container blog-layout pt-16 ">
        <div className="articles">
          <h1 className="page-title text-2xl mb-12 px-6">{title}</h1>
          <div className="article-container">
            {posts.map(post => {
              return <Post key={post.id} {...post} />
            })}
          </div>
        </div>
        <Banner />
      </div>
    </>
  )
}

export default Posts
