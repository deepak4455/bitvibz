import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
      nodes {
        frontmatter {
          slug
          image {
            childImageSharp {
              gatsbyImageData(width: 70, height: 70, quality: 30)
            }
          }
          title
          category
        }
      }
    }
  }
`

const Recent = () => {
  const data = useStaticQuery(query)

  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <div className="widget">
      <h2 className="mb-6">Latest Post</h2>
      {posts.map(post => {
        const { title, slug, image } = post.frontmatter

        return (
          <div className="feature-post">
            <Link to={`/${slug}`} key={post.id}>
              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="feature-post-image"
              ></GatsbyImage>
            </Link>
            <div className="post-details">
              <h2>
                <Link to={`/${slug}`} key={post.id}>
                  {title}
                </Link>
              </h2>
              {/* <div className="tags">
                <Link to={`/${category}`}>{category}</Link>
              </div> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Recent
