import React from "react"
import reactIcon from "../../images/icons/react_icon.png"
import graphqlIcon from "../../images/icons/graphql_icon.png"
import googleTranslateIcon from "../../images/icons/Google_Translate_Icon.png"
import mongodb_icon from "../../images/icons/mongodb_icon.png"
import aws_icon from "../../images/icons/aws_icon.png"
import RandomSpanishCards from "../../components/Random-Spanish/random-spanish-cards.js"

const randomspanish = () => {
  return (
    <section id="randomspanish">
      <h2>RandomSpanish.com</h2>

      <div>
        <p className="about-paragraph">
          I built this site to try and learn Spanish. The first rendition used
          PHP, SQL, Javascript, HTML and CSS. I rebuilt the site using React,
          GraphQL and MongoDB. All the translations are utilizing the Google
          Translate API and hosting and Authentication is being handled via AWS
          Amplify.
        </p>
        <span style={{ margin: "0 0 0 5rem" }}>
          <img id="icon" src={reactIcon}></img>{" "}
          <img id="icon" src={graphqlIcon}></img>{" "}
          <img id="icon" src={mongodb_icon}></img> <span> </span>{" "}
          <img id="googleIcon" src={googleTranslateIcon}></img> <span> </span>{" "}
          <img id="icon" src={aws_icon}></img>
        </span>

        <div className="button-container">
          <button class="btn btn-primary">See the site</button>
        </div>
      </div>

      <RandomSpanishCards />
    </section>
  )
}

export default randomspanish
