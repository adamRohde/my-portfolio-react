import React from "react"
import LayoutWorkProjects from "../components/Layouts/layout-workprojects"
import Card from "../components/atoms/Card"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import equipmentPicture from "../images/equipment-pic.jpg"

const workprojects = () => {
  return (
    <>
      <LayoutWorkProjects>
        <div className="section">
          <div className="container">
            <div className="work-projects-wrapper ">
              <Fade bottom>
                <h1>Industrial Automation</h1>
              </Fade>
              <section className="work-projects-intro">
                <a>
                  <img src={equipmentPicture} />
                </a>
              </section>
              <div className="work-projects-grid">
                <ul>
                  <li>
                    <b>Programmable Logic Controller (PLC)</b>. It is the brains
                    for most industrial machinery. Code is written to this
                    device so that the machine becomes automated. The languages
                    used for PLCs varies from vendor to vendor. I have the most
                    experience with a language called Structured Text which is
                    definied within the IEC 61131. This language borrows it's
                    syntax from Pascal.
                  </li>

                  <li>
                    <b>HMI (Human Machine Interface)</b>. It is the interface
                    for the operator of the machine. Historically the GUIs for
                    HMIs have been written with native development environments
                    created by the vendor of the HMI. Recently there has been a
                    trend towards using more open source web technologies to
                    create these interfaces
                  </li>

                  <li>
                    <b>Servo Drive/Amplifier</b>. These are used to control
                    electric servo motors (4) which are capable of following
                    precise motion trajectories. Position data is fead back to
                    them via the orange cable so the drive knows exactly where
                    the motor is at all times
                  </li>

                  <li>
                    <b>Servo Motor</b>. These motors allow for precise motion
                    control. They are used in robotics, machines tool (CNC) and
                    web handling applications
                  </li>
                </ul>
              </div>
              <div className="work-projects-grid">Section 2</div>
              <div className="work-projects-grid">Section 3</div>
            </div>
          </div>
        </div>
      </LayoutWorkProjects>
    </>
  )
}

export default workprojects
