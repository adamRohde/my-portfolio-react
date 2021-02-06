import React, { useEffect } from "react"
import LayoutMain from "../components/Layouts/layout-main"
import Card from "../components/atoms/Card"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)

  return (
    <>
      <LayoutMain>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WEB_APPS")}
              <div className="section">
                <div className="container">
                  <div className="work-wrapper">
                    <Fade bottom>
                      <h1>Web Apps</h1>
                    </Fade>
                    <div className="grid">
                      {data.webapps.map(webapp => (
                        <Card
                          key={webapp.id}
                          heading={webapp.title}
                          paragraph={webapp.para}
                          imgUrl={webapp.imageSrc}
                          target={webapp.target}
                          projectLink={webapp.url}
                          buttonText={webapp.btn_text}
                        ></Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </LayoutMain>
    </>
  )
}

export default webapps
