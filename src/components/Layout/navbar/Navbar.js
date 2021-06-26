import React, { useState } from "react"
import { layoutContext } from "../../../../provider"
import { Link, Router } from "gatsby"
import { Menu, Segment } from "semantic-ui-react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  const [fromWhere, setFromWhere] = useState("")

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  let isActive = ""

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <nav>
            <ul>
              <li>
                <a onClick={() => scrollTo("#about")}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollTo("#mywork")}>Portfolio</a>
              </li>
              <li>
                <a onClick={() => scrollTo("#contact")}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  )
}
export default Navbar
