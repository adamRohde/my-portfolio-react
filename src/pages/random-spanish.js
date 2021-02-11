import React from "react"
import Layout from "../components/Layout/layout"
import WebAppsCard from "../components/Web-Apps/web-apps-card"
import Header from "../components/Random-Spanish/Header"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"

const randomspanish = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              <Header />
              <div className="section">
                <div className="container">
                  {context.changeLayout("WEB_APPS")}
                  <div className="web-apps-intro"></div>
                </div>
              </div>
            </>
          )}
        </layoutContext.Consumer>
        <div style={{ marginBottom: "8rem" }}></div>
      </Layout>
    </>
  )
}

export default randomspanish
