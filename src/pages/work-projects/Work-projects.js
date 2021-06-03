import React from "react"
import Layout from "../../components/Layout/layout"
import { layoutContext } from "../../../provider"
import Accordions from "../../components/Work-Projects/Accordions.js"
import Carousels from "../../components/Work-Projects/Carousels"
import Header from "../../components/Work-Projects/Header"
import MainImage from "../../components/Work-Projects/MainImage"

const workprojects = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WORK_PROJECTS")}
              <div className="section">
                <div className="container-compensate-tilt-center">
                  <Header />
                  <div className="wp-accordion-image-grid">
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
