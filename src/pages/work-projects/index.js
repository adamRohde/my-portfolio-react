import React, { useState } from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import WorkProjects from "./Work-projects"
import { layoutContext } from "../../../provider"
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("MAIN")}
              <SEO title="Adam's Portfolio" />
              <Navbar />
              <div className="section-main">
                <WorkProjects />
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
