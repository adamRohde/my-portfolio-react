import React from "react"
import data from "../../yourdata"
import rps_image from "../../images/rockpaperscissors.jpg"
import calc from "../../images/calc.jpg"
import expenseTracker from "../../images/expensetracker.jpg"

const WebAppsCard = () => {
  return (
    <>
      {data.WebApps.map(webapp => (
        <>
          <hr
            style={{
              backgroundColor: "black",
              height: "1px",
              width: "100%",
              margin: "0rem 1rem 0rem 1rem",
            }}
          ></hr>

          <section
            className="grid-container"
            style={{ backgroundColor: "white" }}
          >
            <div>
              <h3>{webapp.title}</h3>
              <div className="wa-about-section">
                <div>
                  <p>{webapp.para}</p>
                  <p>
                    Technical details -
                    {webapp.technologies.map(technology => (
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {technology},{" "}
                      </span>
                    ))}
                  </p>
                </div>
                <img className="wa-image" src={webapp.imageSrc} />
              </div>

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

            <hr style={{ color: "black" }}></hr>
          </section>
        </>
      ))}
    </>
  )
}

export default WebAppsCard
