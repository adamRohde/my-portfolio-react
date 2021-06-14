import React from "react"
import data from "../../yourdata"
import Header from "../../components/Header/Header"

const Work = () => {
  return (
    <div>
      <div className="portfolio-main" id="portfolio">
        <Header title={"My Work!"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        {/* <div className="projects-grid">
          {data.mywork.map(mywork => (
            <a
              className="project-card"
              href={mywork.url ? mywork.url : ""}
              target={mywork.target}
            >
              <img className="project-img" src={mywork.imageSrc} />
              <p>{mywork.title}</p>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  )
}
export default Work
