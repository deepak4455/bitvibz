import { Link } from "gatsby"
import React from "react"
import { BsFacebook, BsInstagram, BsPinterest, BsXLg } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

const Drawer = ({ setShow, show }) => {
  return (
    <>
      <div className={show ? "drawer drawer-is-active" : "drawer"}>
        <div
          className="drawer-overlay"
          onClick={() => setShow(!show)}
          style={show ? { opacity: "1" } : {}}
        ></div>
        <div
          className="drawer-content"
          style={show ? {} : { transform: "translateX(-100%)", width: "300px" }}
        >
          <div className="drawer-head p-5">
            <div className="drawer-logo">
              <StaticImage src="../assets/images/logo.svg" alt="website logo" />
            </div>
            <div>
              <button onClick={() => setShow(!show)}>
                <BsXLg id="close" />
              </button>
            </div>
          </div>
          <div className="drawer-menu">
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
          </div>
          <div className="drawer-social-links">
            <h4>Follow us</h4>
            <div className="social-icons">
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
      </div>
    </>
  )
}

export default Drawer
