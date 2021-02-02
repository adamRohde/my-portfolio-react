import React from "react"
import data from "../yourdata"
import { ScrollView } from "react"

var style = {
  backgroundColor: "white",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",

  textAlign: "center",
  padding: "1rem",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "1rem",
  width: "100%",
  color: "white",
}

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
}

const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style}></div>
      Adams Portfolio
    </div>
  )
}

export default Footer
