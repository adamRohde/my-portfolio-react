import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const About = () => {
  return (
    <>
      <div>
        <div className="about-section">
          <Fade bottom cascade>
            <div className="content">
              <h1 style={{ color: "black" }}>About me</h1>
              {/* <p style={{ color: "black" }}>{data.aboutParaMain}</p> */}
              <h5>
                {" "}
                Hello! My name is Adam, welcome! This site is designed to
                showcase coding projects I've built while learning full stack
                web development. Also highlighted are projects I've created over
                the years working in the field of industrial automation. You
                will find my email in the contact section, please don't hesitate
                to reach out!
                <br />
                <br />
                Thank you!
                <br />
                <br />A few skills. . .
                <ul>
                  <li>PLC Development- (IEC-61131)</li>
                  <li>Android- (Java)</li>
                  <li>Web- Javascript, React, SQL, MongoDB, PHP</li>
                  <li>Desktop WPF Applications- (C#)</li>
                </ul>
                <br />
                <br />
                {/* My first 'production' code. . . It was a PLC program that
                controlled 32 machines manufacturing automobile tires. These
                machines had a problem however. You see there was only one
                conveyor belt and all the machines would dump their tires onto.
                Unfortuately this conveyor belt was not quite large enough to
                handle 32 tires presses randomly discharging tires to it. It
                became my job to solve this problem. The code allowed for
                handshaking between all 32 presses so that tires could be
                discharged onto a conveyor belt without collision. Every since,
                I've been hooked on writing code. To this day, the feeling I get
                from a predictable console.log is no different then the feeling
                I first got seeing tires being evently distributed across a
                conveyor. */}
              </h5>
            </div>
            <div className="image-wrapper">
              <img src={data.aboutImage} alt="about"></img>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}
export default About
