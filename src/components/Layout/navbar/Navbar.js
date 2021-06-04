import React, { useState } from "react"
import { Link } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("")

  let handleItemClick = val => {
    setActiveItem("About")
    console.log("Hello", { activeItem }, { val })
  }

  const activeLink = () => {
    console.log("Active??")
  }

  return (
    <div className="section-nav">
      <div className="navbar-wrapper">
        <>
          <Link
            to="/"
            onClick={handleItemClick}
            active={activeLink}
            activeClassName="active"
          >
            About
          </Link>

          <Link
            to="/portfolio"
            active={activeLink}
            onClick={handleItemClick}
            activeClassName="active"
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            active={activeLink}
            onClick={handleItemClick}
            activeClassName="active"
          >
            Contact
          </Link>
        </>
      </div>
    </div>
  )
}
export default Navbar
