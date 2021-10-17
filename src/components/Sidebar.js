import React from "react"
import image from "../assets/images/1.jpg"
// import image2 from "../assets/images/2.jpg"
// import image3 from "../assets/images/3.jpg"
// import image4 from "../assets/images/4.jpg"
// import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="content widget">
        <h2>Promotion</h2>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Sidebar
