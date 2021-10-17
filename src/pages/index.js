import React from "react"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
import Posts from "../components/Posts"

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 3) {
      nodes {
        excerpt(pruneLength: 175)
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(breakpoints: [640, 768, 1024, 1280], quality: 30)
            }
          }
          category
          slug
        }
        id
      }
    }
  }
`
const index = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Posts posts={posts} title={`Recent Posts`} />
    </Layout>
  )
}

export default index
