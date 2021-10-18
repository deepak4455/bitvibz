import React from "react"
import Post from "./Post"
import Banner from "../Banner/"

const Posts = ({ posts, title }) => {
  return (
    <div class="container blog-layout pt-16 ">
      <div class="articles">
        <h3 className="page-title text-2xl mb-12 px-6">{title}</h3>
        <div class="article-container">
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default Posts
