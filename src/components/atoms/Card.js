import React, { useContext } from "react"

const Card = ({ heading, paragraph, imgUrl }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    ></div>
  )
}

export default Card
