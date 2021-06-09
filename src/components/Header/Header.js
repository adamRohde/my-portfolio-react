import React from "react"
import data from "../../yourdata"
import Fade from "react-reveal/Fade"

// import { Link } from "react-scroll"

const Header = ({ title, type }) => {
  console.log("Header Type ", { type })
  return (
    // <div className="header-wrapper">
    //   <h1>{title}</h1>
    // </div>
    <div className="arrow-pointer">
      {" "}
      <h3>{title}</h3>
    </div>
  )
}
export default Header
