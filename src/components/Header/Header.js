import React from "react"
import data from "../../yourdata"
import Fade from "react-reveal/Fade"

// import { Link } from "react-scroll"

const Header = ({ title }) => {
  return (
    <div className="header-wrapper">
      <h1>{title}</h1>
    </div>
  )
}
export default Header
