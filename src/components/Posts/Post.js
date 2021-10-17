import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Post = ({ frontmatter, excerpt }) => {
  const { title, image, slug, category } = frontmatter

  return (
    <article class="px-8 mb-16">
      <Link to={`/${slug}`}>
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          className="post-img mb-5 img-radius"
          // imgClassName="image is-16by9"
        />
      </Link>

      <div class="content">
        <div class="categories  mb-3">
          <Link to={`/${category}`}>{category}</Link>
        </div>
        <h2 className="mb-3 ">
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <p>{excerpt}</p>
      </div>
    </article>
  )
}

export default Post
