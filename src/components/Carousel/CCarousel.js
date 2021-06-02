import React from "react"
import data from "../../yourdata"
import "./CCarousel.css"
import { useState } from "react"
import Slider from "react-slick"
import randomspanish_pic from "../../images/hola.jpg"
import webapps_pic from "../../images/web-apps.jpg"
import workprojects_pic from "../../images/work-projects.jpg"
import mobile_pic from "../../images/mobile.jpg"

// import astronaut from "./assets/astronaut.png"
// import celebrating from "./assets/celebrating.png"
// import education from "./assets/education.png"
// import taken from "./assets/taken.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

let slides = [
  <img src={data.mywork[0].imageSrc} alt="1" />,
  <img src={data.mywork[1].imageSrc} alt="2" />,
  <img src={data.mywork[2].imageSrc} alt="3" />,
]

const images = [randomspanish_pic, webapps_pic, workprojects_pic, mobile_pic]
//const images = [astronaut, celebrating, education, taken]

function CCarousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    adaptiveHeigh: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  }

  // return (
  //   <div className="CCarousel">
  //     <Slider {...settings}>
  //       {images.map((img, idx) => (
  //         <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
  //           <img src={img} alt={img} />
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // )

  return (
    <div className="CCarousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            {console.log("imageIndex", " ", imageIndex, "idx ", idx)}
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

{
  /* <Slider {...settings}>
        <div className="slide">
          <img src={randomspanish_pic} alt={"1"}></img>
        </div>
        <div className="activeSlide">
          <img src={webapps_pic} alt={"2"}></img>
        </div>
        <div className="slide">
          <img src={workprojects_pic} alt={"3"}></img>
        </div>
      </Slider>
    </div> */
}

export default CCarousel
