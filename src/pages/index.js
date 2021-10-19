import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
      nodes {
        excerpt(pruneLength: 175)
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(quality: 40, width: 592)
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
      <SEO title="Home" />
      <Posts posts={posts} title={`Recent Posts`} />
    </Layout>
  )
}

export default index
