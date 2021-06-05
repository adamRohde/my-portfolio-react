import React, { useState } from "react"
import Layout from "../../../components/Layout/layout"
import SEO from "../../../components/seo"
import RandomSpanish from "./Random-spanish"
import { layoutContext } from "../../../../provider"
import Navbar1 from "../../../components/Layout/navbar/MyNavbar"
import Navbar2 from "../../../components/Layout/navbar2/Navbar2"
import Footer from "../../../components/Layout/Footer"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("RANDOM-SPANISH")}
              <SEO title="Adam's Portfolio" />
              <Navbar1 />
              <Navbar2 />
              <div className="section-main">
                <RandomSpanish />
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