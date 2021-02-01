import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section-nav">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
