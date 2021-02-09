import React from "react"
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
              <a
                className="projects-card-container"
                href={mywork.url ? mywork.url : ""}
                target={mywork.target}
              >
                <div>
                  <h5>{mywork.title}</h5>
                </div>
                <div
                  className="card"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                      mywork.imageSrc +
                      ")",
                  }}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
