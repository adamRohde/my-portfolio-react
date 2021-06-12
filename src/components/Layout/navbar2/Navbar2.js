import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar2 = () => {
  return (
    <div>
      <div className="section-nav-2">
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => scrollTo("#randomspanish")}
        >
          RandomSpanish.com
        </button>
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => scrollTo("#webapps")}
        >
          Play apps
        </button>
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => scrollTo("#mobile")}
        >
          Mobile
        </button>
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => scrollTo("#industrialautomation")}
        >
          Industrial Automation
        </button>
      </div>
    </div>
  )
}

export default Navbar2
