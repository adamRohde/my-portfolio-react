import React from "react"
import data from "../../yourdata"

const RandomSpanishCards = () => {
  return (
    <>
      {data.randomSpanishCards.map(cards => (
        <div className="card-row">
          <div className="caption-container">
            <p>{cards.text}</p>
          </div>
          {console.log("Helloo from cards ", cards.src)}
          <img src={cards.src} />
        </div>
      ))}
    </>
  )
}

export default RandomSpanishCards
