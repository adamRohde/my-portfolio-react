import React from "react"
import Layout from "../../../components/Layout/layout"
import WebAppsCard from "../../../components/Web-Apps/web-apps-card"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header"
import About from "../../../components/Web-Apps/About"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <div>
              {context.changeLayout("WEB_APPS")}
              <Header title={"Web Apps"} type={"arrow"} />
              <About />
              <WebAppsCard />
            </div>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default webapps
