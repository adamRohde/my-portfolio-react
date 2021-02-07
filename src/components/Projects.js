import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Projects = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="projects-wrapper">
          <h2>Projects</h2>
          <div className="projects-grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <section className="projects-card-container">
                  <Card
                    key={project.id}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    target={project.target}
                    projectLink={project.url}
                    buttonText={project.btn_text}
                    layout={project.setLayout}
                  ></Card>
                </section>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
