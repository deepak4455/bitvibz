import React from "react"
import Recent from "./Recent"
import BannerCategories from "./BannerCategories"
import Promotion from "./Promotion"
const Banner = () => {
  return (
    <div className="sidebar">
      {/* <Promotion /> */}
      <Recent />
      <BannerCategories />
    </div>
  )
}

export default Banner
