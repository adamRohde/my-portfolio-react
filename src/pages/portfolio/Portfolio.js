import React from "react"
import SEO from "../../components/seo"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Navbar2 from "../../components/Layout/navbar2/Navbar2"
import Footer from "../../components/Layout/Footer"
import Portfolio from "./Portfolio"
import RandomSpanish from "./random-spanish"
import WebApps from "./web-apps"
import IndustrialAutomation from "./industrial-automation"
import Mobile from "./mobile"
import Fade from "react-reveal/Fade"

const Work = () => {
  return (
    <>
      <SEO title="Adam's Portfolio" />
      <Navbar1 />
      <Fade bottom cascade>
        <Navbar2 />
      </Fade>
      <div>
        <section className="mywork">
          <h2>My Work</h2>
          <p className="about-paragraph">
            These are projects I've built and worked on in my spare time. No
            tutorials were followed to make anything you will find below.
          </p>
        </section>

        <RandomSpanish />
        {/* <WebApps /> */}
        <Mobile />
        {/* <IndustrialAutomation /> */}
      </div>
      <Footer />
    </>
  )
}
export default Work
