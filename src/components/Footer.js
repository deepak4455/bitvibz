import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className="footer section px-3 py-6">
      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()}{" "}
          <span>{data.site.siteMetadata.title}</span> Built with
          <a style={{ marginLeft: "4px" }} href="https://www.gatsbyjs.com/">
            Gatsby
          </a>
        </div>
        <div className="footer-menu">
          <Link to="/">Home</Link>
          <Link to="/About">About us</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
