import React from "react"
import data from "../../yourdata"
import rps_image from "../../images/rockpaperscissors.jpg"
import calc from "../../images/calc.jpg"
import expenseTracker from "../../images/expensetracker.jpg"

const WebAppsCard = () => {
  return (
    <>
      {data.WebApps.map(webapp => (
        <section id="wa-card-wrapper">
          <div>
            <h3>{webapp.title}</h3>
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
          <img className="wa-image" src={webapp.imageSrc} />
        </section>
      ))}
    </>
  )
}

export default WebAppsCard
