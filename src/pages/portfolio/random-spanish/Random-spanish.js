import React from "react"
import rsTranslateImage from "../../../images/rs-translate.svg"
import rsSaveImage from "../../../images/rs-save.svg"
import rsTestImage from "../../../images/rs-test.svg"

import reactIcon from "../../../images/react_icon.png"
import graphqlIcon from "../../../images/graphql_icon.png"
import googleTranslateIcon from "../../../images/Google_Translate_Icon.png"
import mongodb_icon from "../../../images/mongodb_icon.png"
import aws_icon from "../../../images/aws_icon.png"
import translate_gif from "../../../gifs/translate.gif"
import testing_gif from "../../../gifs/testing.gif"

const randomspanish = () => {
  return (
    <>
      <h2>
        <a href="https://www.randomspanish.com/" style={{ color: "black" }}>
          <span style={{ color: "red" }}>R</span>andom{""}
          <span style={{ color: "red" }}>S</span>panish.{""}
          <span style={{ color: "red" }}>C</span>
          {""}om
        </a>
      </h2>

      <img className="imageRow1" src={translate_gif}></img>
      <img className="imageRow2" src={testing_gif} />
      <img className="imageRow3" src={rsTestImage} />
      <h5 className="poweredBy">
        Site powered by:{" "}
        <span>
          <img id="icon" src={graphqlIcon}></img>{" "}
          <img id="icon" src={mongodb_icon}></img> <span> </span>{" "}
          <img id="googleIcon" src={googleTranslateIcon}></img> <span> </span>{" "}
          <img id="icon" src={aws_icon}></img>
        </span>
      </h5>
    </>
  )
}

export default randomspanish
