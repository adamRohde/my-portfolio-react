import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar2 = () => {
  return (
    <>
      <nav className="navbar-2">
        <div class="navbar-links">
          <ul>
            <li>
              <a onClick={() => scrollTo("#randomspanish")}>
                RandomSpanish.com
              </a>
            </li>
            <li>
              <a onClick={() => scrollTo("#webapps")}>Web Apps</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#mobile")}>Mobile</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#industrialautomation")}>
                Industrial Automation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar2
