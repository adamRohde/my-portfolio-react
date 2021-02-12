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
                {context.changeLayout("WEB_APPS")}
                <div className="web-apps-intro">
                  <h2>Web Apps</h2>
                  <p>
                    These are apps I created to help myself better understand
                    web developement. All of these apps are my own. No tutorials
                    were followed.
                  </p>
                </div>
              </div>

              {data.webapps.map(webapp => (
                <WebAppsCard
                  key={webapp.id}
                  heading={webapp.title}
                  paragraph={webapp.para}
                  imgUrl={webapp.imageSrc}
                  repo_url={webapp.repo_url}
                  app_url={webapp.app_url}
                  target={webapp.target}
                  projectLink={webapp.url}
                  app_btn_text={webapp.app_btn_text}
                  technologies={webapp.technologies}
                ></WebAppsCard>
              ))}
            </>
          )}
        </layoutContext.Consumer>
        <div style={{ marginBottom: "8rem" }}></div>
      </Layout>
    </>
  )
}

export default webapps
