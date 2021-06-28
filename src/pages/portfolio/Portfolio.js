import React from "react"
import SEO from "../../components/seo"
import RandomSpanish from "../portfolio/random-spanish/random-spanish"
import WebApps from "../portfolio/web-apps/web-apps"
import IndustrialAutomation from "../portfolio/industrial-automation/industrial-automation"
import Mobile from "../portfolio/mobile/mobile"
import Cards from "../../components/Cards/Cards"

const Work = () => {
  return (
    <>
      <SEO title="Adam's Portfolio" />

      <section className="portfolio" id="portfolio">
        <div classname="mywork-container">
          <h1>Portfolio</h1>
          <p className="about-paragraph">
            All of these projects I completed in the past year. I will be
            updating this section regularly as I build new things.
          </p>
        </div>
        <div>
          <Cards />
        </div>
      </section>

      <RandomSpanish />
      <Mobile />
      <WebApps />
      <IndustrialAutomation />
    </>
  )
}
export default Work
