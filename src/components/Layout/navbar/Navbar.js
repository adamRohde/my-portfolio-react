import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  const [actLink, setActLink] = useState("")

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  function activeLink(linkClicked) {
    setActLink(linkClicked)
    console.log("Hello from activeLink ", actLink)

    if (linkClicked === "portfolio") {
      console.log("Hello from the port ", actLink)
    }
  }

  return (
    <>
      {/* {actLink === "portfolio" && (
        <Fade bottom cascade>
          <Navbar2 />
        </Fade>
      )} */}

      <nav className="navbar">
        <div className="navbar-links">
          <nav>
            <ul>
              <li>
                <a
                  onClick={() => {
                    scrollTo("#about")
                    activeLink("about")
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo("#portfolio")
                    activeLink("portfolio")
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollTo("#contact")
                    activeLink("contact")
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  )
}
export default Navbar
