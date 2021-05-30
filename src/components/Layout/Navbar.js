import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { layoutContext } from "../../../provider"
import { navigate } from "gatsby-link"
import { Link } from "react-router-dom"

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
              <button
                style={{ justifyContent: "flex-start" }}
                onClick={() => navigate("/")}
              >
                <h3>Back</h3>
              </button>
            ) : null}

            {context.layout == "MAIN" ? (
              <div>
                <a>
                  <Link to="/">About</Link>
                </a>
                <a>
                  <Link to="/work">Work</Link>
                </a>
                <a>
                  <Link to="/contact">Contact</Link>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar
