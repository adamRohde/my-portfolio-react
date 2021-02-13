import React from "react"
import Fade from "react-reveal/Fade"

import data from "../../yourdata"

const MyWork = () => {
  return (
    <div className="section-main" id="work">
      <div className="container-center">
        <div className="projects-wrapper">
          <h2>My Work</h2>
          <div className="projects-grid">
            {data.mywork.map(mywork => (
              <span>
                <a
                  className="project-card"
                  href={mywork.url ? mywork.url : ""}
                  target={mywork.target}
                >
                  <img className="project-img" src={mywork.imageSrc} />
                  <p>{mywork.title}</p>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
