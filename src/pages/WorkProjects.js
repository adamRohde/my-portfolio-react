import React from "react"
import Layout from "../components/layout"
import Card from "../components/atoms/Card"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Navbar from "../components/Navbar"

const WorkProjects = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="section">
        <div className="container">
          <div className="work-wrapper">
            <Fade bottom>
              <h1>Work Projects</h1>
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

export default WorkProjects
