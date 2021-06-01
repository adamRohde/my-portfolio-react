import React from "react"
import { Carousel } from "3d-react-carousal"
import data from "../../yourdata"
const { uuid } = require("uuidv4")

let slides = [
  <img src={data.mywork[0].imageSrc} alt="1" />,
  <img src={data.mywork[1].imageSrc} alt="2" />,
  <img src={data.mywork[2].imageSrc} alt="3" />,
]

// const slides = [
//   {
//     key: uuid(),
//     content: <img src={data.mywork[0].imageSrc} alt="1" />,
//   },
//   {
//     key: uuid(),
//     content: <img src={data.mywork[1].imageSrc} alt="2" />,
//   },
//   {
//     key: uuid(),
//     content: <img src={data.mywork[2].imageSrc} alt="3" />,
//   },
// ]

const MyCarousel = () => {
  return (
    <div>
      <div
        style={{
          transform: "skewY(7deg)",
          marginLeft: "12vw",
          marginRight: "12vw",
          marginTop: "2vh",
          zIndex: 3,
          position: "relative",
        }}
      >
        <Carousel slides={slides} />
      </div>
    </div>
  )
}

export default MyCarousel
