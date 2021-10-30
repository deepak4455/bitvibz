import { Link } from "gatsby"
import React from "react"
import {
  BsMoonFill,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsFilterLeft,
} from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ setShow, show }) => {
  return (
    <>
      <div className="py-4 px-3 header-section">
        <div className="container header-container">
          <div className="mobile-menu">
            <button aria-hidden="true" onClick={() => setShow(!show)}>
              <BsFilterLeft id="menu-bar" />
            </button>
          </div>
          <div className="branding">
            <Link to="/">
              <StaticImage src="../assets/images/logo.svg" alt="website logo" />
            </Link>
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
          </div>
          <div className="dark-mode">
            <button aria-label="enable dark mode">
              <BsMoonFill id="moon" />
            </button>
          </div>
          <div className="social-links">
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
      </div>
    </>
  )
}

export default Navbar
