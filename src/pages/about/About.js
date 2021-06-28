import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
// import Footer from "../../components/Layout/footer/Footer"

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-me-container">
          <div>
            <h1>Hi, I'm Adam!</h1>
            <p>
              {" "}
              I'm a software developer living in Minneapolis, MN. For the past
              13 years I've been working in Industrial Automation programming
              PLCs and windows apps/forms using C#'s' WPF platform. In the past
              year I have dove into the world of web developement
              <br />
              <br />
              Skills -
              <span style={{ fontWeight: "bold" }}>
                {" "}
                React, OOP, Android development, training, industrial
                automation, PLC development, technical writing.
              </span>
              <br />
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={data.aboutImage} alt="about"></img>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  )
}
export default About
