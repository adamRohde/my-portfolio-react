import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const MainImage = () => {
  return (
    <section className="mainimage-wrapper">
      <img src={data.workProjectsImage} alt="about"></img>
    </section>
  )
}
export default MainImage
