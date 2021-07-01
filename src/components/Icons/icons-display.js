import React from "react"
import data from "../../yourdata"

const IconsDisplay = icons => {
  return (
    <div className="icons-container">
      Tools used -{console.log("Hello from props 1", { icons })}
      {icons.icons.map(prop => (
        <>
          <span>
            <img className={prop.cn} src={prop.icon}></img>{" "}
          </span>
        </>
      ))}
    </div>
  )
}
export default IconsDisplay
