import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Link from "gatsby-link"

const Navbar = () => {
  return (
    <div className="section-nav">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button
              onClick={() => {
                scrollTo("#about")
              }}
            >
              <Link className="nav-links" to="/">
                <h3>About</h3>
              </Link>
            </button>
            <button onClick={() => scrollTo("#work")}>
              <Link className="nav-links" to="/">
                <h3>Work</h3>
              </Link>
            </button>
            <button onClick={() => scrollTo("#contact")}>
              <Link className="nav-links" to="/">
                <h3>Contact</h3>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
