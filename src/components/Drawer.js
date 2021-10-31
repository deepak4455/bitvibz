import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsChevronDown,
} from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

const Drawer = ({ setShow, show }) => {
  return (
    <>
      <Helmet bodyAttributes={show ? { class: "body-over-h" } : {}} />
      <div className={show ? "drawer drawer-is-active" : "drawer"}>
        <div
          className="overlay"
          onClick={() => setShow(!show)}
          style={show ? { opacity: "1" } : {}}
        ></div>
        <div
          className="drawer-content"
          style={
            show
              ? { width: "300px" }
              : { transform: "translateX(-100%)", width: "300px" }
          }
        >
          <div className="d-branding py-4">
            <StaticImage
              className="d-branding-img"
              src="../assets/images/logo.svg"
              alt="website logo"
            />
          </div>
          <div className="d-menu">
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
            <div className="d-dropdown">
              <button>
                <span>Motivation</span>
                <BsChevronDown />
              </button>
              <div className="d-dropdown-content">
                <Link
                  onClick={() => setShow(!show)}
                  to="/"
                  activeClassName="d-active-link"
                >
                  Life
                </Link>
                <Link
                  onClick={() => setShow(!show)}
                  to="/"
                  activeClassName="d-active-link"
                >
                  Success
                </Link>
                <Link
                  onClick={() => setShow(!show)}
                  to="/"
                  activeClassName="d-active-link"
                >
                  Failure
                </Link>
              </div>
            </div>
            <Link
              onClick={() => setShow(!show)}
              to="/"
              activeClassName="d-active-link"
            >
              Birthday
            </Link>
          </div>
          <div className="d-social-share">
            <h2>Follow us</h2>
            <a
              onClick={() => setShow(!show)}
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook id="facebook" />
            </a>
            <a
              onClick={() => setShow(!show)}
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram id="instagram" />
            </a>
            <a
              onClick={() => setShow(!show)}
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

export default Drawer
