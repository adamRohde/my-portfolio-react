import React, { useContext } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { layoutContext } from "../../../provider"
import Link from "gatsby-link"

const Navbar = () => {
  console.log("Current Navbar page number is ")

  return (
    <layoutContext.Consumer>
      {context => (
        <div className="section-nav">
          {console.log("layout context is ", context.layout)}
          <div className="navbar-wrapper">
            {context.layout === "WEB_APPS" ||
            context.layout === "WORK_PROJECTS" ? (
              <Link style={{ color: "white" }} to="/" partiallyActive={true}>
                <h3>Back</h3>
              </Link>
            ) : null}

            {context.layout == "MAIN" ? (
              <div>
                <button onClick={() => scrollTo("#header")}>
                  <h3>About</h3>
                </button>
                <button onClick={() => scrollTo("#work")}>
                  <h3>My Work</h3>
                </button>
                <button onClick={() => scrollTo("#contact")}>
                  <h3>Contact</h3>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar
