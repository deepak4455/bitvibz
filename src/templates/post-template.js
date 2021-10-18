import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Banner from "../components/Banner"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, image, date, embeddedImages },
      body,
    },
  } = data

  return (
    <Layout>
      <div class="container blog-layout pt-16 ">
        <div class="articles px-6 pb-16">
          <div class="main-content">
            <div class="content post-content">
              <h1 className="text-3xl mb-3">{title}</h1>
              <span class="date">{date}</span>

              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="post-feature-image mt-12 mb-20"
              />

              <div class="post-description">
                <MDXRenderer embeddedImages={embeddedImages}>
                  {body}
                </MDXRenderer>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        readTime
        slug
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
