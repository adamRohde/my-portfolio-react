import React, { useState } from "react"
import Layout from "../../../components/Layout/layout"
import SEO from "../../../components/seo"
import RandomSpanish from "./Random-spanish"
import { layoutContext } from "../../../../provider"
import Navbar1 from "../../../components/Layout/navbar/Navbar"
import Navbar2 from "../../../components/Layout/navbar2/Navbar2"
import Footer from "../../../components/Layout/Footer"

const IndexPage = () => {
  return (
    <>
      <section className="section-about-skewed" id="randomspanish">
        <RandomSpanish />
      </section>
    </>
  )
}
export default IndexPage
