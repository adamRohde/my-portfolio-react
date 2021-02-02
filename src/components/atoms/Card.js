import React from "react"

const Card = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
  target,
  buttonText,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target={target}
          rel="noopener noreferrer"
          className="btn"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}

export default Card
