import React, { useState } from "react"
import data from "../../yourdata"
import { Carousel } from "react-bootstrap"
// import Fade from "react-reveal/Fade"

const Carousels = () => {
  const [open, setOpen] = useState(0)

  return (
    <section className="wp-carousels-wrapper">
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
