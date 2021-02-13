import React from "react"
import Fade from "react-reveal/Fade"
import ripple from "../../images/drop1.jpg"
import data from "../../yourdata"

const About = () => {
  return (
    <div className="section-main" id="about">
      <div className="container-center">
        <div className="about-section">
          <div className="content">
            <h2 style={{ color: "black" }}>About</h2>
            <p style={{ color: "black" }}>{data.aboutParaMain}</p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
