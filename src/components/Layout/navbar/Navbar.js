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
          <div className="navbar">
            <div className="navbar-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/" activeClassName="active">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio/Portfolio"
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" activeClassName="active">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* <Link to="/" activeClassName="active">
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
                </Link> */}
              </nav>
            </div>
          </div>
        </>
      )}
    </layoutContext.Consumer>
  )
}
export default Navbar
