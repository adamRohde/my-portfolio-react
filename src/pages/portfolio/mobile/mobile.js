import React from "react"
import data from "../../../yourdata"
import IconsDisplay from "../../../components/Icons/Icons_display"
import androidGif from "../../../images/gifs/android.gif"
const Mobile = () => {
  const IconsArray = [
    { icon: data.IconsArray[6].icon, cn: data.IconsArray[6].cn },
  ]
  return (
    <section className="mobile" id="mobile">
      <div className="two-column">
        <div className="about-paragraph">
          {/* <div>
            Tools used -
            <span>
              <img className="icon" src={androidIcon}></img>{" "}
            </span>
          </div> */}
          <h2>Mobile</h2>
          <p>
            I met a group of people thru a Facebook group dedicated to software
            development. I was brought on to help with the front end
            implementation for an app there were designing. There were three of
            us on the team, one person to handle UX, someone for the front-end
            (me), and a person to code the back-end. The app had users ask a
            series of questions which would guage their values systems and marry
            them up with career paths that the app deemed a good fit, given how
            they answered the questions.
          </p>

          <IconsDisplay icons={IconsArray} />

          <div className="button-container">
            <a
              className="btn btn-primary"
              href="https://github1s.com/adamRohde/Android-Survey"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>

        <img style={{ borderRadius: "2em" }} src={androidGif}></img>
      </div>
    </section>
  )
}

export default Mobile
