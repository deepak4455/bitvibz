import { Link } from "gatsby"
import React, { useState } from "react"
import {
  AiOutlineAlignLeft,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineClose,
} from "react-icons/ai"
import { BsMoon } from "react-icons/bs"
import { ImPinterest } from "react-icons/im"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="py-4 px-3 header-section">
        <div className="container header-container">
          <div className="mobile-menu">
            <button aria-hidden="true" onClick={() => setShow(!show)}>
              <AiOutlineAlignLeft />
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
            <Link to="/404" activeClassName="active-link">
              404
            </Link>
            <Link to="/" activeClassName="active-link">
              Recipes
            </Link>
          </div>
          <div className="dark-mode">
            <button aria-label="enable dark mode">
              <BsMoon />
            </button>
          </div>
          <div className="social-links">
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.pinterest.com/"
              rel="noreferrer"
              target="_blank"
            >
              <ImPinterest />
            </a>
          </div>
        </div>
      </div>
      <div className={show ? "drawer drawer-is-active" : "drawer"}>
        <div class="drawer-overlay" onClick={() => setShow(!show)}></div>
        <div class="drawer-content">
          <div class="drawer-head p-5">
            <div class="drawer-logo">
              <StaticImage src="../assets/images/logo.svg" alt="website logo" />
            </div>

            <button onClick={() => setShow(!show)}>
              <AiOutlineClose />
            </button>
          </div>
          <div class="drawer-menu">
            <Link
              onClick={() => setShow(!show)}
              to="/"
              activeClassName="d-active-link"
            >
              Home
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="/About"
              activeClassName="d-active-link"
            >
              About
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="/Contact"
              activeClassName="d-active-link"
            >
              Contact
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="/404"
              activeClassName="d-active-link"
            >
              404
            </Link>
          </div>
          <div class="drawer-social-links">
            <h4>Follow us</h4>
            <div class="social-icons">
              <a
                onClick={() => setShow(!show)}
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
              <a
                onClick={() => setShow(!show)}
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram />
              </a>
              <a
                onClick={() => setShow(!show)}
                href="https://www.pinterest.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ImPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
