import React from "react"
import Layout from "../../../components/Layout/layout"
import WebAppsCard from "../../../components/Web-Apps/web-apps-card"
//import Header from "../../../components/Web-Apps/Header"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header"
// import data from "../yourdata"
// import Fade from "react-reveal/Fade"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <div>
              {context.changeLayout("WEB_APPS")}
              <Header title={"Web Apps"} />
              <WebAppsCard />
            </div>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default webapps
