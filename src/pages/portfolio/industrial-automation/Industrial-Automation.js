import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header"
import MainImage from "../../../components/Industrial-Automation/MainImage"
import About from "../../../components/Industrial-Automation/About"

const workprojects = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WORK_PROJECTS")}
              <div>
                <Header title={"Industrial Automation"} />
                <div className="ia-grid">
                  <About />
                  <MainImage />
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
