import React, { useState } from "react"
import { layoutContext } from "../../../../provider"
import { Link, Router } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"
import scrollTo from "gatsby-plugin-smoothscroll"
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
                    <a onClick={() => scrollTo("#about")}>Home</a>
                  </li>
                  <li>
                    <a
                      activeClassName="active"
                      onClick={() => scrollTo("#mywork")}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      activeClassName="active"
                      onClick={() => scrollTo("#contact")}
                    >
                      Contact
                    </a>

                    {/* <Link to="/contact" activeClassName="active">
                      Contact
                    </Link> */}
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
