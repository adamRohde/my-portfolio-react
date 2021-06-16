import React from "react"
import rsTranslateImage from "../../../images/rs-translate.svg"
import rsSaveImage from "../../../images/rs-save.svg"
import rsTestImage from "../../../images/rs-test.svg"

import reactIcon from "../../../images/react_icon.png"
import graphqlIcon from "../../../images/graphql_icon.png"
import googleTranslateIcon from "../../../images/Google_Translate_Icon.png"
import mongodb_icon from "../../../images/mongodb_icon.png"
import aws_icon from "../../../images/aws_icon.png"

const randomspanish = () => {
  return (
    <>
      <h2>RandomSpanish.com</h2>
      <div className="about">
        <p>
          <span className="callToAction">
            Wanna learn Spanish???? Me too!!!
          </span>{" "}
          The problem is, all the language learning sites want big bucks for
          simple features. So I give you simple features for free!!!
          <br></br>
          <br></br>
          The tech includes...
          <div>
            <span>
              {" "}
              <img id="icon" src={reactIcon}></img>
              {" |"}
              <img id="icon" src={graphqlIcon}></img>
              {" |"}
              <img id="icon" src={mongodb_icon}></img> <span> </span> {" |"}
              <img id="googleIcon" src={googleTranslateIcon}></img>{" "}
              <span> </span> {" |"}
              <img id="icon" src={aws_icon}></img>
            </span>
          </div>
          <br></br>
          <button className="btn btn-primary" style={{ height: "3rem" }}>
            Go to RandomSpanish.com
          </button>
        </p>
      </div>

      <img src={rsTranslateImage} />
      <img src={rsSaveImage} />
      <img src={rsTestImage} />
    </>
  )
}

export default randomspanish
