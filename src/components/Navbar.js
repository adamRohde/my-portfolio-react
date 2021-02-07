import React, { useContext } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { layoutContext } from "../../provider"
import Link from "gatsby-link"

const Navbar = () => {
  console.log("Current Navbar page number is ")

  return (
    <layoutContext.Consumer>
      {context => (
        <div className="section-nav">
          {console.log("layout context is ", context.layout)}
          <div className="container">
            <div className="navbar-wrapper">
              <div className="links-wrapper">
                <button>
                  <Link
                    className="nav-links"
                    to="/"
                    activeStyle={{ color: "transparent" }}
                    partiallyActive={true}
                  >
                    <h3>Back</h3>
                  </Link>
                </button>

                <div>
                  <button onClick={() => scrollTo("#header")}>
                    <h3>About</h3>
                  </button>
                  <button onClick={() => scrollTo("#work")}>
                    <h3>Projects</h3>
                  </button>
                  <button onClick={() => scrollTo("#contact")}>
                    <h3>Contact</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}

export default Navbar
