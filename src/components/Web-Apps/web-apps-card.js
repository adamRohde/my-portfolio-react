import React from "react"
import data from "../../yourdata"
import rps_image from "../../images/rockpaperscissors.jpg"
import calc from "../../images/calc.jpg"
import expenseTracker from "../../images/expensetracker.jpg"

const WebAppsCard = () => {
  return (
    <>

<hr style={{color: "black"}}></hr>

      {data.WebApps.map(webapp => (
        <section
          className="grid-container"
          style={{ backgroundColor: "white" }}
        >
       
          <div className="wa-about-section">
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

          <hr style={{color: "black"}}></hr>
        </section>
      ))}
    </>
  )
}

export default WebAppsCard
