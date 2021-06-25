import React from "react"
import data from "../../yourdata"

const RandomSpanishCards = () => {
  return (
    <>
      {data.randomSpanishCards.map(cards => (
        <div className="card-row">
          <div className="caption-container">
            <h3>{cards.text}</h3>
          </div>
          {console.log("Helloo from cards ", cards.src)}
          <img src={cards.src} />
        </div>
      ))}
    </>
  )
}

export default RandomSpanishCards
