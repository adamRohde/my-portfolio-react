import React from "react"
import SEO from "../../components/seo"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Navbar2 from "../../components/Layout/navbar2/Navbar2"
import Footer from "../../components/Layout/footer/Footer"
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
          <div classname="mywork-container">
            <h1>My Work</h1>
            <p className="about-paragraph">
              These are projects I've built and worked on in my spare time. No
              tutorials were followed to make anything you will find below.
            </p>
          </div>
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
