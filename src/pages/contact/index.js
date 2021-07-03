import React from "react"
import SEO from "../../components/seo"
import Contact from "./Contact"

const IndexPage = () => {
  return (
    <>
      <>
        <SEO title="Adam's Portfolio" />
        <section className="section-main" id="contact">
          <Contact />
        </section>
      </>
    </>
  )
}
export default IndexPage
