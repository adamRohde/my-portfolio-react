import React from "react"
import data from "../../yourdata"
import Header from "../../components/Header/Header"

const Work = () => {
  return (
    <div>
      <Header title={"Portfolio"} />
      <div id="portfolio">
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
