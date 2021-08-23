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
            I have worked on two Android applications in my career. The first
            one I built for a customer to exhibit at a industry trade show. The
            customer makes machines that produce tamper free pouches and bags.
            The Android app allowed the customer to connect to the machine's
            control system using Bosch Rexroth's Open Core Interface API. They
            then could pull production data from the machine. As an example,
            they could see how many good bags vs faulty bags the machine
            produced. This production data was displayed in a pie chart at the
            customer's request. The app also streamed real-time data showing the
            current machine run-rate and status. Retained logs were kept for any
            faults. Also included was the ability write basic commands to the
            machine. This included operations like speed selection and culling.
            This app was shown at the 2016 Pack Expo show located at the
            McCormick Center in downtown Chicago.
            <br></br>
            <br></br>
            The second app I worked on with a team of individuals I met through
            a Facebook group dedicated to software development. I was brought on
            to help with the front end implementation for an app there were
            designing. There were three of us on the team, one person to handle
            UX, someone for the front-end (me), and a person to code the
            back-end. The app had users ask a series of questions which would
            guage their values systems and marry them up with career paths that
            the app deemed a good fit, given how they answered the questions.
          </p>

          <IconsDisplay icons={IconsArray} />

          <div className="button-container">
            <a
              className="btn btn-primary"
              href="https://github1s.com/adamRohde/Android-Survey"
              target="_blank"
              rel="noreferrer"
            >
              Trade show app repo
            </a>
          </div>

          <div className="button-container">
            <a
              className="btn btn-primary"
              href="https://github1s.com/adamRohde/OCE_2016_PackExpo_App"
              target="_blank"
              rel="noreferrer"
            >
              Questionaire app repo
            </a>
          </div>
        </div>

        <img style={{ borderRadius: "2em" }} src={androidGif}></img>
      </div>
    </section>
  )
}

export default Mobile
