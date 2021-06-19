import React from "react"
// import rsTranslateImage from "../../../images/rs-translate.svg"
// import rsSaveImage from "../../../images/rs-save.svg"
// import rsTestImage from "../../../images/rs-test.svg"

import reactIcon from "../../../images/icons/react_icon.png"
import graphqlIcon from "../../../images/icons/graphql_icon.png"
import googleTranslateIcon from "../../../images/icons/Google_Translate_Icon.png"
import mongodb_icon from "../../../images/icons/mongodb_icon.png"
import aws_icon from "../../../images/icons/aws_icon.png"
import translate_gif from "../../../gifs/translate.gif"
import testYourself from "../../../images/testyourself.png"
import savePhrases from "../../../images/savephrases.png"

const randomspanish = () => {
  return (
    <>
      <h2>
        {/* <span style={{ color: "red" }}>R</span>andom{""}
        <span style={{ color: "red" }}>S</span>panish.{""}
        <span style={{ color: "red" }}>C</span>
        {""}om */}
        RandomSpanish.com
      </h2>

      <div>
        <p>
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
        <div style={{ margin: "1rem 0 0 5rem" }}>
          <button class="btn btn-primary">See the site</button>
        </div>
      </div>

      <div className="imageRow ">
        <p>
          User is able to translate phrases from English to Spanish or Spanish
          to English and save the words/phrases to test themself on at a later
          time.
        </p>
        <img className="imageRowImage " src={translate_gif}></img>
      </div>

      <div className="imageRow ">
        <p>
          The user can this test themself with the computer randomly selecting
          words/phrases they have previously saved.
        </p>
        <img className="imageRowImage " src={testYourself} />
      </div>

      <div className="imageRow ">
        <p>
          The user can save as many phrases as they would like after signing up
          for a account.
        </p>
        <img className="imageRowImage " src={savePhrases} />
      </div>

      {/* <h5 className="poweredBy">
        Site powered by:{" "}
        <span>
          <img id="icon" src={graphqlIcon}></img>{" "}
          <img id="icon" src={mongodb_icon}></img> <span> </span>{" "}
          <img id="googleIcon" src={googleTranslateIcon}></img> <span> </span>{" "}
          <img id="icon" src={aws_icon}></img>
        </span>
      </h5> */}
    </>
  )
}

export default randomspanish
