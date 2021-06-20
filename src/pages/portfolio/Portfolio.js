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
        <section id="mywork">
          <h1>My Work</h1>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          {/* <hr style={{ margin: " 0vh 0 0vh" }} /> */}
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
