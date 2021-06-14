import React from "react"
import Header from "../../../components/Header/Header.js"
import About from "../../../components/Random-Spanish/About"
import MainImage from "../../../components/Random-Spanish/MainImage"

const randomspanish = () => {
  return (
    <>
      <div className="header">
        <Header title={"RandomSpanish.com"} />
      </div>
      <div className="about">
        I wanted to learn Spanish but was unable to find a language learning
        service that gave me all the features wanted. So I built my own using
        React, GraphQL, MongoDB, Google Translate API and hosted using AWS
        Amplify. Please check it out here. Please follow the link at bottom of
        this section.
      </div>

      <div className="row_1">
        <div className="google_translate_icon"></div>
        <div className="rs_translation_image"></div>
      </div>

      <div className="row_2">
        <div className="rs_save_image"></div>
        <div className="graphql_icon"></div>
      </div>

      <div className="row_3">
        <div className="mongodb_icon"></div>
        <div className="rs_testing"></div>
      </div>

      {/* <img className="row1_column2"></img>
      <img className="row1_column1"></img> */}

      {/* <div className="row2">
        <img className="row2_column1"></img>
        <img className="row2_column2"></img>
      </div>

      <div className="row3">
        <div className="row2_column1"></div>
        <div className="row2_column2"></div>
      </div> */}
    </>
  )
}

export default randomspanish
