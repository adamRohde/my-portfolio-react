import "./card.scss"
import React from "react"

const Card = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
  target,
  buttonText,
}) => {
  console.log("This is the page context from the card ")
  return (
    <div
      className="card-wrapper"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      {/* <h1>{heading}</h1> */}
      {/* <p>{paragraph}</p> */}
      <butt
        className=".btn"
        href={projectLink ? projectLink : "#"}
        target={target}
        rel="noopener noreferrer"
        className="btn"
        onClick={() => {
          console.log("clicked")
        }}
      >
        {buttonText}
      </butt>
    </div>
  )
}
export default Card
