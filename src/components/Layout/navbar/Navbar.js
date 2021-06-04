import React, { useState } from "react"
import { Link } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("")

  let handleItemClick = val => {
    setActiveItem("About")
    console.log("Hello", { activeItem }, { val })
  }

  return (
    <div className="section-nav">
      <div className="navbar-wrapper">
        <Menu pointing secondary>
          <a>
            <Link to="/" onClick={handleItemClick}>
              About
            </Link>
          </a>
          <a>
            <Link to="/portfolio" onClick={handleItemClick}>
              Portfolio
            </Link>
          </a>
          <a>
            <Link to="/contact" onClick={handleItemClick}>
              Contact
            </Link>
          </a>
        </Menu>
      </div>
    </div>
  )
}
export default Navbar
