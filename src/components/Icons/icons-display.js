import React from "react"
import data from "../../yourdata"

const IconsDisplay = () => {
  return (
    <>
      <span>
        <img className="icon" src={reactIcon}></img>{" "}
        <img className="icon" src={graphqlIcon}></img>{" "}
        <img className="icon" src={mongodb_icon}></img> <span> </span>{" "}
        <img className="googleIcon" src={googleTranslateIcon}></img>{" "}
        <span> </span> <img className="icon" src={aws_icon}></img>
      </span>
    </>
  )
}

export default IconsDisplay
