import React, { useEffect } from "react"
import LayoutWebApps from "../components/Layouts/layout-webapps"
import Card from "../components/atoms/Card"
import data from "../yourdata"

const webapps = () => {
  return (
    <>
      <LayoutWebApps>
        <div className="section">
          <div className="container">
            <div className="work-wrapper">
              <h1>Web Apps</h1>
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
      </LayoutWebApps>
    </>
  )
}

export default webapps
