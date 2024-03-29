import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "Do MMMM, YYYY")
        slug
        embeddedImages {
          childImageSharp {
            gatsbyImageData(width: 736)
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(width: 736)
          }
        }
        description
      }
      body
    }
  }
`

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, image, date, description, embeddedImages },
      body,
    },
  } = data

  return (
    <Layout>
      <SEO
        title={title}
        image={image.childImageSharp.gatsbyImageData.images.fallback.src.substring(
          1
        )}
        description={description}
      />
      <div className="container blog-layout pt-16 ">
        <div className="articles px-6 pb-16">
          <div className="main-content">
            <div className="content post-content">
              <h1 className="text-3xl mb-3">{title}</h1>
              <span className="date">{date}</span>

              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="post-feature-image my-12"
              />

              <div className="post-description">
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

export default PostTemplate
