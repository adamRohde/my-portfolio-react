import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Accordions = () => {
  return (
    <div classname="accordion" id="accordionExample">
      <div classname="accordion-item">
        <h6 classname="accordion-header" id="headingOne">
          <button
            classname="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h6>
        <div
          id="collapseOne"
          classname="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div classname="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classnamees that we use to style each element. These classnamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <button className="btn btn-success">test button</button>
    </div>
  )
}

export default Accordions
