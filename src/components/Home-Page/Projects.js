import React from "react"
import Fade from "react-reveal/Fade"

import data from "../../yourdata"

const Projects = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="projects-wrapper">
          <h2>My Work</h2>
          <div className="projects-grid">
            {data.mywork.map(mywork => (
              <a
                className="project-card"
                href={mywork.url ? mywork.url : ""}
                target={mywork.target}
              >
                <img className="project-img" src={mywork.imageSrc} />
                <h5>{mywork.title}</h5>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
