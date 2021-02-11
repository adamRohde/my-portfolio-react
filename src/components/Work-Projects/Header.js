import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Header = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <h3>Industrial Automation</h3>
        <p>
          {data.aboutWorkProjects}
          {/* <br></br>
          <br></br>
          {data.aboutParaTwo}
          <br></br>
          <br></br>
          {data.aboutParaThree} */}
        </p>
      </div>
      <div className="image-wrapper">
        <img src={data.workProjectsImage} alt="about"></img>
      </div>
    </section>
  )
}

export default Header
