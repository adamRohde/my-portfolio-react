import React from "react"

const WebAppsCard = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
  target,
  buttonText,
  technologies,
}) => {
  console.log("This is the page context from the card ")

  return (
    <div className="web-apps-section">
      <div className="web-apps-card-description">
        <h4 className="header">{heading}</h4>
        <p>{paragraph}</p>

        {technologies.map(technology => (
          <ul>
            <li>{technology}</li>
          </ul>
        ))}
      </div>

      <div
        className="web-apps-card "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            imgUrl +
            ")",
        }}
      ></div>
    </div>
  )
}

export default WebAppsCard
