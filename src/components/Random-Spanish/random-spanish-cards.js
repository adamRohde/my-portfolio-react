import React from "react"
import data from "../../yourdata"

const RandomSpanishCards = () => {
  return (
    <>
      {data.randomSpanishCards.map(cards => (
        <div className="card-row">
          <p>{cards.text}</p>
          <img src={cards.src} />
        </div>
      ))}
    </>
  )
}

export default RandomSpanishCards
