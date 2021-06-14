import React, { useState } from "react"
import Layout from "../../../components/Layout/layout"
import SEO from "../../../components/seo"
import IndustrialAutomation from "./Industrial-Automation"
import { layoutContext } from "../../../../provider"

const IndexPage = () => {
  return (
    <>
      <section className="portfolio-main" id="industrialautomation">
        <IndustrialAutomation />
      </section>
    </>
  )
}
export default IndexPage
