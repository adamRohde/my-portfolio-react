import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Header = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <h2>Industrial Automation</h2>
        <p>{data.aboutWorkProjects}</p>
      </div>
      <div className="image-wrapper">
        <img src={data.workProjectsImage} alt="about"></img>
      </div>
    </section>
  )
}

export default Header
