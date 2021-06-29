import React from "react"
import data from "../../yourdata"

import androidIcon from "../../images/icons/android_icon.jpg"
import awsIcon from "../../images/icons/aws_icon.png"
import githubIcon from "../../images/icons/github.png"
import googleTranslateIcon from "../../images/icons/google_translate_icon.png"
import graphqlIcon from "../../images/icons/graphql_icon.png"
import mongodbIcon from "../../images/icons/mongodb_icon.png"
import reactIcon from "../../images/icons/react_icon.png"

const IconsDisplay = icons => {
  let iconClassName = "icon"
  const iconArray = [
    androidIcon,
    awsIcon,
    githubIcon,
    googleTranslateIcon,
    graphqlIcon,
    mongodbIcon,
    reactIcon,
  ]

  let i = 0
  return (
    <div className="icons-container">
      Tools used -{console.log("Hello from props 1", { icons })}
      {icons.icons.map(prop => (
        <>
          <span>
            <img className={prop.cn} src={prop.icon}></img>{" "}
          </span>
        </>
      ))}
    </div>
  )
}
export default IconsDisplay
