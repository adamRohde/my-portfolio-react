import React from "react"
import data from "../../yourdata"
//import Fade from "react-reveal/Fade"

const MainImage = () => {
  return (
    <section className="wp-mainimage-wrapper">
      <img src={data.workProjectsImage} alt="about"></img>
    </section>
  )
}
export default MainImage
