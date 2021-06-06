import React from "react"
import { layoutContext } from "../../../../provider"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import Fade from "react-reveal/Fade"

const Navbar2 = () => {
  let address = ""
  let divAnimationClass = "fade-in-image"
  const url = typeof window !== "undefined" ? window.location.href : ""

  address = getUrlParts(url)

  function getUrlParts(url) {
    var a = document.createElement("a")
    a.href = url
    return {
      pathname: a.pathname,
    }
  }

  address.pathname === "/portfolio"
    ? (divAnimationClass = "fade-in-image")
    : (divAnimationClass = "")

  return (
    <layoutContext.Consumer>
      {context => (
        <div className={divAnimationClass}>
          <div>
            <div className="section-nav-2">
              <div className="navbar-wrapper-2">
                <div>
                  <Link
                    to="/portfolio/random-spanish"
                    activeClassName="active2"
                    location={address}
                  >
                    {console.log("Hello from Link ", address)}
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
                  <Link to="/portfolio/mobile" activeClassName="active2">
                    Mobile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar2
