import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
// import Footer from "../../components/Layout/footer/Footer"

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-me-container">
          <h1>Hi, I'm Adam!</h1>
          <p>
            {" "}
            I have been working in the field of Industrial automation for 13
            years programming industrial machines. Recently I've made a decision
            to redirect my career so it takes a stronger software development
            focus. I have been programming OOP languages like C# and Java for
            approximately 10 years and I recently dived into the world of web
            developement. This site aims to show you some of my work.
            <br />
            <br />
            Skills -
            <span style={{ fontWeight: "bold" }}>
              {" "}
              React, OOP, Android development, training, industrial automation,
              PLC development, technical writing.
            </span>
            <br />
          </p>
        </div>
        {/* <div className="image-container">
          <img src={data.aboutImage} alt="about"></img>
        </div> */}
        {/* <Footer /> */}
      </section>
    </>
  )
}
export default About
