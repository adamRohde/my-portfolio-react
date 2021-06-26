import React from "react"
import SEO from "../../components/seo"
import Navbar1 from "../../components/Layout/navbar/Navbar"
import Navbar2 from "../../components/Layout/navbar2/Navbar2"
import RandomSpanish from "../portfolio/random-spanish/random-spanish"
import WebApps from "../portfolio/web-apps/web-apps"
import IndustrialAutomation from "../portfolio/industrial-automation/industrial-automation"
import Mobile from "../portfolio/mobile/mobile"
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
        <section className="mywork" id="mywork">
          <div classname="mywork-container">
            <h1>My Work</h1>
            <p className="about-paragraph">
              All of these projects I completed in the past year. I will be
              updating this section regularly as I build new things.
            </p>
          </div>
        </section>

        <RandomSpanish />
        <WebApps />
        <Mobile />
        <IndustrialAutomation />
      </div>
    </>
  )
}
export default Work
