import React, { useState } from "react"
import { layoutContext } from "../../../../provider"
import { Link, Router } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"
//

const Navbar = () => {
  const [fromWhere, setFromWhere] = useState("")

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  let isActive = ""

  return (
    <layoutContext.Consumer>
      {context => (
        <>
          <div className="section-nav">
            <div className="navbar-wrapper-1 ">
              <nav>
                <Link to="/" activeClassName="active">
                  About
                </Link>
                <Link
                  to="/portfolio/Portfolio"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Portfolio
                </Link>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </layoutContext.Consumer>
  )
}
export default Navbar
