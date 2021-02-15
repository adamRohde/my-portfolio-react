import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Header = () => {
  return (
    <section className="header-wrapper">
      <h2>Industrial Automation</h2>
      <p>{data.aboutWorkProjects}</p>
    </section>
  )
}
export default Header
