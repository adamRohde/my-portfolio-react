import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Header = () => {
  return (
    <div className="section" id="header">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <h2>Randomspanish.com</h2>

            <p>
              {data.aboutParaRandomSpanish}
              {/* <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree} */}
            </p>
          </div>
          <div>
            <img src={data.randomSpanishImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
