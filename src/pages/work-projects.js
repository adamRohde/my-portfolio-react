import React from "react"
import Layout from "../components/Layout/layout"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"
import equipmentPicture from "../images/equipment-pic.jpg"
import xmlParseVideo from "../images/XML_Parser.mp4"

const workprojects = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WORK_PROJECTS")}
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
                          <b>Programmable Logic Controller (PLC)</b>. It is the
                          brains for most industrial machinery. Code is written
                          to this device so that the machine becomes automated.
                          The languages used for PLCs varies from vendor to
                          vendor. I have the most experience with a language
                          called Structured Text which is definied within the
                          IEC 61131. This language borrows it's syntax from
                          Pascal.
                        </li>
                        <br></br>
                        <li>
                          <b>HMI (Human Machine Interface)</b>. It is the
                          interface for the operator of the machine.
                          Historically the GUIs for HMIs have been written with
                          native development environments created by the vendor
                          of the HMI. Recently there has been a trend towards
                          using more open source web technologies to create
                          these interfaces
                        </li>
                        <br></br>
                        <li>
                          <b>Servo Drive/Amplifier</b>. These are used to
                          control electric servo motors (4) which are capable of
                          following precise motion trajectories. Position data
                          is fead back to them via the orange cable so the drive
                          knows exactly where the motor is at all times
                        </li>
                        <br></br>
                        <li>
                          <b>Servo Motor</b>. These motors allow for precise
                          motion control. They are used in robotics, machines
                          tool (CNC) and web handling applications
                        </li>
                      </ul>
                    </div>
                    <div className="work-projects-grid">
                      <div>
                        <h2>XML_Parser</h2>
                      </div>
                      <video width="90%" height="90%" controls>
                        <source src={xmlParseVideo} type={"video/mp4"} />
                      </video>
                      <br></br>
                      <a
                        href="https://github.com/adamRohde/OPCUA_Driversheet_Builder"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Github Repo
                      </a>
                    </div>
                    <div className="work-projects-grid">Section 3</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default workprojects
