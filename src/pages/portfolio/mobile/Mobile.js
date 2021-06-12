import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header.js"
import About from "../../../components/Mobile/About"
import MainImage from "../../../components/Mobile/MainImage"

const Mobile = () => {
  return (
    <>
      <section className="section-about-anti-skewed">
        <Header title={"Mobile"} />
        {/* <div className="mobile-grid">
                <About />
                <MainImage />
              </div> */}
      </section>
    </>
  )
}

export default Mobile
