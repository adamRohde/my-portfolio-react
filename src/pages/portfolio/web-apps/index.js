import React, { useState } from "react"
import Layout from "../../../components/Layout/layout"
import SEO from "../../../components/seo"
import WebApps from "./Web-apps"
import { layoutContext } from "../../../../provider"
import Navbar1 from "../../../components/Layout/navbar/Navbar"
import Navbar2 from "../../../components/Layout/navbar2/Navbar2"
import Footer from "../../../components/Layout/Footer"

const IndexPage = () => {
  return (
    <>
      <section className="portfolio-main" id="webapps">
        <WebApps />
      </section>
    </>
  )
}
export default IndexPage
