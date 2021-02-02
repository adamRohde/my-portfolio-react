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
              <Link to="/">About</Link>
            </button>
            <button onClick={() => scrollTo("#work")}>
              <Link to="/">Projects</Link>
            </button>
            <button onClick={() => scrollTo("#contact")}>
              <Link to="/">Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
