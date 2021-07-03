import "./portfolio_card.scss"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Card = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
  target,
  buttonText,
}) => {
  return (
    <a
      className="card-wrapper"
      onClick={() => scrollTo(projectLink)}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <a
        className=".btn"
        target={target}
        rel="noopener noreferrer"
        className="btn"
      >
        {buttonText}
      </a>
    </a>
  )
}
export default Card
