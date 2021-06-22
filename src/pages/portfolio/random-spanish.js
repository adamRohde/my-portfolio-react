import React from "react"
import reactIcon from "../../images/icons/react_icon.png"
import graphqlIcon from "../../images/icons/graphql_icon.png"
import googleTranslateIcon from "../../images/icons/Google_Translate_Icon.png"
import mongodb_icon from "../../images/icons/mongodb_icon.png"
import aws_icon from "../../images/icons/aws_icon.png"
import RandomSpanishCards from "../../components/Random-Spanish/random-spanish-cards.js"

const randomspanish = () => {
  return (
    <section className="randomspanish">
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
          GraphQL and MongoDB. All the translations are using the Google
          Translate API and hosting and Authentication is being handled via AWS
          Amplify.
        </p>
        <div className="button-container">
          <button
            className="btn btn-primary"
            onClick={{ href: "https://www.randomspanish.com/" }}
          >
            See the site
          </button>
        </div>
      </div>

      <RandomSpanishCards />
    </section>
  )
}

export default randomspanish
