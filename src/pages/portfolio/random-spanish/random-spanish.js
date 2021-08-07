import React from "react"
import data from "../../../yourdata"
import RandomSpanishCards from "../../../components/Random-Spanish/random-spanish-cards"
import IconsDisplay from "../../../components/Icons/Icons_display"

const RandomSpanish = () => {
  const IconsArray = [
    { icon: data.IconsArray[0].icon, cn: data.IconsArray[0].cn },
    { icon: data.IconsArray[1].icon, cn: data.IconsArray[1].cn },
    { icon: data.IconsArray[2].icon, cn: data.IconsArray[2].cn },
    { icon: data.IconsArray[3].icon, cn: data.IconsArray[3].cn },
  ]

  return (
    <section className="randomspanish" id="randomspanish">
      <div className="about-paragraph">
        <h2>RandomSpanish.com</h2>
        <p>
          I built this site to try and learn Spanish. The first rendition used
          PHP, SQL, Javascript, HTML and CSS. I rebuilt the site using React,
          GraphQL and MongoDB. The translations are done using the Google
          Translate API while hosting and authentication is handled with AWS
          Amplify.
        </p>

        <IconsDisplay icons={IconsArray} />
        <RandomSpanishCards />

        <div className="button-container">
          <a
            style={{ marginLeft: "1rem" }}
            className="btn btn-primary"
            href="https://www.randomspanish.com"
            target="_blank"
            rel="noreferrer"
          >
            See the app
          </a>
        </div>
      </div>
    </section>
  )
}

export default RandomSpanish
