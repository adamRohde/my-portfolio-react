import React, { useEffect } from "react"
import Layout from "../components/Layout/layout"
import WebAppsCard from "../components/Web-Apps/web-apps-card"
import Header from "../components/Web-Apps/Header"

import data from "../yourdata"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              <div className="section">
                <div className="container-center">
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
