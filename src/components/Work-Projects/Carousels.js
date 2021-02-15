import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
import { Carousel, Card, Button } from "react-bootstrap"

const Carousels = () => {
  const [open, setOpen] = useState(0)

  return (
    <section className="carousels-wrapper">
      <Carousel controls={false}>
        <Carousel.Item>
          <video controls>
            <source src={data.carouselVids[0].src} type={"video/mp4"} />
          </video>

          <Carousel.Caption>
            <h2 style={{ color: "black" }}>{data.carouselVids[0].name}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Carousels
