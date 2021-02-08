import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"

import data from "../../yourdata"

const Projects = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="projects-wrapper">
          <h2>Projects</h2>
          <div className="projects-grid">
            {data.mywork.map(mywork => (
              <section className="projects-card-container">
                <div>
                  <a href={mywork.url ? mywork.url : ""} target={mywork.target}>
                    <h4>{mywork.title}</h4>
                  </a>
                </div>
                <Card key={mywork.id} imgUrl={mywork.imageSrc}></Card>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
