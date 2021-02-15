import React from "react"
import data from "../../yourdata"
// import Fade from "react-reveal/Fade"
// import { Link } from "react-scroll"

const MainImage = () => {
  return (
    <div className="rs-mainimage-wrapper">
      <img src={data.randomSpanishImage} alt="about"></img>
    </div>
  )
}

export default MainImage
