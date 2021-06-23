import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "./about/About"
import { layoutContext } from "../../provider"
import Navbar from "../components/Layout/navbar/Navbar"
import Navbar2 from "../components/Layout/navbar2/Navbar2"
import Footer from "../components/Layout/footer/Footer"
import Portfolio from "./portfolio/Portfolio"
import Contact from "./contact/index"

const IndexPage = () => {
  return (
    <>
      <SEO title="Adam's Portfolio" />
      <Navbar />
      <Navbar2 />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
export default IndexPage
