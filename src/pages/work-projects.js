import React from "react"
import Layout from "../components/Layout/layout"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"
import Accordions from "../components/Work-Projects/Accordions.js"
import xmlParseVideo from "../images/XML_Parser.mp4"
import data from "../yourdata"
import Carousels from "../components/Work-Projects/Carousels"

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
                  <h2 style={{ marginTop: "10vh" }}>Industrial Automation</h2>
                  <p>{data.aboutWorkProjects}</p>
                  <div className="image-wrapper">
                    <img src={data.workProjectsImage} alt="about"></img>
                    <Accordions />
                  </div>
                  <div className="work-projects-carousel">
                    <Carousels />

                    {/* <video width="100%" height="auto" controls>
                      <source src={xmlParseVideo} type={"video/mp4"} />
                    </video>
                    <br></br>
                    <a
                      href="https://github.com/adamRohde/OPCUA_Driversheet_Builder"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Github Repo
                    </a> */}
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
