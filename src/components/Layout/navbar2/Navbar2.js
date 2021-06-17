import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar2 = () => {
  return (
    <div>
      <div className="section-nav-2">
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#randomspanish")}
        >
          <p>RandomSpanish.com</p>
        </button>
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#webapps")}
        >
          <p>Play apps</p>
        </button>
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#mobile")}
        >
          <p>Mobile</p>
        </button>
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#industrialautomation")}
        >
          <p>Industrial Automation</p>
        </button>
      </div>
    </div>
  )
}

export default Navbar2
