import React, { useState } from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Work from "./Work"
// import Footer from "../../components/Layout/Footer"
// import Navbar from "../../components/Layout/Navbar"
import { layoutContext } from "../../../provider"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WORK")}
              <SEO title="Adam's Portfolio" />
              <div className="section-main" id="work">
                <Work />
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
