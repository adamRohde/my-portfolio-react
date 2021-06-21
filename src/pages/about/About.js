import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const About = () => {
  return (
    <>
      <div>
        <div className="about-section">
          <div className="about-me-container">
            <h2>About me</h2>
            <p>
              {" "}
              Hello! My name is Adam! I have been working in the field of
              Industrial automation for 13 years. This field has increasingly
              started adopting web technologies therefore so have I! I have been
              programming with languages like Java and C# for nearly ten years
              and as of about 2 years ago, I have dived head first into the
              world of web!
              <br />
              <br />
              Thank you!
              <br />
            </p>
          </div>
          <div className="image-container">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
