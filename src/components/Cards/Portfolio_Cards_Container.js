import React from "react"
import Card from "../Card/Portfolio_Card"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <Fade bottom cascade>
        {data.projects.map(project => (
          <div>
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
