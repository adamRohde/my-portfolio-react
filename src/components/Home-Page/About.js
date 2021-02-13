import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const About = () => {
  return (
    <div className="section-main" id="about">
      <div className="container-center">
        <div className="about-section">
          <div className="content">
            <h2>About</h2>

            <p>
              {data.aboutParaMain}
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
  )
}

export default About