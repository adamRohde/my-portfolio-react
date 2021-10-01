import React from "react"
import SEO from "../components/seo"
import About from "./about/About"
import Navbar from "../components/Layout/navbar/Navbar"
import Footer from "../components/Layout/footer/Footer"
import Portfolio from "../pages/portfolio/Portfolio"
import Contact from "../pages/contact/index"

const IndexPage = () => {
  return (
    <>
      <SEO title="Adam's Portfolio" />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
export default IndexPage
