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
          <nav className="navbar">
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
              </nav>
            </div>
          </nav>
        </>
      )}
    </layoutContext.Consumer>
  )
}
export default Navbar
