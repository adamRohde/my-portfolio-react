import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-me-container">
          <h2>Hi, I'm Adam!</h2>
          <p>
            {" "}
            I have been working in the field of Industrial automation for 13
            years programming industrial machines. Recently I've made a decision
            that I want to redirect my career so that it takes a stronger
            software development focus. I have been programming OOP languages
            like C# and Java for approximately 10 years and recently have dived
            into the world of web developement. This site aims to show you some
            of my work.
            <br />
            <br />
            Thanks for stoping!
            <br />
          </p>
        </div>
        <div className="image-container">
          <img src={data.aboutImage} alt="about"></img>
        </div>
      </div>
    </>
  )
}
export default About
