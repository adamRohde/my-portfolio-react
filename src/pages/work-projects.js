import React from "react"
import Layout from "../components/Layout/layout"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"
import Accordions from "../components/Work-Projects/Accordions.js"
import xmlParseVideo from "../images/XML_Parser.mp4"
import data from "../yourdata"
import Carousels from "../components/Work-Projects/Carousels"
import Header from "../components/Work-Projects/Header"
import MainImage from "../components/Work-Projects/MainImage"

const workprojects = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WORK_PROJECTS")}
              <div className="section">
                <div className="container-center">
                  <Header />
                  <div className="accordion-image-grid">
                    <Accordions />
                    <MainImage />
                  </div>
                  <Carousels />
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
