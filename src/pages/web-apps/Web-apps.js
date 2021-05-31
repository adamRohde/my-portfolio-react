import React from "react"
import Layout from "../../components/Layout/layout"
import Navbar from "../../components/Layout/Navbar"
import WebAppsCard from "../../components/Web-Apps/web-apps-card"
import Header from "../../components/Web-Apps/Header"
import { layoutContext } from "../../../provider"
// import data from "../yourdata"
// import Fade from "react-reveal/Fade"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              <div className="section">
                <div className="container-compensate-tilt-center">
                  {context.changeLayout("WEB_APPS")}
                  <Header />
                  <WebAppsCard />
                </div>
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default webapps
