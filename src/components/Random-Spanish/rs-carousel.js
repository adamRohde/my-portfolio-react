import React, { useState, useEffect } from "react"
import data from "../../yourdata"
import saveImage from "../../images/rs-save.jpg"
import translateImage from "../../images/rs-translate.jpg"
import testingImage from "../../images/rs-test.jpg"
import ImageFadeIn from "react-image-fade-in"

const RsCarousel = () => {
  const [index, setIndex] = useState(0)
  const testArray = [
    "Translate Phrases",
    "Test yourself!",
    "Save and delete words!",
  ]
  const srcArray = [translateImage, testingImage, saveImage]
  let i = 0
  useEffect(() => {
    const interval = setInterval(() => {
      i = i + 1
      console.log("This will run every second! ", i)
      if (i === 3) {
        i = 0
      }
      setIndex(i)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="card-row">
        <div className="caption-container">
          <p>{testArray[index]}</p>
        </div>
        <ImageFadeIn src={srcArray[index]} />
      </div>
    </>
  )
}

export default RsCarousel
