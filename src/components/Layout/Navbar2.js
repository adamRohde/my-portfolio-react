import React from "react"
import { layoutContext } from "../../../provider"
import { navigate } from "gatsby-link"
import { Link } from "react-router-dom"

const Navbar2 = () => {
  console.log("Current Navbar page number is ")

  return (
    <layoutContext.Consumer>
      {context => (
        <div className="section-nav">
          {console.log("layout context is ", context.layout)}
          <div className="navbar-wrapper">
            <div>
              <a>
                <Link to="/randomSpanish">randomspanish.com</Link>
              </a>
              <a>
                <Link to="/webApps">Web Apps</Link>
              </a>
              <a>
                <Link to="/industrialAutomation">Industrial Automation</Link>
              </a>
              <a>
                <Link to="/mobile">Mobile Apps</Link>
              </a>
            </div>
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar2
