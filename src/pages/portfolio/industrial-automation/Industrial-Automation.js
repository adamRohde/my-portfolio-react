import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header"
import MainImage from "../../../components/Industrial-Automation/MainImage"
import About from "../../../components/Industrial-Automation/About"

const workprojects = () => {
  return (
    <section>
      {/* <Header title={"Industrial Automation"} /> */}
      <h2>Industrial Automation</h2>
      <div className="ia-grid">
        <About />
        <MainImage />
      </div>
    </section>
  )
}

export default workprojects
