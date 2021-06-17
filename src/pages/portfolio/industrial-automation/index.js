import React, { useState } from "react"
import Layout from "../../../components/Layout/layout"
import SEO from "../../../components/seo"
import IndustrialAutomation from "./Industrial-Automation"
import { layoutContext } from "../../../../provider"

const IndexPage = () => {
  return (
    <>
      <section id="industrialautomation">
        <IndustrialAutomation />
      </section>
    </>
  )
}
export default IndexPage
