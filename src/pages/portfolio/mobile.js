import React from "react"
import androidIcon from "../../images/icons/android_icon.jpg"
import androidGif from "../../gifs/android.gif"

const Mobile = () => {
  return (
    // <section id="mobile">

    <section className="mobile">
      <div className="two-column">
        <div className="about-paragraph">
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
          {/* <span style={{ margin: "0 0 0 5rem" }}>
            <img id="icon" src={androidIcon}></img>{" "}
          </span> */}
          <div className="button-container">
            <button class="btn btn-primary">See the repo</button>
          </div>
        </div>

        <img style={{ borderRadius: "2em" }} src={androidGif}></img>
      </div>
    </section>
  )
}

export default Mobile
