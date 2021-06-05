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

  const activeLink = val => {
    console.log({ val })
  }

  let pageLocation = ""

  return (
    <layoutContext.Consumer>
      {context => (
        <>
          <div className="section-nav">
            <div className="navbar-wrapper-1 ">
              <>
                <Link to="/" active={pageLocation} activeClassName="active">
                  About
                </Link>

                <Link
                  to="/portfolio"
                  active={pageLocation}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Portfolio
                </Link>

                <Link
                  to="/contact"
                  active={pageLocation}
                  activeClassName="active"
                >
                  Contact
                </Link>
              </>
            </div>
          </div>
        </>
      )}
    </layoutContext.Consumer>
  )
}
export default Navbar
