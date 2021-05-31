import React from "react"
import { layoutContext } from "../../../provider"
import { Link } from "gatsby"

const Navbar2 = () => {
  console.log("Current Navbar page number is ")

  return (
    <layoutContext.Consumer>
      {context => (
        <div className="section-nav-2">
          {console.log("layout context is ", context.layout)}
          <div className="navbar-wrapper">
            <div>
              <a>
                <Link to="/random-spanish">randomspanish.com</Link>
              </a>
              <a>
                <Link to="/web-apps">Web Apps</Link>
              </a>
              <a>
                <Link to="/industrial-automation">Industrial Automation</Link>
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
