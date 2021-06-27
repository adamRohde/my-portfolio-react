import React from "react"
import Card from "../Card/Card"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <Fade bottom cascade>
        {data.projects.map(project => (
          <div>
            {/* <div>
              <a
                key={project.id}
                href={project.url ? project.url : "#"}
                target={project.target}
              >
                <h4> {project.title}</h4>
              </a>
            </div> */}
            <Card
              key={project.id}
              heading={project.title}
              paragraph={project.para}
              imgUrl={project.imageSrc}
              target={project.target}
              projectLink={project.url}
              buttonText={project.btn_text}
              // layout={project.setLayout}
            ></Card>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Cards
