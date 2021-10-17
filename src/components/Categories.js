import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query)
  return (
    <div class="content widget">
      <h2>Categories</h2>
      {distinct.map((category, index) => {
        return (
          <div class="tag-item" key={index}>
            <Link to={`/${category}`} className="category">
              {category}
              {/* <span class="post-count">(4)</span> */}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
