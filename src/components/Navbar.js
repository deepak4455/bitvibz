import { Link } from "gatsby"
import React from "react"
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsFilterRight,
  BsChevronDown,
  BsX,
} from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ setShow, show }) => {
  return (
    <>
      <header>
        <div className="container header-container px-4 py-4">
          <div className="branding">
            <Link to="/">
              <StaticImage src="../assets/images/logo.svg" alt="website logo" />
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
            <Link to="/About" activeClassName="active-link">
              About
            </Link>
            <Link to="/Contact" activeClassName="active-link">
              Contact
            </Link>
            <div className="dropdown">
              <button>
                <span>Motivation</span>
                <BsChevronDown />
              </button>
              <div className="dropdown-content">
                <Link to="/" activeClassName="active-link">
                  Life
                </Link>
                <Link to="/" activeClassName="active-link">
                  Success
                </Link>
                <Link to="/" activeClassName="active-link">
                  Failure
                </Link>
              </div>
            </div>
            <Link to="/" activeClassName="active-link">
              Birthday
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
