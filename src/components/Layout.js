import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Drawer from "./Drawer"

import "../assets/css/main.scss"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Navbar setShow={setShow} show={show} />
      {children}
      <Footer />
      <Drawer setShow={setShow} show={show} />
    </>
  )
}

export default Layout
