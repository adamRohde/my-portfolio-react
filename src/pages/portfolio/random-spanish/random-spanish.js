import React from "react"
import data from "../../../yourdata"
import reactIcon from "../../../images/icons/react_icon.png"
import graphqlIcon from "../../../images/icons/graphql_icon.png"
import googleTranslateIcon from "../../../images/icons/Google_Translate_Icon.png"
import mongodb_icon from "../../../images/icons/mongodb_icon.png"
import aws_icon from "../../../images/icons/aws_icon.png"
import RandomSpanishCards from "../../../components/Random-Spanish/random-spanish-cards"
import IconsDisplay from "../../../components/Icons/icons-display"
import RandomSpanishCarousel from "../../../components/Random-Spanish/rs-carousel"

const RandomSpanish = () => {
  const IconsArray = [
    { icon: data.IconsArray[0].icon, cn: data.IconsArray[0].cn },
    { icon: data.IconsArray[1].icon, cn: data.IconsArray[1].cn },
    { icon: data.IconsArray[2].icon, cn: data.IconsArray[2].cn },
    { icon: data.IconsArray[3].icon, cn: data.IconsArray[3].cn },
    { icon: data.IconsArray[4].icon, cn: data.IconsArray[4].cn },
  ]

  return (
    <section className="randomspanish" id="randomspanish">
      <h2>RandomSpanish.com</h2>

      <div className="about-paragraph">
        <p>
          I built this site to try and learn Spanish. The first rendition used
          PHP, SQL, Javascript, HTML and CSS. I rebuilt the site using React,
          GraphQL and MongoDB. The translations are done using the Google
          Translate API while hosting and authentication is handled with AWS
          Amplify.
        </p>

        <IconsDisplay icons={IconsArray} />
        {/* <span>
            <img className="icon" src={reactIcon}></img>{" "}
            <img className="icon" src={graphqlIcon}></img>{" "}
            <img className="icon" src={mongodb_icon}></img> <span> </span>{" "}
            <img className="googleIcon" src={googleTranslateIcon}></img>{" "}
            <span> </span> <img className="icon" src={aws_icon}></img>
          </span> */}

        <RandomSpanishCards />

        <div className="button-container">
          <a
            style={{ marginLeft: "1rem" }}
            className="btn btn-primary"
            href="https://www.randomspanish.com"
            target="_blank"
          >
            See the app
          </a>
        </div>
      </div>

      {/* <RandomSpanishCarousel /> */}
    </section>
  )
}

export default RandomSpanish
