import React from "react"
import data from "../../yourdata"

const WebAppsCard = () => {
  console.log("This is the page context from the card ")

  return (
    <div>
      {console.log(data)}

      {data.WebApps.map(webapp => (
        <section className="wa-card-wrapper">
          <div>
            <h4>{webapp.title}</h4>
            <p>{webapp.para}</p>

            {webapp.technologies.map(technology => (
              <ul>
                <li>{technology}</li>
              </ul>
            ))}

            <div className="the-buttons">
              <a
                type="button"
                className="btn btn-primary"
                href={webapp.repo_url}
                target={webapp.target}
              >
                Repo
              </a>

              <a
                href={webapp.app_url}
                target={webapp.target}
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "1rem" }}
              >
                {webapp.app_btn_text}
              </a>
            </div>
          </div>

          <div
            className="image"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                webapp.imageSrc +
                ")",
            }}
          ></div>
        </section>
      ))}
    </div>
  )
}

export default WebAppsCard
