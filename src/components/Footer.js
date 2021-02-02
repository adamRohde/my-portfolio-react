import React from "react"
//import data from "../yourdata"

var style = {
  backgroundColor: "white",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "1rem",
  width: "100%",
  color: "black",
}

var phantom = {
  display: "block",
  padding: "2px",
  height: "6px",
  width: "100%",
  color: "black",
}

const Footer = () => {
  return (
    <div>
      <div style={phantom} />

      <div style={style}>
        <span>
          Original template created by{" "}
          <a href="https://www.chetanverma.com/">Chetan Verma</a>
        </span>
      </div>
    </div>
  )
}

export default Footer
