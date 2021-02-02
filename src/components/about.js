import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="header-wrapper">
          <div className="about-section">
            <div className="content">
              <Fade bottom cascade>
                <h2>About Me</h2>
              </Fade>
              <p>
                {data.aboutParaOne}
                <br></br>
                <br></br>
                {data.aboutParaTwo}
                <br></br>
                <br></br>
                {data.aboutParaThree}
              </p>
            </div>
            <div className="image-wrapper">
              <img src={data.aboutImage} alt="about"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
