import React from "react"
import { layoutContext } from "../../../../provider"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import Fade from "react-reveal/Fade"

const Navbar2 = () => {
  console.log("Current Navbar page number is ")

  return (
    <layoutContext.Consumer>
      {context => (
        // <Fade top cascade>
        <div className="section-nav-2">
          {console.log("layout context is ", context.layout)}
          <div className="navbar-wrapper-2">
            <div>
              <Link to="/portfolio/random-spanish" activeClassName="active2">
                RandomSpanish.com
              </Link>

              <Link to="/portfolio/web-apps" activeClassName="active2">
                Web Apps
              </Link>

              <Link
                to="/portfolio/industrial-automation"
                activeClassName="active2"
              >
                Industrial Automation
              </Link>

              <Link to="/portfolio/mobile-apps" activeClassName="active2">
                Mobile Apps
              </Link>
            </div>
          </div>
        </div>
        // </Fade>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar2
