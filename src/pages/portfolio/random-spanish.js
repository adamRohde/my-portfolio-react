import React, { useState } from "react"
import reactIcon from "../../images/icons/react_icon.png"
import graphqlIcon from "../../images/icons/graphql_icon.png"
import googleTranslateIcon from "../../images/icons/Google_Translate_Icon.png"
import mongodb_icon from "../../images/icons/mongodb_icon.png"
import aws_icon from "../../images/icons/aws_icon.png"
import RandomSpanishCards from "../../components/Random-Spanish/random-spanish-cards.js"
import RandomSpanishCarousel from "../../components/Random-Spanish/rs-carousel"

const RandomSpanish = () => {
  return (
    <section className="randomspanish" id="randomspanish">
      <h2>RandomSpanish.com</h2>

      <div className="about-paragraph">
        <div className="icons-container">
          Tools used -
          <span>
            <img className="icon" src={reactIcon}></img>{" "}
            <img className="icon" src={graphqlIcon}></img>{" "}
            <img className="icon" src={mongodb_icon}></img> <span> </span>{" "}
            <img className="googleIcon" src={googleTranslateIcon}></img>{" "}
            <span> </span> <img className="icon" src={aws_icon}></img>
          </span>
        </div>
        <p>
          I built this site to try and learn Spanish. The first rendition used
          PHP, SQL, Javascript, HTML and CSS. I rebuilt the site using React,
          GraphQL and MongoDB. The translations are done using the Google
          Translate API while hosting and authentication is handled with AWS
          Amplify.
        </p>
        <div className="button-container">
          <a
            className="btn btn-primary"
            href="https://www.randomspanish.com"
            target="_blank"
          >
            Go to site
          </a>
        </div>
      </div>

      {/* <RandomSpanishCards /> */}
      <RandomSpanishCarousel />
    </section>
  )
}

export default RandomSpanish
