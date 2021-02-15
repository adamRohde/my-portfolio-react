import React, { useEffect } from "react"
import Layout from "../components/Layout/layout"
import WebAppsCard from "../components/Web-Apps/web-apps-card"
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
                <div className="container">
                  {context.changeLayout("WEB_APPS")}
                  <div className="web-apps-intro">
                    <h2>Web Apps</h2>
                    <p>
                      These are apps I created to help myself better understand
                      web developement. All of these apps are my own. No
                      tutorials were followed.
                    </p>
                  </div>
                  <WebAppsCard />
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

export default webapps
