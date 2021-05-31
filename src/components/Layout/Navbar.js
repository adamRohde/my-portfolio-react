import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  console.log("Current Navbar page number is ")
  return (
    <div className="section-nav">
      <div className="navbar-wrapper">
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
    </div>
  )
}
export default Navbar
