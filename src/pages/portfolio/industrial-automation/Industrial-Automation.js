import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Accordions from "../../../components/Work-Projects/Accordions.js"
import Carousels from "../../../components/Work-Projects/Carousels"
// import Header from "../../../components/Work-Projects/Header"
import Header from "../../../components/Header/Header"
import MainImage from "../../../components/Work-Projects/MainImage"

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
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default workprojects
