import React from "react"
import data from "../../yourdata"

const RandomSpanishCards = () => {
  // const [imageSrc, setImageSrc] = useState("");

  // let i = 0;

  // useEffect(() => {
  //   console.log("The number is 1", imageSrc);
  // }, );

  // setInterval(function() {
  //   if (i === 1) {
  //     setImageSrc(translateImage);
  //   }
  //   if (i === 2) {
  //     setImageSrc(testingImage);
  //   }
  //   if (i === 3) {
  //     setImageSrc(saveImage);
  //   }
  //   if (i >= 3) {
  //     i=0;
  //   }
  //   i = i + 1;
  // }, 6000);

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
