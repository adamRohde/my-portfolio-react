import React from "react"
import Card from "../components/atoms/Card"
//import Layout from "../components/Layouts/Layout"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Navbar from "../components/Navbar"

const webapps = () => {
  return (
    <>
      <Navbar></Navbar>
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
  )
}

export default webapps
