import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Contact from "./Contact"
import { layoutContext } from "../../../provider"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Footer from "../../components/Layout/footer/Footer"

const IndexPage = () => {
  return (
    <>
      <>
        <SEO title="Adam's Portfolio" />
        <div className="section-main" id="contact">
          <Contact />
        </div>
      </>
    </>
  )
}
export default IndexPage
