import React from "react"
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
              I'm a software developer living in Minneapolis, MN. I have a
              background in Industrial Automation, which is where I started
              programming. I really appreciate the art of writing clean as well
              as the art of learning new technologies.
              <br />
              <br />
              Skills -
              <span style={{ fontWeight: "bold" }}>
                {" "}
                React, OOP, Android development, Training, Industrial
                Automation, PLC Development, Technical Writing.
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
