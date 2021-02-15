import React from "react"
import data from "../../yourdata"
//import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <section className="wp-header-wrapper">
      <h2>Industrial Automation</h2>
      <h5>{data.aboutWorkProjects}</h5>
    </section>
  )
}
export default Header
