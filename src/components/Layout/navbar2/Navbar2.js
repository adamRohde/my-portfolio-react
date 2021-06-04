import React from "react"
import { layoutContext } from "../../../../provider"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const Navbar2 = () => {
  console.log("Current Navbar page number is ")

  return (
    <layoutContext.Consumer>
      {context => (
        // <Fade top cascade>
        <div className="section-nav-2">
          {console.log("layout context is ", context.layout)}
          <div className="navbar-wrapper">
            <div>
              <a>
                <Link to="/portfolio/random-spanish" activeClassName="active">
                  randomspanish.com
                </Link>
              </a>
              <a>
                <Link to="/portfolio/web-apps" activeClassName="active">
                  Web Apps
                </Link>
              </a>
              <a>
                <Link activeClassName="active">Industrial Automation</Link>
              </a>
              <a>
                <Link activeClassName="active">Mobile Apps</Link>
              </a>
            </div>
          </div>
        </div>
        // </Fade>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar2
