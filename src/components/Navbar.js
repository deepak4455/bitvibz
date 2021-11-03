import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsFilterRight,
  BsChevronDown,
  BsX,
} from "react-icons/bs"

const Navbar = ({ setShow, show }) => {
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
    <>
      <header>
        <div className="container header-container px-4 py-4">
          <div className="branding">
            <Link to="/">
              {/* <StaticImage src="../assets/images/logo.svg" alt="website logo" /> */}
              <p class="logo">{data.site.siteMetadata.title}</p>
            </Link>
          </div>
          <div className="nav-icon">
            <button aria-hidden="true" onClick={() => setShow(!show)}>
              {show ? <BsX /> : <BsFilterRight />}
            </button>
          </div>
          <div className="nav-menu">
            <Link to="/" activeClassName="active-link">
              Home
            </Link>

            <div className="dropdown">
              <button>
                <span>Good Morning</span>
                <BsChevronDown />
              </button>
              <div className="dropdown-content">
                <Link
                  to="/shubh-prabhat-suvichar"
                  activeClassName="active-link"
                >
                  शुभ प्रभात
                </Link>
                {/*<Link to="/" activeClassName="active-link">
                  Success
                </Link>
                <Link to="/" activeClassName="active-link">
                  Failure
                </Link> */}
              </div>
            </div>
            {/* <Link to="/" activeClassName="active-link">
              Birthday
            </Link> */}
            <Link to="/about" activeClassName="active-link">
              About
            </Link>
            <Link to="/contact" activeClassName="active-link">
              Contact
            </Link>
          </div>
          <div className="social-share">
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook id="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram id="instagram" />
            </a>
            <a
              href="https://www.pinterest.com/"
              rel="noreferrer"
              target="_blank"
            >
              <BsPinterest id="pinterest" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
