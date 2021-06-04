import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "./about/About"
import { layoutContext } from "../../provider"
import Navbar1 from "../components/Layout/navbar/Navbar"
import Navbar2 from "../components/Layout/navbartest/NavbarTest"
import Navbar3 from "../components/Layout/navbar3/navbar3"
import Footer from "../components/Layout/Footer"
//import "semantic-ui-css/semantic.min.css"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("MAIN")}
              <SEO title="Adam's Portfolio" />
              <Navbar1 />
              <div className="section-main" style={{ height: "85vh" }}>
                <About />
              </div>

              <Footer />
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
