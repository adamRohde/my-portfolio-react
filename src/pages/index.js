import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "./about/About"
import { layoutContext } from "../../provider"
import Navbar from "../components/Layout/navbar/Navbar"
import Footer from "../components/Layout/footer/Footer"

const IndexPage = () => {
  return (
    <>
      <SEO title="Adam's Portfolio" />
      <Navbar />
      <About />
      <Footer />
    </>
  )
}
export default IndexPage
