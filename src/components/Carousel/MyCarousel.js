import React from "react"
import { Carousel } from "3d-react-carousal"
import data from "../../yourdata"

// const MyCarousel = () => {
//   return (
//     <div className="projects-grid">
//       {data.mywork.map(mywork => (
//         <span>
//           <a
//             className="project-card"
//             href={mywork.url ? mywork.url : ""}
//             target={mywork.target}
//           >
//             <div className="project-img">
//               <Carousel
//                 slides={mywork.imageSrc}
//                 autoplay={true}
//                 interval={1000}
//               />
//               <p>{mywork.title}</p>
//             </div>
//           </a>
//         </span>
//       ))}
//     </div>
//   )
// }

let slides = [
  <img src={data.mywork[0].imageSrc} alt="1" />,
  <img src={data.mywork[1].imageSrc} alt="2" />,
  <img src={data.mywork[2].imageSrc} alt="3" />,
]

const MyCarousel = () => {
  return (
    <div>
      <div
        style={{
          transform: "skewY(7deg)",
          marginLeft: "8vw",
          marginRight: "8vw",
        }}
      >
        <Carousel slides={slides} autoplay={false} />
      </div>
    </div>
  )
}

export default MyCarousel
