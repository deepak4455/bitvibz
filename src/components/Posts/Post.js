import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Post = ({ frontmatter, excerpt }) => {
  const { title, description, image, slug, category } = frontmatter

  return (
    <article className="px-6 mb-14">
      <Link to={`/${slug}`}>
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          className="post-img mb-5 img-radius"
          // imgClassName="image is-16by9"
        />
      </Link>

      <div className="content">
        <div className="categories  mb-3">
          <Link to={`/${category}`}>{category}</Link>
        </div>
        <h2 className="mb-3 ">
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Post
