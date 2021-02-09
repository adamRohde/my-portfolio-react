import React from "react"

const WebAppsCard = ({
  heading,
  paragraph,
  imgUrl,
  repo_url,
  app_url,
  projectLink,
  target,
  app_btn_text,
  technologies,
}) => {
  console.log("This is the page context from the card ")

  return (
    <div className="web-apps-section">
      <div className="web-apps-card-description">
        <h4>{heading}</h4>
        <p>{paragraph}</p>
        {technologies.map(technology => (
          <ul>
            <li>{technology}</li>
          </ul>
        ))}
        <div style={{ marginTop: "2rem" }}>
          <a
            type="button"
            className="btn btn-primary"
            href={repo_url}
            target={target}
          >
            Repo
          </a>

          <a
            href={app_url}
            target={target}
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "1rem" }}
          >
            {app_btn_text}
          </a>
        </div>
      </div>

      <div
        className="web-apps-card"
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