import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
// import Work from "./Work"
import { layoutContext } from "../../../provider"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Navbar2 from "../../components/Layout/navbar2/Navbar2"
import Footer from "../../components/Layout/Footer"
import Portfolio from "./Portfolio"
import RandomSpanish from "./random-spanish/index"
import WebApps from "./web-apps/index"
import IndustrialAutomation from "./industrial-automation/index"
import Mobile from "./mobile/index"
import Fade from "react-reveal/Fade"

const IndexPage = () => {
  return (
    <>
      <>
        <SEO title="Adam's Portfolio" />
        <Navbar1 />
        <Fade bottom cascade>
          <Navbar2 />
        </Fade>
        <div>
          <Portfolio />
          <RandomSpanish />
          <WebApps />
          <Mobile />
          <IndustrialAutomation />
        </div>
        <Footer />
      </>
    </>
  )
}
export default IndexPage
