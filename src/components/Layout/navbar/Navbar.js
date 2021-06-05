import React, { useState } from "react"
import { layoutContext } from "../../../../provider"
import { Link } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"
import Navbar2 from "../navbar2/Navbar2"

const Navbar = () => {
  return (
    <layoutContext.Consumer>
      {context => (
        <>
          <div className="section-nav">
            <div className="navbar-wrapper-1 ">
              <>
                <Link to="/" activeClassName="active">
                  About
                </Link>

                <Link
                  to="/portfolio"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Portfolio
                </Link>

                <Link to="/contact" activeClassName="active">
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
