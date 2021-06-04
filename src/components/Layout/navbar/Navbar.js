import React, { useState } from "react"
import { layoutContext } from "../../../../provider"
import { Link } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"
import Navbar2 from "../navbar2/Navbar2"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("")

  let handleItemClick = val => {
    setActiveItem(val)
    console.log("Hello", { val })
  }

  const activeLink = () => {
    console.log("Active?????")
  }

  return (
    <layoutContext.Consumer>
      {context => (
        <div className="section-nav">
          <div className="navbar-wrapper">
            <>
              <Link
                to="/"
                onClick={handleItemClick("about")}
                active={activeLink}
                activeClassName="active"
              >
                About
              </Link>

              <Link
                to="/portfolio"
                active={activeLink}
                onClick={handleItemClick("portfolio")}
                activeClassName="active"
              >
                Portfolio
              </Link>

              <Link
                to="/contact"
                active={activeLink}
                onClick={handleItemClick("contact")}
                activeClassName="active"
              >
                Contact
              </Link>
            </>
          </div>
        </div>
      )}
    </layoutContext.Consumer>
  )
}
export default Navbar
