import React from "react"
import { layoutContext } from "../../../../provider"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import Fade from "react-reveal/Fade"

const Navbar2 = () => {
  console.log("Current Navbar page number is ")

  let address = " "
  let divAnimationClass = "fade-in-image"

  function getUrlParts(url) {
    var a = document.createElement("a")
    a.href = url
    return {
      href: a.href,
      host: a.host,
      hostname: a.hostname,
      port: a.port,
      pathname: a.pathname,
      protocol: a.protocol,
      hash: a.hash,
      search: a.search,
    }
  }

  address = getUrlParts(window.location.href)

  address.pathname === "/portfolio"
    ? (divAnimationClass = "fade-in-image")
    : (divAnimationClass = "")

  return (
    <layoutContext.Consumer>
      {context => (
        <div className={divAnimationClass}>
          <div className="section-nav-2">
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
                <Link to="/portfolio/mobile" activeClassName="active2">
                  Mobile
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar2
