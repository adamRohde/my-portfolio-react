import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "./About"
// import Footer from "../components/Layout/Footer"
// import Navbar from "../components/Layout/Navbar"
import { layoutContext } from "../../provider"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("ABOUT")}
              <SEO title="Adam's Portfolio" />
              <div className="section-main" id="work">
                <About />
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
