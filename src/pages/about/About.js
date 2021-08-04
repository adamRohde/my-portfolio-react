import React from "react"
import data from "../../yourdata"
// import Footer from "../../components/Layout/footer/Footer"

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        {/* <div className="box-container-1">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>

        <div className="box-container-2">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div> */}

        {/* <div className="box-container-3">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>

        <div className="box-container-4">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div> */}

        <div className="about-me-container">
          <div className="about-header">
            <h1>Hi, I'm Adam!</h1>
          </div>
          <div className="about-paragraph">
            <p>
              I'm a software developer living in Minneapolis, MN. I have a
              background in Industrial Automation, which is where I started
              programming. I really enjoy writing clean code and learning new
              technologies!
              <br />
              {/* <br />
              Skills -
              <span style={{ fontWeight: "bold" }}>
                {" "}
                React, OOP, Android development, Training, Industrial
                Automation, PLC Development, Technical Writing.
              </span>
              <br /> */}
            </p>
          </div>

          {/* <div className="image-container">
            <img src={data.aboutImage} alt="about"></img>
          </div> */}
        </div>
      </section>
    </>
  )
}
export default About
