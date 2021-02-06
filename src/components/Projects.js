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
                  <div>
                    <a
                      href={project.url ? project.url : "#"}
                      target={project.target}
                    >
                      <h4> {project.title}</h4>
                    </a>
                  </div>
                  <Card key={project.id} imgUrl={project.imageSrc}></Card>
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
